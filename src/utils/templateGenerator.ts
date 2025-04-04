
import { FormData, GeneratedContent } from '@/types';

export function generateHTMLExport(formData: FormData, content: GeneratedContent): string {
  const { productName, brandColorPrimary, brandColorSecondary } = formData;
  const { heroHeadline, heroSubtext, featuresContent, ctaText, testimonialPlaceholders } = content;
  
  // Convert features and testimonials to HTML
  const featuresHTML = featuresContent.map((feature, index) => `
    <div class="feature-card">
      <h3>Feature ${index + 1}</h3>
      <p>${feature}</p>
    </div>
  `).join('');
  
  const testimonialsHTML = testimonialPlaceholders.map((testimonial) => `
    <div class="testimonial-card">
      <p class="testimonial-text">"${testimonial}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar"></div>
        <div>
          <p class="testimonial-name">Customer Name</p>
          <p class="testimonial-title">Customer Title</p>
        </div>
      </div>
    </div>
  `).join('');
  
  // Create the full HTML document
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Landing page for ${productName}">
  <meta name="keywords" content="${productName}, landing page">
  <meta name="author" content="AutoPagePro">
  <title>${productName} - Landing Page</title>
  <style>
    :root {
      --primary-color: ${brandColorPrimary};
      --secondary-color: ${brandColorSecondary};
      --text-color: #333;
      --background-color: #fff;
      --light-bg: #f5f5f5;
      --border-color: #e0e0e0;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: var(--text-color);
      background-color: var(--background-color);
    }
    
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Hero Section */
    .hero {
      background-color: var(--primary-color);
      color: white;
      text-align: center;
      padding: 80px 20px;
    }
    
    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    
    .hero p {
      font-size: 1.2rem;
      max-width: 800px;
      margin: 0 auto 30px;
    }
    
    .btn {
      display: inline-block;
      background-color: var(--secondary-color);
      color: white;
      padding: 12px 30px;
      border-radius: 4px;
      font-weight: 600;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    
    .btn:hover {
      opacity: 0.9;
    }
    
    /* Features Section */
    .features {
      padding: 80px 0;
    }
    
    .features h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 50px;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .feature-card {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 30px;
    }
    
    .feature-card h3 {
      color: var(--primary-color);
      margin-bottom: 15px;
    }
    
    /* Testimonials Section */
    .testimonials {
      background-color: var(--light-bg);
      padding: 80px 0;
    }
    
    .testimonials h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 50px;
    }
    
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .testimonial-card {
      background-color: white;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    
    .testimonial-text {
      font-style: italic;
      margin-bottom: 20px;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
    }
    
    .testimonial-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ddd;
      margin-right: 15px;
    }
    
    .testimonial-name {
      font-weight: 600;
    }
    
    .testimonial-title {
      font-size: 0.9rem;
      color: #666;
    }
    
    /* Contact Form */
    .contact {
      padding: 80px 0;
    }
    
    .contact h2 {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 50px;
    }
    
    .contact-form {
      max-width: 500px;
      margin: 0 auto;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-family: inherit;
    }
    
    .form-group textarea {
      height: 150px;
      resize: vertical;
    }
    
    /* Footer */
    .footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 30px 0;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }
      
      .hero p {
        font-size: 1rem;
      }
      
      .features h2,
      .testimonials h2,
      .contact h2 {
        font-size: 1.75rem;
      }
    }
  </style>
</head>
<body>
  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <h1>${heroHeadline}</h1>
      <p>${heroSubtext}</p>
      <a href="#contact" class="btn">${ctaText}</a>
    </div>
  </section>
  
  <!-- Features Section -->
  <section class="features">
    <div class="container">
      <h2>Key Features</h2>
      <div class="features-grid">
        ${featuresHTML}
      </div>
    </div>
  </section>
  
  <!-- Testimonials Section -->
  <section class="testimonials">
    <div class="container">
      <h2>What Our Customers Say</h2>
      <div class="testimonials-grid">
        ${testimonialsHTML}
      </div>
    </div>
  </section>
  
  <!-- Contact Form -->
  <section class="contact" id="contact">
    <div class="container">
      <h2>Get In Touch</h2>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit" class="btn" style="background-color: var(--primary-color);">Submit</button>
      </form>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${productName}. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`;
}
