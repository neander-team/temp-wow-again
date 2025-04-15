import { redirect } from 'next/navigation';

export default function Home() {
  // 기본 언어인 한국어 페이지로 리다이렉션
  redirect('/ko');
  
  // 리다이렉션 이후 이 부분은 실행되지 않지만 컴포넌트는 반환해야 함
  return null;
} 