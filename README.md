# Tic-tac-toe

A modern implementation of the classic Tic-tac-toe game built with React.js. This interactive web application allows two players to compete against each other in the timeless game of X's and O's.

## Features

- 🎮 Interactive game board
- 👥 Two-player gameplay
- ✏️ Editable player names
- 🎯 Turn indicator
- 🏆 Winner detection
- 🔄 Game reset functionality
- 📱 Responsive design

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
```bash
npm install
```

## Running the Project

To start the development server:
```bash
npm run dev
```

The game will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Technologies Used

- React.js - Frontend library
- Vite - Build tool and development server
- CSS - Styling

## How to Play

1. Enter player names (optional)
2. Players take turns clicking on the game board to place their symbol (X or O)
3. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins
4. If no player achieves this, the game ends in a draw

## Project Structure

The project follows a component-based architecture:
- `Player.jsx` - Manages player information and name editing
- `GameBoard.jsx` - Handles the game board logic and display
- `GameOver.jsx` - Displays game end state
- `Log.jsx` - Shows game move history
