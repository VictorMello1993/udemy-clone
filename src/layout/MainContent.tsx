import React from "react";
import styled from "styled-components";
import { BannerMainContent } from "../components/BannerMainContent";
import { Card } from "../components/Card";

export function MainContent() {
  return (
    <MainContentElement>
      <BannerMainContent />
      <CoursesContainer>
        <CourseItem>
          <div className="course-item-wrapper">
            <div className="title-container">
              <div className="title">
                <h2>Recomendados para você</h2>
              </div>
            </div>
            <div className="card-container">
              <Card
                data-index="0"
                description="Curso Java"
                src="https://img-c.udemycdn.com/course/240x135/1701388_0134.jpg"
              />
              <Card
                data-index="1"
                description="Curso Javascript e Typescript Avançado"
                src="https://img-c.udemycdn.com/course/240x135/2575266_c184_4.jpg"
              />
              <Card
                data-index="2"
                description="Curso Java 2022"
                src="https://img-c.udemycdn.com/course/240x135/870252_cf52_8.jpg"
              />
              <Card
                description="Desenvolvimento Web Completo 2022"
                data-index="3"
                src="https://img-c.udemycdn.com/course/240x135/1341268_c20e_3.jpg"
              />
              <Card
                data-index="4"
                description="Curso Docker"
                src="https://img-c.udemycdn.com/course/240x135/1137616_870b.jpg"
              />
            </div>
          </div>
        </CourseItem>
      </CoursesContainer>
    </MainContentElement>
  );
}

const MainContentElement = styled.main`
  height: 100vh;
  margin-bottom: 50px;
`;

const CoursesContainer = styled.div`
  margin: 48px auto;
  height: 337px;
`;

const CourseItem = styled.div`
  height: 290px;

  .course-item-wrapper {
    margin: 0 auto;
    width: 85%;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .title-container {
    margin-bottom: 16px;
  }

  .card-container {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;
  }
`;
