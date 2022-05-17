import React, { useRef, useEffect } from "react";
import { graphql } from 'gatsby';
import { Layout } from '@layout';
import * as styles from '@styles/page/home.module.css';
import TypeIt from "typeit-react";
import { useScrollFadeIn } from '@common/customHooks/useScrollFadeIn';
import {
  FaReact,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiVuedotjs,
  SiLodash,
  SiTypescript,
  SiGatsby,
} from 'react-icons/si';

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
  const mainElm = useRef(null);
  const stackFindIn = useScrollFadeIn({
    threshold: [0.1, 0.7],
    duration: 0.7,
    delay: 0,
  });
  const visionFindIn = useScrollFadeIn({
    threshold: [0.1, 0.7],
    duration: 0.7,
    delay: 0,
    direction: 'up',
  });
  const valueFindIn = useScrollFadeIn({
    threshold: [0.1, 0.7],
    duration: 0.7,
    delay: 0,
    direction: 'up',
  })



  console.log(data);
  return (
    <Layout>
      <main className={styles.docMain} ref={mainElm}>
        <h1 className="screen_out">{frontmatter.title}</h1>
        <div className={styles.areaHead}>
          <p className={styles.typeit}>
            <TypeIt
              options= {{
                speed: 50,
                cursor: false,
              }}
              getBeforeInit={(instance) => {
                instance.type("Welcome to my ho")
                .pause(700)
                .delete(2)
                .pause(200)
                .type("blog!")
                .break()
                .type("My name is Jayden!")
                return instance;
              }}
            />
          </p>
        </div>
        <article className={styles.areaContent}>
          <h1 className={styles.contentHead}>
            <span>
              저는 사람과 사람을 연결하는 <br/> <em>Bridge Builder</em> 제이든입니다!
            </span>
          </h1>
          <div className={styles.areaVision} {...visionFindIn}>
            <strong>나의 꿈은 <em>Bridge Builder</em>이란 키워드를 통해 </strong>
            <strong>세상을 <em>가치</em>있고 <em>아름답게</em>하는 것입니다!</strong>
          </div>
          <div className={styles.areaValue} {...valueFindIn}>
            <strong>제 <em>가치 키워드</em>는 </strong>
            <strong><em>새롭게</em>, <em>이롭게</em>, <em>아름답게</em>, 입니다.</strong>
          </div>
          <div className={styles.areaStack} {...stackFindIn}>
            <div className={styles.areaStackCard}>
              <div className={styles.boxStackCard}>
                <SiJavascript />
                <span className={styles.titStack}>Javascript</span>
              </div>
              <div className={styles.boxStackCard}>
                <FaReact />
                <span className={styles.titStack}>React</span>
              </div>
              <div className={styles.boxStackCard}>
                <SiVuedotjs />
                <span className={styles.titStack}>Vue</span>
              </div>
              <div className={styles.boxStackCard}>
                <SiTypescript />
                <span className={styles.titStack}>Typescript</span>
              </div>
              <div className={styles.boxStackCard}>
                <SiGatsby />
                <span className={styles.titStack}>Gatsby</span>
              </div>
              <div className={styles.boxStackCard}>
                <SiLodash />
                <span className={styles.titStack}>Lodash</span>
              </div>
            </div>
            <span className={styles.txtInfo}>위의 스택을 사용하고 공부하고 있습니다.</span>
          </div>
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
