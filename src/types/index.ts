
export interface FormData {
  productName: string;
  targetAudience: string;
  keyFeatures: string;
  brandColorPrimary: string;
  brandColorSecondary: string;
  pageGoal: PageGoal;
}

export type PageGoal = 'sales' | 'leadGeneration' | 'booking' | 'information';

export interface GeneratedContent {
  heroHeadline: string;
  heroSubtext: string;
  featuresContent: string[];
  ctaText: string;
  testimonialPlaceholders: string[];
}

export interface ExportOptions {
  htmlContent: string;
  cssContent: string;
}
