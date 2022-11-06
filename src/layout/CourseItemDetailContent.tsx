import React from "react";
import styled from "styled-components";

export function CourseItemDetailContent() {
  return (
    <CourseItemDetailTopContainer>
      <div className="course-detail">
        <div className="course-detail image">
          <img src="https://img-c.udemycdn.com/course/480x270/1137616_870b.jpg" alt="Curso Docker" />
        </div>
        <div className="course-detail text">
          <div className="course-detail title">
            <h2>Docker: Ferramenta essencial para desenvolvedores</h2>
          </div>
          <div className="course-detail description">Aprenda a criar ambientes profissionais completos com Docker, que é a principal tecnologia de containers do mercado</div>
          <div className="course-detail info">
            <div className="rating">4.7</div>
            <div className="rating-count">9185</div>
            <div className="students-subscribed">22934</div>
          </div>
          <div className="course-detail created-by">Criado por Leonardo Leitão</div>
          <div className="course-detail last-info">
            <div className="course-detail last-update">Última atualização: 08/2022</div>
            <div className="course-detail language">Português</div>
          </div>
          <div className="course-detail price">R$ 30.00</div>
          <div className="course-detail trial-free-button">
            <a href="/">Experimente o Plano individual gratuitamente</a>
          </div>
        </div>
      </div>
    </CourseItemDetailTopContainer>
  );
}

const CourseItemDetailTopContainer = styled.div`
  background-color: #1c1d1f;
  height: 100vh;
  padding: 20px;

  .course-detail img {
    max-width: 100%;
  }

  .course-detail:not(:first-child) {
    margin-top: 10px;
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

  .course-detail .trial-free-button {
    background-color: #a435f0;
    padding: 12px 12px;
    text-align: center;
    cursor: pointer;
  }

  .course-detail .trial-free-button:hover {
    background-color: #8315cd;
  }

  .course-detail .price {
    font-size: 30px;
  }

  .course-detail .trial-free-button a {
    color: #fff;
    text-decoration: none;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    .course-detail {
      float: right;
    }
  }

  @media (max-width: 600px) {
    .course-detail .trial-free-button {
      margin-top: 15vh;
    }
  }
`;
