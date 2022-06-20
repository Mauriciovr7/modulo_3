// ul expect(calculadora instanceof CalculadoraNPI).toEqual(true);
// expect(calculadora.valor()).toEqual(5);
class CalculadoraNPI { // clase Notacion Polaca Inversa
  
  constructor () {
    this.num1 = undefined
    this.num2 = undefined
    this.num3 = undefined
    this.valor_interno = 0
  }

  agregar(num) { // metodo
    if (this.num1 == undefined) {
      this.num1 = num
    } else if (this.num2 == undefined) {
      this.num2 = num
    } else {
      this.num3 = num
    }
  }

  sumar() {    
    if (this.num3 == undefined) {
      this.valor_interno = this.num1 + this.num2
    } else if (this.valor_interno == this.num2 + this.num3) {
      this.valor_interno = this.num1 + this.num2 + this.num3
    } else {
      this.valor_interno = this.num2 + this.num3
    }
  }

  valor() { // retornar valor interno
    return this.valor_interno
  }
}