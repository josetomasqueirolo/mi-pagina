const memes = [
    "memes/foto.jpg",
    "memes/foto 2.jpg",
    "memes/foto 3.jpg",
    "memes/foto 4.jpg",
];

let memeActual = 0;

const imagen = document.getElementById("meme");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
const contador = document.getElementById("contador");


function mostrarMeme() {
    imagen.src = memes[memeActual];

    contador.textContent =
        `${memeActual + 1} / ${memes.length}`;
}


botonSiguiente.addEventListener("click", () => {

    memeActual++;

    if (memeActual >= memes.length) {
        memeActual = 0;
    }

    mostrarMeme();
});


botonAnterior.addEventListener("click", () => {

    memeActual--;

    if (memeActual < 0) {
        memeActual = memes.length - 1;
    }

    mostrarMeme();
});


mostrarMeme();