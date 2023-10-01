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
            const index = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            const char = board[row][col];
            if (char == '.') {
                continue;
            } else if (
                setRow[row]?.includes(char) ||
                setCol[col]?.includes(char) ||
                setBox[index]?.includes(char)
            ) {
                return false;
            } else {
                setCol[col]
                    ? (setCol[col] = [...setCol[col], char])
                    : (setCol[col] = [char]);
                setRow[row]
                    ? (setRow[row] = [...setRow[row], char])
                    : (setRow[row] = [char]);
                setBox[index]
                    ? (setBox[index] = [...setBox[index], char])
                    : (setBox[index] = [char]);
            }
        }
    }
    return true;
};

const board = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '6', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '8', '.', '.', '.', '.'],
    ['9', '.', '.', '.', '7', '5', '.', '.', '.'],
    ['.', '.', '.', '.', '5', '.', '.', '8', '.'],
    ['.', '.', '9', '.', '.', '.', '.', '.', '.'],
    ['2', '.', '6', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];

console.log(isValidSudoku(board));
