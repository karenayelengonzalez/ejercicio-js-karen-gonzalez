alert("Bienvenido");
let nombreDelAlumno = prompt("Nombre del Alumno");
let apellidoDelAlumno = prompt("Apellido del alumno");
let genero = prompt("ingrese genero del niño (masculino/femenino)");
let autorizacion = prompt("¿Da autorización para las actividades? (Sí/No):");
" Su hijo/a es " + nombreDelAlumno + " " + apellidoDelAlumno + "?";

if (autorizacion === "si") {
  console.log(prompt("coloque DNI"));
  alert("su hijo/a se inscribio correctamente");
} else {
  console.log(alert("gracias por su tiempo"));
}

//excursion

let excursion = 100000;
let comedor = prompt("con comedor");
if (comedor === "si") {
  console.log(alert("vale 20000"));
  excursion += 20000;
} else {
  console.log(alert("contrato sin comedor: el alumno debera llevar su vianda"));
}
alert(`el total a pagar es ${excursion}`);
prompt("quiere registrar otro alumno?");

//cantidad de niños

let contadorNiños = 0;
let contadorNiñas = 0;

let niñosInscriptos = [];
function registroDeAlumnos() {
  if (niñosInscriptos.length >= 20) {
    console.log("no es posible inscribir al alumno. Cupos llenos");
    return;
  }
}

// //cantidad de niños

// let contadorNiños = 0;
// let contadorNiñas = 0;

// let niñosInscriptos = [];
// function registroDeAlumnos() {
//   if (niñosInscriptos.length >= 20) {
//     console.log("no es posible inscribir al alumno. Cupos llenos");
//     return;
//   }
// }

//contar la cantidad de nenes y nenas que viene al campañento a amedida que se van inscribiendo
// Incrementar el contador correspondiente al género
if (genero === "masculino" || genero === "m") {
  contadorNiños++;
} else if (genero === "femenino" || genero === "f") {
  contadorNiñas++;
} else {
  console.log("Género no válido. Ingrese 'masculino' o 'femenino'.");
}
let nuevoNiño = {
  nombreDelAlumno: nombre,
  genero: genero,
  autorizacion: autorizacion,
};
niñosInscriptos.push(nuevoNiño);
function mostrarEstadisticas() {
  console.log(`Total de niños inscritos: ${contadorNiños}`);
  console.log(`Total de niñas inscritas: ${contadorNiñas}`);
  console.log("----- Niños Inscritos -----");

  niñosInscriptos.forEach((niño, index) => {
    console.log(`Niño ${index + 1}:`);
    console.log(`Nombre: ${niño.nombre}`);
    console.log(`Género: ${niño.genero}`);
    console.log(`Autorización: ${niño.autorizacion}`);
    console.log(`Incluir Comedor: ${niño.incluirComedor ? "Sí" : "No"}`);
    console.log(`Costo Total: $${niño.costoTotal}`);
    console.log("--------------------");
  });
}

alert = "quiere usted ser acompañante resposable del curso?";
let edad = prompt("coloque su edad ");
if (edad >= 18) {
  console.log(prompt("ingrese nombre y apellido "));
  alert =
    "gracias por su tiempo ya esta inscripto para ser un adulto responsable del curso de 4°A";
} else {
  console.log("debes ser mayor de edad");
}
//
