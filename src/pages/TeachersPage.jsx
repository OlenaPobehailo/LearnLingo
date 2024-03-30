import { get, getDatabase, ref } from "firebase/database";
import { StyledCommonWrapper } from "../styles/CommonStyled";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { LoadMoreButton, TeacherPageWrapper, TeachersList } from "./Page.styled";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState(null);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  useEffect(() => {
    const db = getDatabase();
    const teachersRef = ref(db, "teachers");
    // console.log(db);
    // console.log(teachersRef);

    get(teachersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const teacherData = Object.values(snapshot.val());
          setTotalTeachers(teacherData.length);
          setTeachers(teacherData.slice(0, visibleTeachers));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }, [visibleTeachers]);

  const handleLoadMore = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4); // Increase the number of visible cards
  };

  return (
    <StyledCommonWrapper>
      <TeacherPageWrapper>
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
  );
};

export default TeachersPage;
