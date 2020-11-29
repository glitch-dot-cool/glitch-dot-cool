module.exports = `
query {
  allStrapiPost(filter: {type: {eq: "release"}}) {
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
