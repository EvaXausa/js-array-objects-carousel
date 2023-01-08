console.log("JS OK");

//#FUNZIONI
function changePic(target) {
  console.log("target:" + target);
  //Rimuovo la classe active dall'immagine corrente
  images[currentActiveIndex].classList.remove("active");
  thumbs[currentActiveIndex].classList.remove("active");

  if (target === "next") {
    //Incremento l'indice
    currentActiveIndex++;

    // !controlliamo se siamo oltre l'array
    if (currentActiveIndex === images.length) currentActiveIndex = 0;
  } else if (target === "prev") {
    //Decremento l'indice
    currentActiveIndex--;
    // !controlliamo se siamo in negativo
    if (currentActiveIndex < 0) currentActiveIndex = images.length - 1;
  } else {
    currentActiveIndex = target;
  }
  // Assegno la classe active col nuovo indice
  imges[urrentActiveIndex].classList.add("active");
  thumbs[currentActiveIndex].classList.add("active");
}

// OPERAZIONI INIZIALI
//Recupero la galleria
const gallery = document.querySelector("#carousel .gallery");

//Recupero anche la galleria dei thumbnails
const thumbGallery = document.getElementById("thumbnails");

let imageElements = "";
for (let i = 0; i < sources.length; i++) {
  imageElements += ` < img src='${pictures[i]}' alt='landscape_${i}'> `;
}
gallery.innerHTML = imageElements;
thumbGallery.innerHTML = imageElements;
//Recupero le immagini
const images = document.querySelectorAll("gallery img");
//Recupero i thumbnails
const thumbs = document.querySelectorAll("#thumbnails img");
//Metto la prima immagine come active
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add("active");
//... anche al thumbnails
thumbs[currentActiveIndex].classList.add("activer");
//Recupero i bottoni
const prev = document.getElementById("prev");
const next = document.getElementById("next");
// # EVENTI DINAMICI
// Aggancio evento al bottone next
next.addEventListener("click", function () {
  changePic("next");
});
//Aggancio evento al bottone prev
prev.addEventListener("click", function () {
  changePic("prev");
});
//Rendiamo cliccabili i thumbnails
for (let i = 0; i < thumbs.length; i++) {
  //Recupero di volta in volta un thumb...
  const thumb = thumbs[i];
  thumb.addEventListener("click", function () {
    changePic(i);
  });
}
