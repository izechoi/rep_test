const fs = require('fs');
const path = require('path');

const GAMES_DIR = path.join(__dirname, '..', 'public', 'games');

// Ensure base dir exists
if (!fs.existsSync(GAMES_DIR)) {
  fs.mkdirSync(GAMES_DIR, { recursive: true });
}

// 1. Tic-Tac-Toe Game HTML Content
const tictactoeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Tic-Tac-Toe</title>
  <style>
    body {
      margin: 0;
      background: #f5f6fa;
      color: #1e2229;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      overflow: hidden;
    }
    h2 {
      margin-top: 0;
      color: #6200ea;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
    .status {
      margin-bottom: 20px;
      font-size: 1.15rem;
      font-weight: 600;
      color: #5a606d;
    }
    .board {
      display: grid;
      grid-template-columns: repeat(3, 94px);
      grid-template-rows: repeat(3, 94px);
      gap: 12px;
      background: #ffffff;
      padding: 14px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
      border: 1px solid rgba(0, 0, 0, 0.05);
    }
    .cell {
      background: #f5f6fa;
      border: 1px solid rgba(0,0,0,0.03);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }
    .cell:hover {
      background: #ffffff;
      border-color: #0076ff;
      box-shadow: 0 4px 12px rgba(0, 118, 255, 0.12);
    }
    .cell.X {
      color: #d81b60;
    }
    .cell.O {
      color: #0076ff;
    }
    .controls {
      margin-top: 25px;
      display: flex;
      gap: 15px;
    }
    button {
      background: linear-gradient(135deg, #6200ea, #0076ff);
      border: none;
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.15s, box-shadow 0.15s;
      box-shadow: 0 4px 12px rgba(98, 0, 234, 0.2);
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(98, 0, 234, 0.3);
    }
    button:active {
      transform: translateY(0);
    }
    .mode-btn {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: #5a606d;
      box-shadow: none;
    }
    .mode-btn:hover {
      background: #f5f6fa;
      color: #1e2229;
      box-shadow: none;
      transform: none;
    }
    .mode-btn.active {
      background: #0076ff;
      color: white;
      border-color: #0076ff;
      box-shadow: 0 4px 12px rgba(0, 118, 255, 0.2);
    }
  </style>
</head>
<body>
  <h2>Tic-Tac-Toe</h2>
  <div class="status" id="status">Your Turn (X)</div>
  <div class="board" id="board">
    <div class="cell" data-index="0"></div>
    <div class="cell" data-index="1"></div>
    <div class="cell" data-index="2"></div>
    <div class="cell" data-index="3"></div>
    <div class="cell" data-index="4"></div>
    <div class="cell" data-index="5"></div>
    <div class="cell" data-index="6"></div>
    <div class="cell" data-index="7"></div>
    <div class="cell" data-index="8"></div>
  </div>
  <div class="controls">
    <button class="mode-btn active" id="modeBtn">VS AI Mode</button>
    <button id="resetBtn">Reset</button>
  </div>

  <script>
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const statusTxt = document.getElementById('status');
    const resetBtn = document.getElementById('resetBtn');
    const modeBtn = document.getElementById('modeBtn');

    let gameActive = true;
    let currentPlayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let vsAI = true;

    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    function handleCellClick(e) {
      const clickedCell = e.target;
      const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

      if (gameState[clickedCellIndex] !== "" || !gameActive) return;

      makeMove(clickedCellIndex, currentPlayer);
      checkResult();

      if (gameActive && vsAI && currentPlayer === "O") {
        statusTxt.innerText = "AI is thinking...";
        setTimeout(makeAIMove, 400);
      }
    }

    function makeMove(index, player) {
      gameState[index] = player;
      cells[index].innerText = player;
      cells[index].classList.add(player);
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusTxt.innerText = vsAI 
        ? (currentPlayer === "X" ? "Your Turn (X)" : "AI is thinking...")
        : "Player " + currentPlayer + "'s Turn";
    }

    function makeAIMove() {
      if (!gameActive) return;
      
      let move = findWinningMove("O");
      if (move === null) move = findWinningMove("X");
      if (move === null && gameState[4] === "") move = 4;
      if (move === null) {
        const available = gameState.map((val, idx) => val === "" ? idx : null).filter(val => val !== null);
        if (available.length > 0) {
          move = available[Math.floor(Math.random() * available.length)];
        }
      }

      if (move !== null) {
        makeMove(move, "O");
        checkResult();
      }
    }

    function findWinningMove(player) {
      for (let cond of winningConditions) {
        const [a, b, c] = cond;
        const vals = [gameState[a], gameState[b], gameState[c]];
        const playerCount = vals.filter(v => v === player).length;
        const emptyCount = vals.filter(v => v === "").length;
        if (playerCount === 2 && emptyCount === 1) {
          if (gameState[a] === "") return a;
          if (gameState[b] === "") return b;
          if (gameState[c] === "") return c;
        }
      }
      return null;
    }

    function checkResult() {
      let roundWon = false;
      let winner = "";

      for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') continue;
        if (a === b && b === c) {
          roundWon = true;
          winner = a;
          break;
        }
      }

      if (roundWon) {
        gameActive = false;
        if (vsAI) {
          statusTxt.innerText = winner === "X" ? "🎉 You Won!" : "🤖 AI Won!";
        } else {
          statusTxt.innerText = "🎉 Player " + winner + " Won!";
        }
        return;
      }

      let roundDraw = !gameState.includes("");
      if (roundDraw) {
        gameActive = false;
        statusTxt.innerText = "🤝 Draw Game!";
        return;
      }
    }

    function resetGame() {
      gameActive = true;
      currentPlayer = "X";
      gameState = ["", "", "", "", "", "", "", "", ""];
      statusTxt.innerText = "Your Turn (X)";
      cells.forEach(cell => {
        cell.innerText = "";
        cell.className = "cell";
      });
    }

    function toggleMode() {
      vsAI = !vsAI;
      modeBtn.classList.toggle('active', vsAI);
      modeBtn.innerText = vsAI ? "VS AI Mode" : "2 Players Mode";
      resetGame();
    }

    board.addEventListener('click', handleCellClick);
    resetBtn.addEventListener('click', resetGame);
    modeBtn.addEventListener('click', toggleMode);
  </script>
</body>
</html>`;

// 2. Clicker Quest Game HTML Content
const clickerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clicker Quest</title>
  <style>
    body {
      margin: 0;
      background: #f5f6fa;
      color: #1e2229;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 10px;
      box-sizing: border-box;
    }
    .container {
      background: #ffffff;
      padding: 30px;
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      text-align: center;
      width: 100%;
      max-width: 380px;
    }
    h2 {
      margin-top: 0;
      color: #e65100;
      font-weight: 800;
    }
    .score-container {
      font-size: 2.4rem;
      font-weight: 800;
      margin: 15px 0;
      color: #e65100;
    }
    .cps {
      font-size: 0.9rem;
      color: #575e6a;
      margin-bottom: 25px;
      font-weight: 600;
    }
    .click-btn {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: radial-gradient(circle, #ffaa00, #ff5500);
      border: 4px solid #ffd700;
      box-shadow: 0 6px 18px rgba(255, 85, 0, 0.25);
      cursor: pointer;
      color: white;
      font-size: 1.4rem;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 30px;
      user-select: none;
      transition: transform 0.05s, box-shadow 0.1s;
    }
    .click-btn:active {
      transform: scale(0.96);
      box-shadow: 0 4px 10px rgba(255, 85, 0, 0.3);
    }
    .upgrades {
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: left;
    }
    .upgrade-item {
      background: #f4f6f8;
      border: 1px solid rgba(0,0,0,0.03);
      border-radius: 12px;
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s;
    }
    .upgrade-item:hover {
      background: #ffffff;
      border-color: #ffaa00;
      box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    }
    .upgrade-info h4 {
      margin: 0 0 4px;
      font-size: 0.95rem;
      font-weight: 700;
    }
    .upgrade-info p {
      margin: 0;
      font-size: 0.8rem;
      color: #8d949e;
    }
    .upgrade-cost {
      background: #ff5500;
      color: white;
      font-weight: 800;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.85rem;
    }
    .upgrade-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .upgrade-item.disabled .upgrade-cost {
      background: #ccd0d5;
      color: #8d949e;
    }
    .reset {
      margin-top: 25px;
      color: #8d949e;
      font-size: 0.8rem;
      cursor: pointer;
      text-decoration: underline;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Clicker Quest</h2>
    <div class="score-container"><span id="gold">0</span> 🪙</div>
    <div class="cps">Gold/sec: <span id="gps">0</span> | Per Tap: <span id="gpc">1</span></div>
    
    <div class="click-btn" id="clickBtn">TAP!</div>

    <div class="upgrades">
      <div class="upgrade-item disabled" id="upg1">
        <div class="upgrade-info">
          <h4>Auto Miner</h4>
          <p>Produces +1 Gold/sec</p>
        </div>
        <div class="upgrade-cost" id="cost1">15</div>
      </div>
      <div class="upgrade-item disabled" id="upg2">
        <div class="upgrade-info">
          <h4>Super Pickaxe</h4>
          <p>Gives +1 Gold per click</p>
        </div>
        <div class="upgrade-cost" id="cost2">50</div>
      </div>
    </div>
    <div class="reset" id="resetBtn">Reset Game</div>
  </div>

  <script>
    let gold = parseInt(localStorage.getItem('cq_gold')) || 0;
    let gps = parseInt(localStorage.getItem('cq_gps')) || 0;
    let gpc = parseInt(localStorage.getItem('cq_gpc')) || 1;
    let cost1 = parseInt(localStorage.getItem('cq_cost1')) || 15;
    let cost2 = parseInt(localStorage.getItem('cq_cost2')) || 50;

    const goldEl = document.getElementById('gold');
    const gpsEl = document.getElementById('gps');
    const gpcEl = document.getElementById('gpc');
    const clickBtn = document.getElementById('clickBtn');
    const upg1 = document.getElementById('upg1');
    const upg2 = document.getElementById('upg2');
    const cost1El = document.getElementById('cost1');
    const cost2El = document.getElementById('cost2');
    const resetBtn = document.getElementById('resetBtn');

    function updateUI() {
      goldEl.innerText = Math.floor(gold);
      gpsEl.innerText = gps;
      gpcEl.innerText = gpc;
      cost1El.innerText = cost1;
      cost2El.innerText = cost2;

      upg1.classList.toggle('disabled', gold < cost1);
      upg2.classList.toggle('disabled', gold < cost2);
    }

    function saveGame() {
      localStorage.setItem('cq_gold', gold);
      localStorage.setItem('cq_gps', gps);
      localStorage.setItem('cq_gpc', gpc);
      localStorage.setItem('cq_cost1', cost1);
      localStorage.setItem('cq_cost2', cost2);
    }

    clickBtn.addEventListener('click', () => {
      gold += gpc;
      updateUI();
      saveGame();
    });

    upg1.addEventListener('click', () => {
      if (gold >= cost1) {
        gold -= cost1;
        gps += 1;
        cost1 = Math.floor(cost1 * 1.5);
        updateUI();
        saveGame();
      }
    });

    upg2.addEventListener('click', () => {
      if (gold >= cost2) {
        gold -= cost2;
        gpc += 1;
        cost2 = Math.floor(cost2 * 1.8);
        updateUI();
        saveGame();
      }
    });

    resetBtn.addEventListener('click', () => {
      if(confirm('Are you sure you want to reset your score?')) {
        gold = 0;
        gps = 0;
        gpc = 1;
        cost1 = 15;
        cost2 = 50;
        updateUI();
        saveGame();
      }
    });

    setInterval(() => {
      if (gps > 0) {
        gold += gps / 10;
        updateUI();
      }
    }, 100);

    setInterval(saveGame, 5000);
    updateUI();
  </script>
</body>
</html>`;

// 3. Snake Game HTML Content
const snakeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Retro Snake</title>
  <style>
    body {
      margin: 0;
      background: #f5f6fa;
      color: #1e2229;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      overflow: hidden;
    }
    h2 {
      margin: 0 0 10px;
      color: #2e7d32;
      font-weight: 800;
    }
    .score-board {
      display: flex;
      gap: 30px;
      font-size: 1.1rem;
      margin-bottom: 15px;
      font-weight: 700;
      color: #575e6a;
    }
    canvas {
      background: #ffffff;
      border: 3px solid #2e7d32;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
    }
    .game-over-screen {
      position: absolute;
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #2e7d32;
      border-radius: 16px;
      padding: 25px 40px;
      text-align: center;
      display: none;
      flex-direction: column;
      gap: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    }
    .game-over-screen h3 {
      margin: 0;
      color: #d81b60;
      font-size: 1.6rem;
      font-weight: 800;
    }
    button {
      background: #2e7d32;
      border: none;
      color: white;
      font-weight: 700;
      padding: 12px 24px;
      cursor: pointer;
      border-radius: 10px;
      transition: transform 0.1s, box-shadow 0.1s;
      box-shadow: 0 4px 10px rgba(46, 125, 50, 0.2);
    }
    button:hover {
      transform: scale(1.04);
      box-shadow: 0 6px 14px rgba(46, 125, 50, 0.3);
    }
    .controls-hint {
      margin-top: 15px;
      color: #8d949e;
      font-size: 0.85rem;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <h2>Retro Snake</h2>
  <div class="score-board">
    <div>Score: <span id="score">0</span></div>
    <div>Best: <span id="hiScore">0</span></div>
  </div>
  <div style="position: relative;">
    <canvas id="gameCanvas" width="380" height="380"></canvas>
    <div class="game-over-screen" id="gameOver">
      <h3>GAME OVER</h3>
      <p style="font-weight: 600;">Your Score: <span id="finalScore">0</span></p>
      <button id="restartBtn">Play Again</button>
    </div>
  </div>
  <div class="controls-hint">Use Arrow Keys or WASD to control the snake</div>

  <script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreEl = document.getElementById('score');
    const hiScoreEl = document.getElementById('hiScore');
    const finalScoreEl = document.getElementById('finalScore');
    const gameOverScreen = document.getElementById('gameOver');
    const restartBtn = document.getElementById('restartBtn');

    const grid = 20;
    let count = 0;
    let score = 0;
    let hiScore = parseInt(localStorage.getItem('snake_hi')) || 0;
    hiScoreEl.innerText = hiScore;

    let snake = {
      x: 160,
      y: 160,
      dx: grid,
      dy: 0,
      cells: [],
      maxCells: 4
    };

    let apple = {
      x: 320,
      y: 320
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function resetGame() {
      score = 0;
      scoreEl.innerText = score;
      snake.x = 160;
      snake.y = 160;
      snake.cells = [];
      snake.maxCells = 4;
      snake.dx = grid;
      snake.dy = 0;
      
      apple.x = getRandomInt(0, 19) * grid;
      apple.y = getRandomInt(0, 19) * grid;
      
      gameOverScreen.style.display = 'none';
      requestAnimationFrame(loop);
    }

    function loop() {
      if (gameOverScreen.style.display === 'flex') return;

      requestAnimationFrame(loop);

      if (++count < 6) {
        return;
      }
      count = 0;

      ctx.clearRect(0,0,canvas.width,canvas.height);

      snake.x += snake.dx;
      snake.y += snake.dy;

      if (snake.x < 0 || snake.x >= canvas.width || snake.y < 0 || snake.y >= canvas.height) {
        triggerGameOver();
        return;
      }

      snake.cells.unshift({x: snake.x, y: snake.y});

      if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
      }

      // Draw apple
      ctx.fillStyle = '#d81b60';
      ctx.beginPath();
      ctx.arc(apple.x + grid/2, apple.y + grid/2, grid/2 - 2, 0, Math.PI * 2);
      ctx.fill();

      // Draw snake
      ctx.fillStyle = '#2e7d32';
      snake.cells.forEach(function(cell, index) {
        ctx.beginPath();
        // Give snake rounded body segments
        ctx.roundRect ? ctx.roundRect(cell.x + 1, cell.y + 1, grid - 2, grid - 2, 4) : ctx.rect(cell.x + 1, cell.y + 1, grid - 2, grid - 2);
        ctx.fill();

        if (cell.x === apple.x && cell.y === apple.y) {
          snake.maxCells++;
          score += 10;
          scoreEl.innerText = score;
          if (score > hiScore) {
            hiScore = score;
            hiScoreEl.innerText = hiScore;
            localStorage.setItem('snake_hi', hiScore);
          }
          apple.x = getRandomInt(0, 19) * grid;
          apple.y = getRandomInt(0, 19) * grid;
        }

        for (let i = index + 1; i < snake.cells.length; i++) {
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            triggerGameOver();
          }
        }
      });
    }

    function triggerGameOver() {
      finalScoreEl.innerText = score;
      gameOverScreen.style.display = 'flex';
    }

    document.addEventListener('keydown', function(e) {
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }

      if ((e.which === 37 || e.which === 65) && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
      }
      else if ((e.which === 38 || e.which === 87) && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
      }
      else if ((e.which === 39 || e.which === 68) && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
      }
      else if ((e.which === 40 || e.which === 83) && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
      }
    });

    restartBtn.addEventListener('click', resetGame);
    resetGame();
  </script>
