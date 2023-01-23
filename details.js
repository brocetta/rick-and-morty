const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const btn = document.querySelector("button");

btn.addEventListener("click", (event) =>{
    window.location.href='index.html'
})

fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((res) => res.json())
  .then((data) => {
    const img = document.createElement("img");
    img.src = data.image;
    div1.append(img);

    const name = document.createElement("h2");
    name.textContent = data.name;
    div2.append(name);

    const species = document.createElement("span");
    species.textContent = data.species;
    div2.append(species);

    // you can add more elements
  });