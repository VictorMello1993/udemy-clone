import React from "react";
import styled from "styled-components";
import { BannerMainContent } from "../components/BannerMainContent";
import { Card, CardProps } from "../components/Card";
import { ContactForm } from "../components/ContactForm";

export type MainContentProps = {
  data: any;
};

export function MainContent({ data }: MainContentProps) {
  // const items = data.allMarkdownRemark.nodes.map(({ frontmatter }: any) => ({
  //   ...frontmatter,
  // }));

  const jsonItems = (data as any).allJson.nodes.map((item: CardProps) => item);

  return (
    <MainContentElement>
      <BannerMainContent />
      <CoursesContainer>
        <CourseItem>
          <div className="course-item-wrapper">
            <div className="title-container">
              <div className="title">
                <h2>Recomendado para você</h2>
              </div>
            </div>
            <div className="card-container">
              {JSON.stringify(
                jsonItems.map((item: CardProps) => {
                  item;
                }),
              )}
              {jsonItems.map((item: CardProps) => {
                <Card {...item} />;
              })}
            </div>
          </div>
        </CourseItem>
      </CoursesContainer>
      <ContactForm />
    </MainContentElement>
  );
}

const MainContentElement = styled.main`
  margin-bottom: 50px;

  @media (min-width: 530px) {
    width: 100%;
  }
`;

const CoursesContainer = styled.div`
  margin: 48px auto;
  height: 100vh;
`;

const CourseItem = styled.div`
  height: 290px;

  .course-item-wrapper {
    margin: 48px auto;
    width: 85%;
    font-family: udemy sans, -apple-system, BlinkMacSystemFont, Roboto, segoe ui, Helvetica, Arial, sans-serif,
      apple color emoji, segoe ui emoji, segoe ui symbol;
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
