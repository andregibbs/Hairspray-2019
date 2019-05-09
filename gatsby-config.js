module.exports = {
    siteMetadata: {
        title: `Hairspray The Musical`,
        description: `Michael Ball is back to shake up the West End. From April for 12 weeks only. Book now!`,
        author: ``,
        siteUrl: `https://www.hairspraythemusical.co.uk/`
    },
    plugins: [
        'gatsby-plugin-resolve-src',
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-htaccess`,
            options: {
                https: true,
                www: true,
                custom: `
                    ErrorDocument 404 /index.html
                    <IfModule mime_module>
                      AddHandler application/x-httpd-ea-php70 .php .php7 .phtml
                    </IfModule>
                `,
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: 'images',
            },
        },
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: "GTM-NWNR8M5",

                includeInDevelopment: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Hairspray The Musical`,
                short_name: `Hairspray`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `minimal-ui`,
                icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: 'https://www.hairspraythemusical.co.uk/'
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`,
                // Exclude specific pages or groups of pages using glob parameters
                // See: https://github.com/isaacs/minimatch
                // The example below will exclude the single `path/to/page` and all routes beginning with `category`
                exclude: [],
                query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
      
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`
            }
        },
        'gatsby-plugin-offline',
    ],
}
