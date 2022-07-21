const sum = require('./script')

test('Verifica se a soma de 1 e 2 é 3', () => {
    expect(sum(1, 2)).toBe(3)  
})

//Sempre verificar os Matcher que é melhor 