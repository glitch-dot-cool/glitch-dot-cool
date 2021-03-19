import React from "react"
import { object, objectOf, shape } from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import { Head, Layout } from "../components/Layout"
import ProfileInfo from "../components/Profile/ProfileInfo"
import GalleryDetails from "../components/Gallery/GalleryDetail"
import { Flex } from "../design-system"

const galleryDetailTemplate = ({
  pageContext: { item, title, next, prev, description, link },
  data: { strapiAuthor: profile },
}) => {
  const {
    email,
    location,
    link: links,
    avatar: avatarData,
    author_name,
  } = profile

  const avatar = avatarData[0]?.localFile?.childImageSharp?.fluid
  const image = item.childImageSharp.fluid
  console.log(description, link, title)
  return (
    <Layout>
      <Head title={`${author_name} - ${title}`} />
      <ProfileWrapper>
        <Flex direction="column">
          <ProfileInfo
            avatar={avatar}
            links={links}
            email={email}
            location={location}
            name={author_name}
          ></ProfileInfo>
          <GalleryDetails
            galleryItem={item}
            author={author_name}
            prev={prev}
            next={next}
            description={description}
            title={title}
          />
        </Flex>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <GalleryItem fluid={image} link={link} />
        </Link>
      </ProfileWrapper>
    </Layout>
  )
}

galleryDetailTemplate.propTypes = {
  pageContext: objectOf(
    shape({ profile: object, item: object, next: object, prev: object })
  ),
}

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

const Link = styled.a`
  display: inline-block;
  width: 100%;

  :hover ${GalleryItem} {
    opacity: ${({ href }) => href && "0.8"};
  }
`

export const query = graphql`
  query($id: String!) {
    strapiAuthor(id: { eq: $id }) {
      author_name
      avatar {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      email
      location
      link {
        id
        title
        url
      }
      gallery {
        description
        id
        link
        title
        item {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
