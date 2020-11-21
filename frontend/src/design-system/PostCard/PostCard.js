import React, { useContext } from "react"
import { arrayOf, number, object, shape, string } from "prop-types"
import styled, { ThemeContext } from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Flex, UserCard } from ".."

const PostCard = ({ post }) => {
  const {
    thumbnail: {
      childImageSharp: { fluid: thumbnail },
    },
  } = post
  const theme = useContext(ThemeContext)
  return (
    <Card fluid={thumbnail}>
      <TextContainer>
        <Title>{post.title}</Title>

        <Byline align="center">
          <p>by</p>
          {post.authors.map(author => (
            <UserCard size="small" user={author} color={theme.colors.scale_5} />
          ))}
        </Byline>
      </TextContainer>
    </Card>
  )
}

PostCard.propTypes = {
  post: shape({
    title: string,
    authors: arrayOf(object),
    published_date: string,
    slug: string,
    strapiId: number,
    thumbnail: object,
  }),
}

export default PostCard

const Card = styled(BackgroundImage)`
  padding: 4rem;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  background-color: ${props => props.theme.colors.card_overlay};
`

const Title = styled.h2``

const Byline = styled(Flex)`
  margin-top: 1rem;

  p:first-child {
    font-weight: bold;
  }

  p,
  a {
    margin-right: 2rem;
  }
`
