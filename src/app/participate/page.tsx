'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, PhotoIcon, CloudArrowUpIcon, CheckCircleIcon, ArrowPathIcon, InformationCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { analyzeImage } from '@/services/imageAnalysisService';

// 배경 컴포넌트 불러오기
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
  
  // 파일 선택 처리
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 파일 크기 확인 (10MB 제한)
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('이미지 크기가 10MB를 초과했습니다. 더 작은 이미지를 선택해주세요.');
        return;
      }
      
      // 파일 형식 확인
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setErrorMsg('JPG 또는 PNG 형식의 이미지만 업로드 가능합니다.');
        return;
      }
      
      setErrorMsg('');
      setFileName(file.name);
      setIsUploading(true);
      
      // 파일을 Data URL로 변환
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // 이미지 다시 선택
  const handleReset = () => {
    setImage(null);
    setFileName('');
    setErrorMsg('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  // 분석 시작
  const handleAnalyze = async () => {
    if (!image) {
      setErrorMsg('이미지를 먼저 업로드해주세요.');
      return;
    }
    
    try {
      setIsAnalyzing(true);
      await analyzeImage(image);
      
      // 분석이 완료되면 결과 페이지로 이동
      router.push('/result');
    } catch (error) {
      console.error("분석 중 오류 발생:", error);
      setErrorMsg('이미지 분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <DreamyBackground />
      
      <main className="min-h-screen pt-28 pb-20">
        <div className="container-custom max-w-6xl mx-auto px-6">
          {/* 상단 네비게이션 */}
          <div className="mb-10">
            <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-500 transition-colors duration-300 text-sm font-medium">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              <span>메인으로 돌아가기</span>
            </Link>
          </div>
          
          {/* 헤더 */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-sm">
              <PhotoIcon className="w-3.5 h-3.5" /> 이미지 분석
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 tracking-tight">
              최애 이미지 분석
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              가장 좋아하는 최애의 이미지를 업로드하면 AI가 분석하여 어울리는 향수를 추천해 드립니다.
              <span className="text-blue-600 font-medium"> AC'SCENT WOW</span>에서 실제 추천받은 향을 직접 맡아보세요.
            </p>
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
            {/* 왼쪽: 이미지 업로드 영역 */}
            <div className="lg:col-span-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/70 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold mb-5 text-slate-800 flex items-center">
                <PhotoIcon className="w-6 h-6 mr-3 text-blue-600" />
                이미지 업로드
              </h2>
              
              <p className="text-slate-600 mb-8">
                고화질의 정면 사진이 분석에 가장 적합합니다. 최애의 표정과 분위기가 잘 드러난 사진을 선택해 주세요.
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
                      최애의 고화질 사진을 업로드하면 AI가 이미지를 분석하여 특성과 매칭되는 향을 찾아드립니다.
                    </p>
                    <p className="text-slate-400 text-sm mb-8">JPG, PNG 포맷 (최대 10MB)</p>
                    
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
                      이미지 선택
                    </button>
                  </div>
                ) : (
                  <div className="relative bg-white p-2 rounded-2xl shadow-md">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/5] w-full">
                      <Image
                        src={image}
                        alt="업로드된 이미지"
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
                        다시 선택하기
                      </button>
                      
                      <button 
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed"
                      >
                        {isAnalyzing ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            분석중...
                          </>
                        ) : (
                          <>
                            <CheckCircleIcon className="w-4 h-4" />
                            이 이미지로 분석하기
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
                  <span className="font-medium text-blue-700">이미지 선택 팁:</span>{' '}
                  얼굴이 잘 보이는 단독 사진이 최상의 결과를 얻을 수 있습니다. 복잡한 배경이 있는 사진은 분석 정확도가 떨어질 수 있습니다.
                </p>
              </div>
            </div>
            
            {/* 오른쪽: 오프라인 시향 안내 */}
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
                  AC'SCENT WOW 오프라인 시향 안내
                </h2>
                
                <div className="space-y-5">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-5 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                        <span className="font-bold">1</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-indigo-800 text-lg">추천받은 향을 찾기</h3>
                        <p className="text-slate-600 mt-1.5">
                          분석 결과에서 추천된 향수 번호를 확인하고, 향료 오르간에서 해당 번호의 향을 찾아보세요.
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
                        <h3 className="font-bold text-blue-800 text-lg">향을 들어서 맡기</h3>
                        <p className="text-slate-600 mt-1.5">
                          오르간 위의 유리병을 집어들면 모니터에 해당 향에 대한 설명이 나타납니다. 뚜껑을 열고 향을 맡아보세요.
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
                        <h3 className="font-bold text-purple-800 text-lg">최애 향기 선택하기</h3>
                        <p className="text-slate-600 mt-1.5">
                          추천받은 향이 마음에 들면 카운터에서 받은 종이에 해당 향 번호를 작성하시면 됩니다. 마음에 들지 않으면 다른 향을 맡아보고 바꾸셔도 됩니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <span className="inline-block text-sm text-indigo-800 italic px-4 py-2 bg-indigo-50 rounded-full">
                    총 30가지 향 중에서 당신에게 가장 잘 어울리는 향을 찾아보세요.
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
                    AC'SCENT WOW의 맞춤형 향수 추천 시스템
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    AI가 이미지의 분위기, 색감, 감정을 분석하여 30가지 향 중 가장 어울리는 향을 추천해 드립니다. 
                    최애의 이미지 특성과 매칭되는 향을 직접 경험해보세요.
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-1.5 rounded-full">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium">최첨단 이미지 분석 AI 기술</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="bg-white/20 p-1.5 rounded-full">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium">전문 조향사의 데이터 기반 매칭 알고리즘</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 하단 안내 */}
          <div className="bg-white/80 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-white/50 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              당신만의 특별한 여정이 시작됩니다
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              이미지 분석을 통해 당신의 최애와 가장 어울리는 향을 찾아보세요. 
              AC'SCENT WOW의 향료 오르간에서 맞춤형 향을 경험하고, 
              당신만의 특별한 기억으로 간직하세요.
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