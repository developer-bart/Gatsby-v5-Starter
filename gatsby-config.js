require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Naar een Beter Evenwicht',
    description:
      'Als dingen niet gaan, zoals je graag zou willen en je loopt regelmatig tegen dezelfde problemen, gevoelens en gedachtes aan in privé- en werksituaties en je wilt dit blijvend veranderen of als je veel hebt meegemaakt…, dan biedt Naar een Beter Evenwicht een oplossing.',
    siteUrl: 'https://naareenbeterevenwicht.nl',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Naar een Beter Evenwicht',
        short_name: 'NEBE',
        start_url: '/',
        background_color: '#36A1D6',
        theme_color: '#36A1D6',
        display: 'minimal-ui',
        icon: 'src/images/naar-een-beter-evenwicht-icon.svg',
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },
  ],
}
