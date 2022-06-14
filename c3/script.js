/* HTTP = seguridad , código, html, js,css, etc ademas de las webs las apps usan http, smartwatch, smart tv, autos etc ardoino(sitemas todo en uno baratitos)
HTML = codigo de transferencia por internet
solicitud GET
PUT modificar
etc
Mit Chile , controla los .cl
servidores = nube
amazone, google, huawei(no se considera)
servidor en california es mas accequible
datacenter (en moneda, Punta Arenas)
error 500 error en algun servicio ej clave unica, sii
404 no existe
interfaz (pantalla tactil, teclado, control)
API = interfaz entre 2 aplicaciones (puente entre app web y app nube)
solicitud asincrona= se vá por abajo, hace un cambio y vuelve, para así no recargar la página

*/

// $ indica el uso de jQuery
// call back lo ejecuta el navegador

// $.getJSON('https://swapi.dev/api/people/10', function(datos) {
//   console.log(datos)
// })

// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).slideUp() // hide
//   })
// })

// Ejercicio asincrónico 01

// trabajará con el chucknorris.io, una API JSON gratuita que le permitirá obtener chistes aleatorios sobre Chuck Norris.

// const h2_meme = document.querySelector('h2')
const h2_meme = document.querySelector('#meme')

const boton_recargar = document.querySelector('#btn_recargar')

function recargar_meme() {
  $.getJSON('https://api.chucknorris.io/jokes/random', function (datos) {
    console.log(datos.value)
    h2_meme.textContent = datos.value
  })
}
recargar_meme()

boton_recargar.addEventListener('click', function () { // el _ es para indicar la ausencia de parametros
  // location.reload()
  recargar_meme() // solo recargar meme(h2)
})