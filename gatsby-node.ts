import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({ actions, getNode, node }) => {
  const { createNodeField } = actions;

  // Criando slug a partir de um arquivo md
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({
      trailingSlash: false,
      getNode,
      node,
    }).slice(1);

    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};
