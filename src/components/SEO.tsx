import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO = ({ 
  title = "FramezLabs | Custom Photo Frames & Gifts", 
  description = "Premium customized frames, photo books, and personalized gifts. Handcrafted with love and delivered pan-India.",
  keywords = "custom frames, photo frames, personalized gifts, photo books, framezlabs, home decor, wall art",
  image = "/og-image.jpg", // Ensure you have this image in public folder or update path
  url = window.location.href 
}: SEOProps) => {
  const siteTitle = title === "FramezLabs | Custom Photo Frames & Gifts" ? title : `${title} | FramezLabs`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
