import React from "react";
import styled from "styled-components";
import { BannerMainContent } from "../components/BannerMainContent";
import { Card } from "../components/Card";
import { ContactForm } from "../components/ContactForm";

export type MainContentProps = {
  data: any;
};

export function MainContent({ data }: MainContentProps) {
  const items = data.allMarkdownRemark.nodes.map(({ frontmatter }: any) => ({
    ...frontmatter,
  }));

  const jsonItems = { ...data.json };

  return (
    <MainContentElement>
      <BannerMainContent />
      <CoursesContainer>
        <CourseItem>
          <div className="course-item-wrapper">
            <div className="title-container">
              <div className="title">
                <h2>{items[0].title}</h2>
              </div>
            </div>
            <div className="card-container">
              <Card key={jsonItems.id} {...jsonItems} />
              <Card
                description="Curso Javascript e Typescript Avançado"
                src="https://img-c.udemycdn.com/course/240x135/2575266_c184_4.jpg"
                instructorName="Luiz Otávio Miranda"
                price={249.9}
                ratingClassification="4.8"
                totalRate={13716}
              />
              <Card
                description="Curso Java 2022"
                src="https://img-c.udemycdn.com/course/240x135/870252_cf52_8.jpg"
                instructorName="Leonardo Leitao"
                price={60.0}
                ratingClassification="4.7"
                totalRate={35300}
              />
              <Card
                description="Desenvolvimento Web Completo 2022"
                src="https://img-c.udemycdn.com/course/240x135/1341268_c20e_3.jpg"
                instructorName="Leonardo Leitao"
                price={85.5}
                ratingClassification="4.7"
                totalRate={20000}
              />
              <Card
                description="Curso Docker"
                src="https://img-c.udemycdn.com/course/240x135/1137616_870b.jpg"
                instructorName="Leonardo Leitao"
                price={85.5}
                ratingClassification="4.7"
                totalRate={20000}
              />
            </div>
          </div>
          <div className="course-item-wrapper">
            <div className="title-container">
              <div className="title">
                <h2>Para você que procurou por "desenvolvimento web moderno"</h2>
              </div>
            </div>
            <div className="card-container">
              <Card
                description="Curso Javascript do básico ao avançado"
                src="https://img-c.udemycdn.com/course/240x135/2753456_022d_2.jpg"
                instructorName="Matheus Battisti"
                ratingClassification="4,7"
                price={79.9}
                totalRate={2573}
              />
              <Card
                description="Curso Iniciando no desenvolvimento de API Node.js com Typescript"
                src="https://img-c.udemycdn.com/course/240x135/2575266_c184_4.jpg"
                instructorName="Jorge Aluizion Alves de Souza"
                ratingClassification="4,7"
                price={94.9}
                totalRate={15}
              />
              <Card
                description="Mastering Clean Code in Javascript"
                src="https://img-c.udemycdn.com/course/240x135/1604852_e8d0_2.jpg"
                instructorName="Packt Publishing"
                price={189.9}
                ratingClassification="4,5"
                totalRate={278}
              />
              <Card
                description="Learn Javascript: Full-Stack from Scratch"
                src="https://img-c.udemycdn.com/course/240x135/1436332_1fc3_5.jpg"
                instructorName="Brad Schiff"
                price={229.9}
                ratingClassification="4,7"
                totalRate={4560}
              />
              <Card
                description="Modern JavaScript From the Beginning"
                src="https://img-c.udemycdn.com/course/240x135/1463348_52a4_2.jpg"
                instructorName="Brad Traversy"
                price={229.9}
                ratingClassification="4,7"
                totalRate={30066}
              />
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
