
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

  function cambio(){
    var nombre = 'Toni'; // no era
  }

  if (true) {
    var nombre = 'Guille';
  }
  
  cambio();
  return nombre;
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
    return foo < bar < bazz;

  } else {
    return bar < foo < bazz; // && or ||

  }
}


// NO TOCAR ESTE ARCHIVO

// VAYAN DIRECTO A LOS TEST
