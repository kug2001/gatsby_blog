import React from 'react'
import { Layout } from '../components/layout';
import { graphql } from "gatsby";

type Props = { data:any }

const Template = ({data} : Props ) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  // console.log($id)

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Layout>
  )
}

//현재 페이지의 markdownRemark의 id 인자를 보내고 싶을 때는 $id 이렇게 하면 된다.
export const pageQuery = graphql`
  query MdBlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default Template;