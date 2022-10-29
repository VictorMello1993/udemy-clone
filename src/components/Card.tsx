import React from "react";

export function Card() {
  return (
    <div>
      <div className="course-image">
        <img src="https://img-c.udemycdn.com/course/240x135/1701388_0134.jpg" alt="Curso Java" />
      </div>
      <div className="course-info">
        <h3>Java COMPLETO Programação Orientada a Objetos +Projetos</h3>
        <div className="instructor">Nélio Alves</div>
        <div className="rating">
          <span className="rating-classification">4,8</span>
          <span className="rating-star"></span>
          <span className="total-reviews">36759</span>
        </div>
        <div className="price">R$189,00</div>
      </div>
    </div>
  );
}
