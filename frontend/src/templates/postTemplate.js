import React from "react"
import PropTypes from "prop-types"

const postLayout = ({ pageContext: post }) => {
  return <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
}

postLayout.propTypes = {
  pageContext: PropTypes.object,
}

export default postLayout
