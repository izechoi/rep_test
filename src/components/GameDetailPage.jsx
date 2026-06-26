import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { gamesData } from '../data/games';
import { translations } from '../data/translations';

// 헥사 칼라값을 RGB 값으로 변경하여 투명도 변수에 맵핑하기 위한 헬퍼 함수
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 240, 255';
}

// 게임 상세 및 공략 가이드 통합 페이지 컴포넌트: 구글 애드센스 크롤러 최적화용 대량 텍스트 레이아웃을 제공합니다.
export default function GameDetailPage({ onGamePlayed, language }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // URL 파라미터 기반으로 해당 게임 검색
  const game = gamesData.find(g => g.id === id);
  const [loading, setLoading] = useState(true);
  const playerRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    // 상세 페이지로 이동하면 무조건 최상단으로 스크롤 이동
    window.scrollTo(0, 0);
    
    if (game) {
      setLoading(true);
      // 포털 누적 플레이 카운트 업데이트 트리거
      if (onGamePlayed) {
        onGamePlayed(game.id);
      }
    }
  }, [id, game, onGamePlayed]);

  if (!game) {
    return (
      <div className="no-results">
        <div className="no-results-icon">👾</div>
        <h3>{language === 'ko' ? '게임을 찾을 수 없습니다' : 'Game Not Found'}</h3>
        <Link to="/" className="legal-back-btn">
          {language === 'ko' ? '로비로 돌아가기' : 'Back to Lobby'}
        </Link>
      </div>
    );
  }

  const handleIframeLoad = () => {
    setLoading(false);
    // 아이프레임 로드 완료 시 키보드 포커싱 활성화
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
    <div className="game-detail-page" style={customStyles}>
      
      {/* 1. 상단 뒤로가기 네비게이션 및 게임 개요 영역 */}
      <div className="detail-header">
        <Link to="/" className="detail-back-btn">
          {language === 'ko' ? '← 전체 게임 목록으로' : '← Back to Catalog'}
        </Link>
        <div className="detail-title-section">
          <span className="detail-genre-badge">{game.genre}</span>
          <h1 className="detail-title">{game.title[language]}</h1>
          <p className="detail-desc">{game.description[language]}</p>
        </div>
      </div>

      {/* 2. 중앙 게임 플레이 프레임 영역 */}
      <div className="detail-player-section" ref={playerRef}>
        <div className="detail-player-frame">
          <div className="detail-iframe-container">
            {loading && (
              <div className="iframe-loading">
                <div className="spinner"></div>
                <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--player-accent, var(--accent-cyan))', fontWeight: '800' }}>
                  LOADING GAME ARENA...
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
          
          {/* 게임 제어 컨트롤 바 */}
          <div className="detail-player-controls">
            <span className="control-game-rating">
              ★ {game.rating.toFixed(1)}
            </span>
            <div className="control-buttons">
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

      {/* 3. 하단 상세 공략 및 안내 텍스트 영역 (애드센스 통과를 위한 대량의 오리지널 텍스트 배치) */}
      <div className="detail-guide-section">
        <div className="guide-card">
          <h2 className="guide-section-title">
            💡 {language === 'ko' ? '상세 플레이 가이드 및 공략 팁' : 'Detailed Play Guide & Strategy Tips'}
          </h2>
          <div className="guide-body">
            <h3 className="guide-subtitle">
              🎮 {translations[language].player_how_to_play}
            </h3>
            <p className="guide-text">{game.howToPlay[language]}</p>
            
            <h3 className="guide-subtitle">
              🏆 {language === 'ko' ? '고득점 획득 및 이기는 방법' : 'How to Achieve High Scores & Win'}
            </h3>
            <div className="guide-rich-text">
              {game.guide[language].split('\n\n').map((paragraph, index) => (
                <p key={index} className="guide-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
