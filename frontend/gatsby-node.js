const { createRemoteFileNode } = require("gatsby-source-filesystem")
const path = require("path")

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  createResolvers({
    StrapiAuthorAvatarFormatsThumbnail: {
      image: {
        type: "File",
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `http://localhost:1337${source.url}`,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/postTemplate.js")
  const posts = await graphql(`
    query {
      allStrapiPost {
        nodes {
          type
          title
          skip_frontpage
          published_date(formatString: "MMMM DD, YYYY")
          links {
            url
            title
            id
          }
          body
          slug
          authors {
            author_name
          }
        }
      }
    }
  `)

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

const slugify = string => {
  const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;"
  const b = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------"
  const p = new RegExp(a.split("").join("|"), "g")

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}
