import React from "react";
import styled from "styled-components";
import { CourseItemDetail } from "../components/CourseItemDetail";
import { MainContentElement } from "./MainContent";

export type CourseItemDetailContentProps = {
  data: any;
};

export function CourseItemDetailContent({ data }: CourseItemDetailContentProps) {
  const {
    frontmatter: { author, date, title, instructorName, description, price, ratingClassification, totalRate },
  } = (data as any).markdownRemark;

  return (
    <MainContentElement>
      <CourseItemDetailTopContainer>
        <CourseItemDetail
          author={author}
          publishDate={new Date(date)}
          title={title}
          description={description}
          price={price}
          ratingClassification={ratingClassification}
          totalRate={totalRate}
          instructorName={instructorName}
        />
      </CourseItemDetailTopContainer>
    </MainContentElement>
  );
}

const CourseItemDetailTopContainer = styled.div`
  background-color: #1c1d1f;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .course-detail img {
    max-width: 100%;
  }

  .course-detail:not(:first-child) {
    margin-top: 15px;
    font-family: udemy sans, -apple-system, BlinkMacSystemFont, Roboto, segoe ui, Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;
  }

  .course-detail .text {
    color: #fff;
    margin-top: 15px;
  }

  .course-detail .info {
    display: flex;
    gap: 10px;
  }

  .course-detail .info,
  .course-detail .created-by,
  .course-detail .last-info,
  .course-detail .price {
    font-weight: 500;
  }

  .try-free-button {
    background-color: #a435f0;
    padding: 12px 12px;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
  }

  .try-free-button:hover {
    background-color: #8315cd;
  }

  .course-detail .price {
    font-size: 30px;
  }

  .try-free-button a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    .course-detail {
      width: 75%;
    }
    /* .course-detail {
      display: flex;
      flex-direction: column;
      margin-top: 10vh;
      width: 50%;
    } */

    /* .course-detail .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    } */
  }

  @media (max-width: 600px) {
    .course-detail .trial-free-button {
      margin-top: 15vh;
    }
    .course-detail {
      width: 100%;
    }
  }
`;
