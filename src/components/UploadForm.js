"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
// import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { AnalysisResult } from "./AnalysisResult";
import toast from "react-hot-toast";

export function UploadForm() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisResult, setAnalysisResult] = useState(null);
  //   const { toast } = useToast();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.includes("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
    setAnalysisResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      toast({
        title: "No image selected",
        description: "Please select an image to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 100);

    // Simulate API call with a delay
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);

      // Mock analysis result - in a real app, this would come from your AI service
      const mockResult = getMockAnalysisResult(image.name);

      setAnalysisResult(mockResult);
      setIsUploading(false);

      toast.error({
        title: "Analysis complete",
        description: "Your plant image has been analyzed successfully",
      });
    }, 2500);
  };

  const getMockAnalysisResult = (filename) => {
    // This is a mock function that returns different results based on the filename
    // In a real app, this would be replaced with actual AI analysis
    const results = [
      {
        disease: "Powdery Mildew",
        confidence: 92,
        description:
          "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white to gray powdery growth on leaf surfaces, stems, and sometimes fruit.",
        treatment:
          "Apply fungicides specifically labeled for powdery mildew. Improve air circulation around plants and avoid overhead watering.",
        preventionTips: [
          "Space plants properly to improve air circulation",
          "Water at the base of plants to keep foliage dry",
          "Remove and destroy infected plant parts",
          "Use resistant varieties when available",
        ],
      },
      {
        disease: "Leaf Spot",
        confidence: 87,
        description:
          "Leaf spot is a common plant disease characterized by brown or black spots on leaves. It's caused by various fungi and bacteria.",
        treatment:
          "Remove and destroy infected leaves. Apply appropriate fungicide or bactericide depending on the specific pathogen.",
        preventionTips: [
          "Avoid wetting leaves when watering",
          "Ensure proper spacing between plants",
          "Clean up fallen leaves and plant debris",
          "Rotate crops annually",
        ],
      },
      {
        disease: "Healthy Plant",
        confidence: 95,
        description: "No disease detected. Your plant appears to be healthy.",
        treatment: "Continue with regular care and maintenance.",
        preventionTips: [
          "Maintain regular watering schedule",
          "Fertilize as appropriate for the plant species",
          "Monitor for early signs of pests or disease",
          "Ensure adequate sunlight and proper soil conditions",
        ],
      },
    ];

    // Return a random result from the array
    return results[Math.floor(Math.random() * results.length)];
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center justify-center">
          <label
            htmlFor="image-upload"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-green-300 bg-green-50 hover:bg-green-100"
          >
            {preview ? (
              <Image
                // src="/dragon.jpg"
                src={preview || "/dragon.jpg"}
                alt="Plant preview"
                width={600}
                height={500}
                className="h-full max-h-60 w-auto object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-3 text-green-500"
                >
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                  <line x1="16" x2="22" y1="5" y2="5" />
                  <line x1="19" x2="19" y1="2" y2="8" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG or JPEG (MAX. 10MB)
                </p>
              </div>
            )}
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {isUploading && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Uploading and analyzing...</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-2" />
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={!image || isUploading}
        >
          {isUploading ? "Analyzing..." : "Analyze Plant"}
        </Button>
      </form>

      {analysisResult && (
        <AnalysisResult result={analysisResult} image={preview} />
      )}
    </div>
  );
}
