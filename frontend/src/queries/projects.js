module.exports = `
query {
  allStrapiPost(filter: {type: {eq: "project"}}) {
    nodes {
      id
      title
    }
  }
}
`
