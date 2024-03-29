import { get, getDatabase, ref } from "firebase/database";
import { StyledCommonWrapper } from "../styles/CommonStyled";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { TeachersPageWrapper } from "./Page.styled";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const teachersRef = ref(db, "teachers");
    // console.log(db);
    // console.log(teachersRef);

    get(teachersRef)
      .then((snapshot) => {
        // console.log(snapshot);

        if (snapshot.exists()) {
          setTeachers(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }, []);

  return (
    <StyledCommonWrapper>
      <TeachersPageWrapper>
        {teachers ? (
          teachers.map((teacher, index) => (
            <div key={index}>
              <Card teacher={teacher} />
              {/* <p>
              {teacher.name} {teacher.surname}
            </p> */}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </TeachersPageWrapper>
    </StyledCommonWrapper>
  );
};

export default TeachersPage;
