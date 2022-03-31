import type { GatsbyConfig } from "gatsby";
import { resolve } from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `brigeBuilder`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-transformer-remark",
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": "./content/posts/"
      },
      __key: "posts"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "about",
        "path": "./content/about/"
      },
      __key: "about"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "home",
        "path": "./content/home/"
      },
      __key: "home"
    },
  ]
};

export default config;
