import React, { useState, useEffect, useRef } from 'react';
import { translations } from '../data/translations';

// Helper to convert hex values to RGB components for CSS opacity variables
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 240, 255';
}

export default function GamePlayer({ game, onClose, onGamePlayed, language }) {
  const [loading, setLoading] = useState(true);
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  const onGamePlayedRef = useRef(onGamePlayed);
  
  useEffect(() => {
    onGamePlayedRef.current = onGamePlayed;
  }, [onGamePlayed]);

  useEffect(() => {
    setLoading(true);
    // Track stats
    if (onGamePlayedRef.current) {
      onGamePlayedRef.current(game.id);
    }
  }, [game.id]);

  const handleIframeLoad = () => {
    setLoading(false);
    // Auto-focus the iframe so keyboard events capture instantly
    if (iframeRef.current) {
      iframeRef.current.focus();
    }
  };

  const handleRestart = () => {
    setLoading(true);
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const handleFullscreen = () => {
    if (playerRef.current) {
      if (!document.fullscreenElement) {
        playerRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  const rgbAccent = hexToRgb(game.accentColor);
  const customStyles = {
    '--player-accent': game.accentColor,
    '--player-accent-rgb': rgbAccent
  };

  return (
    <div className="game-player-overlay">
      <div className="player-frame" ref={playerRef} style={customStyles}>
        {/* Header */}
        <div className="player-header">
          <div className="player-title-section">
            <div className="player-icon"></div>
            <span className="player-title">{game.title[language]}</span>
          </div>
          <button className="player-close-btn" onClick={onClose} title="Close Player">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="player-body">
          {/* Iframe View */}
          <div className="iframe-container">
            {loading && (
              <div className="iframe-loading">
                <div className="spinner"></div>
                <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan)' }}>
                  LOADING ARENA...
                </p>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={game.path}
              title={game.title[language]}
              onLoad={handleIframeLoad}
              allowFullScreen
            ></iframe>
          </div>

          {/* Player Sidebar controls */}
          <div className="player-sidebar">
            <div>
              <h4 className="sidebar-title">{translations[language].player_info}</h4>
              <p className="player-desc">{game.description[language]}</p>
            </div>

            <div>
              <h4 className="sidebar-title">{translations[language].player_how_to_play}</h4>
              <div className="instructions-card">
                <p className="instructions-text">
                  {game.howToPlay[language]}
                </p>
              </div>
            </div>

            <div className="player-action-btns">
              <button className="player-action-btn" onClick={handleRestart}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                {translations[language].player_restart}
              </button>
              
              <button className="player-action-btn" onClick={handleFullscreen}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
                {translations[language].player_fullscreen}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
