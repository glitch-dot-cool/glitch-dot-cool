import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/layout"
import { UserCard, Title } from "../design-system"

const Members = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiAuthor {
        nodes {
          id
          author_name
          avatar {
            localFile {
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
  `)

  const members = data.allStrapiAuthor.nodes
  return (
    <Layout>
      <Title>members</Title>
      <CardContainer>
        {members.map(member => (
          <UserCard key={member.id} user={member}>
            {member.author_name}
          </UserCard>
        ))}
      </CardContainer>
    </Layout>
  )
}

export default Members

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
