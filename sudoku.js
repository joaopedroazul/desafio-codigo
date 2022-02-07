const createColumns  = require('./create.mjs').createColumns
const createSquares  = require('./create.mjs').createSquares
/** 
    Função validate:
    Essa função realiza validação parcial do sudoku,
    seja uma linha, coluna ou um quadrado.
*/

function validate(sudoku){
    var result = true

    sudoku.forEach(array => {
        array = array.filter(withoutPoint)
        for (var i = 0; i < array.length;i++){
            if(array.lastIndexOf(array[i])!= i){
                result = false
                break
            }  
        }
    })
      
    return result
}

/** 
    Função withoutPoint:
    Essa função tem o objetivo de retirar os pontos nas
    casas vazias do sudoku e assim facilitar a validação.
*/
function withoutPoint(item){
   return ( item != "."  )
}

/** 
    Função validateSudoku:
    Essa função realiza validação completa do sudoku.
    Para validar o sudoku geramos dois array que
    representam as colunas e os quadrados do sudoku.
    
*/
function validateSudoku(board){
    var lines   = board
    var column  = createColumns(board)
    var squares = createSquares(board)
    var valid   =  validate(lines) 
    var valid2  = validate(column)
    var valid3  = validate(squares)
    valid = valid && valid2 && valid3
    return valid
}

module.exports = {
    validateSudoku,
    withoutPoint,
    validate,
    createColumns ,
    createSquares
}
