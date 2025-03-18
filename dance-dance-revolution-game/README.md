# Dance Dance Revolution Game

## Overview
This project is a Dance Dance Revolution style game that allows players to interact with custom beatmaps featuring long notes and normal notes. The notes are displayed in an arrow shape corresponding to the directions: left, up, down, and right.

## Project Structure
```
dance-dance-revolution-game
├── src
│   ├── assets
│   │   ├── audio
│   │   └── images
│   ├── js
│   │   ├── game.js
│   │   ├── beatmap.js
│   │   └── input.js
│   └── css
│       └── style.css
├── index.html
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the project folder in your preferred code editor.
3. Open `index.html` in a web browser to start the game.

## Game Controls
- Use the arrow keys to hit the corresponding notes as they appear on the screen.
- Long notes require you to hold down the key until the note is completed.

## Beatmap Format
Beatmaps are defined in a specific format that includes:
- Timing of each note
- Type of note (normal or long)
- Direction of the note (left, up, down, right)

Refer to the `beatmap.js` file for details on how to create and load custom beatmaps.

## Assets
- Audio files can be placed in the `src/assets/audio` directory (currently not required).
- Image assets for the arrows should be placed in the `src/assets/images` directory.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.