import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '../components/layout';
import { Pagination } from '../components/atom';
import { Link } from "gatsby"
import {
  contentDoc,
  postList,
  postTit,
  areaImg,
} from '../styles/page/blog.module.css'

type Props = {
  allMarkdownRemark : {
    edges : []
  }
}

type blogItem = {
  node : {
    frontmatter : {
      date: string,
      slug: string,
      title: string,
    }
  }
}

const BlogPage = ({ data } : PageProps<Props> ) => {

  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const blogList = data.allMarkdownRemark.edges;
  const onTarget = (item:number) => {
    setCurrentPage(item);
  }

  return (
    <Layout>
      <article className={contentDoc}>
        <strong>블로그 리스트 </strong>
        
        <ul className={postList}>
          {
            blogList.map((item:blogItem, index:number) => {
              return (
                <Link to={item.node.frontmatter.slug} key={item.node.frontmatter.slug}>
                  <li>
                    <div className={areaImg}>

                    </div>
                    <div className={postTit}>
                      타이틀 : {item.node.frontmatter.title}
                    </div>
                    <div>
                      날짜 : {item.node.frontmatter.date}
                    </div>
                  </li>
                </Link>
              )
            })
          }
        </ul>
        <div>현재페이지 : {currentPage}</div>
        <Pagination total={140} currentPage={currentPage} perPage={10} target={onTarget}/>
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