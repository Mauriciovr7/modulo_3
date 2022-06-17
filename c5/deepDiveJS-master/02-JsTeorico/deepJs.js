
// NO TOCAR ESTE ARCHIVO

// VAYAN DIRECTO A LOS TEST

function scopes() { // no es closure
  var a = 'hola'
  function otroScope() { // no tiene return (undefined)
    var a = 5
    function unUltimoScope() { // func interna , no se ejecuta
      a = false;
      return a;
    }
  }
  a = otroScope();
  return a; // undefined
}

function bloque(){
  var nombre = 'Facu';

  function cambio(){ // func interna (closure) mundo aparte cada func tiene su propio universo(se puede mirar hacia afuera pero de afuera no se puede mirar hacia adentro)
    var nombre = 'Toni'; // no era
  }

  if (true) { // siempre es verdadera
    var nombre = 'Guille'; // var no respeta las funciones (scope)
  }
  
  cambio(); // existe y muere al mismo tiempo
  return nombre; // retorno de la func bloque
}

function igualdad() {
  
  var foo, bar, bazz = 3;

  foo = bar = bazz;
  return foo;
}

function boolean(bool) {
  var foo = 1,
      bar = 2,
      bazz = 3;

  if (bool){
    return foo < bar < bazz; // se deben usar paréntesis

  } else {
    return bar < foo < bazz; // && or ||

  }
}


// NO TOCAR ESTE ARCHIVO

// VAYAN DIRECTO A LOS TEST
