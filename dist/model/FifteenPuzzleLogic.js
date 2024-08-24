"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FifteenPuzzleLogic = void 0;
const shuffle_array_1 = __importDefault(require("shuffle-array"));
class FifteenPuzzleLogic {
    constructor() {
        this.gameBoard = [];
        this.generateBoard();
        this.emptyCell = this.findEmptyCell();
    }
    getBoard() {
        return this.gameBoard;
    }
    generateBoard() {
        const numbersArr = [...Array(15).keys()].map(n => n + 1).concat([0]);
        do { //run in loop untill the board is solvable 
            (0, shuffle_array_1.default)(numbersArr);
        } while (!this.isBoardSolvable(numbersArr));
        //create 2D array from shuffeled 1D array by slicing it
        const board = [];
        for (let i = 0; i < 4; i++) {
            board.push(numbersArr.slice(i * 4, (i + 1) * 4));
        }
        this.gameBoard = board;
    }
    findEmptyCell() {
        let row = 0;
        let col = -1;
        for (; row < this.gameBoard.length; row++) {
            col = this.gameBoard[row].indexOf(0);
            if (col == -1) {
                continue;
            }
            break;
        }
        return [row, col];
    }
    //check if board solvable (https://www.geeksforgeeks.org/check-instance-8-puzzle-solvable/)
    isBoardSolvable(potentialBoard) {
        let inversions = 0;
        for (let i = 0; i < potentialBoard.length; i++) {
            for (let j = i + 1; j < potentialBoard.length; j++) {
                if (potentialBoard[i] > potentialBoard[j])
                    inversions++;
            }
        }
        return inversions % 2 == 0;
    }
    makeMove(direction) {
        const [row, col] = this.emptyCell;
        switch (direction) {
            case 'up':
                if (row < 3) {
                    this.swapCells([row + 1, col]);
                    return true;
                }
                else {
                    return false;
                }
            case 'down':
                if (row > 0) {
                    this.swapCells([row - 1, col]);
                    return true;
                }
                else {
                    return false;
                }
            case 'right':
                if (col > 0) {
                    this.swapCells([row, col - 1]);
                    return true;
                }
                else {
                    return false;
                }
            case 'left':
                if (col < 3) {
                    this.swapCells([row, col + 1]);
                    return true;
                }
                else {
                    return false;
                }
            default:
                return false;
        }
    }
    swapCells(posFrom) {
        this.gameBoard[this.emptyCell[0]][this.emptyCell[1]] = this.gameBoard[posFrom[0]][posFrom[1]];
        this.gameBoard[posFrom[0]][posFrom[1]] = 0;
        this.emptyCell = posFrom;
    }
    isPuzzleSolved() {
        const currentState = this.gameBoard.flat();
        return currentState.slice(0, currentState.length - 1).every((value, index) => value == index + 1)
            && currentState[currentState.length - 1] == 0;
    }
}
exports.FifteenPuzzleLogic = FifteenPuzzleLogic;
//# sourceMappingURL=FifteenPuzzleLogic.js.map