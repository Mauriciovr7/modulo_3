function crearCalculadora() { // funcion
  //calculadora.valor = () => 0
  // expect(calculadora.valor()).toEqual(0);
  let n = 0
  const obj = { // objeto
    valor: function () { // metodo      
      return n
    }, 
    sumar: function (num) { // metodo
      n += num
      return n
    }, 
    restar: function (num) { // metodo
      n -= num
      return n
    }, 
    reset: function (num) { // metodo
      n = 0
      return n
    }
  }
  return obj
}

// expect(calculadora.valor()).toEqual(2);