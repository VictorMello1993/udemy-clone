import React from "react";
import styled from "styled-components";

export interface CourseItemDetailProps {
  title: string;
  author: string;
  publishDate: Date;
  description: string;
  ratingClassification: string;
  instructorName: string;
  totalRate: Number;
  price: Number;
}

export function CourseItemDetail({ title, author, publishDate, instructorName, description, ratingClassification, totalRate, price }: CourseItemDetailProps) {
  return (
    <CourseItemDetailTopContainer>
      <div className="course-detail">
        <div className="course-detail image">
          <img src="https://img-c.udemycdn.com/course/480x270/1137616_870b.jpg" alt={title} />
        </div>
        <div className="course-detail text">
          <div className="course-detail title">
            <h2>{description}</h2>
          </div>
          <div className="course-detail description">{description}</div>
          <div className="course-detail info">
            <div className="rating">{ratingClassification}</div>
            <div className="rating-count">{Number(totalRate)}</div>
            <div className="students-subscribed">22934</div>
          </div>
          <div className="course-detail created-by">{instructorName}</div>
          <div className="course-detail last-info">
            <div className="course-detail last-update">
              <time dateTime={publishDate.toJSON()}>{publishDate.toLocaleDateString("pt-br")}</time>
            </div>
            <div className="course-detail language">Português</div>
          </div>
          <div className="course-detail price">R$ {Number(price).toFixed(2)}</div>
        </div>
      </div>
      <div className="try-free-button">
        <a href="/">Experimente o Plano individual gratuitamente</a>
      </div>
    </CourseItemDetailTopContainer>
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
