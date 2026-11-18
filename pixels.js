// TD 3 : capture de la webcam, boucle de traitement et mesures
// À compléter en suivant les sections 1, 2, 3, 7, 8, 9 et 10 de l'énoncé.
//
// Éléments de la page : camera, fichier, filtre, param, valParam, fond,
//                       video, pastille, sortie, perf
// Les filtres sont dans l'objet Filtres (fichier filtres.js, chargé avant celui-ci).


const $ = (id) => document.getElementById(id);

const video = $("video");

$("camera").addEventListener("click", async () => {
    const flux = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
        audio: false
    });

    video.srcObject = flux;
    await video.play();
});
