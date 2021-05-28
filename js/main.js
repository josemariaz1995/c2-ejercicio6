const pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

const numeroPacientes = pacientes.reduce((acumulador) => ++acumulador, 0);
const dietaDiabetes = pacientes
  .filter((pacientes) => pacientes.paciente.sexo === "H")
  .filter((pacientes) => pacientes.dieta === "Diabetes")
  .reduce((acumulador) => ++acumulador, 0);
const mayoresEdad = pacientes
  .filter((pacientes) => pacientes.paciente.edad > 17)
  .reduce((acumulador) => ++acumulador, 0);
const totalDiasIngresados = pacientes.reduce(
  (acumulados, dias) => acumulados + dias.diasIngresado,
  0
);
const mediaEdadMujeres = pacientes
  .filter((pacientes) => pacientes.paciente.sexo === "M")
  .reduce(
    (acumulador, pacientes, i, arrayQue) =>
      pacientes.paciente.edad / arrayQue.length + acumulador,
    0
  );

const nuevaArrayDatosPaciente = {
  nPacientes: numeroPacientes,
  nMayoresEdad: mayoresEdad,
  nHombresDiabeticos: dietaDiabetes,
  totalDiasIngreso: totalDiasIngresados,
  mediaEdadMujeres: mediaEdadMujeres,
};

console.log(nuevaArrayDatosPaciente);
