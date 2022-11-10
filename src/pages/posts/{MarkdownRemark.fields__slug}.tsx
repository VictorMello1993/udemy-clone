import { graphql, PageProps } from "gatsby";
import React from "react";
import { CourseItemDetailContent } from "../../layout/CourseItemDetailContent";
import { Footer } from "../../layout/Footer";
import { Header } from "../../layout/Header";

export default function Post({ data }: PageProps) {
  debugger;
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
      }
    }
  }
`;
