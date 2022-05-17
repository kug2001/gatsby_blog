import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: `/gatsby_blog`,
  siteMetadata: {
    title: `brigeBuilder`,
    siteUrl: `https://kug2001.github.io/gatsby_blog/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-nested'),
          require(`postcss-preset-env`)({ stage: 0 })
        ],
        cssLoaderOptions: {
          exportLocalsConvention: false,
          namedExport: false,
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-lodash",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: 'Solarized Light',
                dark: 'Monokai Dimmed'
              },
              inlineCode: {
                marker: '•',
                theme: {
                  default: 'Default Light+',
                  dark: 'Default Dark+'
                }
              }
            },
          },
        ],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `./src/images/`,
      },
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `./src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": `./content/posts/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "about",
        "path": `./content/about/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "home",
        "path": `./content/home/`,
      },
    },
  ]
};

export default config;
