import React from "react"
import PropTypes from "prop-types"

import PostHeader from "../components/Posts/PostHeader/PostHeader"
import Layout from "../components/Layout/layout"

const postLayout = ({ pageContext: post }) => {
  console.log(post)

  return (
    <Layout>
      <PostHeader
        authors={post.authors}
        title={post.title}
        publishDate={post.published_date}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
    </Layout>
  )
}

postLayout.propTypes = {
  pageContext: PropTypes.object,
}

export default postLayout
