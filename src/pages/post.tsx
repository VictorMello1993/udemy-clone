import { graphql, PageProps } from "gatsby";
import React from "react";
import { CourseItemDetailContent } from "../layout/CourseItemDetailContent";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export default function Post(props: PageProps) {
  return (
    <div className="layout">
      <Header />
      <CourseItemDetailContent />
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  {
    json {
      courses {
        description
        instructorName
        price
        ratingClassification
        src
        totalRate
      }
    }
    allMarkdownRemark(limit: 1) {
      nodes {
        id
        frontmatter {
          author
          date(formatString: "DD/MM/yyyy")
          title
        }
      }
    }
  }
`;
