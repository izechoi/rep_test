import React from 'react';
import GameCard from './GameCard';
import { translations } from '../data/translations';

// 게임 목록 그리드 컴포넌트: Link 라우팅 전환에 맞추어 불필요한 이벤트 콜백 프롭스를 제거했습니다.
export default function GameGrid({ games, language }) {
  if (games.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">👾</div>
        <h3>{translations[language].no_results_title}</h3>
        <p>{translations[language].no_results_desc}</p>
      </div>
    );
  }

  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          language={language}
        />
      ))}
    </div>
  );
}
