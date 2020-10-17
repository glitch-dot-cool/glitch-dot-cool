import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import { UserCard } from "../design-system"

const Members = props => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiAuthor {
        nodes {
          author_name
          avatar {
            formats {
              thumbnail {
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const members = data.allStrapiAuthor.nodes
  return (
    <Layout>
      <CardContainer>
        {members.map(member => (
          <UserCard user={member}>{member.author_name}</UserCard>
        ))}
      </CardContainer>
    </Layout>
  )
}

Members.propTypes = {}

export default Members

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
