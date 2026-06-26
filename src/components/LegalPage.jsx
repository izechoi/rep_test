import React, { useEffect } from 'react';
import { legalText } from '../data/legalText';
import { Link } from 'react-router-dom';

// 법률 및 규정 텍스트 뷰어 컴포넌트: 개인정보처리방침 및 이용약관 전용 렌더링 템플릿입니다.
export default function LegalPage({ type, language }) {
  const data = legalText[type];

  useEffect(() => {
    // 페이지 진입 또는 탭 전환 시 화면을 맨 위로 스크롤합니다.
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) return null;

  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <Link to="/" className="legal-back-btn">
          {language === 'ko' ? '← 게임 목록으로' : '← Back to Catalog'}
        </Link>
        <h1 className="legal-title">{data.title[language]}</h1>
      </div>
      <div className="legal-content-card">
        <pre className="legal-text-content">{data.content[language]}</pre>
      </div>
    </div>
  );
}
