import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../data/translations';

// 헥사 칼라값을 RGB 값으로 변경하여 투명도 변수에 맵핑하기 위한 헬퍼 함수
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '0, 118, 255';
}

// 개별 게임 카드 컴포넌트: react-router-dom의 Link 컴포넌트를 적용하여 SEO 크롤링이 가능하도록 개선했습니다.
export default function GameCard({ game, language }) {
  const rgbAccent = hexToRgb(game.accentColor);

  const cardStyle = {
    '--card-accent-color': game.accentColor,
    '--card-accent-rgb': rgbAccent
  };

  // 디자인 대체 기호 추출을 위한 헬퍼 변수
  const symbol = game.title.en.split(' ').map(w => w[0]).join('').slice(0, 3);

  // 배포 시 서브디렉토리(/rep_test) 경로가 꼬여 썸네일 이미지가 깨지는 현상을 방지하는 동적 경로 계산기
  const isAbsolute = game.thumbnail && (game.thumbnail.startsWith('http') || game.thumbnail.startsWith('data:'));
  const thumbnailUrl = isAbsolute
    ? game.thumbnail
    : game.thumbnail
      ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${game.thumbnail}`
      : null;

  return (
    <Link to={`/game/${game.id}`} className="game-card" style={cardStyle}>
      <div className="card-thumbnail-wrapper">
        {thumbnailUrl ? (
          <img 
            className="card-thumbnail-img" 
            src={thumbnailUrl} 
            alt={game.title[language]} 
            loading="lazy"
          />
        ) : (
          <div className="card-art-placeholder">
            <span className="card-art-symbol">{symbol}</span>
          </div>
        )}

        <div className="card-play-overlay">
          <div className="play-btn-circle">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="card-details">
        <h4 className="card-title">{game.title[language]}</h4>
      </div>
    </Link>
  );
}
