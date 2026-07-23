# Tic-Tac-Toe

A browser-based Tic-Tac-Toe game built with **HTML, CSS, and Vanilla JavaScript** as part of **The Odin Project** curriculum.

The primary goal of this project was to practice building a modular JavaScript application using **Factory Functions** and the **Module Pattern (IIFE)** while maintaining a clear separation between the game logic and the user interface.

---

## Demo

> https://pranav-chamoli.github.io/odin-tic-tac-toe/

---

## Features

- 🎮 Two-player Tic-Tac-Toe gameplay
- ❌⭕ Turn-based game flow
- 🏆 Automatic winner detection
- 🤝 Tie game detection
- 🔄 Reset game functionality
- 🖥️ Responsive game state updates
- 📦 Modular JavaScript architecture

---

## Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- Factory Functions
- Module Pattern (IIFE)
- CSS Grid
- Flexbox

---

## Project Structure

The application follows a modular architecture where each module has a single responsibility.

```text
Player Factory
      │
      ▼
GameController
      │
      ▼
Gameboard
      │
      ▼
DisplayController
```

### Player Factory

Creates lightweight player objects.

```javascript
Player(name, marker);
```

---

### Gameboard Module

Responsible for maintaining and managing the game board.

Responsibilities include:

- Maintaining the board state
- Placing player markers
- Checking for winning combinations
- Detecting ties
- Resetting the board

The board itself remains private and is accessed only through exposed methods.

---

### GameController Module

Acts as the core game engine.

Responsibilities include:

- Managing player turns
- Validating moves
- Switching players
- Determining game over state
- Coordinating board updates

This module contains all gameplay logic while remaining independent of the UI.

---

### DisplayController Module

Responsible for all DOM interactions.

Responsibilities include:

- Rendering the game board
- Updating game status
- Handling click events
- Resetting the interface

This module never directly modifies the game state—it delegates all game logic to the `GameController`.

---

## Design Principles

This project emphasizes several software engineering principles:

- Separation of Concerns
- Single Responsibility Principle
- Encapsulation
- Information Hiding
- Modular Design

Each module owns only its own state and exposes a minimal public API.

---

## What I Learned

Through this project I gained practical experience with:

- Factory Functions
- Immediately Invoked Function Expressions (IIFE)
- Encapsulation using closures
- Creating private state with modules
- Designing modular JavaScript applications
- Separating business logic from presentation logic
- Using CSS Grid and Flexbox together
- DOM manipulation and event handling

---

## Future Improvements

Potential enhancements include:

- Player name input
- Scoreboard
- Responsive mobile layout
- Animation effects
- Sound effects
- Dark/Light theme toggle

---

## Screenshots

> ![Tic-Tac-Toe Screenshot](/images/image.png)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Pranav-Chamoli/odin-tic-tac-toe
```

Navigate into the project:

```bash
cd odin-tic-tac-toe
```

Open `index.html` in your browser or use a local development server such as the VS Code Live Server extension.

---

## Acknowledgements

This project was built as part of **The Odin Project** JavaScript curriculum, with a focus on learning modular JavaScript architecture using Factory Functions and the Module Pattern.
