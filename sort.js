/** 
    Função mergeSortNoRepeat:
    Essa função executa a segunda parte da ordenação,
    que reagrupando os numeros de forma ordenada e 
    excluindo os numeros repetidos.
*/

function  mergeSortNoRepeat (array1, array2){

    var arraySort = []                                                 
    while(array1.length || array2.length){              
        if(array1.length && array2.length){
            /** 
                Caso encontre numeros repetidos, ordena
                e deleta um dos numeros repetidos
            */
            if (array1[0] == array2[0]){                
                arraySort.push(array1.shift())
                array2.shift()
            } 
            /** 
                Caso não encontre numeros repetidos, faça o
                processo de ordenação padrão
            */  
            else{                                       
                array1[0] > array2[0] ? arraySort.push(array2.shift()) : arraySort.push(array1.shift())
            }
        }else{                                          
            if(array1.length){
                arraySort.push(array1.shift())
            }else{
                arraySort.push(array2.shift())
            }
        }
    }
    return arraySort
}

/** 
    Função noRepeatSort:
    Implementação  
    Essa função é baseada no MergeSort com a adição
    da funcionalidade de retirar numeros repetidos.
    Nela executamos a primeira parte da ordenação,
    dividindo o array de numeros ao meio até restar
    só um elemento.
*/
function noRepeatSort(array){ 
    
    if (array.length < 2){
        return array
    }
    const middle = Math.floor(array.length/2)                     
    const array1 = noRepeatSort(array.slice(0,middle))            
    const array2 = noRepeatSort(array.slice(middle,array.length)) 
    array = mergeSortNoRepeat(array1,array2)                       
    return array   
}

module.exports = {
    noRepeatSort,
    mergeSortNoRepeat
}