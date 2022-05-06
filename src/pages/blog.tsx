import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '@layout';
// import { Pagination } from '../components/atom';
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import _ from 'lodash';
import * as styles from '@styles/page/blog.module.css';


type blogItem = {
  frontmatter : {
    date: string,
    slug: string,
    title: string,
    stack: string[],
    hero_image: {
      childImageSharp: {
        gatsbyImageData:IGatsbyImageData,
      },
    }
  }
}

type Props = {
  allMarkdownRemark : {
    nodes : Array<blogItem>,
  }
}


const BlogPage = ({ data } : PageProps<Props> ) => {

  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ blogList, setBlogList ] = useState(data.allMarkdownRemark.nodes);
  const stackList = ['javascript', 'react', 'vue', 'getsby', 'vuepress', ];

  const onTarget = (item:number) => {
    setCurrentPage(item);
  }

  const filterBlogList = (stack:string) => {
    const copyData = data.allMarkdownRemark.nodes;
    if(stack === 'all'){
      setBlogList([...data.allMarkdownRemark.nodes]);
    }
    else{
      const filterData = _.filter(copyData,(o):boolean => o.frontmatter.stack.includes(stack));
      setBlogList(filterData);
    }
  }

  return (
    <Layout>
      <article className={styles.contentDoc}>
        <div className={styles.wrapContent}>
          <div className={styles.boxFilter}>
            <strong className='screen_out'>블로그 스택 리스트 </strong>
            <a className={styles.btnFilter} onClick={()=>filterBlogList('all')}>All</a>
            {
              stackList.map((item:string) => {
                return (
                  <a className={styles.btnFilter} onClick={()=>filterBlogList(item)} key={item}>
                    {_.upperFirst(item)}
                  </a>
                )
              })
            }
          </div>
          <ul className={styles.postList}>
            {
              blogList.map((item) => {
                return(
                  <Link to={item.frontmatter.slug} key={item.frontmatter.slug}>
                    <li>
                      <div className={styles.areaImg}>
                        {item.frontmatter.hero_image && <GatsbyImage image={item.frontmatter.hero_image.childImageSharp.gatsbyImageData} alt=""/>}
                      </div>
                      <span className={styles.postTit}>
                        {item.frontmatter.title}
                      </span>
                      <span className={styles.postDate}>
                        {item.frontmatter.date}
                      </span>
                    </li>
                  </Link>
                )
              })
            }
          </ul>
          {/* <Pagination total={140} currentPage={currentPage} perPage={10} target={onTarget}/> */}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
query blog {
  allMarkdownRemark(
    filter: {frontmatter: {page: {eq: "blog"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      frontmatter {
        title
        slug
        date
        stack
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}`

export default BlogPage;