import * as React from "react";
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import * as styles from '../styles/page/index.module.css'

type graphqlData = {
  data: {
    allMarkdownRemark: {
      edges: [ 
        { 
          node: {
            frontmatter : {
              date: string,
              title: string,
              subtitle: string,
            },
            html: string
          } 
        } 
      ]
    }
  }
}

const IndexPage = ({ data } : graphqlData) => {
  const { frontmatter, html } = data.allMarkdownRemark.edges[0].node;
  console.log(data);
  return (
    <Layout>
      <main className={styles.docMain}>
        <h1 className="screen_out">{frontmatter.title}</h1>
        <div className={styles.areaMain}>
          <strong className={styles.titHome}>
            <span className={styles.txtHome}>{"</>"}</span>
            <span className={styles.txtSub}>{frontmatter.subtitle}</span>
          </strong>
        </div>
        <article className={styles.contentHome}>
          <div dangerouslySetInnerHTML={{__html:html}}></div>
        </article>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {page: {eq: "home"}}}) {
      edges {
        node {
          html
          frontmatter {
            date
            title
            subtitle
          }
        }
      }
    }
  }
`

export default IndexPage
