module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "nice-portpholio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
