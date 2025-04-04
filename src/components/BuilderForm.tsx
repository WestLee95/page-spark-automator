
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormData, PageGoal } from '@/types';
import { Label } from '@/components/ui/label';
import { generatePageContent } from '@/utils/openaiService';
import { useToast } from '@/hooks/use-toast';

interface BuilderFormProps {
  onGenerateContent: (generatedContent: any) => void;
  onFormDataChange: (formData: FormData) => void;
}

const defaultFormData: FormData = {
  productName: '',
  targetAudience: '',
  keyFeatures: '',
  brandColorPrimary: '#6E59A5',
  brandColorSecondary: '#33C3F0',
  pageGoal: 'sales',
};

const BuilderForm: React.FC<BuilderFormProps> = ({ onGenerateContent, onFormDataChange }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);
    onFormDataChange(updatedFormData);
  };

  const handleGenerate = async () => {
    // Validation
    if (!formData.productName || !formData.targetAudience || !formData.keyFeatures) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields to generate your page.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const content = await generatePageContent(formData);
      onGenerateContent(content);
      toast({
        title: "Page content generated!",
        description: "Your landing page content has been created successfully.",
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your content. Please try again.",
        variant: "destructive",
      });
      console.error("Error generating content:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border w-full max-w-xl fade-in">
      <h2 className="text-2xl font-bold mb-6">Create Your Landing Page</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="productName">Product/Service Name</Label>
          <Input
            id="productName"
            placeholder="e.g. FitTrack Pro"
            value={formData.productName}
            onChange={(e) => handleInputChange('productName', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="targetAudience">Target Audience</Label>
          <Input
            id="targetAudience"
            placeholder="e.g. Fitness enthusiasts aged 25-45"
            value={formData.targetAudience}
            onChange={(e) => handleInputChange('targetAudience', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="keyFeatures">Key Features/Benefits</Label>
          <Textarea
            id="keyFeatures"
            placeholder="List your main features or benefits, separated by commas or new lines"
            className="min-h-[100px]"
            value={formData.keyFeatures}
            onChange={(e) => handleInputChange('keyFeatures', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="brandColorPrimary">Primary Brand Color</Label>
            <div className="flex items-center space-x-2">
              <Input
                type="color"
                id="brandColorPrimary"
                value={formData.brandColorPrimary}
                onChange={(e) => handleInputChange('brandColorPrimary', e.target.value)}
                className="w-12 h-10 p-1"
              />
              <Input
                type="text"
                value={formData.brandColorPrimary}
                onChange={(e) => handleInputChange('brandColorPrimary', e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="brandColorSecondary">Secondary Brand Color</Label>
            <div className="flex items-center space-x-2">
              <Input
                type="color"
                id="brandColorSecondary"
                value={formData.brandColorSecondary}
                onChange={(e) => handleInputChange('brandColorSecondary', e.target.value)}
                className="w-12 h-10 p-1"
              />
              <Input
                type="text"
                value={formData.brandColorSecondary}
                onChange={(e) => handleInputChange('brandColorSecondary', e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pageGoal">Page Goal</Label>
          <Select 
            value={formData.pageGoal} 
            onValueChange={(value) => handleInputChange('pageGoal', value as PageGoal)}
          >
            <SelectTrigger id="pageGoal">
              <SelectValue placeholder="Select a goal for your page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="leadGeneration">Lead Generation</SelectItem>
              <SelectItem value="booking">Booking</SelectItem>
              <SelectItem value="information">Information</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleGenerate} 
          className="w-full" 
          disabled={isGenerating}
        >
          {isGenerating ? "Generating Content..." : "Generate Landing Page"}
        </Button>
      </div>
    </div>
  );
};

export default BuilderForm;
