import React from "react"
import { arrayOf, object, string } from "prop-types"
import styled from "styled-components"

import { Link, lightTheme as theme } from "../../design-system"
import { slugify } from "../../utils"

const ProfileNav = ({ name, gallery, posts }) => {
  return (
    <SubNav>
      <Link to={`/${slugify(name)}/posts`} activeStyle={theme.activeNavStyles}>
        <h1>posts</h1>
      </Link>

      {posts.some(post => post.type === "release") ? (
        <Link
          to={`/${slugify(name)}/releases`}
          activeStyle={theme.activeNavStyles}
        >
          <h1>releases</h1>
        </Link>
      ) : null}

      {gallery.length ? (
        <Link
          to={`/${slugify(name)}/gallery`}
          activeStyle={theme.activeNavStyles}
        >
          <h1>gallery</h1>
        </Link>
      ) : null}
    </SubNav>
  )
}

ProfileNav.propTypes = {
  name: string,
  gallery: arrayOf(object),
  posts: arrayOf(object),
}

export default ProfileNav

const SubNav = styled.nav`
  display: flex;
  flex-wrap: wrap;

  h1 {
    margin: 0 2rem 2rem 0;
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme.colors.scale_4};
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    h1 {
      margin: 0 0 2rem 0;
      font-size: 3rem;
    }
  }

  @media (max-width: 430px) {
    h1 {
      margin: 0 0 2rem 0;
      font-size: 2rem;
    }
  }
`
