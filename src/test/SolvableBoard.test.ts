import { FifteenPuzzleLogic } from "../model/FifteenPuzzleLogic";

describe(`Solvable board`, () => {
    let model: FifteenPuzzleLogic;

    beforeEach(() => {
        model = new FifteenPuzzleLogic(4);
    });

    test('Solvable board', () => {
        const solvableBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
        expect(model['isBoardSolvable'](solvableBoard.filter(number => number !== 0))).toBe(true);
    });

    test('One inversion - unsolvable', () => {
        const unsolvableBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, 0];
        expect(model['isBoardSolvable'](unsolvableBoard.filter(number => number !== 0))).toBe(false);
    });
});