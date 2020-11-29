module.exports = `
query {
  allStrapiPost(filter: {type: {eq: "community"}}) {
    nodes {
      id
      title
    }
  }
}
`
