let formulario = {
    nombre: '  margarita  ',
    apellido: 'gonZalez ',
    edad: null,
    direccion: {
        pais: 'Chile',
        region: 'Metropolitana',
        ciudad: 'Santiago',
        calle: 'Calle Falsa',
        numero: 123
    },
    puesto: 'Ingeniero de Software',
    salario: 2_500_000,
    preferenciaColor: null,
    habilidades: ['JavaScript', 'React', 'Node.js']
};

function procesarFormulario() {
    const nombre = formatearTexto(formulario.nombre);
    const apellido = formatearTexto(formulario.apellido);
    const edad = verificarEdad(formulario.edad);
    const direccion = verificarDireccion(formulario.direccion);
    const puesto = formatearTexto(formulario.puesto);
    const salario = verificarSalario(formulario.salario);
    const preferenciaColor = verificarColor(formulario.preferenciaColor);
    const habilidades = verificarHabilidades(formulario.habilidades);

    mostrarResultados(`
        Nombre: ${nombre}
        Apellido: ${apellido}
        Edad: ${edad}
        Dirección: ${direccion}
        Puesto: ${puesto}
        Salario: ${salario.toLocaleString('es-CL')}
        Preferencia de color: ${preferenciaColor}
        Habilidades: ${habilidades.join(', ')}
    `);

    aplicarOperadoresLogicosDeAsignacion();
}

function formatearTexto(texto) {
    // Eliminar espacios al inicio y al final,
    //y luego reemplazar múltiples espacios internos por un solo espacio
    // ' margarita '
    // 'gonZalez '
    const formateado = texto?.trimStart().trimEnd().replace(/\s+/g, ' ');
    // 'margarita'
    // 'gonZalez'

    // Convertir la primera letra en mayúscula y el resto en minúsculas
    return formateado.charAt(0).toUpperCase() + formateado.slice(1).toLowerCase();
    // 'Margarita'
    // 'Gonzalez'
}

function verificarEdad(edad) {
    //Operador Fusión Nula ??
    return edad ?? 18;
}

function verificarDireccion(direccion) {
    return `${direccion.calle} ${direccion.numero}, ${direccion.ciudad}, ${direccion.region}, ${direccion.pais}`;
}

function verificarSalario(salario) {
    return salario;
}

function verificarColor(color) {
    //Operador Fusión Nula ??

    return color ?? 'No especificado';
}

function verificarHabilidades(habilidades) {
    return habilidades?.length > 0 ? habilidades : ['No especificadas'];
}

function aplicarOperadoresLogicosDeAsignacion() {
    // Si el nombre del formulario es falsy (null, undefined, '', 0, etc.), 
    //asigna 'Nombre por defecto'
    formulario.nombre ||= 'Nombre por defecto';

    // Si el apellido del formulario es truthy (no es null, undefined, '', 0, etc.),
    //asigna 'Apellido establecido'
    formulario.apellido &&= 'Apellido establecido';

    // Si la preferencia de color del formulario es null o undefined, 
    //asigna 'Verde (por defecto)'
    formulario.preferenciaColor ??= 'Verde (por defecto)';

    mostrarResultados(`
        Nombre después de ||= : ${formulario.nombre}
        Apellido después de &&= : ${formulario.apellido}
        Preferencia de color después de ??= : ${formulario.preferenciaColor}
    `);
}

function mostrarResultados(mensaje) {
    let resultadosDiv = document.getElementById('resultados');
    resultadosDiv.textContent += mensaje + '\n';
}
