/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
    /*
    There are 3 checks that need to be completed
    - Vertical check
    - Horizontal check
    - Box check
    We can run a hash map and count the occurances
    */

    const setBox = {};
    const setCol = {};
    const setRow = {};

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] == '.') {
                break;
            } else if (setRow[row]?.includes(board[row][col])) {
                return false;
            } else if (setCol[col]?.includes(board[row][col])) {
                return false;
            } else if (
                setBox[(Math.floor(row / 3), Math.floor(col / 3))]?.includes(
                    board[row][col]
                )
            ) {
                console.log(setBox);
                return false;
            } else {
                setCol[col]
                    ? (setCol[col] = [...setCol[col], board[row][col]])
                    : (setCol[col] = [board[row][col]]);
                setRow[row]
                    ? (setRow[row] = [...setRow[row], board[row][col]])
                    : (setRow[row] = [board[row][col]]);
                setBox[(Math.floor(row / 3), Math.floor(col / 3))]
                    ? (setBox[(Math.floor(row / 3), Math.floor(col / 3))] = [
                          ...setBox[(Math.floor(row / 3), Math.floor(col / 3))],
                          board[(row, col)],
                      ])
                    : (setBox[(Math.floor(row / 3), Math.floor(col / 3))] = [
                          board[row][col],
                      ]);
            }
        }
    }
    return true;
};

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
