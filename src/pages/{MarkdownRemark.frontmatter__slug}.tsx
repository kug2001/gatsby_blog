import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '@components/layout';
import { graphql, PageProps } from "gatsby";
import { getImage, GatsbyImage, ImageDataLike } from 'gatsby-plugin-image';
import renderAst from '@common/util/customComponent';
import { useIntersectionObserver, useIsomorphicLayoutEffect } from '@common/customHooks';
import * as styles from '@styles/page/contentPage.module.css';
import 'gatsby-remark-vscode/styles.css';
import '@styles/components/atom/markdownUtils.css';
import parse, { HTMLReactParserOptions, Element, DOMNode} from 'html-react-parser';
import _ from 'lodash';
import useDebounce from '@common/customHooks/useDebounce';


const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.attribs.href) {
      const rex = new RegExp('-', 'g');
      const text = decodeURI(domNode.attribs.href).replace('#', '').replace(rex, ' ');
      return <a className="toc-link" href={domNode.attribs.href}>{text}</a>;
    }
  }
};

type Props = {
  markdownRemark: {
    frontmatter: {
      title: string,
      date: string,
      hero_image: ImageDataLike,
    }
    html: string,
    tableOfContents: string
    htmlAst: object
  }
  
}

const Template = ({data} : PageProps<Props> ) => {
  const { markdownRemark } = data;
  const { frontmatter, tableOfContents, htmlAst } = markdownRemark;
  const heroImage = getImage(frontmatter.hero_image);
  const [ scrollValue, setScrollValue] = useState<number>(0);
  const contentHeadRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(contentHeadRef, {
    threshold: [0.2, 0.9],
    freezeOnceVisible: false,
  });

  console.log('entry', entry?.isIntersecting);
  const debounce = useDebounce<number>(scrollValue, 100);

  const onScroll = (event:Event) => {
    const scrollTop = Math.max(
      window.pageXOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    ); 
    setScrollValue(scrollTop);
  }

  const handleSetActiveToc = () => {
    const tocLink:any[] = [].slice.call(document.querySelectorAll('.toc-link'));
    const anchorLink:any[] = [].slice.call(document.querySelectorAll('.heading-anchor'))
    .filter((anchor: { hash: string }) => tocLink.some((tocLink: { hash: string; }) => tocLink.hash === anchor.hash));

    const scrollTop = Math.max(
      window.pageXOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    // const scrollHeight = Math.max(
    //   document.documentElement.scrollHeight,
    //   document.body.scrollHeight
    // )

    // const bottomY = window.innerHeight + scrollTop; 

    anchorLink.forEach((link, index) => {
      
      const nextLinkIsActive = () => anchorLink[index+1]?.parentElement.offsetTop < scrollTop;
      const isActive = () => !nextLinkIsActive() && link.parentElement.offsetTop < scrollTop;

      if(isActive()) {
        tocLink[index].classList.add('active');
      }
      else {
        tocLink[index].classList.remove('active');
      }
    })
  }

  useIsomorphicLayoutEffect(() => {
    document.addEventListener('scroll', (e) => onScroll(e))
    return () => document.removeEventListener('scroll', (e) => onScroll(e));
  });

  useEffect(() => {
    // console.log('debounce');
    handleSetActiveToc();
  },[debounce])
  

  return (
    <Layout>
      <main className={styles.docMain}>
        <div className={styles.contentHead} ref={contentHeadRef}>
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
        <div className={styles.areaMarkdown}>{renderAst(htmlAst)}</div>
        <div className={`${styles.tableOfContents} ${!entry?.isIntersecting ? styles.active : ''}`}>
          {parse(tableOfContents, options)}
        </div>
      </main>
    </Layout>
  )
}

// TODO: 추후에 테이블에 대한 마크다운 렌더링 필요

//현재 페이지의 markdownRemark의 id 인자를 보내고 싶을 때는 $id 이렇게 하면 된다.
export const pageQuery = graphql`
  query MdBlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
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
              aspectRatio: 1.5
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