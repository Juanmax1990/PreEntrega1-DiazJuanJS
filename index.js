let nombreyapellido = prompt('ingresa tu nombre y apellido');
console.log(nombreyapellido);
alert('Bienvenido a Compumax '+nombreyapellido);
let edad = parseInt(prompt('Ingresa tu edad'));
console.log(edad)
const email = prompt('Ingresa tu email');
console.log(email);

const accion = prompt('¿Que desea comprar? \n Placa Madre  \n Microprocesadores');

if (accion === 'Placa Madre'){
    let compra=prompt('INTEL \n AMD');
    switch(compra){
        case 'INTEL':
            alert('Solo contamos con stcok de ASUS ROG Z370-H');
            break;

        case 'AMD':
            alert('Contamos con marcas comom MSI, ASUS Y GIGABYTE');
            break
                       
    }
}

if (accion === 'Microprocesadores'){
    let compra=prompt('INTEL \n AMD');
    switch(compra){
        case 'INTEL':
        alert('Contamos con todos los modelos de la gama "i"')
        break

        case 'AMD':
        alert('Tenemos los modelos Ryzen y para lo mas exigentes, los Threadripper');
        break

    }
}



