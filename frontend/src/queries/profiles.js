module.exports = `
query {
  allStrapiAuthor {
    nodes {
      id
      author_name
      gallery {
        id
        title
        item {
          localFile {
            childImageSharp {
              fluid {
                src
                srcSet
                base64
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
}
`
