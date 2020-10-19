import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"

import Layout from "../components/Layout/layout"
import ProfileInfo from "../components/Profile/ProfileInfo"
import GalleryDetails from "../components/Gallery/GalleryDetail"
import { Flex } from "../design-system"

const galleryDetailTemplate = ({ pageContext: { profile, galleryItem } }) => {
  const {
    email,
    location,
    link: links,
    avatar: avatarData,
    author_name,
  } = profile
  const avatar = avatarData[0]?.formats?.medium?.image?.childImageSharp?.fluid
  const image = galleryItem.item.childImageSharp.fluid
  return (
    <Layout>
      <ProfileWrapper>
        <Flex direction="column">
          <ProfileInfo
            avatar={avatar}
            links={links}
            email={email}
            location={location}
            name={author_name}
          ></ProfileInfo>
          <GalleryDetails galleryItem={galleryItem} author={author_name} />
        </Flex>
        <GalleryItem fluid={image} />
      </ProfileWrapper>
    </Layout>
  )
}

galleryDetailTemplate.propTypes = {}

export default galleryDetailTemplate

const ProfileWrapper = styled.div`
  margin: 6rem 0 ${props => props.theme.measurements.footerHeight}rem 0;
  display: flex;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`

const GalleryItem = styled(Image)`
  width: 100%;
`
