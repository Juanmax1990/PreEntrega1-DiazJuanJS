let nombreyapellido = prompt('ingresa tu nombre y apellido');
console.log(nombreyapellido);
alert('Bienvenido a Compumax '+nombreyapellido);
let edad = parseInt(prompt('Ingresa tu edad'));
console.log(edad);
const email = prompt('Ingresa tu email');
console.log(email);

let respuesta = false;
let precioPlaca = 0; 
let precioMicro = 0; 

while (!respuesta) {
  const accion = prompt('¿Qué desea comprar? \n Placa Madre \n Microprocesadores');
  switch (accion) {
    case 'Placa Madre':
      let compraPlaca = prompt('¿Quieres comprar una placa INTEL o AMD?');
      switch (compraPlaca) {
        case 'INTEL':
          alert('Solo contamos con stock de ASUS ROG Z370-H');
          precioPlaca = calcularPrecio('INTEL', 'Placa Madre'); // Asignar valor a precioPlaca
          alert('El precio de la placa madre es de $' + precioPlaca);
          break;
        case 'AMD':
          alert('Contamos con marcas como MSI, ASUS y GIGABYTE');
          precioPlaca = calcularPrecio('AMD', 'Placa Madre'); // Asignar valor a precioPlaca
          alert('El precio de la placa madre es de $' + precioPlaca)
          break;
        default:
          alert('Por favor, ingrese una opción válida');
          break;
      }
      console.log(compraPlaca);
      respuesta = true;
      break;
      ;

    case 'Microprocesadores':
      let compraMicro = prompt('¿Quieres comprar un micro INTEL o AMD?');
      switch (compraMicro) {
        case 'INTEL':
          alert('Contamos con todos los modelos de la gama "i"');
          precioMicro = calcularPrecio('INTEL', 'Microprocesadores'); // Asignar valor a precioPlaca
          alert('El precio de la placa madre es de $' + precioMicro);
          break;
        case 'AMD':
          alert('Tenemos los modelos Ryzen y para lo más exigentes, los Threadripper');
          precioMicro = calcularPrecio('AMD', 'Microprocesadores'); // Asignar valor a precioPlaca
          alert('El precio de la placa madre es de $' + precioMicro);
          break;
        default:
          alert('Por favor, ingrese una opción válida');
          break;
      }
      console.log(compraMicro);
      respuesta = true;

  }
}

function calcularPrecio(opcion1, opcion2) {
  let precio = 0;
  if (opcion1 === 'INTEL' && opcion2 === 'Placa Madre') {
    precio = 200;
  } else if (opcion1 === 'AMD' && opcion2 === 'Placa Madre') {
    precio = 150;
  } else if (opcion1 === 'INTEL' && opcion2 === 'Microprocesadores') {
    precio = 300;
  } else if (opcion1 === 'AMD' && opcion2 === 'Microprocesadores'){
    precio = 250;

  }
return precio
}