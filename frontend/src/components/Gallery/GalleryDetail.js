import React, { useCallback, useEffect } from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"

import { slugify } from "../../utils"
import { Flex } from "../../design-system"

const GalleryDetails = ({ author, prev, next, description, title }) => {
  const goToPreviousItem = useCallback(() => {
    navigate(`/${slugify(author)}/gallery/${slugify(prev.title)}`)
  }, [author, prev.title])

  const goToNextItem = useCallback(() => {
    navigate(`/${slugify(author)}/gallery/${slugify(next.title)}`)
  }, [author, next.title])

  const keyboardNavigation = useCallback(
    e => {
      switch (e.key) {
        case "ArrowLeft":
          goToPreviousItem()
          break
        case "ArrowRight":
          goToNextItem()
          break
        default:
          break
      }
    },
    [goToPreviousItem, goToNextItem]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyboardNavigation)

    return () => {
      document.removeEventListener("keydown", keyboardNavigation)
    }
  }, [keyboardNavigation])

  return (
    <DetailsContainer>
      <h3>{title}</h3>
      <Description>{description}</Description>

      <NavContainer justify="space-between">
        <Link to={`/${slugify(author)}/gallery/${slugify(prev.title)}`}>
          <Button>prev</Button>
        </Link>
        <Link to={`/${slugify(author)}/gallery/${slugify(next.title)}`}>
          <Button>next</Button>
        </Link>
      </NavContainer>

      <Link to={`/${slugify(author)}/gallery`}>
        <Button>back</Button>
      </Link>
    </DetailsContainer>
  )
}

export default GalleryDetails

const DetailsContainer = styled.div`
  position: sticky;
  top: 43.5rem;
  display: flex;
  width: calc(100% - 6rem);
  flex-direction: column;
  background-color: ${props => props.theme.colors.scale_6};
  padding: 2rem;
  margin: 3rem 6rem 0 0;

  @media only screen and (max-width: 960px) {
    margin: 0 0 4rem 0;
    width: 100%;
    align-items: center;

    button {
      width: 50%;
    }
  }
`

const Description = styled.p`
  font-size: 14px;
`

const StyledButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  min-width: 10rem;
  background-color: ${props => props.theme.colors.scale_4};
  color: ${props => props.theme.colors.scale_0};
  border: none;
  transition: 0.2s ease all;

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.scale_2};
    color: ${props => props.theme.colors.scale_6};
  }
`

const Button = styled(StyledButton)`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.scale_4};
  color: ${props => props.theme.colors.scale_3};
  margin-top: 2rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.scale_6};

  :hover {
    color: ${props => props.theme.colors.scale_6};
  }
`

const NavContainer = styled(Flex)`
  a:first-of-type {
    @media only screen and (max-width: 960px) {
      margin-right: 2rem;
    }
  }
`
