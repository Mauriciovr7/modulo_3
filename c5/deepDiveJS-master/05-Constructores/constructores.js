class CalculadoraNPI { // clase
  constructor () {
    this.num1 = undefined
    this.num2 = undefined
    this.valor_interno = 0
  }

  agregar() { // metodo
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