</body>
</html>`;

// 4. Arcade Template (Dodge Ball) Generator Function
function generateArcadeTemplateHTML(gameTitle, accentColorHex) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${gameTitle}</title>
  <style>
    body {
      margin: 0;
      background: #f5f6fa;
      color: #1e2229;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      overflow: hidden;
    }
    h2 {
      margin: 0 0 10px;
      color: ${accentColorHex};
      font-weight: 800;
    }
    .info {
      font-size: 1.1rem;
      margin-bottom: 15px;
      display: flex;
      gap: 30px;
      font-weight: 700;
      color: #575e6a;
    }
    canvas {
      background: #ffffff;
      border: 3px solid ${accentColorHex};
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.04);
    }
    .screen {
      position: absolute;
      background: rgba(255, 255, 255, 0.98);
      border: 1px solid rgba(0,0,0,0.06);
      padding: 30px;
      border-radius: 16px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      width: 80%;
      max-width: 320px;
    }
    button {
      background: ${accentColorHex};
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    button:hover {
      transform: scale(1.04);
    }
    .desc {
      color: #8d949e;
      font-size: 0.85rem;
      margin-top: 15px;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <h2>${gameTitle}</h2>
  <div class="info">
    <div>Score: <span id="score">0</span></div>
    <div>Best: <span id="best">0</span></div>
  </div>
  <div style="position: relative; display: flex; align-items: center; justify-content: center;">
    <canvas id="gameCanvas" width="440" height="330"></canvas>
    
    <div class="screen" id="startScreen">
      <h3 style="margin:0; font-size: 1.15rem;">Dodge the Spheres</h3>
      <p style="margin:0; font-size:0.85rem; color:#575e6a; line-height:1.5;">Move your paddle left and right using the mouse or WASD/Arrow keys.</p>
      <button id="startBtn">START</button>
    </div>

    <div class="screen" id="gameOverScreen" style="display: none;">
      <h3 style="color: #d81b60; margin:0; font-size:1.4rem; font-weight:800;">GAME OVER</h3>
      <p style="margin:0; font-weight:600;">Final Score: <span id="finalScore">0</span></p>
      <button id="restartBtn">Play Again</button>
    </div>
  </div>
  <div class="desc">Dodge falling items! Survival score adds points.</div>

  <script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreEl = document.getElementById('score');
    const bestEl = document.getElementById('best');
    const finalScoreEl = document.getElementById('finalScore');
    const startScreen = document.getElementById('startScreen');
    const gameOverScreen = document.getElementById('gameOverScreen');
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');

    let gameActive = false;
    let score = 0;
    let bestScore = parseInt(localStorage.getItem('best_${gameTitle.replace(/\s+/g, '_')}')) || 0;
    bestEl.innerText = bestScore;

    const player = {
      x: canvas.width / 2 - 40,
      y: canvas.height - 25,
      width: 80,
      height: 12,
      speed: 8,
      color: '${accentColorHex}'
    };

    let items = [];
    let spawnTimer = 0;
    let keys = {};

    window.addEventListener('keydown', (e) => {
      if([32, 37, 39, 38, 40].includes(e.keyCode)) e.preventDefault();
      keys[e.key] = true;
    });
    window.addEventListener('keyup', (e) => {
      keys[e.key] = false;
    });
    
    canvas.addEventListener('mousemove', (e) => {
      if (!gameActive) return;
      const rect = canvas.getBoundingClientRect();
      const root = document.documentElement;
      const mouseX = e.clientX - rect.left - root.scrollLeft;
      player.x = mouseX - player.width / 2;
      
      if (player.x < 0) player.x = 0;
      if (player.x > canvas.width - player.width) player.x = canvas.width - player.width;
    });

    function spawnItem() {
      const size = Math.random() * 12 + 8;
      items.push({
        x: Math.random() * (canvas.width - size * 2) + size,
        y: -size,
        radius: size,
        speed: Math.random() * 3 + 2.5 + (score / 300),
        color: ['#d81b60', '#e65100', '#0076ff', '#6200ea', '#2e7d32'][Math.floor(Math.random() * 5)]
      });
    }

    function initGame() {
      items = [];
      score = 0;
      scoreEl.innerText = score;
      player.x = canvas.width / 2 - 40;
      gameActive = true;
      startScreen.style.display = 'none';
      gameOverScreen.style.display = 'none';
      requestAnimationFrame(gameLoop);
    }

    function triggerGameOver() {
      gameActive = false;
      finalScoreEl.innerText = score;
      gameOverScreen.style.display = 'flex';
      if (score > bestScore) {
        bestScore = score;
        bestEl.innerText = bestScore;
        localStorage.setItem('best_${gameTitle.replace(/\s+/g, '_')}', bestScore);
      }
    }

    function gameLoop() {
      if (!gameActive) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (keys['ArrowLeft'] || keys['a'] || keys['A']) {
        player.x -= player.speed;
      }
      if (keys['ArrowRight'] || keys['d'] || keys['D']) {
        player.x += player.speed;
      }
      
      if (player.x < 0) player.x = 0;
      if (player.x > canvas.width - player.width) player.x = canvas.width - player.width;

      ctx.fillStyle = player.color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(player.x, player.y, player.width, player.height, 4) : ctx.rect(player.x, player.y, player.width, player.height);
      ctx.fill();

      spawnTimer++;
      if (spawnTimer > Math.max(12 - score / 150, 4)) {
        spawnItem();
        spawnTimer = 0;
      }

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        item.y += item.speed;

        const closestX = Math.max(player.x, Math.min(item.x, player.x + player.width));
        const closestY = Math.max(player.y, Math.min(item.y, player.y + player.height));
        const distanceX = item.x - closestX;
        const distanceY = item.y - closestY;
        const distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);

        if (distanceSquared < (item.radius * item.radius)) {
          triggerGameOver();
          return;
        }

        if (item.y > canvas.height + item.radius) {
          items.splice(i, 1);
          score += 10;
          scoreEl.innerText = score;
          continue;
        }

        ctx.fillStyle = item.color;
        ctx.beginPath();
        ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(gameLoop);
    }

    startBtn.addEventListener('click', initGame);
    restartBtn.addEventListener('click', initGame);
  </script>
</body>
</html>`;
}

