// trabajar
function setPropsOnObj(obj) {
  obj.p = 5
  obj.plataforma = 5
  obj.proximo = function (n) {return n+1}
  // expect(obj['proximo'](123)).toEqual(124);

  // obj['proximo'] = function (n) {return n+1}

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
  array.doble = function (n) {return n*2}
  // expect(array['doble'](123)).toEqual(246);
}