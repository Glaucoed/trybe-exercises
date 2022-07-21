const sum = require("./foguete.js");

describe("Retorno de testes da função sum", () => {

    it("teste se o retorno de sum (4,5) é 9", () => {
      expect(sum(4, 5)).toEqual(9);
    });
    
    it("teste se o retorno de sum (0,0) é 0", () => {
      expect(sum(0, 0)).toEqual(0);
    });

    // it("teste se o retorno de sum (4 , '5') é 'string 5'" , () => {
    //   expect(sum(4, "5")).toEqual(45);
    // });

    it("teste se o retorno de sum (4 , '5') é 'string 5'" , () => {
      expect(sum(4, "5")).toThrow('parameters must be numbers')
    });

}); // describe funcao soma


