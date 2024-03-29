const path = require("path")

const {
  blogPostsQuery,
  profilesQuery,
  tagsQuery,
  projectsQuery,
  releasesQuery,
  communityPostsQuery,
} = require("./src/queries")
const { slugify } = require("./gatsby-node-utils")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/postTemplate.js")
  const posts = await graphql(blogPostsQuery)

  // create post pages
  posts.data.allStrapiPost.nodes.forEach(post => {
    post.authors.forEach(author => {
      createPage({
        component: postTemplate,
        path: `${slugify(author.author_name)}/${slugify(post.title)}`,
        context: { id: post.id },
      })
    })
  })

  const projects = await graphql(projectsQuery)

  // create project pages
  projects.data.allStrapiPost.nodes.forEach(project => {
    createPage({
      component: postTemplate,
      path: `projects/${slugify(project.title)}`,
      context: { id: project.id },
    })
  })

  const releases = await graphql(releasesQuery)

  // create release pages
  releases.data.allStrapiPost.nodes.forEach(release => {
    createPage({
      component: postTemplate,
      path: `releases/${slugify(release.title)}`,
      context: { id: release.id },
    })
  })

  const communityPosts = await graphql(communityPostsQuery)

  // create community post pages
  communityPosts.data.allStrapiPost.nodes.forEach(post => {
    createPage({
      component: postTemplate,
      path: `community/${slugify(post.title)}`,
      context: { id: post.id },
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
      path: `/${slugify(profile.author_name)}`,
      context: { id: profile.id },
    })
  })

  profiles.data.allStrapiAuthor.nodes.forEach(profile => {
    createPage({
      component: profileTemplate,
      path: `/${slugify(profile.author_name)}/posts`,
      context: { id: profile.id },
    })
  })

  // create profile release pages
  profiles.data.allStrapiAuthor.nodes.forEach(profile => {
    createPage({
      component: profileTemplate,
      path: `/${slugify(profile.author_name)}/releases`,
      context: { id: profile.id },
    })
  })

  // create gallery overview
  profiles.data.allStrapiAuthor.nodes.forEach(profile => {
    createPage({
      component: profileTemplate,
      path: `/${slugify(profile.author_name)}/gallery`,
      context: { id: profile.id },
    })
  })

  //  create gallery item pages
  profiles.data.allStrapiAuthor.nodes.forEach(profile => {
    profile.gallery.forEach((item, index) => {
      createPage({
        component: galleryDetailTemplate,
        path: `/${slugify(profile.author_name)}/gallery/${slugify(item.title)}`,
        context: {
          id: profile.id,
          item: item.item.localFile,
          title: item.title,
          description: item.description,
          link: item.link,
          prev:
            profile.gallery[index - 1] ||
            profile.gallery[profile.gallery.length - 1],
          next: profile.gallery[index + 1] || profile.gallery[0],
        },
      })
    })
  })

  // create tag pages
  const tagTemplate = path.resolve("src/templates/tagTemplate.js")
  const tags = await graphql(tagsQuery)

  tags.data.allStrapiTag.nodes.forEach(({ tag, id }) => {
    createPage({
      component: tagTemplate,
      path: `/tags/${slugify(tag)}`,
      context: { tag, id: Number(id.replace("Tag_", "")) },
    })
  })
}
