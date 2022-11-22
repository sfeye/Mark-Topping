module.exports = {
  siteMetadata: {
    siteUrl: `https://www.marktoppingmedia.com`,
    description: `Mark Topping Media is dedicated to helping you and your business grow. From five star event organizing to social media management, we are here to promote and support you. We are a small locally owned Kansas City Marketing business that prides itself in customized marketing and relations.`,
    keywords: `Mark Topping, Mark Topping Media, Kansas City Media, KC Media`,
    image: "../images/logo-normal-1000.png",
    twitterUsername: "@topping_media",
  },
  plugins: [
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //      "trackingId": ""
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo-normal-1000.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ["UC20kfZT9rTubWCAZKkam3yg"],
        apiKey: "AIzaSyANWC3j5_G1z9nGR5JMlNcLOBJKuvklkPA",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Righteous`,
            variants: ["200..800"],
          },
        ],
      },
    },
  ],
};
