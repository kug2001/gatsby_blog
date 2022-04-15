import * as React from "react";
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import {
  docMain,
  contentHome,
  areaMain,
  titHome,
  txtHome,
  txtSub,
} from '../styles/page/index.module.css'

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
      <main className={docMain}>
        <h1 className="screen_out">{frontmatter.title}</h1>
        <div className={areaMain}>
          <strong className={titHome}>
            <span className={txtHome}>{"</>"}</span>
            <span className={txtSub}>{frontmatter.subtitle}</span>
          </strong>
        </div>
        <article className={contentHome}>
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
