import React from 'react';
import { translations } from '../data/translations';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  language, 
  setLanguage 
}) {
  return (
    <nav className="navbar">
      <div className="search-container">
        <svg
          className="search-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder={translations[language].navbar_search_placeholder}
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="navbar-right">
        <div className="lang-switcher">
          <button 
            className={`lang-btn ${language === 'ko' ? 'active' : ''}`}
            onClick={() => setLanguage('ko')}
            title="한국어"
          >
            KO
          </button>
          <span className="lang-divider">|</span>
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            title="English"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
