import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, article, keywords, lang }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    defaultKeywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    seo: keywords || defaultKeywords,
  };

  return (
    <Helmet
      title={seo.title}
      htmlAttributes={{
        lang,
      }}
    >
      <link rel="canonical" href={seo.url} />
      <link
        href="https://fonts.googleapis.com/css?family=Righteous"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Vibur"
        rel="stylesheet"
      />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="website" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      {seo.image && <meta property="og:image" content={seo.image} />}

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  twitterUsername: PropTypes.string,
  article: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
};

SEO.defaultProps = {
  title: "Mark Topping Media",
  description: `Mark Topping Media is dedicated to helping you and your business grow. From five star event organizing to social media management, we are here to promote and support you. We are a small locally owned Kansas City Marketing business that prides itself in customized marketing and relations.`,
  article: "website",
  image: "../images/logo-normal-1000.png",
  twitterUsername: "@topping_media",
  keywords: `Mark Topping, Mark Topping Media, Kansas City Media, KC Media`,
  lang: `en`,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
        keywords
        twitterUsername
      }
    }
  }
`;
