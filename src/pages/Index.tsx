
import React, { useState, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BuilderForm from '@/components/BuilderForm';
import Preview from '@/components/Preview';
import ExportOptions from '@/components/ExportOptions';
import { FormData, GeneratedContent } from '@/types';

const Index = () => {
  const [showBuilder, setShowBuilder] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    productName: '',
    targetAudience: '',
    keyFeatures: '',
    brandColorPrimary: '#6E59A5',
    brandColorSecondary: '#33C3F0',
    pageGoal: 'sales',
  });
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | undefined>();
  const builderRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    setShowBuilder(true);
    setTimeout(() => {
      builderRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {!showBuilder && (
        <Hero onGetStarted={handleGetStarted} />
      )}
      
      {showBuilder && (
        <div className="flex-1 py-8 px-4 md:px-8">
          <div ref={builderRef} className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-2">Create Your Landing Page</h2>
            <p className="text-center text-gray-600 mb-8">
              Fill in the details below to generate a professional landing page in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
              <BuilderForm 
                onFormDataChange={setFormData} 
                onGenerateContent={setGeneratedContent} 
              />
              
              {generatedContent && (
                <ExportOptions 
                  formData={formData} 
                  generatedContent={generatedContent} 
                />
              )}
            </div>
            
            <div className="h-[700px]">
              <Preview 
                formData={formData} 
                generatedContent={generatedContent} 
              />
            </div>
          </div>
        </div>
      )}
      
      <footer className="mt-auto py-6 bg-gray-100 text-center">
        <p className="text-gray-600">&copy; 2025 AutoPagePro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
