const sort = require('./sort')


test('teste 1 com exemplo definido no Readme', () => {
    result = sort.noRepeatSort([8, 5, 10, 5, 2, 4, 4, 3])
  expect(result).toEqual([2, 3, 4, 5, 8, 10]);
});

test('teste 2 com uma lista de 25 numeros', () => {
    result = sort.noRepeatSort([-1,29,-19,-6,12,-19,46,72,
        -8,86,31,-28,72,-49,40,45,-1,
        -20,40,51,-31,88,-35,-10,-24])
  expect(result).toEqual(
    [-49, -35, -31, -28, -24, -20, -19,
    -10,  -8,  -6,  -1,  12,  29,  31,
     40,  45,  46,  51,  72,  86,  88 ]);
});

test('teste 3 com uma lista de 100 numeros', () => {
    result = sort.noRepeatSort([-4, 38, 2, -10, 24, 39, 11,
         18, -20, 11, -6, 31, -30, 40, 35, -3, 10, 32, -15,
         -13, 4, -15, 38, 22, 50, 40, 24, 49, -23, 41, 40,
         -16, 39, -22, -24, 47, 33, -24, -14, -18, -19, 36,
         6, 38, 21, 5, -19, 27, 31, 27, -26, -2, -29, 26, 
         -23, -15, -3, 26, 32, 35, -28, -2, -9, -16, 17, 
         -11, 30, -18, -17, -21, -19, 3, 44, 31, 28, 11, 
         -29, 28, 44, -28, -24, 21, 32, -12, 3, 9, 25, 27, 
         42, -8, -20, 36, 30, -30, -2, -17, 35, 14, 14, 17])
  expect(result).toEqual(
        [-30, -29, -28, -26, -24, -23, -22, -21, -20, -19, -18,
         -17, -16, -15, -14, -13, -12, -11, -10,  -9,  -8,  -6,
         -4,  -3,  -2,   2,   3,   4,   5,   6,   9,  10,  11,
         14,  17,  18,  21,  22,  24,  25,  26,  27,  28,  30,
         31,  32,  33,  35,  36,  38,  39,  40,  41,  42,  44,
         47,  49,  50]);
});