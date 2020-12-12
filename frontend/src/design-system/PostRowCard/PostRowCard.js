import React, { useContext } from "react"
import { array, shape, string } from "prop-types"
import styled, { ThemeContext } from "styled-components"
import Image from "gatsby-image"

import { Flex, UserCard, Link } from "../index"
import { lightTheme as theme } from "../theme"
import { setUrl } from "../../utils"
const { baseMonoMixin } = theme.text

const PostRowCard = ({ post, className }) => {
  const theme = useContext(ThemeContext)
  const postSlug = setUrl(post, post.authors[0].author_name)
  const size = post.authors.length > 2 ? "micro" : "small"
  const thumbnail = post?.thumbnail?.localFile?.childImageSharp?.fluid

  return (
    <Link to={postSlug}>
      <Card className={className}>
        <Container align="center" size={size}>
          <Img fluid={thumbnail} />
          <Subcontainer>
            <Title>{post.title}</Title>
            <Byline align="center">
              <p style={{ margin: "0 1rem" }}>by</p>
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
    </Link>
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

  :hover {
    background-color: ${props => props.theme.colors.scale_4};
  }
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
  align-items: center;

  > h2,
  p:first-of-type,
  a {
    margin-right: 0.5rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const Img = styled(Image)`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  margin-right: 2rem;
`
