// Selecciona los elementos del DOM
let text_encriptar = document.querySelector(".text-income");
let text_output = document.querySelector(".text_output");
let outputImage = document.querySelector(".output-image"); // Selecciona la imagen
let outputMessages = document.querySelectorAll(".output-message"); // Selecciona todos los mensajes de texto

function btn_encriptar() {
    // Encriptar el texto y asignar el resultado al textarea de salida
    const textoencriptado = encriptar(text_encriptar.value);
    text_output.value = textoencriptado;


    // Verifica si hay texto en el textarea de salida
    if (textoencriptado.trim()) {
        // Oculta la imagen y los mensajes de texto si hay texto encriptado
        outputImage.style.display = 'none';
        outputMessages.forEach(message => message.style.display = 'none');
    } else {
        // Muestra la imagen y los mensajes de texto si el textarea está vacío
        outputImage.style.display = 'block';
        outputMessages.forEach(message => message.style.display = 'block');
    }
}

function btn_desencriptar(){
    const textodesencriptado = desencriptar(text_encriptar.value);
    text_output.value = textodesencriptado;

     // Verifica si hay texto en el textarea de salida
     if (textodesencriptado.trim()) {
        // Oculta la imagen y los mensajes de texto si hay texto encriptado
        outputImage.style.display = 'none';
        outputMessages.forEach(message => message.style.display = 'none');
    } else {
        // Muestra la imagen y los mensajes de texto si el textarea está vacío
        outputImage.style.display = 'block';
        outputMessages.forEach(message => message.style.display = 'block');
    }
}

// Función para el botón de copiar, que mantiene el texto en el área de salida
document.querySelector(".copy").addEventListener("click", function() {
    // Copia el texto del textarea de salida al portapapeles
    navigator.clipboard.writeText(text_output.value).then(() => {
        // Muestra una alerta cuando el texto ha sido copiado
        alert("Texto copiado al portapapeles!");
    }).catch(err => {
        // Muestra un mensaje de error en caso de fallo
        console.error("Error al copiar el texto: ", err);
    });
});



function encriptar(frase_encriptar){
    let matriz =[["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    frase_encriptar = frase_encriptar.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(frase_encriptar.includes(matriz[i][0])){
            frase_encriptar = frase_encriptar.replaceAll(matriz[i][0], matriz[i][1])
        }
    }

    return frase_encriptar;
}

function desencriptar(frase_desencriptar){
    let matriz =[["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    frase_desencriptar = frase_desencriptar.toLowerCase()

    for(let i = 0; i < matriz.length ; i++){
        if(frase_desencriptar.includes(matriz[i][0])){
            frase_desencriptar = frase_desencriptar.replaceAll(matriz[i][1], matriz[i][0])

        }
    }

    return frase_desencriptar;
}