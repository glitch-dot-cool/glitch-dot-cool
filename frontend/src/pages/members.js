import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { Head, Layout } from "../components/Layout"
import { UserCard, Title } from "../design-system"

const Members = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiAuthor {
        nodes {
          id
          author_name
          posts {
            published_date
          }
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

  const mapRange = (value, start1, stop1, start2, stop2) => {
    return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2
  }

  const colorMap = {
    0: "red",
    1: "yellow",
    2: "green",
  }

  const sortByRecency = members => {
    return members
      .map(member => {
        return {
          // get most recent post from given author
          timestamp: new Date(
            Math.max(...member.posts.map(p => new Date(p.published_date)))
          ),
          ...member,
        }
      })
      .sort((a, b) => b.timestamp - a.timestamp)
      .map((member, index) => {
        const color =
          colorMap[Math.round(mapRange(index, 0, members.length, 2, 0))]
        return {
          ...member,
          color,
        }
      })
  }

  const members = sortByRecency(data.allStrapiAuthor.nodes)

  return (
    <Layout>
      <Head title="members" />
      <Title>members</Title>
      <CardContainer>
        {members.map(member => (
          <UserCard
            key={member.id}
            user={member}
            recency={member.color}
            lastPosted={member.timestamp}
          >
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
  margin-bottom: 2rem;
`
