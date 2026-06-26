import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../data/translations';

// 하단 Footer 영역 컴포넌트: 애드센스 규정을 충족하는 정책 링크와 저작권 정보를 표시합니다.
export default function Footer({ language }) {
  return (
    <footer className="portal-footer">
      <div className="footer-content">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Arcade Portal. All rights reserved.
        </p>
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">
            {language === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
          </Link>
          <span className="footer-divider">|</span>
          <Link to="/terms" className="footer-link">
            {language === 'ko' ? '이용약관' : 'Terms of Service'}
          </Link>
        </div>
      </div>
    </footer>
  );
}
