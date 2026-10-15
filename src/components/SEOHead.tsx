import React, { useEffect } from 'react';
import { Article } from '../types';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  articleData?: Article;
  breadcrumbs?: BreadcrumbItem[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  articleData,
  breadcrumbs,
}) => {
  useEffect(() => {
    // 1. Update Title
    const siteName = "Lasalgaon Asia's Largest Onion Market";
    const fullTitle =
      title === siteName || title.includes(siteName)
        ? title
        : `${title} | ${siteName}`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical URL
    const baseUrl = window.location.origin;
    const fullCanonical = `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullCanonical);

    // Helper functions for metadata injection
    const setMetaProp = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const setMetaName = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Determine social preview image and alt text
    const previewImage = articleData?.heroImage
      ? (articleData.heroImage.startsWith('http') ? articleData.heroImage : `${baseUrl}${articleData.heroImage}`)
      : `${baseUrl}/images/lasalgaon_landscape_cultivation.jpg`;
    const imageAlt = articleData?.title || siteName;

    // 4. Update OpenGraph Tags
    setMetaProp('og:site_name', siteName);
    setMetaProp('og:title', fullTitle);
    setMetaProp('og:description', description);
    setMetaProp('og:url', fullCanonical);
    setMetaProp('og:type', ogType);
    setMetaProp('og:locale', 'en_IN');
    setMetaProp('og:image', previewImage);
    setMetaProp('og:image:alt', imageAlt);

    // 5. Update Twitter / X Social Media Cards
    setMetaName('twitter:card', 'summary_large_image');
    setMetaName('twitter:title', fullTitle);
    setMetaName('twitter:description', description);
    setMetaName('twitter:image', previewImage);
    setMetaName('twitter:image:alt', imageAlt);

    // 6. Build and inject JSON-LD Schemas
    const schemas: any[] = [];

    // Organization Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'NewsMediaOrganization',
      name: siteName,
      alternateName: ["Lasalgaon Onion Market", "Lasalgaon Mandi", "APMC Lasalgaon"],
      url: baseUrl,
      logo: `${baseUrl}/images/lasalgaon_landscape_cultivation.jpg`,
      description: "Independent agricultural journalism and market intelligence from Asia's largest onion trading hub.",
      foundingLocation: {
        '@type': 'Place',
        name: 'Lasalgaon, Nashik District, Maharashtra, India',
      },
    });

    // WebSite with SearchAction
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/blog?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${baseUrl}${crumb.url}`,
        })),
      });
    }

    // BlogPosting / Article Schema
    if (articleData) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: articleData.title,
        description: articleData.metaDescription,
        image: [previewImage],
        datePublished: '2026-10-01T08:00:00+05:30',
        dateModified: '2026-10-14T08:00:00+05:30',
        isPartOf: {
          '@type': 'WebSite',
          name: siteName,
          url: baseUrl,
        },
        author: {
          '@type': 'Person',
          name: articleData.author.name,
          jobTitle: articleData.author.role,
          affiliation: {
            '@type': 'Organization',
            name: articleData.author.affiliation,
          },
        },
        publisher: {
          '@type': 'NewsMediaOrganization',
          name: siteName,
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/lasalgaon_landscape_cultivation.jpg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullCanonical,
        },
      });

      // FAQPage schema if faqs exist
      if (articleData.faqs && articleData.faqs.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: articleData.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        });
      }
    }

    // Remove existing dynamic ld+json
    const existingScript = document.getElementById('dynamic-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'dynamic-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      // cleanup dynamic ld+json on unmount if needed
    };
  }, [title, description, canonicalPath, ogType, articleData, breadcrumbs]);

  return null;
};
