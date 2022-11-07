import { graphql, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../layout/Layout";

export default function Home(props: PageProps) {
  return <Layout data={props.data}>{props.children}</Layout>;
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author
          date
          title
        }
      }
    }
  }
`;
