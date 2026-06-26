import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GameGrid from './components/GameGrid';
import GameDetailPage from './components/GameDetailPage';
import LegalPage from './components/LegalPage';
import Footer from './components/Footer';
import { gamesData } from './data/games';
import { translations } from './data/translations';

const CATEGORIES = ['All', 'Arcade', 'Puzzle', 'Action', 'Strategy', 'Board'];

export default function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState(gamesData);
  const [filteredGames, setFilteredGames] = useState(gamesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');
  
  // 브라우저의 기본 설정 언어 감지 (한국어 지원)
  const [language, setLanguage] = useState(() => {
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en';
  });
  
  // 누적 플레이 카운트 상태값
  const [totalPlayCount, setTotalPlayCount] = useState(0);

  useEffect(() => {
    // 로컬 스토리지 데이터 수집 및 초기 누적값 세팅
    const initialSum = gamesData.reduce((acc, game) => acc + game.playCount, 0);
    const savedPlays = parseInt(localStorage.getItem('portal_custom_plays')) || 0;
    setTotalPlayCount(initialSum + savedPlays);
  }, []);

  // 검색 쿼리 및 장르 카테고리 필터링 엔진
  useEffect(() => {
    let result = games;

    // 검색어 감지 (다국어 호환 가능)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (game) =>
          game.title[language].toLowerCase().includes(query) ||
          game.description[language].toLowerCase().includes(query)
      );
    }

    // 장르 일치 검사
    if (activeGenre !== 'All') {
      result = result.filter((game) => game.genre === activeGenre);
    }

    setFilteredGames(result);
  }, [searchQuery, activeGenre, games, language]);

  // 플레이 카운트 업데이트 콜백 함수
  const handleGamePlayed = useCallback((gameId) => {
    const savedPlays = parseInt(localStorage.getItem('portal_custom_plays')) || 0;
    localStorage.setItem('portal_custom_plays', savedPlays + 1);
    setTotalPlayCount((prev) => prev + 1);

    // 가상 플레이 카운트 누적 상태 변경
    setGames((prevGames) =>
      prevGames.map((g) =>
        g.id === gameId ? { ...g, playCount: g.playCount + 1 } : g
      )
    );
  }, []);

  // 사이드바의 랜덤 플레이 클릭 이벤트 바인딩
  const handleRandomPlay = useCallback(() => {
    const list = filteredGames.length > 0 ? filteredGames : games;
    if (list.length > 0) {
      const randomIndex = Math.floor(Math.random() * list.length);
      // 모달 오버레이 대신 개별 게임 라우트 페이지로 주소 이동 처리
      navigate(`/game/${list[randomIndex].id}`);
    }
  }, [filteredGames, games, navigate]);

  // 장르 카테고리 선택 시 처리기: 장르 필터를 반영하고 항상 메인 로비(/)로 이동시킵니다.
  const handleGenreSelect = useCallback((genre) => {
    setActiveGenre(genre);
    navigate('/');
  }, [navigate]);

  // 로고/브랜드 클릭 시 처리기: 검색어와 장르 필터를 전체로 초기화하고 첫페이지(/)로 돌아갑니다.
  const handleLogoClick = useCallback(() => {
    setSearchQuery('');
    setActiveGenre('All');
    navigate('/');
  }, [navigate]);

  const subtitle = translations[language].main_subtitle.replace('{count}', filteredGames.length);

  return (
    <div className="app-container">
      {/* 1. 데스크톱용 좌측 사이드바 메뉴 (로고 클릭 및 장르 필터 연동 추가) */}
      <Sidebar
        activeGenre={activeGenre}
        onGenreSelect={handleGenreSelect}
        onLogoClick={handleLogoClick}
        onRandomPlay={handleRandomPlay}
        language={language}
      />
      
      {/* 2. 상단 범용 내비게이션 바 (모바일 로고 대응을 위한 로고 클릭 연동 추가) */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onLogoClick={handleLogoClick}
        language={language}
        setLanguage={setLanguage}
      />

      {/* 3. 라우팅 경로에 따른 메인 캔버스 내용 교체 */}
      <Routes>
        {/* 메인 카탈로그 로비 */}
        <Route path="/" element={
          <>
            {/* 모바일 화면용 가로 스크롤 장르 선택 칩스 */}
            <div className="mobile-category-container">
              <div className="mobile-chip-list">
                {CATEGORIES.map((genre) => (
                  <button
                    key={genre}
                    className={`mobile-chip ${activeGenre === genre ? 'active' : ''}`}
                    onClick={() => handleGenreSelect(genre)}
                  >
                    {translations[language]['genre_' + genre]}
                  </button>
                ))}
              </div>
            </div>

            <main className="main-content">
              <div className="page-title-section">
                <h2 className="page-title">
                  {activeGenre === 'All' 
                    ? translations[language].genre_All 
                    : translations[language]['genre_' + activeGenre]
                  }
                </h2>
                <p className="page-subtitle">{subtitle}</p>
              </div>

              <GameGrid
                games={filteredGames}
                language={language}
              />
              
              {/* 하단 법률 페이지 링크 및 카피라이트 고지 Footer 추가 */}
              <Footer language={language} />
            </main>
          </>
        } />

        {/* 개별 게임 상세 가이드 및 실행 페이지 */}
        <Route path="/game/:id" element={
          <main className="main-content">
            <GameDetailPage
              onGamePlayed={handleGamePlayed}
              language={language}
            />
            <Footer language={language} />
          </main>
        } />

        {/* 개인정보처리방침 약관 전문 뷰어 */}
        <Route path="/privacy" element={
          <main className="main-content">
            <LegalPage type="privacy" language={language} />
            <Footer language={language} />
          </main>
        } />

        {/* 이용약관 전문 뷰어 */}
        <Route path="/terms" element={
          <main className="main-content">
            <LegalPage type="terms" language={language} />
            <Footer language={language} />
          </main>
        } />
      </Routes>
    </div>
  );
}
