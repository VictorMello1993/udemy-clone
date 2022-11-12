import { graphql, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import { CourseItemDetailContent } from "../../layout/CourseItemDetailContent";
import { Footer } from "../../layout/Footer";
import { Header } from "../../layout/Header";

export default function Post({ data }: PageProps) {
  return (
    <div className="layout">
      <Header />
      <CourseItemDetailContent data={data} />
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query GetPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        author
        title
        date
        description
        instructorName
        price
        ratingClassification
        totalRate
        image {
          childImageSharp {
            gatsbyImageData(height: 240, width: 240, formats: JPG, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
