'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, PhotoIcon, CloudArrowUpIcon, CheckCircleIcon, ArrowPathIcon, InformationCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { analyzeImage } from '@/services/imageAnalysisService';

// Load background component
const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

export default function ParticipatePage() {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileName, setFileName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('Image size exceeds 10MB. Please select a smaller image.');
        return;
      }
      
      // Check file format
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setErrorMsg('Only JPG or PNG image formats are allowed.');
        return;
      }
      
      setErrorMsg('');
      setFileName(file.name);
      setIsUploading(true);
      
      // Convert file to Data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Reset image selection
  const handleReset = () => {
    setImage(null);
    setFileName('');
    setErrorMsg('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  // Start analysis
  const handleAnalyze = async () => {
    if (!image) {
      setErrorMsg('Please upload an image first.');
      return;
    }
    
    try {
      setIsAnalyzing(true);
      await analyzeImage(image);
      
      // Navigate to result page after analysis is complete
      router.push('/en/result');
    } catch (error) {
      console.error("Error during analysis:", error);
      setErrorMsg('An error occurred during image analysis. Please try again.');
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <DreamyBackground />
      
      <main className="min-h-screen pt-28 pb-20">
        <div className="container-custom max-w-6xl mx-auto px-6">
          {/* Top navigation */}
          <div className="mb-10">
            <Link href="/en" className="inline-flex items-center text-slate-500 hover:text-blue-500 transition-colors duration-300 text-sm font-medium">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <span>Back to Main</span>
            </Link>
          </div>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-sm">
              <PhotoIcon className="w-3.5 h-3.5" />IDOL IMAGE ANALYSIS
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 tracking-tight">
              IDOL IMAGE ANALYSIS
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Upload your favorite image, and AI will analyze it to recommend suitable perfumes.
              <span className="text-blue-600 font-medium"> AC'SCENT WOW</span> lets you experience the recommended scents in person.
            </p>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
            {/* Left side: Image upload area */}
            <div className="lg:col-span-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/70 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold mb-5 text-slate-800 flex items-center">
                <PhotoIcon className="w-6 h-6 mr-3 text-blue-600" />
                Upload Image
              </h2>
              
              <p className="text-slate-600 mb-8">
                High-quality frontal photos work best for analysis. Choose an image that clearly shows your idol's expression and atmosphere.
              </p>
              
              {errorMsg && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md">
                  <p className="font-medium">{errorMsg}</p>
                </div>
              )}
              
              <div className="mt-8">
                {!image ? (
                  <div 
                    className="border-3 border-dashed border-blue-200 rounded-2xl p-10 text-center cursor-pointer hover:border-blue-400 transition-all duration-300 bg-gradient-to-b from-slate-50 to-blue-50/50 min-h-[400px] flex flex-col items-center justify-center"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="bg-blue-100/80 p-5 rounded-full mb-6 transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
                      <CloudArrowUpIcon className="w-16 h-16 text-blue-500" />
                    </div>
                    <p className="text-slate-500 mb-6 max-w-md mx-auto">
                      Upload a high-quality photo of your favorite idol, and AI will analyze the image to find scents that match his characteristics.
                    </p>
                    <p className="text-slate-400 text-sm mb-8">JPG, PNG formats (max 10MB)</p>
                    
                    <input
                      type="file"
                      accept="image/jpeg, image/png"
                      className="hidden"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                    
                    <button 
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-base font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                    >
                      <PhotoIcon className="w-5 h-5" />
                      Select Image
                    </button>
                  </div>
                ) : (
                  <div className="relative bg-white p-2 rounded-2xl shadow-md">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/5] w-full">
                      <Image
                        src={image}
                        alt="Uploaded Image"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                      {isUploading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <button 
                        onClick={handleReset}
                        disabled={isAnalyzing}
                        className="px-5 py-3 flex items-center gap-2 bg-white border border-slate-300 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ArrowPathIcon className="w-4 h-4 text-slate-500" />
                        Reset
                      </button>
                      
                      <button 
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed"
                      >
                        {isAnalyzing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <CheckCircleIcon className="w-4 h-4" />
                            Analyze This Image
                          </>
                        )}
                      </button>
                    </div>
                    
                    {fileName && (
                      <div className="mt-4 text-center">
                        <p className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-xs text-slate-600">
                          <InformationCircleIcon className="w-3.5 h-3.5" />
                          {fileName}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="mt-8 rounded-xl bg-blue-50/70 p-4 flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1.5 mt-0.5">
                  <LightBulbIcon className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm text-slate-600">
                  <span className="font-medium text-blue-700">Image Selection Tip:</span>{' '}
                  Single-person photos with clear faces yield the best results. Images with complex backgrounds may reduce analysis accuracy.
                </p>
              </div>
            </div>
            
            {/* Right side: Offline testing guide */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/70 h-fit">
                <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
                  <span className="bg-indigo-100 text-indigo-600 p-1.5 rounded-full inline-flex mr-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" />
                      <path d="M11 15C6.58172 15 3 17.0147 3 19.5C3 21.9853 6.58172 24 11 24C15.4183 24 19 21.9853 19 19.5C19 17.0147 15.4183 15 11 15Z" />
                      <path d="M15.3675 10.0014C16.375 11.6855 18.0485 12.7266 19.8935 12.9443C21.2488 13.0984 22 14.2976 22 15.297C22 16.2964 21.2488 17.4956 19.8935 17.6496C18.0485 17.8674 16.375 18.9085 15.3675 20.5926" strokeLinecap="round" />
                    </svg>
                  </span>
                  AC'SCENT WOW Offline Scent Testing Guide
                </h2>
                
                <div className="space-y-5">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-5 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                        <span className="font-bold">1</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-indigo-800 text-lg">Find Recommended Scent</h3>
                        <p className="text-slate-600 mt-1.5">
                          Check the recommended perfume number from your analysis results, then locate that number at the fragrance organ.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-5 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                        <span className="font-bold">2</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-blue-800 text-lg">Sample the Scent</h3>
                        <p className="text-slate-600 mt-1.5">
                          Pick up the glass bottle from the organ, and the monitor will display a description of the fragrance. Open the cap to smell the scent.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 rounded-xl p-5 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-sky-500 to-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                        <span className="font-bold">3</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-purple-800 text-lg">Choose Your Favorite</h3>
                        <p className="text-slate-600 mt-1.5">
                          If you like the recommended scent, note its number on the paper you received at the counter. If not, feel free to try other scents and change your selection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <span className="inline-block text-sm text-indigo-800 italic px-4 py-2 bg-indigo-50 rounded-full">
                    Find your perfect match from 30 different fragrances.
                  </span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500/90 to-blue-600/90 rounded-2xl p-8 text-white shadow-xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-white/20 p-1.5 rounded-full inline-flex mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13L4 14.0607M13 5.06066L14.0607 4M3.5 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M9 16C9 16 9.94821 17.7032 11 19C12.7143 16 19 8.5 19 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M14.5 16L16.5 14L14.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    AC'SCENT WOW Personalized Perfume Recommendation System
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    AI analyzes the mood, colors, and emotions in your image to recommend the best matching scent from 30 fragrances.
                    Experience scents that perfectly match your idol's image characteristics in person.
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-1.5 rounded-full">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium">Cutting-edge Image Analysis AI</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="bg-white/20 p-1.5 rounded-full">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium">Professional Perfumer Database Matching Algorithm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom guide */}
          <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-white/50 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Your Special Journey Begins
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Find the perfect fragrance to match your favorite idol through image analysis.
              Experience personalized scents at the AC'SCENT WOW fragrance organ,
              and cherish this special memory that belongs only to you.
            </p>
            
            <div className="inline-flex items-center text-sm text-blue-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 