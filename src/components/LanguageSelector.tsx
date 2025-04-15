'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface LanguageOption {
  code: string;
  label: string;
}

const languages: LanguageOption[] = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // 현재 언어 감지
  const [currentLanguage, setCurrentLanguage] = useState('ko');
  
  // 페이지 로드 시 현재 URL에서 언어 코드 추출
  useEffect(() => {
    // 경로가 있고, 첫 번째 세그먼트가 언어 코드인 경우
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      const firstSegment = segments[0];
      if (languages.some(lang => lang.code === firstSegment)) {
        setCurrentLanguage(firstSegment);
      }
    }
  }, [pathname]);

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
    setIsOpen(false);
    
    // 현재 경로에서 언어 코드 부분만 변경하여 새 URL 생성
    let newPath = '';
    
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      
      // 첫 번째 세그먼트가 언어 코드인 경우
      if (languages.some(lang => lang.code === segments[0])) {
        // 첫 번째 세그먼트만 새 언어 코드로 교체
        segments[0] = code;
      } else {
        // 첫 번째 세그먼트가 언어 코드가 아니면 앞에 추가
        segments.unshift(code);
      }
      
      newPath = '/' + segments.join('/');
    } else {
      // 경로가 없거나 루트 경로인 경우
      newPath = `/${code}`;
    }
    
    // 새 URL로 이동
    router.push(newPath);
  };

  const getCurrentLanguageLabel = () => {
    return languages.find(lang => lang.code === currentLanguage)?.label || '한국어';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
      >
        <span>{getCurrentLanguageLabel()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 ${
                currentLanguage === lang.code ? 'text-primary font-medium' : 'text-gray-700'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 