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

// 배경 컴포넌트 불러오기
const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

// 분석 결과 컴포넌트 불러오기
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
  
  // 현재 locale 추출
  const locale = pathname?.split('/')[1] === 'ko' || 
                 pathname?.split('/')[1] === 'en' || 
                 pathname?.split('/')[1] === 'zh' || 
                 pathname?.split('/')[1] === 'ja' 
                 ? pathname.split('/')[1]
                 : 'ko';
  
  // useTranslation hook 사용 (SSG 모드에서는 작동하지 않을 수 있음)
  // const { t } = useTranslation('common');
  
  // 세션 스토리지에서 분석 결과 가져오기
  useEffect(() => {
    setIsLoading(true);
    
    try {
      const analysisResult = getAnalysisResult();
      
      if (!analysisResult) {
        setError('분석 결과를 찾을 수 없습니다. 이미지를 다시 업로드해주세요.');
        setIsLoading(false);
        return;
      }
      
      setResult(analysisResult);
      setIsLoading(false);
    } catch (error) {
      console.error('결과 로딩 중 오류 발생:', error);
      setError('분석 결과를 불러오는 중 오류가 발생했습니다.');
      setIsLoading(false);
    }
  }, []);

  // 로딩 상태 표시
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-lg text-blue-700 font-medium">분석 결과를 불러오는 중...</p>
      </div>
    );
  }
  
  // 에러 상태 표시
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="text-center max-w-md mx-auto">
          <ExclamationCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">오류가 발생했습니다</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/participate" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            다시 분석하기
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* 꿈같은 배경 요소 추가 */}
      <DreamyBackground />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* 상단 네비게이션 */}
          <div className="mb-8">
            <Link href="/participate" className="inline-flex items-center text-slate-500 hover:text-blue-500 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <span>다시 분석하기</span>
            </Link>
          </div>
          
          {/* 헤더 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              당신의 이미지 분석 결과
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              AI가 분석한 이미지의 특성과 어울리는 향수를 확인하세요.
              AC'SCENT WOW에서 실제 추천받은 향을 직접 맡아보실 수 있습니다.
            </p>
          </div>
          
          {/* 결과 카드 뷰 */}
          <div className="flex justify-center mb-12">
            <PerfumeAnalysisReport locale={locale} />
          </div>
          
          {/* 하단 안내 */}
          <div className="text-center">
            <Link href="/participate" className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
              다른 이미지로 다시 분석하기
            </Link>
            
            <p className="mt-6 text-sm text-slate-500">
              <span className="text-blue-500 font-semibold">AC'SCENT WOW</span>의 향료 오르간에서 다양한 향들을 직접 경험해보세요.
            </p>
          </div>
        </div>
      </main>
    </>
  );
} 