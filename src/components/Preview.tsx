
import React from 'react';
import { FormData, GeneratedContent } from '@/types';

interface PreviewProps {
  formData: FormData;
  generatedContent?: GeneratedContent;
}

const Preview: React.FC<PreviewProps> = ({ formData, generatedContent }) => {
  if (!generatedContent) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center w-full h-full">
        <div className="text-center p-8">
          <p className="text-gray-500 mb-2">Preview will appear here</p>
          <p className="text-sm text-gray-400">Fill in the form and click "Generate Landing Page" to see your page</p>
        </div>
      </div>
    );
  }

  // Apply the brand colors as CSS variables
  const previewStyle = {
    '--primary-color': formData.brandColorPrimary,
    '--secondary-color': formData.brandColorSecondary,
  } as React.CSSProperties;

  return (
    <div 
      className="bg-white rounded-lg border shadow-sm overflow-hidden w-full h-full" 
      style={previewStyle}
    >
      <div className="iframe-preview" style={{ height: '100%', overflowY: 'auto' }}>
        {/* Hero Section */}
        <section className="py-12 px-6 text-center" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{generatedContent.heroHeadline}</h1>
          <p className="mb-6 max-w-xl mx-auto">{generatedContent.heroSubtext}</p>
          <button 
            className="px-6 py-2 rounded-md font-medium" 
            style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
          >
            {generatedContent.ctaText}
          </button>
        </section>

        {/* Features Section */}
        <section className="py-12 px-6">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {generatedContent.featuresContent.map((feature, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2" style={{ color: 'var(--primary-color)' }}>Feature {index + 1}</h3>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 px-6 bg-gray-50">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {generatedContent.testimonialPlaceholders.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <p className="italic mb-4">"{testimonial}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="ml-3">
                    <p className="font-medium">Customer Name</p>
                    <p className="text-sm text-gray-500">Customer Title</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 px-6">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Get In Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="John Doe" />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea className="w-full p-2 border rounded h-32" placeholder="Your message here..."></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-2 rounded-md font-medium"
                style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 px-6 bg-gray-800 text-white text-center">
          <p>© 2025 {formData.productName}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Preview;
