import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "styled-components"
import faviconSmall from "../../static/favicon-16x16.png"
import favicon from "../../static/favicon-32x32.png"

function Head({ description, lang, meta, title }) {
  const currentTheme = useContext(ThemeContext)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      link={[
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Roboto:400,700|Roboto+Mono&display=swap",
        },
      ]}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "msapplication-TileColor",
          content: "#191919",
        },
        {
          name: "theme-color",
          content: currentTheme.colors.scale_5,
        },
      ].concat(meta)}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconSmall} />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#191919" />
    </Helmet>
  )
}

Head.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Head
