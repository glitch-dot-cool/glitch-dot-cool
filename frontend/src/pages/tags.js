import React, { useState, useEffect } from "react"
import { arrayOf, shape, string } from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import Filter from "../components/Filter/Filter"
import { Link, Title } from "../design-system"
import { slugify } from "../utils"

const Tags = ({
  data: {
    allStrapiTag: { nodes: tags },
  },
}) => {
  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setfilterResult] = useState([])

  useEffect(() => {
    const result = tags.filter(({ tag }) =>
      tag.toLowerCase().includes(filterTerm.toLowerCase())
    )
    setfilterResult(result)
  }, [filterTerm, tags])

  return (
    <Layout>
      <Title>tags</Title>
      <Filter setFilterTerm={setFilterTerm} path="/posts" />
      <TagContainer>
        {filterResult.map(({ tag, id }) => {
          return (
            <Tag to={`/tags/${slugify(tag)}`} key={id}>
              <h2>{tag}</h2>
            </Tag>
          )
        })}
      </TagContainer>
    </Layout>
  )
}

Tags.propTypes = {
  tags: arrayOf(
    shape({
      tag: string,
      id: string,
    })
  ),
}

export default Tags

const TagContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin: 2rem 0 2rem 0;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`

const Tag = styled(Link)`
  display: inline-block;
  padding: 1rem;
  background-color: ${props => props.theme.colors.scale_6};

  h2 {
    font-size: 1.6rem;
    transition: 0s;
  }

  :hover {
    background-color: ${props => props.theme.colors.scale_4};
    h2 {
      color: ${props => props.theme.colors.scale_6};
    }
  }
`

export const query = graphql`
  query MyQuery {
    allStrapiTag {
      nodes {
        tag
        id
      }
    }
  }
`
