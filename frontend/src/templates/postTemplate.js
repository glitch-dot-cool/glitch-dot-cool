import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import PostHeader from "../components/Posts/PostHeader/PostHeader"
import Layout from "../components/Layout/layout"
import MarkdownHTML from "../components/Transforms/MarkdownHTML"
import { Tag, Button } from "../design-system"
import { lightTheme as theme } from "../design-system/theme"

const { baseMonoMixin } = theme.text

const postLayout = ({ data: { strapiPost: post } }) => {
  return (
    <Layout>
      <PostHeader
        authors={post.authors}
        title={post.title}
        publishDate={post.published_date}
      />

      <MarkdownHTML source={post.body} />

      <Links>
        <LinkHeader>links:</LinkHeader>
        <LinkGroup>
          {post.links?.map(link => (
            <Button key={link.id} href={link.url}>
              {link.title}
            </Button>
          ))}
        </LinkGroup>

        <LinkHeader>tags:</LinkHeader>
        <LinkGroup>
          {post.tags?.map(({ tag, id }) => (
            <Tag key={id}>{tag}</Tag>
          ))}
        </LinkGroup>
      </Links>
    </Layout>
  )
}

postLayout.propTypes = {
  pageContext: PropTypes.object,
}

export default postLayout

const Links = styled.div`
  margin-top: 2rem;
`

const LinkGroup = styled.div`
  display: flex;
  margin: 1rem 0 2rem 0;

  a {
    margin-right: 1rem;
  }
`

const LinkHeader = styled.p`
  ${baseMonoMixin}
  font-size: 1.6rem;
`

export const query = graphql`
  query($id: String!) {
    strapiPost(id: { eq: $id }) {
      title
      slug
      published_date(formatString: "MMMM DD, YYYY")
      body
      thumbnail {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      authors {
        author_name
        id
        avatar {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      tags {
        id
        tag
      }
      links {
        id
        title
        url
      }
    }
  }
`
