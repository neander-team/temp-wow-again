'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 图标
import { SparklesIcon, PhotoIcon, BeakerIcon, ArrowRightIcon, PlayCircleIcon, CalendarDaysIcon, ClockIcon, GiftIcon } from '@heroicons/react/24/outline';

// Three.js 背景
import dynamic from 'next/dynamic';

const DreamyBackground = dynamic(() => import('@/components/DreamyBackground'), {
  ssr: false,
  loading: () => null,
});

interface TimeLeft {
  days?: string;
  hours?: string;
  minutes?: string;
}

export default function HomePage() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  // 活动日期 (2025-04-12)
  const eventDate = new Date('2025-04-12T00:00:00');
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = eventDate.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    setIsAppLoaded(true);
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);
    
    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 500);
    
    return () => {
      clearInterval(timer);
      clearTimeout(backgroundTimer);
    };
  }, []);

  return (
    <>
      {isAppLoaded && showBackground && <DreamyBackground />}

      <main className="min-h-screen text-slate-700 font-sans relative z-10">
        <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center mb-12 animate-fade-in-slow">
              <span className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-medium mb-5 shadow-sm">
                <CalendarDaysIcon className="w-4 h-4" /> 2025.04.12 - 04.13
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight flex flex-col items-center font-serif text-slate-800">
                <a href="https://x.com/Your_scent_0413" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">YOUR SCENT</span>
                </a>
                <span className="text-lg text-slate-500 my-1.5 font-sans italic font-light">collaboration with</span>
                <a href="https://x.com/WOW_ACSCENT" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">AC'SCENT WOW</span>
                </a>
              </h1>
              <p className="text-lg text-slate-500 mb-3">2025 钟亨生日活动</p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed">
                AI将找到适合您最喜爱的偶像形象类型的香水。
                <br className="hidden sm:block" /> 开始探索钟亨香气的特别旅程吧。
              </p>

              {timeLeft.days && (
                <div className="flex justify-center gap-3 sm:gap-5 mb-12">
                  {[ { label: '天', value: timeLeft.days }, { label: '小时', value: timeLeft.hours }, { label: '分钟', value: timeLeft.minutes } ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center">
                      <div className="bg-white/70 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow-lg flex items-center justify-center text-3xl sm:text-4xl font-semibold text-sky-600">
                        {item.value}
                      </div>
                      <span className="text-xs mt-2 text-slate-500 tracking-wider font-medium uppercase">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}

               <Link href="/zh/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <SparklesIcon className="w-5 h-5" />
                开始分析
              </Link>
            </div>

            <div className="max-w-4xl mx-auto animate-fade-in-slow" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/60 backdrop-blur-lg rounded-xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 border border-white/50">
                <div className="relative w-full md:w-2/5 flex-shrink-0 group">
                   <div className="stamp mx-auto max-w-xs shadow-xl bg-white p-1">
                     <div className="stamp-perforation"></div>
                     <div className="relative aspect-[3/4] rounded overflow-hidden">
                       <Image
                         src="/images/event-poster.jpg"
                         alt="YOUR SCENT X AC'SCENT WOW 活动海报"
                         fill
                         sizes="(max-width: 768px) 100vw, 40vw"
                         priority
                         style={{ objectFit: 'cover' }}
                         className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                       />
                     </div>
                     <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-sky-100/80 backdrop-blur-sm rounded-full text-xs text-sky-700 font-medium transform rotate-[-10deg] shadow-sm">
                       Since 2025
                     </div>
                   </div>
                    <p className="text-center mt-5 italic text-slate-500 text-sm">
                      "Always a fragrant memory..."
                    </p>
                </div>

                <div className="w-full md:w-3/5">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                     钟亨香气分析仪
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    上传您最喜欢的钟亨照片，获取AI分析的形象类型和适合的香水推荐。
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-sky-50/60 rounded-lg border border-sky-100/80">
                      <div className="p-2.5 rounded-full bg-sky-100 text-sky-600 flex-shrink-0 mt-0.5">
                        <PhotoIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">形象类型分析</h3>
                        <p className="text-slate-500 text-sm">根据上传的照片分析钟亨的形象类型。</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50/60 rounded-lg border border-blue-100/80">
                      <div className="p-2.5 rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mt-0.5">
                        <BeakerIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-700">香水推荐</h3>
                        <p className="text-slate-500 text-sm">为分析出的类型推荐最适合的香水。</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/zh/participate" className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-full shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
                    <PlayCircleIcon className="w-5 h-5 text-sky-500" />
                     立即开始分析
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-gradient-to-b from-white/30 to-sky-50/30">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in-slow" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 mb-3">
                参与方式
              </h2>
              <p className="text-slate-600 max-w-lg mx-auto">
                通过简单的3个步骤参与探索钟亨香气的旅程。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: PhotoIcon, title: '1. 上传照片', description: '选择您喜欢的钟亨照片。', color: 'sky' },
                { icon: SparklesIcon, title: '2. AI分析', description: 'AI分析照片的特征和氛围。', color: 'blue' },
                { icon: GiftIcon, title: '3. 查看结果', description: '查看分析结果和推荐的香水。', color: 'indigo' }
              ].map((step, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/60 p-6 text-center transform hover:-translate-y-1.5 transition-transform duration-300 ease-in-out animate-fade-in-slow" style={{ animationDelay: `${0.7 + index * 0.15}s` }}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${step.color}-100 text-${step.color}-600 mb-5 shadow-inner border border-${step.color}-200/50`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-800">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14 animate-fade-in-slow" style={{ animationDelay: '1.2s' }}>
               <Link href="/zh/participate" className="inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <ArrowRightIcon className="w-5 h-5" />
                开始分析
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 