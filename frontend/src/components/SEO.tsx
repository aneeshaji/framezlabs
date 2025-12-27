import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEO = ({
  title = "FramezLabs | Custom Photo Frames & Personalized Gifts India",
  description = "Create lasting memories with premium custom photo frames, gift hampers & photo books. Handcrafted with love, delivered pan-India. Perfect for birthdays, anniversaries & special occasions.",
  keywords = "custom photo frames, personalized gifts, photo frames online India, custom frames near me, anniversary frames, birthday photo frames, baby milestone frames, collage frames, mosaic frames, gift hampers India, photo books, handcrafted frames, premium frames, couple frames, wall art, home decor, personalized photo gifts, custom gift ideas, framezlabs",
  image = "/og-image.jpg",
  url = window.location.href,
  type = "website",
  breadcrumbs
}: SEOProps) => {
  const siteTitle = title.includes("FramezLabs") ? title : `${title} | FramezLabs`;
  const absoluteImage = image.startsWith('http') ? image : `https://framezlabs.store${image}`;

  // LocalBusiness Schema for better local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FramezLabs",
    "image": "https://framezlabs.store/logo.png",
    "url": "https://framezlabs.store",
    "telephone": "+91-9995064344",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "IN"
    },
    "description": description,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://instagram.com/framez__labs",
      "https://facebook.com/framezlabs"
    ]
  };

  // WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FramezLabs",
    "url": "https://framezlabs.store",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://framezlabs.store/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FramezLabs",
    "url": "https://framezlabs.store",
    "logo": "https://framezlabs.store/logo.png",
    "description": description,
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9995064344",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://instagram.com/framez__labs",
      "https://facebook.com/framezlabs"
    ]
  };

  // Breadcrumb Schema (if breadcrumbs provided)
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://framezlabs.store${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:site_name" content="FramezLabs" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={absoluteImage} />

      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* JSON-LD Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* JSON-LD Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* JSON-LD Structured Data - Breadcrumbs */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};
