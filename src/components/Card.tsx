import React from "react";
import styled from "styled-components";

export interface CardProps {
  src: string;
  description: string;
  instructorName: string;
  ratingClassification: string;
  totalRate: number;
  price: number;
}

export function Card({ src, description, instructorName, ratingClassification, totalRate, price }: CardProps) {
  debugger;
  return (
    <CardElement>
      <a href="/">
        <div className="course-image">
          <img src={src} alt={description} />
        </div>
        <div className="course-info">
          <h3>{description}</h3>
          <div className="instructor">{instructorName}</div>
          <div className="rating">
            <span className="rating-classification">{ratingClassification}</span>
            <span className="rating-star"></span>
            <span className="total-reviews">{totalRate}</span>
          </div>
          <div className="price">R${price}</div>
        </div>
      </a>
    </CardElement>
  );
}

const CardElement = styled.div`
  a {
    text-decoration: none;
  }

  a:hover {
    opacity: 0.8;
    transition: opacity linear 100ms;
  }
`;
