module.exports.blogPostsQuery = `
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
  `
