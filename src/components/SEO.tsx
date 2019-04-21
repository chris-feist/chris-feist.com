import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface Props extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: boolean;
}

const SEO = ({ title, description, image, pathname, article }: Props) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          author,
          headline,
        },
      },
    }) => {
      const seo = {
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        title: title || defaultTitle,
        titleTemplate: title ? titleTemplate : undefined,
        url: `${siteUrl}${pathname || '/'}`,
      };

      const schemaOrgWebPage = {
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        'url': seo.url,
        'headline': headline,
        'mainEntityOfPage': siteUrl,
        'description': defaultDescription,
        'name': defaultTitle,
        'author': {
          '@type': 'Person',
          'name': author,
        },
        'copyrightHolder': {
          '@type': 'Person',
          'name': author,
        },
        'copyrightYear': `${new Date().getFullYear()}`,
        'creator': {
          '@type': 'Person',
          'name': author,
        },
        'publisher': {
          '@type': 'Person',
          'name': author,
        },
      };

      return (
        <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          {seo.url && <meta property="og:url" content={seo.url} />}
          {(!article
            ? (<script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>)
            : (<meta property="og:type" content="article" />)
          )}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={seo.image} />}
        </Helmet>
      );
    }}
  />
);
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        author
        headline
      }
    }
  }
`;
export default SEO;
