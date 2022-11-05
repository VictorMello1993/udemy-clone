import { graphql, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../layout/Layout";

export default function Home({ data }: PageProps) {
  return <Layout data={data} />;
}

export const pageQuery = graphql`
  {
    json {
      totalRate
      src
      ratingClassification
      price
      instructorName
      id
      description
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
