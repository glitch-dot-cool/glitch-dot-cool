const path = require("path")

const { blogPostsQuery, profilesQuery } = require("./src/queries")
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

  createImageSharpResolvers("StrapiAuthorAvatarFormatsSmall", params)
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

  const profileTemplate = path.resolve("src/templates/profileTemplate.js")
  const galleryDetailTemplate = path.resolve(
    "src/templates/galleryDetailTemplate.js"
  )
  const profiles = await graphql(profilesQuery)

  // create main profile
  profiles.data.allStrapiAuthor.nodes.forEach(profile => {
    createPage({
      component: profileTemplate,
      path: `/${slugify(profile.author_name)}/posts`,
      context: profile,
    })
  })

  // create gallery overview
  profiles.data.allStrapiAuthor.nodes.forEach(profile => {
    createPage({
      component: profileTemplate,
      path: `/${slugify(profile.author_name)}/gallery`,
      context: profile,
    })
  })

  // create gallery item pages
  profiles.data.allStrapiAuthor.nodes.forEach(profile => {
    profile.gallery.forEach((item, index) => {
      createPage({
        component: galleryDetailTemplate,
        path: `/${slugify(profile.author_name)}/gallery/${slugify(item.title)}`,
        context: {
          profile,
          galleryItem: item,
          prev:
            profile.gallery[index - 1] ||
            profile.gallery[profile.gallery.length - 1],
          next: profile.gallery[index + 1] || profile.gallery[0],
        },
      })
    })
  })
}
