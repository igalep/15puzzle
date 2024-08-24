import { FifteenPuzzleLogic } from "../src/model/FifteenPuzzleLogic";

const testData = [
    {'boardSize': 3},
    {'boardSize': 4},
    {'boardSize': 8}];

testData.forEach(data => {
    describe(`Board init (n = ${data.boardSize})`, () => {
        let model: FifteenPuzzleLogic;
    
        beforeEach(() => {
            model = new FifteenPuzzleLogic(data.boardSize);
        });
    
        test(`Board creation - possitive`, () => {
            model['generateBoard']();
            expect(model['gameBoard'].length * model['gameBoard'][0].length).toBe(
                Math.pow(model['boardSize'],2));
        });
    
        test(`Board is solvable`, () => {
            model['generateBoard']();
            expect(model['isBoardSolvable'](model['gameBoard'].flat().filter(number => number !== 0))).toBe(true);
        });
    
        test(`Generated board is shuffeled`, () => {
            const originalBoard = model['gameBoard'].flat().slice();
            model['generateBoard']();
            const newBoard = model['gameBoard'].flat();
            expect(newBoard).not.toEqual(originalBoard);
        });
    });
});

