import React from 'react';
import { translations } from '../data/translations';

const CATEGORIES = ['All', 'Arcade', 'Puzzle', 'Action', 'Strategy', 'Board'];

export default function Sidebar({
  activeGenre,
  setActiveGenre,
  onRandomPlay,
  language
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="logo-icon">G</div>
        <span className="logo-text">GAME PORTAL</span>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-section-title">{translations[language].sidebar_genres}</h3>
        <ul className="sidebar-menu">
          {CATEGORIES.map((genre) => (
            <li
              key={genre}
              className={`menu-item ${activeGenre === genre ? 'active' : ''}`}
              onClick={() => setActiveGenre(genre)}
            >
              <span>{translations[language]['genre_' + genre]}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="random-trigger" onClick={onRandomPlay}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </svg>
        <span>{translations[language].sidebar_random}</span>
      </button>
    </aside>
  );
}
