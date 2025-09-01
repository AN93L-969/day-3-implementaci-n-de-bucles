let area = "";
let opcionesFront = "";
let opcionesBack = "";
let decision = "";
let tecnologias = "";
let listTecnologias = [];
let salida = "ok";

area = prompt("Quieres enfocarte hacia el área de Front-End o hacia el área de Back-End?");

if (area.toLowerCase() == "front-end") {
    opcionesFront = prompt("Quieres aprender React o aprender Vue?");
}else if (area.toLowerCase() == "back-end") {
    opcionesBack = prompt("Quieres aprender C# o aprender Java?");
}

decision = prompt(`Quieres seguir especializándose en ${area} o desarrollarse para convertirse en Fullstack?`);

while (salida.toLowerCase() == "ok") {
    tecnologias = prompt("En qué tecnologías te gustaría especializarte o conocer?");
    listTecnologias.push(tecnologias);

    salida = prompt("¿Hay alguna otra tecnología que te gustaría aprender?\n Si es así, escribe 'ok'. De lo contrario, escribe 'no' para finalizar.");
}

alert(`Te has enfocado en el área de '${area}'.\n Has decidido '${decision}'.\n Te gustaría aprender las siguientes tecnologías: ${listTecnologias.join(", ")}.`);