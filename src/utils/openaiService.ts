
import { FormData, GeneratedContent } from '@/types';

// For a browser-only demo, we'll mock the OpenAI calls
// In a real app, you would call an OpenAI API endpoint
export async function generatePageContent(formData: FormData): Promise<GeneratedContent> {
  console.log("Generating content for:", formData);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Parse features
  const featuresList = formData.keyFeatures
    .split(/[,\n]/)
    .map(feature => feature.trim())
    .filter(feature => feature.length > 0);
  
  // Generate content based on input (mocked for now)
  let headline = '';
  let subtext = '';
  let cta = '';
  
  // Use the page goal to tailor the content
  switch (formData.pageGoal) {
    case 'sales':
      headline = `Introducing ${formData.productName}: The Ultimate Solution for ${formData.targetAudience}`;
      subtext = `Designed specifically for ${formData.targetAudience}, ${formData.productName} helps you achieve more with less effort. Try it now and see the difference.`;
      cta = 'Buy Now';
      break;
    case 'leadGeneration':
      headline = `${formData.productName}: Empowering ${formData.targetAudience} to Succeed`;
      subtext = `Join thousands of satisfied ${formData.targetAudience} who have transformed their results with ${formData.productName}. Sign up for a free consultation today.`;
      cta = 'Get Started Free';
      break;
    case 'booking':
      headline = `Book Your ${formData.productName} Experience Today`;
      subtext = `Don't miss out on the opportunity to transform your experience as ${formData.targetAudience}. Limited spots available.`;
      cta = 'Book Now';
      break;
    case 'information':
      headline = `Discover How ${formData.productName} is Changing the Game for ${formData.targetAudience}`;
      subtext = `Learn more about our innovative approach and why ${formData.targetAudience} are choosing ${formData.productName} over alternatives.`;
      cta = 'Learn More';
      break;
  }
  
  // Generate feature descriptions
  const featuresContent = featuresList.map(feature => {
    return `${feature} - designed to enhance your experience and deliver exceptional results.`;
  });
  
  // Ensure we have at least 3 features
  while (featuresContent.length < 3) {
    featuresContent.push(`Premium support and regular updates to ensure you always have the best experience with ${formData.productName}.`);
  }
  
  // Generate testimonial placeholders
  const testimonialPlaceholders = [
    `${formData.productName} completely transformed how I work. The results have been incredible and I couldn't be happier with my decision.`,
    `As a ${formData.targetAudience.split(' ')[0]}, I was skeptical at first. But after trying ${formData.productName}, I'm completely convinced. Absolutely worth every penny!`
  ];
  
  return {
    heroHeadline: headline,
    heroSubtext: subtext,
    featuresContent,
    ctaText: cta,
    testimonialPlaceholders
  };
}
