import { FifteenPuzzleLogic } from "../model/FifteenPuzzleLogic";

describe(`Find empty cell`, () =>{
    let model: FifteenPuzzleLogic;

    beforeEach(() => {
        model = new FifteenPuzzleLogic(4);
    });

    test('Empty cell in [0,0]', () => {
        model['gameBoard'] = [
          [0,  1,  2,  3],
          [4,  5,  6,  7],
          [8,  9,  10, 11],
          [12, 13, 14, 15]
        ];
        const [row, col] = model['findEmptyCell']();
        expect([row, col]).toEqual([0, 0]);
    });

    test('Empty cell in [2,1]', () => {
        model['gameBoard'] = [
          [1,  2,  3,   4],
          [5,  6,  10,  8],
          [9,  0,  11, 12],
          [13, 14, 15,  7]
        ];
        const [row, col] = model['findEmptyCell']();
        expect([row, col]).toEqual([2, 1]);
    });

    test('No empty cell', () => {
        model['gameBoard'] = [
          [1,  2,  3,    4],
          [5,  6,  10,   8],
          [9,  16,  11, 12],
          [13, 14, 15,   7]
        ];
        const [row, col] = model['findEmptyCell']();
        expect([row, col]).toEqual([-1, -1]);
    });
});