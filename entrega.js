alert("Bienvenido al registro unico para los alumnos de 4to. `A`");

let contadorNiños = 0;
let contadorNiñas = 0;
let niñosInscriptos = [];

// Función para registrar un nuevo alumno cupo maximo 5 alumnos
function registrarAlumno() {
  if (niñosInscriptos.length >= 5) {
    console.log("No es posible inscribir al alumno. Cupos llenos.");
    return;
  }

  let nombreDelAlumno = prompt("Nombre del Alumno:");
  let apellidoDelAlumno = prompt("Apellido del alumno:");
  let genero = prompt("Ingrese género del alumno (masculino/femenino):");

  //autorizacion del alumno para ir al campamento
  let autorizacion = prompt("¿Da autorización para las actividades? (Sí/No):");
  if (autorizacion === "si") {
    console.log(prompt("coloque DNI"));
    alert("su hijo/a se inscribio correctamente");
  } else {
    console.log(alert("gracias por su tiempo"));
  }

  // comedor
  let incluirComedor = prompt("¿Desea incluir el comedor? (Sí/No):");

  let costoComedor = 0;
  let excursion = 100000;

  if (incluirComedor === "sí" || incluirComedor === "si") {
    costoComedor = 25000;
  }

  if (genero === "masculino" || genero === "m") {
    contadorNiños++;
  } else if (genero === "femenino" || genero === "f") {
    contadorNiñas++;
  } else {
    console.log("Género no válido. Ingrese 'masculino' o 'femenino'.");
    return;
  }

  let costoTotal = 100000 + costoComedor;
  let nuevoNiño = {
    nombre: nombreDelAlumno,
    apellido: apellidoDelAlumno,
    genero: genero,
    autorizacion: autorizacion,
    incluirComedor: incluirComedor === "sí" || incluirComedor === "si",
    costoTotal: costoTotal,
  };
  alert(`el total a pagar es ${costoComedor + excursion}`);

  niñosInscriptos.push(nuevoNiño);

  console.log(
    `Se ha registrado a ${nombreDelAlumno} ${apellidoDelAlumno} correctamente.`
  );
}

let continuarInscripcion = true;
while (continuarInscripcion) {
  registrarAlumno();
  let respuesta = prompt("¿Desea inscribir otro alumno? (Sí/No):");
  if (respuesta !== "sí" && respuesta !== "si") {
    continuarInscripcion = false;
  }
}

function mostrarEstadisticas() {
  console.log(`Total de niños inscriptos: ${contadorNiños}`);
  console.log(`Total de niñas inscriptas: ${contadorNiñas}`);
  console.log("----- Niños Inscriptos -----");

  niñosInscriptos.forEach((niño, index) => {
    console.log(`Niño ${index + 1}:`);
    console.log(`Nombre: ${niño.nombre} ${niño.apellido}`);
    console.log(`Género: ${niño.genero}`);
    console.log(`Autorización: ${niño.autorizacion}`);
    console.log(`Incluir Comedor: ${niño.incluirComedor ? "Sí" : "No"}`);
    console.log(`Costo Total: $${niño.costoTotal}`);
  });
}

mostrarEstadisticas();
