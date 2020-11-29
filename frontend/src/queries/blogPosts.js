module.exports = `
  query {
    allStrapiPost(filter: {type: {eq: "blog"}}) {
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
