module.exports = `
    query {
      allStrapiAuthor {
        nodes {
          avatar {
            formats {
              medium {
                image {
                  childImageSharp {
                    fluid {
                      src
                      srcSet
                      base64
                      aspectRatio
                      sizes
                    }
                  }
                }
              }
            }
          }
          author_name
          posts {
            id
            slug
            published_at(formatString: "MMMM DD, YYYY")
            type
          }
          email
          id
          location
          link {
            id
            title
            url
          }
        }
      }
    }
`
