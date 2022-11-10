import { graphql, PageProps } from "gatsby";
import React from "react";
import { Layout } from "../layout/Layout";

export default function Home(props: PageProps) {
  const items = (props.data as any).allMarkdownRemark.nodes.map(({ frontmatter, fields }: any) => ({
    ...frontmatter,
    link: `/posts/${fields.slug}`,
    image: "https://loremflickr.com/400/400",
  }));
  return (
    <Layout items={items} data={props.data}>
      {props.children}
    </Layout>
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
    allMarkdownRemark(sort: { fields: fields___slug, order: ASC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author
          date
          title
        }
        id
      }
    }
  }
`;
