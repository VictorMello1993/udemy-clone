import { graphql, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../layout/Layout";

export default function Home(props: PageProps) {
  const items = (props.data as any).allMarkdownRemark.nodes.map(({ frontmatter, fields }: any) => ({
    ...frontmatter,
    link: `/posts/${fields.slug}`,
    image: getImage(frontmatter.image.childImageSharp),
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
          image {
            childImageSharp {
              gatsbyImageData(width: 240, height: 135, formats: [WEBP, JPG], layout: CONSTRAINED, aspectRatio: 1)
            }
          }
        }
      }
    }
  }
`;
