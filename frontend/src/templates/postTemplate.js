import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import PostHeader from "../components/Posts/PostHeader/PostHeader"
import Layout from "../components/Layout/layout"
import MarkdownHTML from "../components/Transforms/MarkdownHTML"
import { Tag } from "../design-system"
import { lightTheme as theme } from "../design-system/theme"

const { baseMonoMixin } = theme.text

const postLayout = ({ pageContext: post }) => {
  return (
    <Layout>
      <PostHeader
        authors={post.authors}
        title={post.title}
        publishDate={post.published_date}
      />
      <MarkdownHTML source={post.body} />
      <TagHeader>tags:</TagHeader>
      <Tags>
        {post.tags.map(({ tag, id }) => (
          <Tag key={id}>{tag}</Tag>
        ))}
      </Tags>
    </Layout>
  )
}

postLayout.propTypes = {
  pageContext: PropTypes.object,
}

export default postLayout

const Tags = styled.div`
  display: flex;
  margin: 1rem 0 2rem 0;

  a {
    margin-right: 1rem;
  }
`

const TagHeader = styled.p`
  ${baseMonoMixin}
  font-size: 1.6rem;
`
