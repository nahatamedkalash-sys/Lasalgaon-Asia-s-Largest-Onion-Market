export interface Author {
  name: string;
  role: string;
  affiliation: string;
}

export interface InlineImage {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl?: string;
  license?: string;
  isAuthenticLasalgaon?: boolean;
}

export interface ContentSection {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  image?: InlineImage;
  callout?: {
    title: string;
    text: string;
    type?: 'info' | 'stat' | 'note';
  };
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  quote?: {
    text: string;
    attribution: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CitationReference {
  title: string;
  institution: string;
  year?: string;
  url?: string;
  note?: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  category: 'Market & Trade' | 'Auction System' | 'Farming & Ag' | 'Storage & Post-Harvest' | 'Research & Innovation' | 'Exports & Economics' | 'Processing & Tech';
  categorySlug: string;
  author: Author;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  featured?: boolean;
  heroImage: string;
  imageAlt: string;
  imageCaption: string;
  imageCredit?: string;
  imageSourcePage?: string;
  imageLicense?: string;
  isAuthenticLasalgaon?: boolean;
  galleryImages?: InlineImage[];
  keyTakeaways: string[];
  tableOfContents: { id: string; label: string }[];
  contentSections: ContentSection[];
  faqs: FAQ[];
  references: CitationReference[];
  relatedArticleSlugs: string[];
}

export interface CategoryInfo {
  name: string;
  slug: string;
  description: string;
  articleCount?: number;
}
