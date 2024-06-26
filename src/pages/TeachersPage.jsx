import { useEffect, useState } from "react";
import { get, getDatabase, ref } from "firebase/database";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { LoadMoreButton, NoResultsFound, TeachersList } from "./Page.styled";
import { GreyWrapper, StyledCommonWrapper } from "../styles/CommonStyled";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState(null);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [filteredTeachersLength, setFilteredTeachersLength] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const teachersRef = ref(db, "teachers");

    get(teachersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const teacherData = Object.values(snapshot.val());
          setTotalTeachers(teacherData.length);

          const filteredTeachers = teacherData.filter((teacher) => {
            const languageFilter =
              selectedLanguage === null ||
              teacher.languages.includes(selectedLanguage);
            const levelFilter =
              selectedLevel === null || teacher.levels.includes(selectedLevel);

            const priceFilter =
              selectedPrice === null ||
              parseFloat(teacher.price_per_hour) <= selectedPrice;

            return languageFilter && levelFilter && priceFilter;
          });
          setFilteredTeachersLength(filteredTeachers.length);
          setTeachers(filteredTeachers.slice(0, visibleTeachers));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }, [visibleTeachers, selectedLanguage, selectedLevel, selectedPrice]);

  const handleLoadMore = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const handleSelectLevel = (level) => {
    setSelectedLevel(level);
  };

  const handleSelectPrice = (price) => {
    setSelectedPrice(price);
  };

  const removeFromFavorites = () => {
  };

  return (
    <GreyWrapper>
      <StyledCommonWrapper>
        <Filter
          onSelectLanguage={handleSelectLanguage}
          onSelectLevel={handleSelectLevel}
          onSelectPrice={handleSelectPrice}
        />
        <TeachersList>
          {teachers && teachers.length > 0 ? (
            teachers.map((teacher, index) => (
              <div key={index}>
                <Card
                  teacher={teacher}
                  removeFromFavorites={removeFromFavorites}
                />
              </div>
            ))
          ) : (
            <NoResultsFound>No results found for your query</NoResultsFound>
          )}
        </TeachersList>
        {totalTeachers > visibleTeachers &&
          teachers.length &&
          filteredTeachersLength > visibleTeachers && (
            <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
          )}
      </StyledCommonWrapper>
    </GreyWrapper>
  );
};

export default TeachersPage;
