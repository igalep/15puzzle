"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameController_1 = require("./controller/GameController");
const FifteenPuzzleLogic_1 = require("./model/FifteenPuzzleLogic");
const PuzzleView_1 = require("./view/PuzzleView");
class FifteenPuzzleGame {
    constructor() {
        this.controller = new GameController_1.GameController(new PuzzleView_1.PuzzleView(), new FifteenPuzzleLogic_1.FifteenPuzzleLogic());
    }
    playGame() {
        this.controller.makeMove().then((solved) => {
            if (!solved) {
                this.playGame();
            }
        });
    }
}
const play = new FifteenPuzzleGame();
play.playGame();
//# sourceMappingURL=15Puzzle.js.map