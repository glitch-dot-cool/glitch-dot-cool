import React from "react"
import { arrayOf, object, string } from "prop-types"
import styled from "styled-components"

import { Link, lightTheme as theme } from "../../design-system"
import { slugify } from "../../utils"

const ProfileNav = ({ name, gallery }) => {
  return (
    <SubNav>
      <Link to={`/${slugify(name)}/posts`} activeStyle={theme.activeNavStyles}>
        <h1>posts</h1>
      </Link>
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
}

export default ProfileNav

const SubNav = styled.nav`
  display: flex;

  h1 {
    margin: 0 2rem 2rem 0;
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme.colors.scale_4};
  }

  @media (max-width: 370px) {
    flex-direction: column;

    h1 {
      margin: 0 0 2rem 0;
    }
  }
`
