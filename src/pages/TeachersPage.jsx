import { useEffect, useState } from "react";
import { get, getDatabase, ref } from "firebase/database";
import Card from "../components/Card";
import Filter from "../components/Filter";
import {
  LoadMoreButton,
  TeacherPageWrapper,
  TeachersList,
} from "./Page.styled";
import { GreyWrapper, StyledCommonWrapper } from "../styles/CommonStyled";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState(null);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const teachersRef = ref(db, "teachers");
  
    get(teachersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const teacherData = Object.values(snapshot.val());
          setTotalTeachers(teacherData.length);
          const filteredTeachers = teacherData.filter(
            (teacher) => selectedLanguage === null || teacher.languages.includes(selectedLanguage)
          );
          setTeachers(filteredTeachers.slice(0, visibleTeachers));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }, [visibleTeachers, selectedLanguage]);
  
  const handleLoadMore = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <GreyWrapper>
      <StyledCommonWrapper>
        <TeacherPageWrapper>
          <Filter onSelectLanguage={handleSelectLanguage} />
          <TeachersList>
            {teachers &&
              teachers.map((teacher, index) => (
                <div key={index}>
                  <Card teacher={teacher} />
                </div>
              ))}
          </TeachersList>
          {totalTeachers > visibleTeachers && (
            <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
          )}
        </TeacherPageWrapper>
      </StyledCommonWrapper>
    </GreyWrapper>
  );
};

export default TeachersPage;

