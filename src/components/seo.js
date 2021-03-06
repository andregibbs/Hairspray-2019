/**
 * seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {useStaticQuery, graphql} from "gatsby"
import shareImg from "images/share-image.jpg"

function seo({description, lang, meta, keywords, title}) {
    const {site} = useStaticQuery(
        graphql`
	  query {
		site {
		  siteMetadata {
			title
			description
			author
			siteUrl
		  }
		}
	  }
	`
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:site_name`,
                    content: title,
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
                    property: `og:image`,
                    content: site.siteMetadata.siteUrl + shareImg,
                },
                {
                    name: `twitter:image`,
                    content: site.siteMetadata.siteUrl + shareImg,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                            name: `keywords`,
                            content: keywords.join(`, `),
                        }
                        : []
                )
                .concat(meta)}
        >
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org/",
                    "@type": "WebSite",
                    "name": "Hairspray The Musical",
                    "url": "https://www.hairspraythemusical.co.uk/"
                }
            `}
            </script>
        </Helmet>
    )
}

seo.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
}

seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
}

export default seo