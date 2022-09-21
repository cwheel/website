module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/images/`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                footnotes: false,
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            maxHeight: 650,
                            showCaptions: true,
                            withWebp: true,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/markdown/`,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
              name: 'Cameron Wheeler',
              short_name: 'cwheeler',
              start_url: '/',
              background_color: '#4700ff',
              theme_color: '#4700ff',
              display: 'standalone',
              icon: 'static/fav.png',
            }
        },
    ]
};
