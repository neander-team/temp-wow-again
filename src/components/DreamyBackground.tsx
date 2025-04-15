'use client';

import React, { useEffect, useState } from 'react';

// 간소화된 배경 컴포넌트
export default function DreamyBackground() {
  const [mounted, setMounted] = useState(false);

  // 인라인 스타일 정의
  const containerStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #e6f4ff, #f0f8ff)'
  };

  // 파티클 기본 스타일 (JavaScript에서 동적으로 적용)
  const particleBaseStyle = {
    position: 'absolute' as const,
    borderRadius: '50%',
    background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.9), rgba(173, 216, 230, 0.4), rgba(135, 206, 250, 0))',
    animation: 'float 20s infinite ease-in-out',
    pointerEvents: 'none' as const,
    boxShadow: '0 0 10px 2px rgba(173, 216, 230, 0.3)',
    filter: 'blur(5px)'
  };

  useEffect(() => {
    setMounted(true);
    
    // 클라이언트 측에서만 실행
    if (typeof window !== 'undefined') {
      // 애니메이션 키프레임 추가
      const addKeyframes = () => {
        // 이미 스타일이 추가되어 있는지 확인
        if (!document.getElementById('dreamy-keyframes')) {
          const styleSheet = document.createElement('style');
          styleSheet.id = 'dreamy-keyframes';
          styleSheet.textContent = `
            @keyframes float {
              0% { transform: translate(0, 0) rotate(0deg) scale(1); }
              25% { transform: translate(5%, 5%) rotate(5deg) scale(1.05); }
              50% { transform: translate(0%, 10%) rotate(0deg) scale(1); }
              75% { transform: translate(-5%, 5%) rotate(-5deg) scale(0.95); }
              100% { transform: translate(0, 0) rotate(0deg) scale(1); }
            }
          `;
          document.head.appendChild(styleSheet);
        }
      };
      
      // 파티클 생성
      const createParticles = () => {
        addKeyframes();
        
        const container = document.getElementById('dreamy-background-container');
        if (!container) return;
        
        // 기존 파티클 제거
        container.innerHTML = '';
        
        // 파티클 수를 줄여서 성능 향상
        for (let i = 0; i < 30; i++) {
          const particle = document.createElement('div');
          
          // 랜덤 위치
          const posLeft = Math.random() * 100;
          const posTop = Math.random() * 100;
          
          // 랜덤 크기
          const size = Math.random() * 4 + 1;
          
          // 랜덤 애니메이션 지연
          const delay = Math.random() * 10;
          
          // 랜덤 불투명도
          const opacity = Math.random() * 0.5 + 0.1;
          
          // 인라인 스타일 적용
          Object.assign(particle.style, {
            ...particleBaseStyle,
            left: `${posLeft}%`,
            top: `${posTop}%`,
            width: `${size}rem`,
            height: `${size}rem`,
            animationDelay: `${delay}s`,
            opacity: opacity.toString()
          });
          
          container.appendChild(particle);
        }
      };
      
      // 초기 파티클 생성
      setTimeout(createParticles, 100);
      
      // 리사이즈 이벤트에 대응
      window.addEventListener('resize', createParticles);
      
      return () => {
        window.removeEventListener('resize', createParticles);
      };
    }
  }, []);

  if (!mounted) return null;

  return (
    <div id="dreamy-background-container" style={containerStyle}></div>
  );
} 