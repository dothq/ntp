module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
    author: 'DotHQ'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/icon.png',
      },
    },
  ],
};
