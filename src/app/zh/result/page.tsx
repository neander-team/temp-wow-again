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

// 加载背景组件
const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

// 加载分析结果组件
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
  
  // 获取当前语言环境
  const locale = pathname?.split('/')[1] === 'ko' || 
                 pathname?.split('/')[1] === 'en' || 
                 pathname?.split('/')[1] === 'zh' || 
                 pathname?.split('/')[1] === 'ja' 
                 ? pathname.split('/')[1]
                 : 'ko';
  
  // useTranslation hook 使用 (SSG 模式下可能无法正常工作)
  // const { t } = useTranslation('common');
  
  // 从会话存储中获取分析结果
  useEffect(() => {
    setIsLoading(true);
    
    const fetchData = async () => {
      try {
        const analysisResult = await getAnalysisResult();
        
        if (!analysisResult) {
          setError('未找到分析结果。请重新上传图片。');
          setIsLoading(false);
          return;
        }
        
        setResult(analysisResult);
        setIsLoading(false);
      } catch (error) {
        console.error('加载结果时出错:', error);
        setError('加载分析结果时发生错误。');
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // 显示加载状态
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-lg text-blue-700 font-medium">正在加载分析结果...</p>
      </div>
    );
  }
  
  // 显示错误状态
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="text-center max-w-md mx-auto">
          <ExclamationCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">发生错误</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/zh/participate" className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            重新分析
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {/* 添加梦幻背景元素 */}
      <DreamyBackground />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* 顶部导航 */}
          <div className="mb-8">
            <Link href="/zh/participate" className="inline-flex items-center text-slate-500 hover:text-blue-500 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <span>重新分析</span>
            </Link>
          </div>
          
          {/* 页头 */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              图像分析结果
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              查看AI分析的图像特性与匹配的香水。
              您可以在AC'SCENT WOW亲自体验推荐的香气。
            </p>
          </div>
          
          {/* 结果卡片视图 */}
          <div className="flex justify-center mb-12">
            <PerfumeAnalysisReport locale="zh" />
          </div>
          
          {/* 底部指南 */}
          <div className="text-center">
            <Link href="/zh/participate" className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
              使用其他图像重新分析
            </Link>
            
            <p className="mt-6 text-sm text-slate-500">
              在<span className="text-blue-500 font-semibold">AC'SCENT WOW</span>的香料管风琴上亲自体验各种香气。
            </p>
          </div>
        </div>
      </main>
    </>
  );
} 