import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import CardsCourse from "../../Components/CardCourse";
import { Container, CourseContainer } from "./styles";
import { Link } from "react-router-dom";
import api from "../../Services/Api";

function Home() {
  const [course, setCourse] = useState([
    {
      name: "JavaScript",
    },
    {
      name: "EcmaScript",
    },
  ]);

  async function handleGetCourses() {
    let response = await api.get("/courses");

    console.log(response);
  }

  useEffect(() => {});

  return (
    <Container>
      <Header />
      <CourseContainer>
        {course.length ? (
          course.map((course, index) => (
            <CardsCourse course={course} key={index} />
          ))
        ) : (
          <p style={{ color: "#fff" }}>Nenhum curso encontrado</p>
        )}
      </CourseContainer>
    </Container>
  );
}

export default Home;
