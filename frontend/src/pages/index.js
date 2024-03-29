import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Layout, Head } from "../components/Layout"
import { Carousel, PostCard, CategoryList, Title } from "../design-system"

const IndexPage = ({
  data: {
    allStrapiPost: { nodes: posts },
  },
}) => {
  const releasesAndProjects = posts
    .filter(post => post.type === "release" || post.type === "project")
    .filter((_, idx) => idx < 10)

  // rotate array by one element to account for carousel offset
  releasesAndProjects.unshift(releasesAndProjects.pop())

  const recent = posts
    .filter(post => post.type === "blog" && post.authors[0])
    .filter((_, idx) => idx <= 50)

  const communityPosts = posts
    .filter(post => post.type === "community")
    .filter((_, idx) => idx <= 50)

  return (
    <Layout page="home">
      <Head title="home" />

      <PostsContainer>
        <Projects>projects &amp; releases</Projects>
        <Carousel>
          {releasesAndProjects.map(post => (
            <PostCard key={post.strapiId} post={post} />
          ))}
        </Carousel>
        <CategoryLists>
          <Category>
            <CategoryHeaders>recent posts</CategoryHeaders>
            <CategoryList posts={recent} />
          </Category>
          <Category>
            <CategoryHeaders>community posts</CategoryHeaders>
            <CategoryList posts={communityPosts} />
          </Category>
        </CategoryLists>
      </PostsContainer>
    </Layout>
  )
}

export default IndexPage

const PostsContainer = styled.div`
  :last-child {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
  }
`

const CategoryHeaders = styled(Title)`
  margin-bottom: 2rem;
  user-select: none;

  @media (max-width: 1200px) {
    margin: 2rem 0;
  }
`

const Category = styled.div`
  min-width: 40%;
  max-width: 35vw;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`

const CategoryLists = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 6rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 1200px) {
    margin-top: 0;
  }
`

const Projects = styled(Title)`
  margin-left: calc(20px + (36px + 1.5vw));
  margin-top: 4rem;

  @media only screen and (max-width: 1090px) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    margin: 0 0 2rem 0;
  }
`

export const query = graphql`
  query {
    allStrapiPost(
      filter: { skip_frontpage: { eq: false } }
      sort: { fields: published_date, order: DESC }
      limit: 120
    ) {
      nodes {
        title
        slug
        type
        strapiId
        published_date(formatString: "M-D-YY")
        authors {
          author_name
          avatar {
            localFile {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  base64
                  aspectRatio
                  sizes
                }
                id
              }
            }
          }
        }
        thumbnail {
          localFile {
            childImageSharp {
              fluid {
                src
                srcSet
                base64
                aspectRatio
                sizes
              }
            }
          }
        }
      }
    }
  }
`
