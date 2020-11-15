import React from "react"
import PropTypes, { arrayOf, shape, string } from "prop-types"
import styled from "styled-components"

const PostHeader = ({ title, authors, publishDate }) => {
  return <div></div>
}

PostHeader.propTypes = {
    title: string.isRequired,
    author: arrayOf(shape({
        author_name: string,
        
    }))
}

export default PostHeader
