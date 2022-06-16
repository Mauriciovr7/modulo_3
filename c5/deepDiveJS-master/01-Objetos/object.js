// trabajar
function setPropsOnObj(obj) {
  obj.p = 5
  obj.plataforma = 5
  obj.proximo = (n) => n+1
  // expect(obj['proximo'](123)).toEqual(124)

  // obj.la.clave.secreta.es = 404
  obj.la = {
    clave:{secreta:{es:404}}
  }
}

function setPropsOnArr (array) {
  array.hola = function () {return 'Hola!'}
  array['river'] = 'plate'
  // expect(array[0]).toEqual(5);
  array.unshift(5)
  // expect(array.doble(4)).toEqual(8);
  array.doble = (n) => n*2
  // expect(array['doble'](123)).toEqual(246);

}

function setPropsOnFunc (functionObject) { // Object
  // expect(functionObject.year).toEqual('2017');
  functionObject.year = '2017'
  // expect(functionObject.mitad(6)).toEqual(3);
  functionObject.mitad = (n) => n/2
  //expect(functionObject.prototype.helloWorld()).toEqual('Hello World');
  functionObject.prototype.helloWorld = () => 'Hello World'
  return  
}

