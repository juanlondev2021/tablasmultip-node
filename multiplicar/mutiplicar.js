//requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(base + ' * ' + i + ' = ' + (base * i));

    }

}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido -->${ base }<-- no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            // const element = array[index];
            data += (base + ' * ' + index + ' = ' + (base * index) + '\n');

        }

        //const data = new Uint8Array(Buffer.from(data));
        fs.writeFile(`archivos/table-${base}.csv`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla ${ base }.csv`)
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}