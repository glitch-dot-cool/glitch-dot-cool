module.exports = `
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
          id
          author_name
          avatar {
            id
            formats {
              thumbnail {
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
        }
        tags {
          id
          tag
        }
      }
    }
  }
`
