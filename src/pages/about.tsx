import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '@layout';
import * as styles from '@styles/page/about.module.css';

type Props = { data: any }

function AboutPage({ data }: Props) {
  console.log(data.allMarkdownRemark);
  const { node } = data.allMarkdownRemark.edges[0];
  const { frontmatter, html } = node;
  
  return (
    <Layout>
      <h1 className='screen_out'>{frontmatter.title}</h1>
      <article className={styles.aboutMarkdown} dangerouslySetInnerHTML={{__html: html}}>
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {page: {eq: "about"}}}) {
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