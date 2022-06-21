import React, { useEffect, useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '@components/layout';
import { TagName } from '@components/atom';
import { Link } from "gatsby";
import { navigate } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useEffectOnce } from '@common/customHooks/';
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


const BlogPage = ({ location, data } : PageProps<Props> ) => {

  // const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ blogList, setBlogList ] = useState(data.allMarkdownRemark.nodes);
  const stackList = ['javascript', 'react', 'vue', 'getsby', 'vuepress' ];

  useEffectOnce(() => {
    const { search } = location;
    if( search === '') return;
    const filter = search.replace('?', '').split('=');
    if(filter[0] === 'filter'){
      filterBlogList(filter[1]);
    }
  });
  
  // TODO: 필터리스트에 대해 에러핸들링이 필요.
  const filterBlogList = (stack:string) => {
    const copyData = data.allMarkdownRemark.nodes;
    if(stack === 'all'){
      setBlogList([...data.allMarkdownRemark.nodes]);
      navigate(`?filter=${stack}`);
    }
    else{
      const filterData = _.filter(copyData,(o):boolean => o.frontmatter.stack.includes(stack));
      setBlogList(filterData);
      navigate(`?filter=${stack}`);
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
                      <div className={styles.postTit}>
                        {item.frontmatter.title}
                      </div>
                      <div className={styles.postDate}>
                        {item.frontmatter.date}
                      </div>
                      <TagName
                        tag={item.frontmatter.stack}
                      />
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