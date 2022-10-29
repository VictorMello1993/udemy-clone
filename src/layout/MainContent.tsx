import React from "react";
import styled from "styled-components";
import { Banner } from "../components/Banner";
import { Card } from "../components/Card";

export function MainContent() {
  return (
    <>
      <MainContentElement>
        <Banner />
        <CoursesContainer>
          <CourseItem>
            <div className="title-container">
              <div className="title">
                <h2>Recomendados para você</h2>
              </div>
            </div>
            <div className="card-container">
              <Card data-index="1" />
              <Card data-index="2" />
              <Card data-index="3" />
              <Card data-index="4" />
              <Card data-index="5" />
            </div>
          </CourseItem>
        </CoursesContainer>
      </MainContentElement>
    </>
  );
}

const MainContentElement = styled.main`
  height: 500px;
`;

const CoursesContainer = styled.div`
  margin: 48px auto;
  width: 79%;
  height: 337px;
`;

const CourseItem = styled.div`
  height: 290px;

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
