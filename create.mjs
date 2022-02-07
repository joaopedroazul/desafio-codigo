/** 
    Função createColumn:
    Essa função  gerar uma matriz de arrays que
    representam as colunas do sudoku.   
*/
function createColumns(sudoku){
    var column1 = new Array(9)
    var column2 = new Array(9)
    var column3 = new Array(9)
    var column4 = new Array(9)
    var column5 = new Array(9)
    var column6 = new Array(9)
    var column7 = new Array(9)
    var column8 = new Array(9)
    var column9 = new Array(9)
    for (var i = 0; i<9; i++){
        column1[i] = sudoku[i][0];
        column2[i] = sudoku[i][1];
        column3[i] = sudoku[i][2];

        column4[i] = sudoku[i][3];
        column5[i] = sudoku[i][4];
        column6[i] = sudoku[i][5];

        column7[i] = sudoku[i][6];
        column8[i] = sudoku[i][7];
        column9[i] = sudoku[i][8];

        
    }
    return [column1,column2,column3,column4,column5,column6,column7,column8,column9]    
}

/** 
    Função createColumn:
    Essa função  gerar uma matriz de arrays que
    representam os quadrados do sudoku.   
*/
function createSquares(sudoku){
    var square1 = new Array(9)
    var square2 = new Array(9)
    var square3 = new Array(9)
    var square4 = new Array(9)
    var square5 = new Array(9)
    var square6 = new Array(9)
    var square7 = new Array(9)
    var square8 = new Array(9)
    var square9 = new Array(9)
    for (var i = 0; i<3; i++){
        square1[i] = sudoku[0][i];
        square1[i+3] = sudoku[1][i];
        square1[i+6] = sudoku[2][i];

        square2[i] = sudoku[0][i+3];
        square2[i+3] = sudoku[1][i+3];
        square2[i+6] = sudoku[2][i+3];

        square3[i] = sudoku[0][i+6];
        square3[i+3] = sudoku[1][i+6];
        square3[i+6] = sudoku[2][i+6];

        square4[i] = sudoku[3][i];
        square4[i+3] = sudoku[4][i];
        square4[i+6] = sudoku[5][i];

        square5[i] = sudoku[3][i+3];
        square5[i+3] = sudoku[4][i+3];
        square5[i+6] = sudoku[5][i+3];

        square6[i] = sudoku[3][i+6];
        square6[i+3] = sudoku[4][i+6];
        square6[i+6] = sudoku[5][i+6];

        square7[i] = sudoku[6][i];
        square7[i+3] = sudoku[7][i];
        square7[i+6] = sudoku[8][i];

        square8[i] = sudoku[6][i+3];
        square8[i+3] = sudoku[7][i+3];
        square8[i+6] = sudoku[8][i+3];

        square9[i] = sudoku[6][i+6];
        square9[i+3] = sudoku[7][i+6];
        square9[i+6] = sudoku[8][i+6];
        
    }
    return [square1,square2,square3,square4,square5,square6,square7,square8,square9]    
}
module.exports = {

    createColumns ,
    createSquares
}
