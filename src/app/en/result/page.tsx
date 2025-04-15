'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { 
  ArrowLeftIcon, 
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { getAnalysisResult, AnalysisReport } from '@/services/imageAnalysisService';
import { useTranslation } from 'next-i18next';

// Load background component
const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

// Load analysis result component
const PerfumeAnalysisReport = dynamic(() => import('@/components/result/PerfumeAnalysisReport'), {
  ssr: false,
  loading: () => <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>,
});

export default function ResultPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [result, setResult] = useState<AnalysisReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Extract current locale
  const locale = pathname?.split('/')[1] === 'ko' || 
                 pathname?.split('/')[1] === 'en' || 
                 pathname?.split('/')[1] === 'zh' || 
                 pathname?.split('/')[1] === 'ja' 
                 ? pathname.split('/')[1]
                 : 'ko';
  
  // Using useTranslation hook (may not work in SSG mode)
  // const { t } = useTranslation('common');
  
  // Fetch analysis result from session storage
  useEffect(() => {
    setIsLoading(true);
    
    const fetchData = async () => {
      try {
        const analysisResult = await getAnalysisResult();
        
        if (!analysisResult) {
          setError('Analysis result not found. Please upload your image again.');
          setIsLoading(false);
          return;
        }
        
        setResult(analysisResult);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading results:', error);
        setError('An error occurred while loading the analysis result.');
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Display loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-lg text-blue-700 font-medium">Loading analysis results...</p>
      </div>
    );
  }
  
  // Display error state
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="text-center max-w-md mx-auto">
          <ExclamationCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">An Error Occurred</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/en/participate" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Analyze Again
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* Add dreamy background elements */}
      <DreamyBackground />
      
      <main className="min-h-screen pt-28 pb-20">
        <div className="container-custom max-w-6xl mx-auto px-6">
          {/* Top navigation */}
          <div className="mb-10">
            <Link href="/en/participate" className="inline-flex items-center text-slate-500 hover:text-blue-500 transition-colors duration-300 text-sm font-medium">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <span>Back to Analysis</span>
            </Link>
          </div>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 tracking-tight">
              Your Image Analysis Results
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              View the perfume that matches the characteristics of your image as analyzed by AI.
              You can experience the recommended scent in person at AC'SCENT WOW.
            </p>
          </div>
          
          {/* Result card view */}
          <div className="flex justify-center mb-16">
            <PerfumeAnalysisReport locale="en" />
          </div>
          
          {/* Bottom guide */}
          <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-white/50 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Experience Your Personalized Scent
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Visit the AC'SCENT WOW fragrance organ to experience your recommended scent in person
              and discover how it resonates with the essence of your chosen image.
            </p>
            
            <Link href="/en/participate" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-base font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              Analyze Another Image
            </Link>
          </div>
        </div>
      </main>
    </>
  );
} 