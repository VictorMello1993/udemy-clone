import type { GatsbyConfig } from "gatsby";

const title = "Udemy clone";
const pathPrefix = "/udemy-clone";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://victormello1993.github.io`,
    description: "Um site réplica da Udemy",
    title,
    Image: `${pathPrefix}/icon.png`,
    keywords: ["Udemy", "Clone", "Projeto", "Infnet"],
    pathPrefix,
  },
  pathPrefix,
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Udemy clone",
        short_name: "Udemy clone",
        start_url: "/",
        background_color: "#f0f0f0",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "courses",
        path: `${__dirname}/courses`,
      },
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: `Json`,
      },
    },

    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
  ],
};

export default config;
