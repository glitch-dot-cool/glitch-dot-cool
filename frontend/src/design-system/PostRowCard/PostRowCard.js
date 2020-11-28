import React, { useContext } from "react"
import { array, shape, string } from "prop-types"
import styled, { ThemeContext } from "styled-components"

import { Flex, UserCard, Link } from "../index"
import { lightTheme as theme } from "../theme"
import { slugify } from "../../utils"
const { baseMonoMixin } = theme.text

const PostRowCard = ({ post }) => {
  const theme = useContext(ThemeContext)
  const postSlug = `/${slugify(post.authors[0].author_name)}/${slugify(
    post.title
  )}`
  const size = post.authors.length > 2 ? "micro" : "small"

  return (
    <Card>
      <Container align="center" size={size}>
        <Subcontainer>
          <Link to={postSlug}>
            <Title>{post.title}</Title>
          </Link>
          <Byline align="center">
            <p>by</p>
            {post.authors.map((author, index) => (
              <UserCard
                size={size}
                index={index}
                user={author}
                color={theme.colors.scale_5}
              />
            ))}
          </Byline>
        </Subcontainer>
        <PublishedDate>{post.published_at}</PublishedDate>
      </Container>
    </Card>
  )
}

PostRowCard.propTypes = {
  post: shape({
    id: string,
    title: string,
    slug: string,
    published_at: string,
    authors: array,
  }),
}

export default PostRowCard

const Card = styled.div`
  background-color: ${props => props.theme.colors.scale_6};
  padding: 2rem;
`

const Title = styled.h2``

const Container = styled(Flex)``

const PublishedDate = styled.p`
  ${baseMonoMixin}
  margin-left: auto;
  font-size: 1.6rem;

  @media (max-width: 900px) {
    align-self: flex-start;
  }

  @media (max-width: 550px) {
    display: none;
  }
`

const Byline = styled(Flex)`
  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`

const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;

  > h2,
  p:first-of-type,
  a {
    margin-right: 1rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
