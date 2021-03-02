import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import PostHeader from "../components/Posts/PostHeader/PostHeader"
import { Head, Layout } from "../components/Layout"
import MarkdownHTML from "../components/Transforms/MarkdownHTML"
import { Tag, Button } from "../design-system"
import { lightTheme as theme } from "../design-system/theme"

const { baseMonoMixin } = theme.text

const postLayout = ({ data: { strapiPost: post } }) => {
  return (
    <Layout>
      <Head title={post.title} />
      <PostHeader
        authors={post.authors}
        title={post.title}
        publishDate={post.published_date}
      />

      <PostFormatting>
        <MarkdownHTML source={post.body} />
      </PostFormatting>

      <Links>
        {post.links?.length ? (
          <>
            <LinkHeader>links:</LinkHeader>
            <LinkGroup>
              {post.links?.map(link => (
                <Button key={link.id} href={link.url}>
                  {link.title}
                </Button>
              ))}
            </LinkGroup>
          </>
        ) : null}

        {post.tags?.length ? (
          <>
            <LinkHeader>tags:</LinkHeader>
            <LinkGroup>
              {post.tags?.map(({ tag, id }) => (
                <Tag key={id}>{tag}</Tag>
              ))}
            </LinkGroup>
          </>
        ) : null}
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

const PostFormatting = styled.div`
  p,
  pre {
    margin-bottom: 2rem;
  }
`

export const query = graphql`
  query($id: String!) {
    strapiPost(id: { eq: $id }) {
      title
      type
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
