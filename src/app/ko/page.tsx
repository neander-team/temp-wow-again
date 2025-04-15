'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// 아이콘 업데이트
import { SparklesIcon, PhotoIcon, BeakerIcon, ArrowRightIcon, PlayCircleIcon, GiftIcon } from '@heroicons/react/24/outline';

// Three.js 배경 컴포넌트 import를 동적 import로 변경
import dynamic from 'next/dynamic';

// 배경 컴포넌트를 더 늦게 로드하도록 설정
const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  // 상태 관리 최적화
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // 앱 로딩 표시
    setIsAppLoaded(true);
    
    // 배경 로딩 지연 시간 단축
    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 500); // 3000ms에서 500ms로 감소
    
    return () => {
      clearTimeout(backgroundTimer);
    };
  }, []);

  return (
    <>
      {/* 배경은 앱이 완전히 로드된 후에만 표시 */}
      {isAppLoaded && showBackground && <DreamyBackground />}

      {/* 기존 main 태그 - 배경 그라데이션 제거 */}
      <main className="min-h-screen text-slate-700 font-sans relative z-10">
        {/* 히어로 섹션 */}
        <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
          <div className="container-custom relative z-10">
            {/* 이벤트 헤더 */}
            <div className="text-center mb-12 animate-fade-in-slow">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif text-slate-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">AC'SCENT WOW</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto mt-6 mb-10 leading-relaxed">
                AI가 분석한 이미지 타입과 어울리는 향수를 찾아드립니다
              </p>

              <Link href="/ko/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <SparklesIcon className="w-5 h-5" />
                분석 시작하기
              </Link>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="max-w-4xl mx-auto animate-fade-in-slow" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 border border-white/50">
                {/* 오른쪽: 이벤트 설명 */}
                <div className="w-full">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                    IMAGE ANALYZER
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    사진을 업로드하고 AI가 분석한 이미지 타입과 그에 어울리는 특별한 향수를 추천 받아보세요.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-sky-50/60 rounded-lg border border-sky-100/80">
                      <div className="p-2.5 rounded-full bg-sky-100 text-sky-600 flex-shrink-0 mt-0.5">
                        <PhotoIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">이미지 타입 분석</h3>
                        <p className="text-slate-500 text-sm">업로드한 사진을 기반으로 이미지 타입을 분석합니다.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50/60 rounded-lg border border-blue-100/80">
                      <div className="p-2.5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5">
                        <BeakerIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">맞춤 향수 추천</h3>
                        <p className="text-slate-500 text-sm">분석된 타입에 가장 잘 어울리는 향수를 추천해 드려요.</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/ko/participate" className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-full shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
                    <PlayCircleIcon className="w-5 h-5 text-sky-500" />
                     분석 시작하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 참여 방법 섹션 */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white/30 to-sky-50/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 mb-3">
                참여 방법
              </h2>
              <p className="text-slate-600 max-w-lg mx-auto">
                간단한 3단계로 향기를 찾아 떠나는 여정에 참여하세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: PhotoIcon, title: '1. 사진 업로드', description: '가장 마음에 드는 사진을 선택해주세요.', color: 'sky' },
                { icon: SparklesIcon, title: '2. AI 분석 진행', description: 'AI가 사진의 특징과 분위기를 분석합니다.', color: 'blue' },
                { icon: GiftIcon, title: '3. 결과 확인', description: '분석 결과를 확인하고 추천 향수를 알아보세요.', color: 'indigo' }
              ].map((step, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/60 p-6 text-center transform hover:-translate-y-1.5 transition-transform duration-300 ease-in-out animate-fade-in-slow" style={{ animationDelay: `${0.7 + index * 0.15}s` }}>
                  {step.color === 'sky' && (
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 text-sky-600 mb-5 shadow-inner border border-sky-200/50">
                      <step.icon className="w-7 h-7" />
                    </div>
                  )}
                  {step.color === 'blue' && (
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-5 shadow-inner border border-blue-200/50">
                      <step.icon className="w-7 h-7" />
                    </div>
                  )}
                  {step.color === 'indigo' && (
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-5 shadow-inner border border-indigo-200/50">
                      <step.icon className="w-7 h-7" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2 text-slate-800">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14 animate-fade-in-slow" style={{ animationDelay: '1.2s' }}>
               <Link href="/ko/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <ArrowRightIcon className="w-5 h-5" />
                분석 시작하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 