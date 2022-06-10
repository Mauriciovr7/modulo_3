const p1 = {
  nombre: 'Pedro Picapiedra',
  edad: 30,
  oficio: 'constructor',
  print: function(css) {
    const elemento = document.querySelector(css)
    elemento.innerHTML = 'Pedro Picapiedra'
  }
}

const p2 = {
  nombre: 'Pablo Marmol',
  edad: 22,
  oficio: 'operador de grúa',
  print: function(css) {
    const elemento = document.querySelector(css)
    elemento.innerHTML = 'Pablo Marmol'
  }
}

