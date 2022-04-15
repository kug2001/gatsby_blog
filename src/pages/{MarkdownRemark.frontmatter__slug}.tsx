import React from 'react'
import { Layout } from '../components/layout';
import { graphql, PageProps } from "gatsby";
import { getImage, GatsbyImage, ImageDataLike } from 'gatsby-plugin-image';

type Props = {
  markdownRemark: {
    frontmatter: {
      title: string,
      date: string,
      hero_image: ImageDataLike,
    }
    html: string,
  }
  
}

const Template = ({data} : PageProps<Props> ) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const heroImage = getImage(frontmatter.hero_image);

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div>
        {heroImage && <GatsbyImage image={heroImage} alt="title"/>}
      </div>
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
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Template;