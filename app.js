const input = document.querySelector("#ipt");
let inputBuscador = "";

document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("keydown", function (e) {
    inputBuscador = e.target.value;
    console.log(inputBuscador);
    if (e.key === "Enter") {
      valorInput();
    }
  });
});

function valorInput() {
  const gallery = document.querySelector(".images");
  gallery.innerHTML = "";

  getApi(inputBuscador);
}

async function getApi(query) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=phCHgplMSga8n28MGDpYUQd0VL9ZJ_L6QOo-unXfT3M`
  );
  const data = await response.json();

  pintado(data.results);

  input.value = "";
}

function pintado(dt) {
  const gallery = document.querySelector(".images");
  dt.forEach((ft) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("bg-image");

    const img = document.createElement("img");
    img.src = ft.urls.regular;
    img.alt = ft.alt_description;

    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
  });
}
