module.exports = `
  query {
    allStrapiPost {
      nodes {
        id
        title
        authors {
          author_name
        }
      }
    }
  }
`
