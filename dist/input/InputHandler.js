"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const process_1 = require("process");
const consoleRead = __importStar(require("readline"));
class GameController {
    static getMove() {
        const readline = consoleRead.createInterface({
            input: process_1.stdin,
            output: process_1.stdout
        });
        let userMove = 'empty'; //empty is for handle assign error
        const userMessage = () => {
            readline.question(`Please enter your next move -> ${this.validMoves.join(' / ')} ... `, (userInput) => {
                userMove = userInput.trim().toLocaleLowerCase();
                if (userMove && this.validMoves.includes(userMove)) {
                    readline.close;
                }
                else {
                    console.log(`Your input is wrong , please try again \n`);
                    userMessage();
                }
            });
        };
        userMessage();
        return userMove;
    }
}
exports.GameController = GameController;
GameController.validMoves = ['up', 'down', 'right', 'left'];
// import * as readline from 'readline';
// public static getMove(validMoves: ('up' | 'down' | 'right' | 'left')[]): 'up' | 'down' | 'right' | 'left' {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     let userMove: 'up' | 'down' | 'right' | 'left';
//     const promptUser = () => {
//         rl.question(`Please enter your next move -> ${validMoves}`, (input) => {
//             userMove = input.toLocaleLowerCase() as 'up' | 'down' | 'right' | 'left';
//             if (validMoves.includes(userMove)) {
//                 rl.close();
//             } else {
//                 console.log('Invalid move. Please try again.');
//                 promptUser();
//             }
//         });
//     };
//     promptUser();
//     return userMove;
// }
// import * as readline from 'readline';
// export class GameController {
//     private static readonly validMoves = ['up', 'down', 'right', 'left'] as const;
//     public static async getMove(): Promise<'up' | 'down' | 'right' | 'left'> {
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//         return new Promise<('up' | 'down' | 'right' | 'left')>((resolve) => {
//             const promptUser = () => {
//                 rl.question(`Please enter your next move -> ${GameController.validMoves.join(' | ')}`, (userMove) => {
//                     const o_userMove = userMove.toLocaleLowerCase() as 'up' | 'down' | 'right' | 'left';
//                     if (GameController.validMoves.includes(o_userMove)) {
//                         resolve(o_userMove);
//                     } else {
//                         console.log('Invalid move. Please try again.');
//                         promptUser();
//                     }
//                 });
//             };
//             promptUser();
//         });
//     }
// }
