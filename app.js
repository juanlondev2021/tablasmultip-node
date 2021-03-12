//////////////
const { crearArchivo } = require('./multiplicar/mutiplicar');
const { listarTabla } = require('./multiplicar/mutiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo }`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
};
//let base = "js";

/*
let data = '';

for (let index = 1; index <= 10; index++) {
    // const element = array[index];
    data += (base + ' * ' + index + ' = ' + (2 * index) + '\n');

}

//const data = new Uint8Array(Buffer.from(data));
fs.writeFile(`archivos/table-${base}.csv`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido creado! `);
});

*/

//console.log(module);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
//console.log(argv.base);
//console.log('limite: ', argv.limite);
//console.log(argv2);

//console.log(argv);

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${ archivo }`))
    .catch(err => console.log(err));*/