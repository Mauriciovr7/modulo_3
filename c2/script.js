class User {
  constructor(nom, curso, gen) {
    this.nombre = nom
    this.curso = curso
    this.generacion = gen
    // this.es_relator = es_relator
  }

  // metodos
  notificar() {
    alert(`Hola ${this.nombre}`)
  }
}

class Relator extends User { // con herencia (Relator es hija de User), metodos(notificar , init_zoom)
  constructor(nom, curso, gen, cursos_anteriores) {
    super(nom, curso, gen) // palabra reservada super para entregar herencia a clase hija
    // this.nombre = nom
    // this.curso = cur
    // this.generacion = gen
    this.cursos_anteriores = cursos_anteriores
  }

  // metodos a parte del heredado (notificar) , este (init_zoom)
  init_zoom() {
    console.log('Abriendo llamada zoom')
  }
}

// instancias
const u1 = new User('Anthony Reyes', 'Fullstack JS', 'âillaco II')
const u2 = new User('Victoria Islame', 'Fullstack JS', 'âillaco II')
const u3 = new User('Matías Bensan', 'Fullstack JS', 'âillaco II')



const anthony = {
  nombre: 'Anthony Reyes',
  curso: 'Fullstack JS',
  generacion: 'paillaco II',
  notificar: function () {
    alert('Bienvenido ' + this.nombre)
  }
}

// u1
// u1.notificar // funcion
// u1.notificar() // Bienvenido Anthony Reyes

// u1 instanceof User // true
// u3 // Relator {nombre: etc}
// u3 instanceof User // true


// Ejercicio en clase 01 **********************

// programa para darle funcionalidad a un auto

class Auto {
  constructor(mark, mod, yy, doors) {
    this.mark = mark
    this.model = mod
    this.year = yy
    this.doors = doors
  }

  // metodos
  acelerar() {
    alert('Acelerando... ')
  }

  subirVidrios() {
    alert('Subiendo vidrios... ')
  }
}

// instancias
const a1 = new Auto('Hyundai', 'Getz', '2006', '5')

// a1
// a1.acelerar // funcion
// a1.acelerar() // acelerando


// cree nuevas Clases para autos a gas, a nafta y eléctricos

//class autos a gas

class Autos_gas extends Auto {
  // metodos
  acelerar(){
    alert('Acelerando... con gas ')
  }
}
const a2 = new Autos_gas('Hyundai', 'Getz', '2006', '5')
// a2.acelerar() // acelerando con gas

class Autos_nafta extends Auto {
  // metodos
  acelerar(){
    alert('Acelerando... con nafta ')
  }
}
const a3 = new Autos_nafta('Hyundai', 'Getz', '2006', '5')
// a3.acelerar() // acelerando con gas

class Autos_electrico extends Auto {
  // metodos
  acelerar(){
    alert('Acelerando... con electricidad ')
  }
}
const a4 = new Autos_electrico('Hyundai', 'Getz', '2006', '5')
// a4.acelerar() // acelerando con gas


// Ejercicio asincrónico 02 ****************************

// programa que use el Objeto Date() para devolver un alert que exprese qué día de la semana es

function msj(dia) {
  alert(`El día de la semana es ${dia} `) // el dia de semana es 
}

function dia(num) { //num
  const dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
  // const fecha = new Date()
  // console.log(fecha) // Mon Jun 13 2022 11:35:03 GMT-0400 (hora estándar de Chile)
  // const day = fecha.getDay()
  // console.log(day) // 1
  // console.log(dias[day-1])
  let dd = dias[num-1]
  dd != undefined ? msj(dd) : console.log(' día no existe ')
  //console.log(dd)


}