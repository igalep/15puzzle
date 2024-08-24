import { stdin, stdout } from 'process';
import * as consoleRead from 'readline';
import { PuzzleView } from '../view/PuzzleView';
import { FifteenPuzzleLogic } from '../model/FifteenPuzzleLogic';

export class GameController {
    private readonly validMoves = ['up' , 'down', 'right', 'left'] as const;

    private view : PuzzleView;
    private model : FifteenPuzzleLogic;
    private readLine : consoleRead.Interface;
    private stepsCount : number;


    constructor(view : PuzzleView , model: FifteenPuzzleLogic){
        this.view = view;
        this.model = model;

        this.readLine = consoleRead.createInterface({
            input : stdin,
            output: stdout
        });

        this.view.displayBoardGame(this.model.getBoard())

        this.stepsCount = 0;
    }


    async makeMove() : Promise<boolean> {
        const userMove = await this.getUserInput();

        let moveSuccess = this.model.makeMove(userMove);
        if (moveSuccess) { 
            this.stepsCount++;

            this.view.stepPrompt(this.stepsCount);
            this.view.displayBoardGame(this.model.getBoard());

            const isPuzzleSolved = this.model.isPuzzleSolved();

            if (isPuzzleSolved) {
                this.readLine.close();
                this.view.puzzleSolved();
            }
            return isPuzzleSolved;
        } else {
            this.view.wrongMovePromt();
            this.view.displayBoardGame(this.model.getBoard());

            return false;
        }
    }

    private getUserInput() : Promise <'up' | 'down' | 'right' | 'left'> {
        return new Promise((resolve) => {
            const userMessage = () => {
                this.readLine.question(`Please enter your next move -> ${this.validMoves.join(' / ')} ... `, (userInput) => {
                    const userMove = userInput.trim().toLocaleLowerCase() as 'up' | 'down' | 'right' | 'left';

                    if (userMove && this.validMoves.includes(userMove)) { 
                        resolve(userMove); 
                    }
                    else {
                        this.view.wrongMovePromt()
                        userMessage();
                    }
                });
            }
            userMessage();
        });
    }
}
