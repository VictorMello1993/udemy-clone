import React from "react";

export interface CardProps {
  src: string;
  description: string;
}

export function Card({ src, description }: CardProps) {
  return (
    <div>
      <div className="course-image">
        <img src={src} alt={description} />
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
