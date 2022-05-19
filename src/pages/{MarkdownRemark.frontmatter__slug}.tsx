import React from 'react'
import { Layout } from '@components/layout';
import { graphql, PageProps } from "gatsby";
import { getImage, GatsbyImage, ImageDataLike } from 'gatsby-plugin-image';
import { useIntersectionObserver, useIsomorphicLayoutEffect } from '@common/customHooks/'
import * as styles from '@styles/page/contentPage.module.css';
import 'gatsby-remark-vscode/styles.css';
import '@styles/components/atom/markdownUtils.css';
// import { forEach } from 'lodash';

type Props = {
  markdownRemark: {
    frontmatter: {
      title: string,
      date: string,
      hero_image: ImageDataLike,
    }
    html: string,
    tableOfContents: any
  }
  
}

const Template = ({data} : PageProps<Props> ) => {
  const { markdownRemark } = data;
  const { frontmatter, html, tableOfContents } = markdownRemark;
  const heroImage = getImage(frontmatter.hero_image);

  console.log(tableOfContents);

  // const handleIntersectionObserver = (node: Element) => {
  //   const option:IntersectionObserverInit = {
  //     root: null,
  //     threshold: [ 0, 1]
  //   }
  //   const observer = new IntersectionObserver(([entry]:IntersectionObserverEntry[]) => {
  //     entry.intersectionRatio >0.75 && console.log(entry.target, entry)
      
  //   }, option);

  //   observer.observe(node);

  //   return () => observer.disconnect();
  // }
  

  // useIsomorphicLayoutEffect(() => {
  //   if(typeof window !== 'undefined') {
  //     const nodes = document.querySelectorAll('.heading-anchor');
  //     nodes.forEach((element) => {
  //       handleIntersectionObserver(element);
  //     })
  //   }
  // }, []);
  

  return (
    <Layout>
      <main className={styles.docMain}>
        <div className={styles.contentHead}>
          {heroImage && 
            <GatsbyImage
              className={styles.headImage}
              image={heroImage}
              alt="title"
            />}
          <div className={styles.boxHead}>
            <h1 className={styles.headTit}>{frontmatter.title}</h1>
            <strong className={styles.headData}>{frontmatter.date}</strong>
          </div>
        </div>
        <div className={styles.areaMarkdown} dangerouslySetInnerHTML={{ __html: html }} />
        <div className={styles.tableOfContent} dangerouslySetInnerHTML={{ __html: tableOfContents }}/>
      </main>
    </Layout>
  )
}

//현재 페이지의 markdownRemark의 id 인자를 보내고 싶을 때는 $id 이렇게 하면 된다.
export const pageQuery = graphql`
  query MdBlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              aspectRatio: 1.9
              transformOptions: {
                cropFocus: CENTER
              }
            )
          }
        }
      }
    }
  }
`

export default Template;