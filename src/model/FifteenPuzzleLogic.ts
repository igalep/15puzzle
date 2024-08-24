



import shuffle from 'shuffle-array';

export class FifteenPuzzleLogic {
    private emptyCell : [number , number];
    private gameBoard : number [][];
    private boardSize : number;

    constructor (boardSize: number){
        this.boardSize = boardSize;

        this.gameBoard = [];

        this.generateBoard();
        this.emptyCell = this.findEmptyCell();
    }

    getBoard(): number [][]{
        return this.gameBoard;
    }

    private generateBoard(): void{
        const numbersArr = [...Array(Math.pow(this.boardSize, 2) - 1).keys()].map(n => n + 1).concat([0]);

        do {  //run in loop untill the board is solvable 
            shuffle(numbersArr);
        } while (!this.isBoardSolvable(numbersArr))

        //create 2D array from shuffeled 1D array by slicing it
        const board: number[][] = [];
        for (let i = 0; i < this.boardSize; i++){
            board.push(numbersArr.slice(i * this.boardSize, (i + 1) * this.boardSize));
        }

        this.gameBoard = board;        
    }

    private findEmptyCell() : [number , number] {
        let row = 0;
        let col = -1;
        for (;row < this.gameBoard.length; row++){
            col = this.gameBoard[row].indexOf(0);

            if (col == -1) {continue;}

            break;
        }
        return [row, col];
    }


    //check if board solvable (https://www.geeksforgeeks.org/check-instance-8-puzzle-solvable/)
    private isBoardSolvable(potentialBoard : number []): boolean {
        let inversions = 0;

        for (let i = 0; i < potentialBoard.length; i++){
            for (let j = i + 1; j < potentialBoard.length; j++){
                if (potentialBoard [i] > potentialBoard [j]) inversions++;
            }
        }
        return inversions % 2 == 0;
    }

    makeMove(direction: 'up' | 'down' | 'right' | 'left' | undefined) : boolean {
         const [row, col] = this.emptyCell;

         switch(direction) {
            case 'up':
                if (row < this.boardSize - 1) {this.swapCells([row + 1, col]); return true;}
                else { return false;}

            case 'down':
                if (row > 0) {this.swapCells([row - 1, col]); return true;}
                else { return false;}
            
            case 'right':
                if (col > 0) {this.swapCells([row, col - 1]); return true;}
                else { return false;}
            
            case 'left':
                if (col < this.boardSize - 1) {this.swapCells([row, col + 1]); return true;}
                else { return false;}

            default:
                return false;
         }
    }

    private swapCells(posFrom : [number , number]) : void {
        this.gameBoard[this.emptyCell[0]][this.emptyCell[1]] = this.gameBoard[posFrom[0]][posFrom[1]]
        this.gameBoard[posFrom[0]][posFrom[1]] = 0;

        this.emptyCell = posFrom;
    }

    isPuzzleSolved() : boolean {
        const currentState = this.gameBoard.flat();

        return currentState.slice(0, currentState.length - 1).every((value , index) => value == index + 1) 
               && currentState[currentState.length - 1] == 0; 
    }
}