import React, { useContext } from "react"
import { array, shape, string } from "prop-types"
import styled, { ThemeContext } from "styled-components"
import Image from "gatsby-image"

import { Flex, UserCard, Link } from "../index"
import { lightTheme as theme } from "../theme"
import { setUrl } from "../../utils"
const { baseMonoMixin } = theme.text

const randomDegree = () => `${Math.floor(Math.random() * 360)}deg`

const PostRowCard = ({ post, className }) => {
  const theme = useContext(ThemeContext)
  const postSlug = setUrl(post, post.authors[0].author_name)
  const size = post.authors.length > 2 ? "micro" : "small"
  const thumbnail = post?.thumbnail?.localFile?.childImageSharp?.fluid

  return (
    <Link to={postSlug}>
      <Card className={className}>
        <Container align="center" size={size}>
          {thumbnail ? (
            <Img fluid={thumbnail} />
          ) : (
            <PlaceholderImage
              gradientAngles={[randomDegree(), randomDegree(), randomDegree()]}
            />
          )}
          <Subcontainer>
            <Title>{post.title}</Title>
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

  @media (max-width: 375px) {
    padding: 1rem !important;
  }
`

const Title = styled.h2`
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`

const Container = styled(Flex)``

const PublishedDate = styled.p`
  ${baseMonoMixin}
  margin-left: auto;
  font-size: 1.6rem;

  @media (max-width: 600px) {
    align-self: flex-start;
  }

  @media (max-width: 550px) {
    display: none;
  }
`

const Byline = styled(Flex)`
  p {
    margin: 0 1rem;
  }

  @media (max-width: 600px) {
    p {
      margin: 0 1rem 0 0;
    }
  }
`

const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > h2,
  a {
    margin-right: 0.5rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Img = styled(Image)`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  margin-right: 2rem;

  @media (max-width: 350px) {
    display: none;
  }
`

const PlaceholderImage = styled.div`
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  margin-right: 2rem;
  background-image: ${({ gradientAngles }) => `linear-gradient(
      ${gradientAngles[0]},
      rgba(200, 200, 200, 0.8),
      rgba(200, 200, 200, 0) 70.71%
    ),
    linear-gradient(
       ${gradientAngles[1]},
      rgba(127, 127, 127, 0.8),
      rgba(127, 127, 127, 0) 70.71%
    ),
    linear-gradient(
       ${gradientAngles[2]},
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0) 70.71%
    )`};

  @media (max-width: 350px) {
    display: none;
  }
`
