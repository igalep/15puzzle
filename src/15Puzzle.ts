import {GameController} from './controller/GameController';
import { FifteenPuzzleLogic } from './model/FifteenPuzzleLogic';
import { PuzzleView } from './view/PuzzleView';


class FifteenPuzzleGame{
    private controller : GameController;

    constructor(){
        const sizeArg = process.argv.slice(2)

        let boardSize = -1;
        sizeArg.length < 1 ? boardSize = 4 : boardSize = parseInt(sizeArg[0], 10);

        this.controller = new GameController(new PuzzleView(), 
                                            new FifteenPuzzleLogic(boardSize));
    }

    playGame() : void {
        this.controller.makeMove().then((solved) =>{
            if (!solved) { this.playGame(); } 
        });
    }
}  



const play = new FifteenPuzzleGame();
play.playGame();