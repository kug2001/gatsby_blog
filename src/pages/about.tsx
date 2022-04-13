import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';

type Props = { data: any }

function AboutPage({ data }: Props) {
  console.log(data.allMarkdownRemark);
  const { node } = data.allMarkdownRemark.edges[0];
  const { frontmatter, html } = node;
  
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <article className='contentAbout' dangerouslySetInnerHTML={{__html: html}}>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {navbar: {eq: "about"}}}) {
      edges {
        node {
          html
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`

export default AboutPage;