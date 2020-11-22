import React, { useContext } from "react"
import { arrayOf, number, object, shape, string } from "prop-types"
import styled, { ThemeContext } from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Flex, Link, UserCard } from ".."
import { slugify } from "../../utils"

const PostCard = ({ post }) => {
  const {
    thumbnail: {
      localFile: {
        childImageSharp: { fluid: thumbnail },
      },
    },
  } = post
  const theme = useContext(ThemeContext)
  return (
    <CardLink
      to={`/${slugify(post.authors[0].author_name)}/${slugify(post.title)}`}
    >
      <Card fluid={thumbnail}>
        <TextContainer>
          <Title>{post.title}</Title>
          <Byline align="center">
            <p>by</p>
            {post.authors.map(author => (
              <UserCard
                size="small"
                user={author}
                color={theme.colors.scale_5}
              />
            ))}
          </Byline>
        </TextContainer>
      </Card>
    </CardLink>
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

const CardLink = styled(Link)`
  will-change: transform, opacity, box-shadow;
  transform: scale(1) translate(0px, 0px);
  box-shadow: 0px 0px 0px ${props => props.theme.colors.box_shadow};
  transition: 0.1s ease transform, 0.1s ease transform opacity,
    0.1s ease transform box-shadow;

  :hover {
    opacity: 0.9;
    transform: scale(1.03) translate(-3px, -3px);
    box-shadow: 9px 9px 0px ${props => props.theme.colors.box_shadow},
      6px 6px 0px ${props => props.theme.colors.box_shadow},
      3px 3px 0px ${props => props.theme.colors.box_shadow};
  }

  :active {
    opacity: 1;
    transform: scale(0.98) translate(0px, 0px);
    box-shadow: 0px 0px 0px ${props => props.theme.colors.box_shadow};
  }
`

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
    margin-right: 1rem;
  }
`
