
import {GameController} from './controller/GameController';
import { FifteenPuzzleLogic } from './model/FifteenPuzzleLogic';
import { PuzzleView } from './view/PuzzleView';


class FifteenPuzzleGame{
    private controller : GameController;

    constructor(){
        this.controller = new GameController(new PuzzleView() , new FifteenPuzzleLogic());
    }

    playGame() : void {
        this.controller.makeMove().then((solved) =>{
            if (!solved) { this.playGame(); } 
        });
    }
}



const play = new FifteenPuzzleGame();
play.playGame();