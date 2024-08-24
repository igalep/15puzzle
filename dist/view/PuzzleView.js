"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuzzleView = void 0;
class PuzzleView {
    constructor() {
        this.welcomePrompt();
        this.stepsCount = 0;
    }
    welcomePrompt() {
        console.clear();
        console.log(`Welcome to 15 puzzle game , this is your game board.  \nGood Luck !! \n`);
    }
    puzzleSolved() {
        console.log(`Well done !! the puzzle was solved within ${this.stepsCount} steps`);
    }
    stepPrompt(stepsCount) {
        this.stepsCount = stepsCount;
        console.log(`\nIt was your ${this.stepsCount} step in the game \nNow the board's state is: \n`);
    }
    displayBoardGame(board) {
        for (const row of board) {
            console.log(row.map(num => (num.toString().padStart(6, ' '))).join(' '));
        }
        console.log();
    }
    wrongMovePromt() {
        console.log(`Your input is wrong , please try again \n`);
    }
}
exports.PuzzleView = PuzzleView;
//# sourceMappingURL=PuzzleView.js.map