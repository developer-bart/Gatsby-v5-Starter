module.exports = {
  siteMetadata: {
    title: 'basic-project',
    description: 'Your project description',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Basic Project',
        short_name: 'Basic Project',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'naar-een-beter-evenwicht',
        accessToken:
          'MC5YVnZ5dlJBQUFDRUFlYjlI.77-977-9H--_vQh2DO-_ve-_vXlk77-9cEEhURUjPe-_vVTvv71I77-9Le-_vSjvv73vv73vv71BGw',
        customTypesApiToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6Im5hYXItZWVuLWJldGVyLWV2ZW53aWNodC01NmQ3MmQ4ZS0xMTAzLTRhZWYtOTgxZi0zMDIxYTg1Y2NiYjlfMyIsImRhdGUiOjE3MjU0NzM5NTMsImRvbWFpbiI6Im5hYXItZWVuLWJldGVyLWV2ZW53aWNodCIsImFwcE5hbWUiOiJOYWFyIGVlbiBCZXRlciBFdmVud2ljaHQgR2F0c2J5IiwiaWF0IjoxNzI1NDczOTUzfQ.YpWmyZs2J9iCH2ou_obZEQzrL7mMSaeAW73MbYEVRd0',
      },
    },
  ],
}