// 20 Games definitions with names & accent colors
const games = [
  { dir: 'tictactoe', title: 'Neon Tic-Tac-Toe', html: tictactoeHTML },
  { dir: 'clicker', title: 'Clicker Quest', html: clickerHTML },
  { dir: 'snake', title: 'Retro Snake', html: snakeHTML },
  
  // Custom templates
  { dir: 'spacewar', title: 'Space War Dodge', color: '#d81b60' },
  { dir: 'blockbreak', title: 'Brick Break Classic', color: '#0076ff' },
  { dir: 'hextetris', title: 'Hex Tetris Puzzle', color: '#2e7d32' },
  { dir: 'wordpuzzle', title: 'Word Search Neon', color: '#e65100' },
  { dir: 'pacdodge', title: 'Pac-Dodge Runner', color: '#ff9900' },
  { dir: 'flappyball', title: 'Flappy neon ball', color: '#d81b60' },
  { dir: 'pingpong', title: 'Cyber Ping Pong', color: '#0076ff' },
  { dir: 'match3', title: 'Neon Match 3 Jewels', color: '#6200ea' },
  { dir: 'minesweep', title: 'Cyber Mine Finder', color: '#2e7d32' },
  { dir: 'rhythmbeat', title: 'Rhythm Beat Cyber', color: '#d81b60' },
  { dir: 'chesscyber', title: 'Cyber Chess Tactical', color: '#575e6a' },
  { dir: 'ludoclassic', title: 'Neon Ludo Arena', color: '#ffeb3b' },
  { dir: 'solitaire', title: 'Neon Solitaire Club', color: '#0076ff' },
  { dir: 'sudokupuzzle', title: 'Sudoku Neon Grid', color: '#2e7d32' },
  { dir: 'speedracing', title: 'Speedway Cyber Racer', color: '#e65100' },
  { dir: 'memorymatch', title: 'Memory Cards Trainer', color: '#6200ea' },
  { dir: 'towerbuilder', title: 'Neon Tower Stacker', color: '#d81b60' }
];

console.log('Starting generating HTML5 games...');

games.forEach((game, idx) => {
  const gamePath = path.join(GAMES_DIR, game.dir);
  if (!fs.existsSync(gamePath)) {
    fs.mkdirSync(gamePath, { recursive: true });
  }
  
  const content = game.html || generateArcadeTemplateHTML(game.title, game.color || '#0076ff');
  fs.writeFileSync(path.join(gamePath, 'index.html'), content, 'utf8');
  console.log(`Generated Game ${idx + 1}/20: ${game.title} inside public/games/${game.dir}/`);
});

console.log('HTML5 games generation complete!');
