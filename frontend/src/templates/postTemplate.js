import React from "react"
import PropTypes from "prop-types"

const postLayout = ({ pageContext: post }) => {
  console.log(post)
  return <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
}

postLayout.propTypes = {
  pageContext: PropTypes.object,
}

export default postLayout
