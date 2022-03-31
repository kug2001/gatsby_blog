import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';

type Props = { data : any }
type blogItem = {
  node : {
    frontmatter : {
      date: string,
      slug: string,
      title: string,
    }
    html: string,
    id: string,
  }
}

const BlogPage = ({ data } : Props) => {
  const blogList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <article className='contentBlog'>
        {
          blogList.map((item:blogItem) => {
            return (
              <div>
                <div>
                  날짜 : {item.node.frontmatter.date}
                </div>
                <a href={item.node.frontmatter.slug}>
                  경로 : {item.node.frontmatter.slug}
                </a>
                <div>
                  타이틀 : {item.node.frontmatter.title}
                </div>
              </div>
            )
          })
        }
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {navbar: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date
            title
            slug
          }
        }
      }
    }
  }
`

export default BlogPage;