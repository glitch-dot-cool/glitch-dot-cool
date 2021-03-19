module.exports = `
query {
  allStrapiAuthor {
    nodes {
      id
      author_name
      gallery {
        id
        title
        description
        link
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
