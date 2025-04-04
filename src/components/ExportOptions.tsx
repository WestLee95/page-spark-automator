
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FormData, GeneratedContent } from '@/types';
import { generateHTMLExport } from '@/utils/templateGenerator';
import { useToast } from '@/hooks/use-toast';
import { Copy, Download } from 'lucide-react';

interface ExportOptionsProps {
  formData: FormData;
  generatedContent?: GeneratedContent;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ formData, generatedContent }) => {
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();
  
  const handleCopyHTML = async () => {
    if (!generatedContent) {
      toast({
        title: "No content to export",
        description: "Please generate content first before exporting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsExporting(true);
    try {
      const htmlContent = generateHTMLExport(formData, generatedContent);
      await navigator.clipboard.writeText(htmlContent);
      toast({
        title: "Copied to clipboard!",
        description: "HTML code has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Failed to copy HTML. Please try again.",
        variant: "destructive",
      });
      console.error("Error copying HTML:", error);
    } finally {
      setIsExporting(false);
    }
  };
  
  const handleDownloadZip = async () => {
    if (!generatedContent) {
      toast({
        title: "No content to export",
        description: "Please generate content first before exporting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsExporting(true);
    try {
      const htmlContent = generateHTMLExport(formData, generatedContent);
      
      // Create a blob from the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html' });
      
      // Create a download link and trigger the download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${formData.productName.replace(/\s+/g, '-').toLowerCase()}-landing-page.html`;
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Download complete!",
        description: "Your landing page HTML has been downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download HTML. Please try again.",
        variant: "destructive",
      });
      console.error("Error downloading HTML:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border w-full">
      <h2 className="text-xl font-bold mb-4">Export Options</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          onClick={handleCopyHTML}
          disabled={isExporting || !generatedContent}
          className="flex-1"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy HTML
        </Button>
        
        <Button 
          onClick={handleDownloadZip}
          disabled={isExporting || !generatedContent}
          className="flex-1"
        >
          <Download className="mr-2 h-4 w-4" />
          Download HTML
        </Button>
      </div>
    </div>
  );
};

export default ExportOptions;
