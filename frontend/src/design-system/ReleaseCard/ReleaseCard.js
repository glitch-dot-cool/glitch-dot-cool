import React, { useContext } from "react"
import { arrayOf, number, object, oneOf, shape, string } from "prop-types"
import styled, { ThemeContext } from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Flex, Link, UserCard } from ".."
import { slugify } from "../../utils"

const ReleaseCard = ({ post, type = "blog", zoom = true }) => {
  const {
    thumbnail: {
      localFile: {
        childImageSharp: { fluid: thumbnail },
      },
    },
  } = post
  const theme = useContext(ThemeContext)

  const setUrl = post => {
    switch (post.type) {
      case "project":
        return `/projects/${slugify(post.title)}`
      case "blog":
        return `/${slugify(post.authors[0].author_name)}/${slugify(post.title)}`
      case "release":
        return `/${slugify(post.authors[0].author_name)}/releases/${slugify(
          post.title
        )}`
      case "community":
        return `${slugify(post.title)}`
    }
  }

  const url = setUrl(post)

  return (
    <CardLink to={url} zoom={zoom}>
      <Card fluid={thumbnail} type={type}>
        <TextContainer type={type}>
          <Title>{post.title}</Title>
          <Byline align="center">
            <p>by</p>
            <Authors>
              {post.authors.map((author, index) => (
                <UserCard
                  index={index}
                  size={post.authors.length > 2 ? "micro" : "small"}
                  user={author}
                  color={theme.colors.scale_5}
                />
              ))}
            </Authors>
          </Byline>
        </TextContainer>
      </Card>
    </CardLink>
  )
}

ReleaseCard.propTypes = {
  post: shape({
    title: string,
    authors: arrayOf(object),
    published_date: string,
    slug: string,
    strapiId: number,
    thumbnail: object,
  }),
  type: oneOf(["blog", "project", "release", "community"]).isRequired,
}

export default ReleaseCard

const Card = styled(BackgroundImage)`
  padding-top: 100%;
  height: 0;
  display: flex;

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    padding: 2rem;
  }
`

const CardLink = styled(Link)`
  will-change: transform, opacity, box-shadow;
  transform: scale(1) translate(0px, 0px);
  box-shadow: 0px 0px 0px ${props => props.theme.colors.box_shadow};
  transition: 0.1s ease transform, 0.1s ease transform opacity,
    0.1s ease transform box-shadow;
  overflow: hidden;

  :hover {
    opacity: 0.9;
    transform: scale(1.03) translate(-3px, -3px);
    box-shadow: 9px 9px 0px ${props => props.theme.colors.box_shadow},
      6px 6px 0px ${props => props.theme.colors.box_shadow},
      3px 3px 0px ${props => props.theme.colors.box_shadow};

    > div > div {
      transform: ${({ zoom }) => (zoom === true ? "scale(1.05)" : null)};
    }
  }

  :active {
    opacity: 1;
    transform: scale(0.98) translate(0px, 0px);
    box-shadow: 0px 0px 0px ${props => props.theme.colors.box_shadow};
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  transition: 0.25s ease-out transform;
  will-change: transform;
  background-color: ${({ theme, type }) =>
    type === "project"
      ? theme.colors.project_card_overlay
      : theme.colors.card_overlay};

  h2,
  p {
    background-color: ${({ type, theme }) =>
      type === "project" ? theme.colors.scale_6 : null};
  }

  @media only screen and (max-width: ${props =>
      props.theme.measurements.breakpointMobileNav}px) {
    padding: 1.5rem;
  }
`

const Title = styled.h2`
  align-self: flex-start;
`

const Byline = styled(Flex)`
  margin-top: 1rem;

  p:first-child {
    font-weight: bold;
  }

  p,
  a {
    margin-right: 0.5rem;
  }
`
const Authors = styled.div`
  display: flex;
  flex-wrap: wrap;
`
