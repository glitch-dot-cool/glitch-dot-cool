const path = require("path")

const { blogPostsQuery } = require("./src/queries")
const { slugify, createImageSharpResolvers } = require("./gatsby-node-utils")

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  const params = {
    createResolvers,
    createNode,
    createNodeId,
    cache,
    store,
    reporter,
  }

  createImageSharpResolvers("StrapiAuthorAvatarFormatsThumbnail", params)
  createImageSharpResolvers("StrapiAuthorAvatarFormatsMedium", params)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/postTemplate.js")
  const posts = await graphql(blogPostsQuery)

  posts.data.allStrapiPost.nodes.forEach(post => {
    post.authors.forEach(author => {
      createPage({
        component: postTemplate,
        path: `/${slugify(author.author_name)}/${slugify(post.slug)}`,
        context: post,
      })
    })
  })
}
