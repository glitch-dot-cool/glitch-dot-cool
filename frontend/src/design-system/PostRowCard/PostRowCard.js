import React, { useContext } from "react"
import { array, shape, string } from "prop-types"
import styled, { ThemeContext } from "styled-components"
import Image from "gatsby-image"

import { Flex, UserCard, Link } from "../index"
import { setUrl } from "../../utils"

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

const Byline = styled(Flex)``

const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

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
