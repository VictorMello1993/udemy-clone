import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface CardProps {
  src: IGatsbyImageData;
  description: string;
  instructorName: string;
  ratingClassification: string;
  totalRate: number;
  price: number;
  link: string;
  title: string;
}

export function Card({ src, description, instructorName, ratingClassification, totalRate, price, link, title }: CardProps) {
  return (
    <CardElement>
      <Link to={link}>
        <div className="course-image">
          {src && (
            <GatsbyImage
              image={src}
              alt=""
              style={{
                width: "100%",
              }}
            />
          )}
        </div>
        <div className="course-info">
          <div className="description">
            <h3>{description}</h3>
          </div>
          <div className="instructor">{instructorName}</div>
          <div className="rating">
            <span className="rating-classification">{ratingClassification}</span>
            <span className="rating-star"></span>
            <span className="total-reviews">{totalRate}</span>
          </div>
          <div className="price">R$ {price.toFixed(2)}</div>
        </div>
      </Link>
    </CardElement>
  );
}

const CardElement = styled.div`
  a {
    text-decoration: none;
  }

  a:hover GatsbyImage {
    opacity: 0.8;
    transition: opacity linear 100ms;
  }

  a,
  a:active {
    text-decoration: none;
    color: #000;
  }

  .course-info div:not(:first-child) {
    margin-top: 3px;
  }

  .rating span {
    display: inline-block;
  }

  .rating span:not(:first-child) {
    margin-left: 15px;
  }

  .instructor {
    font-size: 13px;
  }
`;
