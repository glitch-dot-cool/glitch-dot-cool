import React, { useContext } from "react"
import { array, shape, string } from "prop-types"
import styled, { ThemeContext } from "styled-components"

import { Flex, UserCard, Link } from "../index"
import { lightTheme as theme } from "../theme"
import { slugify } from "../../utils"
const { baseMonoMixin } = theme.text

const PostCard = ({ post }) => {
  const theme = useContext(ThemeContext)
  const postSlug = `/${slugify(post.authors[0].author_name)}/${slugify(
    post.title
  )}`

  return (
    <Card>
      <ByLine align="center">
        <Link to={postSlug}>
          <Title>{post.title}</Title>
        </Link>
        <p>by</p>
        {post.authors.map(author => (
          <UserCard size="small" user={author} color={theme.colors.scale_5} />
        ))}
        <PublishedDate>{post.published_at}</PublishedDate>
      </ByLine>
    </Card>
  )
}

PostCard.propTypes = {
  post: shape({
    id: string,
    title: string,
    slug: string,
    published_at: string,
    authors: array,
  }),
}

export default PostCard

const Card = styled.div`
  background-color: ${props => props.theme.colors.scale_6};
  padding: 2rem;
`

const Title = styled.h2``

const ByLine = styled(Flex)`
  * {
    margin-right: 1rem;
  }
`

const PublishedDate = styled.p`
  ${baseMonoMixin}
  margin-left: auto;
  font-size: 1.6rem;
`
