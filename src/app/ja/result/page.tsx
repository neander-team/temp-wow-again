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

// 背景コンポーネントをロード
const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

// 分析結果コンポーネントをロード
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
  
  // 現在のlocaleを抽出
  const locale = pathname?.split('/')[1] === 'ko' || 
                 pathname?.split('/')[1] === 'en' || 
                 pathname?.split('/')[1] === 'zh' || 
                 pathname?.split('/')[1] === 'ja' 
                 ? pathname.split('/')[1]
                 : 'ko';
  
  // useTranslation hook 사용 (SSG 모드에서는 작동하지 않을 수 있음)
  // const { t } = useTranslation('common');
  
  // セッションストレージから分析結果を取得
  useEffect(() => {
    setIsLoading(true);
    
    const fetchData = async () => {
      try {
        const analysisResult = await getAnalysisResult();
        
        if (!analysisResult) {
          setError('分析結果が見つかりません。もう一度画像をアップロードしてください。');
          setIsLoading(false);
          return;
        }
        
        setResult(analysisResult);
        setIsLoading(false);
      } catch (error) {
        console.error('結果の読み込み中にエラーが発生しました:', error);
        setError('分析結果の読み込み中にエラーが発生しました。');
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // ローディング状態の表示
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-lg text-blue-700 font-medium">分析結果を読み込み中...</p>
      </div>
    );
  }
  
  // エラー状態の表示
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="text-center max-w-md mx-auto">
          <ExclamationCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">エラーが発生しました</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/ja/participate" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            もう一度分析する
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* 夢のような背景要素を追加 */}
      <DreamyBackground />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* 上部ナビゲーション */}
          <div className="mb-8">
            <Link href="/ja/participate" className="inline-flex items-center text-slate-500 hover:text-blue-500 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <span>もう一度分析する</span>
            </Link>
          </div>
          
          {/* ヘッダー */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              画像分析結果
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              AIが分析した画像の特性と合う香水をご確認ください。
              AC'SCENT WOWで実際におすすめの香りを直接お試しいただけます。
            </p>
          </div>
          
          {/* 結果カードビュー */}
          <div className="flex justify-center mb-12">
            <PerfumeAnalysisReport locale="ja" />
          </div>
          
          {/* 下部案内 */}
          <div className="text-center">
            <Link href="/ja/participate" className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
              別の画像でもう一度分析する
            </Link>
            
            <p className="mt-6 text-sm text-slate-500">
              <span className="text-blue-500 font-semibold">AC'SCENT WOW</span>の香料オルガンでさまざまな香りを直接体験してください。
            </p>
          </div>
        </div>
      </main>
    </>
  );
} 