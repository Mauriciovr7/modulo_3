// ul expect(calculadora instanceof CalculadoraNPI).toEqual(true);
// expect(calculadora.valor()).toEqual(5);
class CalculadoraNPI { // clase Notacion Polaca Inversa
  
  constructor () {
    this.num1 = undefined
    this.num2 = undefined
    this.valor_interno = 0
  }

  agregar(num) { // metodo
    if (this.num1 == undefined) {
      this.num1 = num
    } else {
      this.num2 = num
    }
  }

  sumar() {
    this.valor_interno = this.num1 + this.num2
  }

  valor() { // retornar valor interno
    return this.valor_interno
  }
}