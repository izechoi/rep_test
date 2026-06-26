export const gamesData = [
  {
    id: 'tictactoe',
    title: {
      en: 'Neon Tic-Tac-Toe',
      ko: '네온 틱택토'
    },
    description: {
      en: 'Play the classic game of Tic-Tac-Toe with an advanced AI or local 2-player mode. Features stunning neon themes.',
      ko: '인공지능(AI) 대전 모드 및 로컬 2인 대전 모드를 지원하는 클래식 틱택토 게임입니다. 스타일리시한 네온 연출이 돋보입니다.'
    },
    genre: 'Board',
    difficulty: 'Easy',
    rating: 4.8,
    playCount: 1450,
    path: '/games/tictactoe/index.html',
    accentColor: '#00f0ff',
    thumbnail: '/thumbnails/tictactoe.png',
    howToPlay: {
      en: 'Tap any empty cell to place your X. Get 3 in a row vertically, horizontally, or diagonally to win. Click "VS AI Mode" to toggle AI difficulty.',
      ko: '3x3 바둑판 격자의 빈칸을 터치하여 X를 놓으세요. 가로, 세로, 대각선 방향으로 3개의 심볼을 먼저 나란히 정렬하면 승리합니다. VS AI 버튼으로 1인용/2인용 모드를 바꿀 수 있습니다.'
    },
    guide: {
      en: `Neon Tic-Tac-Toe brings the age-old tactical game into a futuristic cyber landscape. Tic-Tac-Toe, originally known as Terni Lapilli in ancient Rome, has been played for thousands of years. While simple on the surface, mathematical analysis reveals that perfect play by both sides always results in a draw. 

To win against less-experienced opponents or our built-in AI, you should utilize a corner-based opening strategy. If you go first, always place your first mark (X) in one of the four corners. This forces your opponent to make a decision. If they do not immediately choose the center cell, you gain a massive mathematical advantage and can set up a "double threat" (two winning paths at once). If they do choose the center, you should place your next mark on the opposite corner to keep the game complex. 

If you are going second (O), the center cell is your absolute priority. Choosing a corner or side cell when the center is empty is a critical error that allows the first player to force a win. If the first player chose the center, you must place your mark in a corner to neutralize their options. Practice regularly in the "VS AI" mode, starting with Easy difficulty and advancing to Hard to master these mathematical defensive patterns.`,
      ko: `네온 틱택토는 오랜 역사를 가진 정통 보드게임을 현대적인 감각의 미래지향적 비주얼로 리메이크한 작품입니다. 틱택토의 기원은 고대 로마 제국 시절의 '테르니 라필리(Terni Lapilli)'라는 게임까지 거슬러 올라가며, 인류 역사상 가장 오래 사랑받은 전략 게임 중 하나입니다.

비록 규칙은 간단해 보이지만, 수학적으로 양측이 완벽한 연산을 수행할 경우 무조건 무승부(Draw)로 수렴하는 이론적 구조를 가지고 있습니다. 인공지능(AI)이나 친구와의 대전에서 승리하기 위한 핵심 비책은 '모퉁이 선점 전략'입니다. 

만약 선공(X)을 쥐었다면, 격자의 정중앙 대신 4개의 모퉁이(구석) 중 한 곳을 노리세요. 상대방이 정중앙을 막아서지 않고 측면을 선택하는 순간, 무조건 2개 이상의 승리 길을 동시에 여는 '이중 위협(Double Threat)'을 강제하여 100% 승리할 수 있습니다. 

반면 후공(O)을 쥐게 되었을 때는 상대방이 모퉁이를 잡았을 때 무조건 정중앙을 채워 방어해야 하며, 상대가 정중앙을 잡았다면 모퉁이 중 하나를 선택해 상대의 연결 고리를 원천 차단하는 방어적 수읽기를 전개해야 합니다. 난이도별 AI 대전 모드를 통해 이러한 포지셔닝 연습을 반복해 보세요.`
    }
  },
  {
    id: 'clicker',
    title: {
      en: 'Clicker Quest',
      ko: '클릭커 퀘스트 (골드 광부)'
    },
    description: {
      en: 'Gold mining clicker game. Click to mine gold, hire auto-miners, upgrade your pickaxe and build a cyber mining empire.',
      ko: '골드를 캐는 중독성 강한 방치형 클릭커 게임입니다. 골드를 광산에서 채굴하여 자동화 광부 일꾼을 고용하고 곡괭이를 강화해 거대 광산을 일궈보세요.'
    },
    genre: 'Arcade',
    difficulty: 'Easy',
    rating: 4.6,
    playCount: 2320,
    path: '/games/clicker/index.html',
    accentColor: '#ffd700',
    thumbnail: '/thumbnails/clicker.png',
    howToPlay: {
      en: 'Click the central gold coin to earn gold. Use your gold to purchase Auto Miners (yields passive gold) and Super Pickaxes (increases gold per tap).',
      ko: '화면 중앙의 거대 골드 코인을 클릭하여 골드를 캐세요. 모은 돈으로 자동 광부(초당 채굴량 증가) 및 슈퍼 곡괭이(클릭당 골드 획득량 증가) 업그레이드를 구매할 수 있습니다.'
    },
    guide: {
      en: `Clicker Quest is an idle incremental simulator designed to teach resource efficiency. The clicker genre, popularised by games like Cookie Clicker, leverages psychological reward loops. Your goal is to maximize your Gold Per Second (GPS) using automated tools.

In the initial phase of the game, focus entirely on raw manual power. Upgrading your "Super Pickaxe" increases the value of every single click. Click as fast as possible to build a baseline of gold, which you will use to purchase your first "Auto Miner". 

Once you acquire a few Auto Miners, the game transitions from active play to passive investment. The optimal upgrade pathway is to evaluate the cost-to-production ratio. For example, if an upgrade yields 5 GPS for 100 gold, its efficiency ratio is 20 gold per unit GPS. Compare this with larger upgrades. Always purchase the upgrade with the lowest cost per unit GPS. 

Keep the browser window running in the background to continuously accumulate wealth. As you unlock higher tiers of mining infrastructure, the idle simulation speed will surge exponentially, turning your small mining shaft into a galactic cyber mining empire.`,
      ko: `클릭커 퀘스트는 자원 관리와 한계 효용의 원리를 재밌는 가상 광산 테마로 배울 수 있는 본격 방치형 인크리멘탈 시뮬레이션 게임입니다. 클릭커 장르는 이용자가 취하는 단순한 액션 대비 지수함수적으로 증가하는 보상을 통해 깊은 몰입감을 제공하는 것이 특징입니다.

게임 극초반부에는 화면 중앙의 코인을 빠르게 터치하여 기초 자금을 마련한 뒤, 즉시 '슈퍼 곡괭이' 강화를 통해 클릭 한 번당 얻는 채굴량을 높이는 것이 효율적입니다. 

그 후 축적된 골드로 첫 번째 '자동 광부(Auto Miner)'를 고용하기 시작하면서부터는 본래의 방치형 투자 패턴으로 넘어가게 됩니다. 효율적인 광산 성장을 위해서는 비용 대비 성능 비율(GPS 생산비용 효율)을 늘 머릿속으로 계산하며 장비를 구매해야 합니다. 

예를 들어 100골드로 5초당 골드를 추가해 주는 광부와 1,000골드로 60초당 골드를 추가해 주는 첨단 기계가 있다면, 단위 비용당 생산량이 더 저렴한 쪽을 우선적으로 업그레이드해야 가파른 지수 성장을 맛볼 수 있습니다. 창을 띄워놓고 방치하여 골드를 무한으로 축적해 보세요.`
    }
  },
  {
    id: 'snake',
    title: {
      en: 'Retro Snake',
      ko: '레트로 스네이크 (뱀꼬리 잡기)'
    },
    description: {
      en: 'Steer the glowing snake to consume fruits and grow longer. Do not crash into the walls or yourself!',
      ko: '네온 뱀을 움직여 화면의 사과들을 먹여 살리고 몸집을 부풀려 나가는 오리지널 스네이크 게임입니다. 벽이나 뱀의 꼬리에 부딪히면 종료됩니다.'
    },
    genre: 'Arcade',
    difficulty: 'Medium',
    rating: 4.9,
    playCount: 4120,
    path: '/games/snake/index.html',
    accentColor: '#39ff14',
    thumbnail: '/thumbnails/snake.png',
    howToPlay: {
      en: 'Use Arrow Keys or WASD to change direction. Eat the red apples to score points and grow. Avoid running into walls or the snake\'s own body.',
      ko: '키보드 방향키(Arrow Keys) 또는 WASD 키를 눌러 뱀의 머리 방향을 바꾸세요. 빨간 사과를 먹으면 점수가 10점 오르고 뱀의 꼬리가 늘어납니다. 벽이나 자기 몸통에 충돌하지 않도록 조심하세요.'
    },
    guide: {
      en: `Retro Snake pays homage to the legendary mobile game popularized in the late 1990s. The game requires precise spatial planning and quick coordination. As the snake eats red apples, it grows longer and moves slightly faster, turning the play canvas into a high-stakes obstacle course composed of your own tail.

To achieve a high score, never move randomly. When the board is relatively empty, you can take direct paths to the apples. However, once the snake's tail occupies more than 30% of the grid, you must implement a "coiling strategy" or "zigzag alignment". Move along the perimeter of the screen, folding the snake's body tightly back and forth in an S-like fashion. 

This looping method leaves the center of the board open and prevents you from trapping yourself inside a closed loop of your own tail. Always look ahead and plan your exit path before turning toward an apple. One hasty turn to grab a nearby apple can lead to an inescapable dead-end. Patience, smooth keystrokes, and structured grid coverage are the keys to a legendary high score.`,
      ko: `레트로 스네이크는 1990년대 피처폰 시절 전 세계를 풍미했던 오리지널 고전 스네이크 게임의 아케이드 감성을 네온 그래픽으로 정교하게 재현한 회피 액션 게임입니다. 

게임은 단순해 보이지만 뱀이 사과를 먹을 때마다 몸통이 늘어나고 속도가 조금씩 증가하여, 시간이 흐를수록 자신의 꼬리가 가장 위협적인 장벽으로 작용하는 수학적 공간 제약의 논리를 갖고 있습니다.

고득점을 내기 위한 고급 핵심 테크닉은 '지그재그 테두리 채우기(Coiling Strategy)'입니다. 뱀의 몸집이 화면의 30%를 넘어서면, 사과를 향해 무작위로 최단 거리를 직진하는 것을 삼가야 합니다. 대신 화면의 외곽 가장자리 벽을 따라 뱀의 머리를 이동시키고, 내부로 들어올 때는 꼬리를 빈틈없이 S자 모양으로 촘촘히 꺾으며 이동하여 캔버스의 공간 낭비를 최소화해야 합니다. 

사과를 먹기 위해 방향을 바꿀 때는 항상 꼬리가 돌아나갈 수 있는 탈출로가 확보되었는지 미리 확인하는 신중한 판단이 요구됩니다.`
    }
  },
  {
    id: 'spacewar',
    title: {
      en: 'Space War Dodge',
      ko: '스페이스 워 (우주선 피하기)'
    },
    description: {
      en: 'Navigate your starfighter in deep space. Dodge hostile asteroids and space debris falling at terminal velocities.',
      ko: '광활한 은하계 중심에서 함선을 조정하세요. 위에서 낙하하는 유성우와 적들의 우주 파편 미사일을 끝까지 회피하여 오래 생존하는 액션 게임입니다.'
    },
    genre: 'Action',
    difficulty: 'Hard',
    rating: 4.7,
    playCount: 980,
    path: '/games/spacewar/index.html',
    accentColor: '#ff007f',
    thumbnail: '/thumbnails/spacewar.png',
    howToPlay: {
      en: 'Move your starship using the mouse cursor or keyboard A/D & Arrow keys. Dodge falling obstacles. Survival time determines score.',
      ko: '마우스를 좌우로 움직이거나 키보드 A/D 및 좌우 방향키로 아군 함선 패들을 조작합니다. 위에서 쏟아지는 화려한 구체들을 요리조리 피하세요. 오래 살아남을수록 점수가 올라갑니다.'
    },
    guide: {
      en: `Space War Dodge places you at the controls of a starfighter navigating through a chaotic asteroid belt. This game tests your rapid reaction times and micro-movement coordination. Unlike typical scrolling shooters, you have no weapons; your survival depends entirely on evasion.

The physics of the falling debris are vertical, but their spawning frequencies and speed profiles vary dynamically. The best defensive strategy is to position your starship near the bottom-middle of the screen. This positioning maximizes your reaction time window, allowing you to see the path of incoming obstacles. 

Avoid making large, sudden swipes or dashes across the screen unless absolutely necessary, as this makes it highly difficult to regain control and predict the next obstacle gap. Instead, make micro-adjustments left and right. Utilize the mouse control interface for rapid, precise tracking. Keep your focus slightly above your starship, watching the incoming patterns of the hazard grid.`,
      ko: `스페이스 워는 위협적으로 쏟아지는 소행성 지대와 우주 파편들 사이에서 무기 없이 오직 함선의 정교한 회피 기동만으로 생존해야 하는 하이퍼 캐주얼 회피 액션 게임입니다. 

이 게임은 유저의 빠른 반사 신경과 미세 조정 제어 능력을 한계까지 시험합니다. 고득점을 기록하기 위한 정석 조작법은 함선을 하단 중앙 부분에 차분히 안착시키고 좌우 미세 이동으로 흘려보내는 것입니다. 

위험이 닥쳤을 때 당황하여 좌우 끝으로 함선을 급격하게 스와이프하면, 다음 순간 떨어지는 파편들을 미처 피하지 못하고 가속도에 휩쓸려 충돌하게 됩니다. 

시선은 함선 본체보다는 화면 상단 1/3 지점에 고정하여 미리 내려오는 장애물의 빈 통로(갭)를 계산하고, 마우스 컨트롤러의 정밀한 감도를 활용해 필요한 최소 거리만큼만 살짝 피하는 미니멀 무브먼트 기법을 연습해 보세요.`
    }
  },
  {
    id: 'blockbreak',
    title: {
      en: 'Brick Break Classic',
      ko: '벽돌깨기 클래식'
    },
    description: {
      en: 'Destroy the glowing brick matrix. Bounce balls off your paddle to clear levels.',
      ko: '배치된 알록달록한 네온 벽돌 블록 매트릭스를 제거하세요. 공을 떨어뜨리지 않고 튕겨내 판을 깨뜨리는 고전 벽돌깨기입니다.'
    },
    genre: 'Arcade',
    difficulty: 'Medium',
    rating: 4.5,
    playCount: 1670,
    path: '/games/blockbreak/index.html',
    accentColor: '#00f0ff',
    thumbnail: '/thumbnails/blockbreak.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Keep the ball in play and dodge falling hazards.',
      ko: '마우스 커서 또는 키보드 A/D 및 방향키로 하단 패들을 움직여 구체를 튕겨냅니다. 낙하하는 해로운 볼을 피하고 안전한 곳으로 공을 유도하세요.'
    },
    guide: {
      en: `Brick Break Classic is a tribute to Atari's legendary Breakout, designed with modern neon visual feedback. The core mechanic requires aligning a moving paddle with a bouncing energy orb to smash rows of colorful bricks. 

To clear stages efficiently, focus on the geometry of reflection. The angle of the ball's rebound changes depending on where it strikes your paddle. Striking the ball near the edges of the paddle sends it flying at a sharp, shallow angle, which is useful for sliding the ball behind the brick layout. Striking the ball in the center results in a direct vertical rebound.

A primary pro-tier goal is to slide the ball into the narrow gap between the topmost brick row and the ceiling. Once the ball is trapped behind the brick matrix, it will bounce repeatedly between the ceiling and the top layer, demolishing the grid automatically while you rest your paddle. Watch out for random falling debris and always prioritize keeping the ball in play over collecting minor score bonuses.`,
      ko: `벽돌깨기 클래식은 아타리의 전설적인 명작 '브레이크아웃(Breakout)'에 현대적인 사이버네틱 물리 연출과 광원 효과를 더한 벽돌 파괴 게임입니다. 

화면 하단의 패들을 조작하여 튕겨 나가는 에너지 볼이 모든 벽돌 매트릭스를 타격하여 부수도록 반사각을 계산해야 합니다. 볼이 패들의 정중앙에 부딪히면 수직에 가깝게 높이 반사되지만, 패들의 양쪽 끝 모퉁이에 아슬아슬하게 맞출수록 아주 날카롭고 얕은 대각선 각도로 반사됩니다. 

이 각도 조절을 활용해 블록의 좌우 벽면 틈새를 뚫고 벽돌 맨 윗공간과 천장 사이로 공을 올려보내는 것이 최고 핵심 공략입니다. 공이 천장 영역에 갇혀 튕기기 시작하면 패들을 조작하지 않고도 순식간에 수십 개의 벽돌이 연쇄 파괴됩니다. 낙하하는 특수 구체들을 먹으며 공을 바닥으로 떨어뜨리지 않도록 유도하세요.`
    }
  },
  {
    id: 'hextetris',
    title: {
      en: 'Hex Tetris Puzzle',
      ko: '헥사 테트리스'
    },
    description: {
      en: 'A hexagonal take on block drop puzzle. Arrange shapes to clear lines and prevent grid overflow.',
      ko: '육각형 테마의 블록 맞추기 퍼즐입니다. 육각형 실루엣의 떨어지는 도형들을 맞추며 영역을 비워 한계선에 도달하지 않도록 방어하세요.'
    },
    genre: 'Puzzle',
    difficulty: 'Hard',
    rating: 4.8,
    playCount: 1890,
    path: '/games/hextetris/index.html',
    accentColor: '#39ff14',
    thumbnail: '/thumbnails/hextetris.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Prevent the falling hexagons from touching your paddle.',
      ko: '마우스 커서나 A/D, 방향키로 조작하여 하단 발판을 조작합니다. 회전하며 떨어지는 다채로운 헥사곤 구체들에 충돌을 예방하세요.'
    },
    guide: {
      en: `Hex Tetris Puzzle introduces an advanced layout modification to classic block matching. Incorporating hexagonal grids adds two extra axes of movement, requiring players to visualize diagonal paths instead of simple horizontal lines. 

The secret to mastering Hex Tetris is avoiding the buildup of uneven columns. In a hexagonal layout, a single out-of-place block blocks multiple adjacent cells, creating empty gaps that are incredibly difficult to fill. Keep the middle portion of the stack slightly lower than the sides, or build a clean, level surface.

Maximize your score multipliers by setting up double or triple diagonal clears. Always look at the queue of upcoming blocks and think two steps ahead. Placing a block that completes a line while exposing another line slot below it creates cascade combos. Take advantage of the hover preview to align your structures precisely on the complex grid.`,
      ko: `헥사 테트리스는 전통적인 사각형 그리드 테트리스의 기하학적 범주를 6각형 벌집 모양 구조로 확장한 최고 난이도 블록 매칭 퍼즐입니다. 

상하좌우 4방향에 더해 대각선까지 총 6개의 다축 방향으로 블록이 맞물려 들어가므로, 공간 왜곡에 따른 입체적인 시야가 필수적입니다. 승리를 위한 핵심 규칙은 격자 구조의 불균형을 예방하는 것입니다. 

6각형 특성상 블록 하나를 삐뚤게 놓으면 아래의 인접한 빈 공간 여러 개가 봉쇄되어 더 이상 채울 수 없게 됩니다. 중앙부를 테두리보다 한 단계 낮게 분지형태로 유지하면서 평평하게 쌓는 것이 블록 회전에 따른 실수를 줄이는 방법입니다. 

다음에 떨어질 블록의 회전 형태를 미리 예측하고 격벽 사이에 정확히 끼워 넣어 라인을 지우고 대규모 점수 멀티플라이어를 획득해 보세요.`
    }
  },
  {
    id: 'wordpuzzle',
    title: {
      en: 'Word Search Neon',
      ko: '단어 찾기 퍼즐'
    },
    description: {
      en: 'Find hidden words in the neon alphabet board. Sharpen your vocabulary and speed.',
      ko: '알파벳 가득한 단어판 속에서 숨겨진 알파벳 매치 단어를 완성하세요. 순발력과 판단력이 요구됩니다.'
    },
    genre: 'Puzzle',
    difficulty: 'Medium',
    rating: 4.2,
    playCount: 750,
    path: '/games/wordpuzzle/index.html',
    accentColor: '#ffd700',
    thumbnail: '/thumbnails/wordpuzzle.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge falling letters and stay alive.',
      ko: '마우스 또는 A/D, 좌우 방향키로 조종합니다. 머리 위에서 떨어지는 다양한 영어 철자 장애물들을 회피하여 오랜 시간 버텨내세요.'
    },
    guide: {
      en: `Word Search Neon is a dynamic puzzle game that combines spelling mechanics with arcade evasion. Players operate a receiver pad at the bottom to intercept and capture correct falling letters to form target English vocabulary while dodging incorrect letters.

To succeed, you must keep your eyes on the spelling list at the top. When the round starts, focus entirely on the first letter of the target word. Filter out the noise of non-target letters and adjust your receiver position. 

If multiple correct letters fall simultaneously, calculate the safest landing path. Avoid collecting letters that are too close to falling hazard blocks. If you collect an incorrect letter, your spell queue resets, costing you precious seconds. Memorize the spelling patterns, move smoothly, and build your vocabulary score multipliers.`,
      ko: `단어 찾기 퍼즐은 단순한 영단어 철자 맞추기에 떨어지는 장애물 회피 기동을 결합한 지능형 아케이드 퍼즐입니다. 

화면 아래의 수집 패들을 조종하여, 상단에서 낙하하는 수많은 무작위 네온 알파벳 중 화면 상단에 지시된 타겟 단어의 철자들을 순서대로 받아내야 합니다. 타겟 단어가 아닌 다른 철자를 수집하게 되면 단어 완성 큐가 초기화되고 목숨이 깎이므로 주의가 필요합니다. 

단어 완성을 위한 첫 글자가 떨어지는 궤적을 빠르게 선점하되, 주변에 함께 떨어지는 오답 단어들의 충돌 범위를 피하는 제동 기법이 필요합니다. 

영어 어휘력 향상과 동시에 마우스 패들링 피지컬을 기를 수 있어 교육용 및 기분 전환용으로 탁월합니다.`
    }
  },
  {
    id: 'pacdodge',
    title: {
      en: 'Pac-Dodge Runner',
      ko: '팩맨 피하기 런'
    },
    description: {
      en: 'Run through neon paths, dodging falling ghosts and collecting points.',
      ko: '네온 미로 선로를 달리며 쫓아오는 고스트 유령들을 따돌리고 점수를 올리는 속도감 넘치는 런 게임입니다.'
    },
    genre: 'Action',
    difficulty: 'Hard',
    rating: 4.6,
    playCount: 1200,
    path: '/games/pacdodge/index.html',
    accentColor: '#ff9900',
    thumbnail: '/thumbnails/pacdodge.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge ghosts falling from the top.',
      ko: '마우스의 움직임 또는 키보드 A/D, 화살표 키로 움직입니다. 상단에서 강하하는 네온 유령 고스트들과의 충돌을 완벽히 피하세요.'
    },
    guide: {
      en: `Pac-Dodge Runner is an intense speed-based runner that takes inspiration from classic maze-chase arcades. Your target is to control Pac-Dodge at the bottom of the grid, maneuvering between lanes to gather neon dots while dodging hostile ghosts. 

As the score climbs, the speed of falling ghosts increases, and ghost patterns become complex. The key strategy is to recognize lanes and focus on horizontal shifts. Do not chase dots that require a sudden three-lane crossing; instead, stay in a safe position near the center lanes.

This central positioning gives you the shortest path to either the left or right edge, increasing your evasive options when ghosts spawn across consecutive columns. Keep your hand steady and rely on short keyboard taps or quick mouse glides to dodge with pixel-perfect accuracy.`,
      ko: `팩맨 피하기 런은 고전 팩맨의 추격전 감각에 무한 질주 러너 스타일의 종스크롤 회피를 접목한 긴장감 넘치는 반응 속도형 액션 게임입니다. 

사용자는 하단 팩맨을 좌우 레인 사이로 순식간에 텔레포트 이동시키며, 위에서 빗발치는 속도로 하강하는 알록달록한 네온 유령 고스트 군단을 피하고 에너지 도트를 수집해야 합니다. 

이 게임의 핵심 공략은 중앙 2차선 레인을 거점으로 삼는 것입니다. 무리하게 가장자리 레인에 있는 도트를 먹으러 가다 보면, 반대편에서 떨어지는 유령의 강하 궤적에 대처할 시간이 급격히 부족해집니다. 

중앙에 머물러 있다가 좌우 1칸씩만 신속하게 이동해 유령을 흘려보낸 뒤 복귀하는 정공법을 펼치세요. 고스트들의 색상별 하강 속도 차이를 눈으로 감지하며 플레이하면 더욱 수월합니다.`
    }
  },
  {
    id: 'flappyball',
    title: {
      en: 'Flappy Neon Ball',
      ko: '플래피 네온 볼'
    },
    description: {
      en: 'Bounce a glowing orb through narrow obstacles. Test your rhythm and reflex.',
      ko: '공중 부양하는 발광 볼을 장애물 기둥 틈 사이로 절묘하게 튕겨 올리며 진전하는 순발력 타이밍 테스트 게임입니다.'
    },
    genre: 'Arcade',
    difficulty: 'Medium',
    rating: 4.4,
    playCount: 3100,
    path: '/games/flappyball/index.html',
    accentColor: '#ff00ff',
    thumbnail: '/thumbnails/flappyball.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge the hazards falling downwards.',
      ko: '마우스 혹은 A/D 및 키보드 좌우 화살표 키를 사용하여 발판을 위치합니다. 뚫려있는 빈 통로가 아닌 장벽 장애물 충돌을 피해 움직이세요.'
    },
    guide: {
      en: `Flappy Neon Ball takes the globally famous bird-flapping mechanic and applies it to a physics-based neon sphere. Players control the vertical bounces of the orb, calculating gravity pull and jump heights to bypass scrolling barricade structures. 

The secret to success is establishing a steady rhythm. Avoid double-clicking or panic-clicking. Allow the ball to drop slightly before making a gentle click to bounce. 

Keep the ball near the vertical center of the screen to give yourself maximum reaction time for the next obstacle. Watch the vertical height of the incoming gate. If the gate is high, bounce early. If the gate is low, allow the ball to drift down before stabilizing. Tap smoothly, evaluate the physics vector, and challenge the online leaderboard.`,
      ko: `플래피 네온 볼은 전 세계적으로 센세이션을 일으켰던 플래피 플라이트 메커니즘을 중력 가속도 물리 시뮬레이션이 결합된 발광 구체 테마로 승화시킨 리듬/타이밍 아케이드 게임입니다.

구체가 포물선 궤적을 그리며 낙하할 때 적절한 타이밍에 터치/클릭을 주어 상승력을 제공해야 합니다. 무작위로 좁아지는 네온 파이프 통로 사이를 뚫고 전진하기 위한 팁은 '낮은 고도 진입법'입니다. 

다음 기둥의 틈새 높이를 미리 파악하고, 기둥 입구 직전에서 일부러 구체를 낙하시킨 뒤 통로 한가운데에 진입하는 순간 톡 튕겨 올려 중심부를 통과하는 조작이 가장 안전합니다. 패닉 상태에 빠져 연속 클릭을 하면 구체가 천장에 충돌하므로, 일정한 박자에 맞춘 리드미컬한 터치를 숙달해 보세요.`
    }
  },
  {
    id: 'pingpong',
    title: {
      en: 'Cyber Ping Pong',
      ko: '사이버 핑퐁'
    },
    description: {
      en: 'Fast-paced paddle survival game. Maintain your focus to avoid crashing.',
      ko: '미래지향적인 홀로그램 경기장에서 진행되는 하이퍼 스포츠 서바이벌 탁구 핑퐁 게임입니다.'
    },
    genre: 'Arcade',
    difficulty: 'Easy',
    rating: 4.3,
    playCount: 1980,
    path: '/games/pingpong/index.html',
    accentColor: '#00e5ff',
    thumbnail: '/thumbnails/pingpong.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge falling cyber balls.',
      ko: '마우스 커서 또는 키보드 A/D, 방향키로 탁구채 패들을 조작합니다. 끊임없이 바운싱되며 내려오는 사이버 탁구공들을 막거나 피해 생존하세요.'
    },
    guide: {
      en: `Cyber Ping Pong brings futuristic visual elements to the classic virtual tennis experience. Players slide a glowing paddle along the baseline to intercept and rebound a high-speed cyber ball. 

The angle of rebound depends on where the ball contacts the paddle. Hit the ball with the outer edges of the paddle to create sharp angles, forcing the opponent to run. Rebounding from the center returns the ball on a predictable path. 

As the match progresses, the ball gains speed. Keep your paddle in a central default position when waiting for the opponent's return to minimize the movement distance required for either direction. Train your hand-eye coordination to achieve high scores.`,
      ko: `사이버 핑퐁은 1972년 세계 최초의 상업용 비디오 게임인 '퐁(Pong)'의 오리지널 탁구 매커니즘을 사이버 펑크 스타일의 네온 매트릭스 테마로 재구축한 실시간 래피드 스포츠 게임입니다.

하단 패들을 조작하여 내려오는 리바운드 공을 받아쳐야 합니다. 공이 날아오는 각도와 속도는 라운드가 거듭될수록 기하급수적으로 빨라집니다. 

기본 거점을 언제나 화면의 50% 가로축 위치인 정중앙에 두고 대기하다가, 공이 내려오는 최하단 충돌 순간의 벽 반사 벡터를 읽어 간결하게 좌우로 미끄러지는 마우스 반응 기법이 유리합니다. 패들의 테두리를 스쳐 공을 대각선 구석으로 튕겨낼 때 최고 속도의 드라이브가 걸려 신속한 승리를 거둘 수 있습니다.`
    }
  },
  {
    id: 'match3',
    title: {
      en: 'Neon Match 3 Jewels',
      ko: '네온 매치 3 보석'
    },
    description: {
      en: 'Match three or more glowing cyber gems to burst them and earn points in a futuristic board.',
      ko: '빛나는 보석 3개를 정렬하여 파괴하고 연쇄 콤보를 유발하는 신개념 매치 퍼즐 액션입니다.'
    },
    genre: 'Puzzle',
    difficulty: 'Easy',
    rating: 4.7,
    playCount: 2200,
    path: '/games/match3/index.html',
    accentColor: '#d500f9',
    thumbnail: '/thumbnails/match3.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Avoid matching obstacles falling from above.',
      ko: '마우스 조작 또는 키보드 방향키 및 A/D 조작으로 발판을 움직여 위에서 무작위로 하강하는 방해 블록 보석들을 피하세요.'
    },
    guide: {
      en: `Neon Match 3 Jewels merges grid puzzle matching with active physics dodging. Instead of static swiping, players maneuver a collector tray at the bottom, matching gems as they fall in real-time.

To earn massive points, pay close attention to color matching. Gather gems of the same color in consecutive order. This builds matching streaks and multiplies your scores. 

Avoid falling black junk blocks; collecting them breaks your streak and clogs your collector grid. Utilize smooth left-to-right tracking and make quick, calculated sweeps when a cluster of high-value crystals falls.`,
      ko: `네온 매치 3 보석은 보석을 스와이프하여 자리를 바꾸는 기존의 정적인 퍼즐 형태를 벗어나, 실시간으로 낙하하는 보석들을 매칭시키는 캐주얼 보석 매치 아케이드 게임입니다. 

유저는 하단의 패들을 슬라이딩하여 같은 색상의 보석을 3개 이상 모아야 폭발하며 보너스 득점을 획득하게 됩니다. 핵심 전략은 '콤보 유발 수집'입니다. 

색상이 서로 맞지 않게 중구난방으로 보석을 수집하면 패들 격자가 꽉 차서 게임 오버가 되므로, 떨어지는 보석 구름 중 동일 색상 보석들이 낙하하는 궤적에 맞추어 패들을 정위치해야 합니다. 보석들 사이에 섞여 떨어지는 먹통 회색 방해 돌멩이들은 충돌을 피하여 우회하는 정밀한 패들링을 연마해 보세요.`
    }
  },
  {
    id: 'minesweep',
    title: {
      en: 'Cyber Mine Finder',
      ko: '사이버 지뢰찾기'
    },
    description: {
      en: 'Uncover the cyber grid. Use numbers to locate hidden mines without setting them off.',
      ko: '그리드 공간 밑에 암 매장된 사이버 전자기 지뢰를 수치 단서를 조합해 추리하고 표시하여 격파하는 클래식 지뢰찾기입니다.'
    },
    genre: 'Strategy',
    difficulty: 'Hard',
    rating: 4.5,
    playCount: 880,
    path: '/games/minesweep/index.html',
    accentColor: '#00e676',
    thumbnail: '/thumbnails/minesweep.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Avoid falling landmines.',
      ko: '마우스나 키보드 좌우 화살표/AD 키를 사용하여 발판을 활성화합니다. 위에서 예기치 않게 추락하는 붉은색 활성 지뢰 구체들을 차단하세요.'
    },
    guide: {
      en: `Cyber Mine Finder combines logic-deduction mechanics with active hand-eye coordination. Players slide an analysis sensor along the bottom axis, scanning numeric indicators while avoiding active electromagnetic landmines.

To master this game, learn to recognize numeric safety patterns. When the sensor registers a low number like "1", it indicates that the adjacent columns are safe. You can park your sensor there to gather data. 

Avoid columns with high numbers ("3" or "4"), as they have a high density of active mine spawns. Stay calm, analyze the safety indicators, and move your sensor with precision to map the grid.`,
      ko: `사이버 지뢰찾기는 마이크로소프트 윈도우의 역사적 지능 퍼즐 '지뢰찾기'의 수학적 추리 공식을 실시간 피지컬 디펜스 게임으로 전면 재구성한 복합 전략 아케이드 게임입니다. 

사용자는 하단 지뢰 탐지 패들을 조작하여 내려오는 센서 넘버를 수집하고 위에서 떨어지는 폭발성 붉은 지뢰를 피해야 합니다. 패들에 수집되는 주변 지뢰 카운트 숫자(1, 2, 3 등)가 0이나 1에 가깝게 표기되는 열(Column)은 상대적으로 지뢰가 낙하할 확률이 낮다는 뜻입니다. 

따라서 안전 지수를 띄우는 해당 라인을 파악해 그 아래에 대기하며 안정적으로 지뢰를 안전 해체하거나 우회하는 방식으로 장기 생존하며 최고 점수를 갱신해 보세요.`
    }
  },
  {
    id: 'rhythmbeat',
    title: {
      en: 'Rhythm Beat Cyber',
      ko: '사이버 리듬 비트'
    },
    description: {
      en: 'Tap along with falling beats. Achieve perfect combos in a neon soundscape.',
      ko: '신나는 전자음악에 리듬 파형 노트가 떨어집니다. 정확한 타이밍에 판정을 성공시켜 올 콤보를 목표로 달려보세요.'
    },
    genre: 'Action',
    difficulty: 'Medium',
    rating: 4.8,
    playCount: 1540,
    path: '/games/rhythmbeat/index.html',
    accentColor: '#ff1744',
    thumbnail: '/thumbnails/rhythmbeat.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Catch or dodge falling music beats.',
      ko: '마우스나 방향키 및 A/D를 이용해 타겟 영역을 좌우 이동합니다. 내려오는 리듬 노트(구체)들을 놓치지 않고 튕겨내거나 파괴하세요.'
    },
    guide: {
      en: `Rhythm Beat Cyber is a music-driven reaction game set in a futuristic cyber neon soundscape. Players intercept and hit falling rhythm beats at the exact contact line.

Success depends on finding the rhythm and timing your movements. Do not watch your paddle directly; keep your focus slightly above the hit bar. This allows you to process the velocity of incoming notes.

Combine quick side-dashes with steady holding maneuvers for long stream notes. Keeping a high combo multiplier is the key to achieving a high score and dominating the global leaderboards.`,
      ko: `사이버 리듬 비트는 강렬한 신스웨이브 비트와 일렉트로닉 음악 사운드에 맞춰 낙하하는 노트를 적중시키는 정통 리듬 아케이드 액션 게임입니다. 

화면 최하단의 판정 라인에 음악 비트 구체가 도달하는 찰나의 순간에 정확하게 패들을 이동시켜 적중시켜야 합니다. 고득점 꿀팁은 판정선이 아닌, 판정선보다 약간 위의 '노트 접근로'에 시선을 두는 것입니다. 

음악의 드럼 비트 템포에 맞춰 마음속으로 1, 2, 3, 4 박자를 세며 패들을 정위치시키면 눈으로 쫓는 것보다 훨씬 높은 '퍼펙트(Perfect)' 판정을 획득하고 연쇄 콤보 보너스를 얻을 수 있습니다.`
    }
  },
  {
    id: 'chesscyber',
    title: {
      en: 'Cyber Chess Tactical',
      ko: '사이버 체스 배틀'
    },
    description: {
      en: 'Play tactical board chess in a sci-fi arena. Plan ahead and defeat the opponent.',
      ko: '홀로그래픽 보드 위에서 지략 경쟁을 펼치세요. 클래식 체스의 규칙을 현대 공상과학(Sci-fi) 테마로 수려하게 연출했습니다.'
    },
    genre: 'Board',
    difficulty: 'Hard',
    rating: 4.9,
    playCount: 620,
    path: '/games/chesscyber/index.html',
    accentColor: '#ffffff',
    thumbnail: '/thumbnails/chesscyber.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge the incoming black and white chess elements.',
      ko: '마우스 포인터 혹은 A/D 및 키보드 화살표 키로 움직입니다. 낙하하는 흑/백 진영의 체스 기물 장애물들을 격돌하지 않고 넘어가세요.'
    },
    guide: {
      en: `Cyber Chess Tactical takes the timeless strategy of Chess and places it in an arcade environment. Players dodge falling white and black chess pieces representing pawns, knights, and queens.

Each piece has a different size and falling velocity profile, imitating its tactical value in the board game. Pawns fall slowly and are small, while Queens are large, fast, and drop suddenly.

The best tactic is to stay near the outer sides of the grid where piece density is lower. Never get trapped in the corners; always ensure you have a clear horizontal escape route. Master the physics of piece collision to survive this tactical onslaught.`,
      ko: `사이버 체스 배틀은 정적이고 엄숙한 마인드 스포츠인 체스(Chess)의 역사적인 말(기물)들을 입체적인 물리 낙하 오브젝트로 변경한 색다른 방식의 서바이벌 디펜스 게임입니다. 

상단에서 떨어지는 체스 말들은 기물의 중요도에 따라 부피와 낙하 속도가 다르게 모델링되어 있습니다. 예컨대 폰(Pawn)은 얇고 천천히 떨어지지만, 퀸(Queen)이나 룩(Rook) 기물은 매우 크고 빠르게 낙하하여 충돌 판정이 넓습니다. 

이동 반경을 확보하기 위해 구석 구역에 몰리지 않도록 늘 운동 에너지를 분산시키고, 레인의 통로가 넓은 룩과 비숍의 사이 공간으로 함선을 미끄러뜨리듯 통과해 내는 고차원 회피 기동 전략이 필요합니다.`
    }
  },
  {
    id: 'ludoclassic',
    title: {
      en: 'Neon Ludo Arena',
      ko: '네온 루도 아레나'
    },
    description: {
      en: 'Modern virtual remake of the classic Ludo game with futuristic aesthetics and glowing pieces.',
      ko: '주사위를 굴려 말 4개를 상대보다 먼저 목적지 아레나에 입성시키는 전통 보드게임 루도의 하이테크 스킨 버전입니다.'
    },
    genre: 'Board',
    difficulty: 'Easy',
    rating: 4.1,
    playCount: 1300,
    path: '/games/ludoclassic/index.html',
    accentColor: '#ffeb3b',
    thumbnail: '/thumbnails/ludoclassic.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge falling dice.',
      ko: '마우스 이동 혹은 키보드 방향키 및 A/D 키를 사용합니다. 쉴 새 없이 굴러 떨어지는 황색 Ludo 주사위 구체 블록을 피하세요.'
    },
    guide: {
      en: `Neon Ludo Arena is a visual upgrade of Ludo, a classic cross-and-circle board game originating from the ancient Indian game Pachisi. Players avoid giant, neon-lit rolling dice falling from the sky. 

The falling dice bounce off invisible platforms, making their trajectories chaotic. Observe the orientation of the dice as they fall. 

Keep your paddle moving dynamically; static camping makes you an easy target. Leverage the responsiveness of your keyboard controls to quickly dash when a die bounces toward your lane.`,
      ko: `네온 루도 아레나는 인도 고대의 전통 놀이 '파치시(Pachisi)'에서 파생된 세계적 보드게임 루도(Ludo)를 현대적이고 세련된 형광 일러스트풍으로 어레인지한 보드형 회피 게임입니다. 

하늘에서 굴러 떨어지는 대형 주사위들은 회전하면서 사선으로도 튕겨 나가기 때문에 예상 낙하 라인을 입체적으로 간파해야 합니다. 

일반 장애물과 달리 주사위의 사면 모서리에 부딪히면 공이 튀어 오르는 각도가 불규칙하므로, 주사위가 바닥에 부딪혀 튀어 오르는 반동 반경에서 한발 물러나 대기하다가 빈 차선으로 쏙 들어가는 한 템포 늦춘 타이밍 컨트롤이 고득점의 키포인트입니다.`
    }
  },
  {
    id: 'solitaire',
    title: {
      en: 'Neon Solitaire Club',
      ko: '네온 솔리테어'
    },
    description: {
      en: 'Relax and play the timeless card puzzle game Solitaire, stylized with clean neon colors.',
      ko: '카드 퍼즐의 정수, 솔리테어를 조용하고 편안하게 즐기세요. 눈이 편안한 네온 파스텔 카드로 정돈되어 가독성이 좋습니다.'
    },
    genre: 'Board',
    difficulty: 'Easy',
    rating: 4.5,
    playCount: 1750,
    path: '/games/solitaire/index.html',
    accentColor: '#2979ff',
    thumbnail: '/thumbnails/solitaire.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge falling card decks.',
      ko: '마우스 좌우 롤링 또는 키보드 A/D, 방향키로 조작합니다. 하늘에서 무너져 내리는 카드 스택 장벽 블록들을 영리하게 회피하세요.'
    },
    guide: {
      en: `Neon Solitaire Club brings futuristic colors to the beloved single-player card puzzle Solitaire. In this action-oriented version, players dodge cascading card columns falling from the top.

The cards drop in stacks, creating vertical barriers that block your path. You must identify and move through the safety gaps between these stacks. 

Watch the colors of the falling cards. If a dense column of black cards blocks the left side, prepare to shift your paddle to the right. Smooth tracking and quick, deliberate movements are essential.`,
      ko: `네온 솔리테어는 인류 최고의 1인용 카드 퀴즈인 '솔리테어(클론다이크)'의 카드 배열 테마를 신선한 네온 색채와 물리 드롭 액션으로 승화시킨 캐주얼 아케이드 보드게임입니다. 

화면 밑에서 카드 덱들이 층층이 겹쳐서 떨어지며 거대한 세로 장벽을 형성합니다. 장벽이 완전히 바닥에 닿기 전에 그 사이사이에 벌어진 좁은 공간으로 패들을 안전하게 유도해 빠져나가야 합니다. 

카드가 우르르 떨어지는 뭉치 궤적을 피하려면 너무 한쪽 벽면에 붙어 대기하는 것을 피해야 합니다. 중앙 좌우의 공간 균형감을 유지하면서 빈 통로를 순발력 있게 포착해 빠져나가세요.`
    }
  },
  {
    id: 'sudokupuzzle',
    title: {
      en: 'Sudoku Neon Grid',
      ko: '스도쿠 네온 논리'
    },
    description: {
      en: 'Solve the grid logic puzzle. Fill the numbers 1 to 9 in rows, columns, and 3x3 grids.',
      ko: '수학적 두뇌 논리 퍼즐 스도쿠입니다. 3x3 박스들과 행렬 칸마다 중복 없이 1부터 9까지의 숫자를 조합하여 공간을 해결해 갑니다.'
    },
    genre: 'Puzzle',
    difficulty: 'Medium',
    rating: 4.6,
    playCount: 1040,
    path: '/games/sudokupuzzle/index.html',
    accentColor: '#a7ffeb',
    thumbnail: '/thumbnails/sudokupuzzle.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Avoid incoming numeric blocks.',
      ko: '마우스 스크롤링 및 키보드 화살표 방향키 또는 A/D로 제어합니다. 비처럼 무작위로 떨어지는 숫자 숫자판들을 피하세요.'
    },
    guide: {
      en: `Sudoku Neon Grid adapts the world-famous Japanese logic puzzle Sudoku into a dynamic arcade format. Instead of filling paper grids, players dodge incoming numeric digits from 1 to 9.

The number value determines the gravity weight of the block; higher numbers drop faster, while lower numbers float down slowly. 

Learn to spot low-number zones to position your paddle safely. Avoiding the high-velocity "9" and "8" blocks is key to maintaining your score multiplier and surviving the grid logic challenge.`,
      ko: `스도쿠 네온 논리는 전 세계인들의 대표 두뇌 계발 퍼즐인 스도쿠(Sudoku)의 숫자 결합 규칙을 떨어지는 숫자판 피하기 기믹으로 어레인지한 창의적인 논리 액션 퍼즐입니다. 

특이하게도 숫자의 크기(1부터 9까지)에 따라 중력 가속도가 다르게 적용되어 9에 가까울수록 아주 묵직하고 빠르게 낙하하고, 1이나 2는 깃털처럼 천천히 내려옵니다. 

따라서 화면에 떨어지는 숫자의 수치를 빠르게 읽어 1이나 2가 낙하하는 천천히 떨어지는 차선 쪽으로 패들을 유치하여 회피 딜레이 시간을 벌어주는 두뇌 회전 플레이가 최고의 전략입니다.`
    }
  },
  {
    id: 'speedracing',
    title: {
      en: 'Speedway Cyber Racer',
      ko: '사이버 스피드 레이서'
    },
    description: {
      en: 'High-speed arcade racing simulator. Move past static obstacles and set record lap times.',
      ko: '사이버 고속 스피드웨이를 질주하는 미니 레이싱 게임입니다. 돌발 장애물을 돌파하며 극한의 랩타임을 단축해 기록을 갱신하세요.'
    },
    genre: 'Strategy',
    difficulty: 'Hard',
    rating: 4.7,
    playCount: 2050,
    path: '/games/speedracing/index.html',
    accentColor: '#ff6e40',
    thumbnail: '/thumbnails/spacewar.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge the fast-falling rival racer cars.',
      ko: '마우스 핸들링 또는 키보드 A/D 및 화살표 방향키로 자동차 패들을 제어합니다. 갑자기 속도를 올려 추월해 오는 레이서 라이벌 차량들을 피하세요.'
    },
    guide: {
      en: `Speedway Cyber Racer tests your reflex boundaries on a high-speed virtual highway. Players control a sports car, dodging slower traffic and racing against opponent vehicles.

The traffic cars change lanes randomly. To prevent collisions, keep your car near the center of the track, allowing you to react and steer in either direction.

Collect boost pads to temporarily increase your speed and score multiplier. Balance high-velocity driving with defensive steering to set legendary lap records on the cyber speedway.`,
      ko: `사이버 스피드 레이서는 빛의 속도로 질주하는 가상 슈퍼 하이웨이에서 벌어지는 정밀 초고속 종스크롤 레이싱 전략 게임입니다. 

플레이어는 고속 레이싱 머신을 가동하여 전방에서 가로막는 다른 경쟁 차량들을 순식간에 추월해 가며 최고 랩타임을 기록해야 합니다. 전방 차량들은 꼬리를 물고 무작위로 진로를 차단하므로, 한 레인에 오래 머물지 말고 빈 공간으로 지그재그 추월해 나가는 리드미컬한 좌우 컨트롤이 관건입니다. 

중앙 차선에서 대기하면 좌우로의 회피 각도가 2배로 넓어지므로 상대적으로 급커브 충돌을 유연하게 방어할 수 있습니다. 레이싱 본연의 속도 쾌감을 손안에서 경험해 보세요.`
    }
  },
  {
    id: 'memorymatch',
    title: {
      en: 'Memory Cards Trainer',
      ko: '두뇌 메모리 카드 맞추기'
    },
    description: {
      en: 'Flip cards and find pairs. Train your photographic memory with stylish futuristic cards.',
      ko: '가려진 카드쌍들의 이미지를 기억하여 하나씩 뒤집어 같은 짝을 매칭시키는 두뇌 트레이닝 기억력 향상 카드 게임입니다.'
    },
    genre: 'Puzzle',
    difficulty: 'Easy',
    rating: 4.3,
    playCount: 920,
    path: '/games/memorymatch/index.html',
    accentColor: '#b388ff',
    thumbnail: '/thumbnails/solitaire.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Dodge mismatching card elements.',
      ko: '마우스 드래그 혹은 키보드 방향키 및 A/D 키를 사용합니다. 쏟아져 내리는 불일치 카드 심볼들을 피해 생명을 유지하세요.'
    },
    guide: {
      en: `Memory Cards Trainer builds your photographic memory using interactive card flip dynamics. In this action-puzzle variant, players catch and match identical card symbols while dodging mismatched ones.

To keep a high score multiplier, focus on memorizing the positions of the symbols as they briefly flash at the start of the round. 

Position your receiver paddle below the matching card. Avoid catching wrong cards, as they break your streak. Train your visual memory and reaction speed to master the highest difficulty tiers.`,
      ko: `두뇌 메모리 카드 맞추기는 순간 인지력과 우뇌의 이미지 기억 기능을 동시에 배양하는 본격 뇌 활성화 퍼즐 매칭 게임입니다. 

카드를 뒤집었을 때 화면상의 네온 문양 위치를 일시적으로 기억했다가, 똑같은 문양이 그려진 드롭 오브젝트를 차례대로 패들로 받아내어 매칭을 성공해야 합니다. 

문양이 일치하지 않는 가짜 오답 카드 덱들은 피하고, 정답 카드만을 골라 100% 매칭하는 순발력이 점수의 핵심입니다. 꾸준히 플레이하면 단기 기억력과 주변 시야 집중력이 대폭 성장하는 유익한 교육적 게임입니다.`
    }
  },
  {
    id: 'towerbuilder',
    title: {
      en: 'Neon Tower Stacker',
      ko: '네온 타워 쌓기'
    },
    description: {
      en: 'Drop moving floors exactly on top of each other. Build the highest neon tower in the galaxy.',
      ko: '좌우로 미끄러지는 네온 건물 층층 블록을 한가운데 완벽한 타이밍에 멈춰 떨어트려 은하계 최고층 타워를 건설하는 적층 스택 전략 게임입니다.'
    },
    genre: 'Strategy',
    difficulty: 'Medium',
    rating: 4.6,
    playCount: 2800,
    path: '/games/towerbuilder/index.html',
    accentColor: '#ff80ab',
    thumbnail: '/thumbnails/hextetris.png',
    howToPlay: {
      en: 'Move your paddle using the mouse cursor or keyboard A/D & Arrow keys. Stacker blocks fall from the top; dodge them to maintain balance.',
      ko: '마우스 무브 및 키보드 A/D, 방향키로 이동합니다. 우주 타워에 균형을 무너뜨리는 불규칙 낙하 콘크리트 자재들을 회피해 나가세요.'
    },
    guide: {
      en: `Neon Tower Stacker combines timing with structural physics. Players build a high-rise tower by landing moving floor blocks precisely on top of the stack.

The difficulty increases as the tower climbs; the blocks move faster, and any misalignment slices the building block, leaving a narrower surface for the next floor.

To get a high tower, focus on the rhythm of the swinging block. Click slightly before the block aligns with the center to compensate for response delay. Keep your hand steady and aim for perfect alignments.`,
      ko: `네온 타워 쌓기는 관성의 법칙과 완벽한 탭 타이밍을 요구하는 고층 빌딩 적층 물리 전략 게임입니다. 

좌우로 흔들거리며 날아오는 타워 블록을 정확하게 아래 블록의 중심선에 겹치도록 드롭 버튼을 클릭해야 합니다. 조금이라도 무게 중심선이 비껴나가면 어긋난 면적만큼 블록이 깎여나가 점점 타워 끝이 뾰족하고 좁아집니다. 

완벽한 정밀 정렬(Perfect Match)을 3회 이상 유지하면 블록 면적이 다시 늘어나는 보너스가 주어지므로, 흔들리는 진자의 왕복 주기 리듬에 신경 쓰며 예측 탭을 누르는 연습이 효과적입니다. 우주 끝까지 타워를 올려보세요.`
    }
  }
];
