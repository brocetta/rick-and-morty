const main = document.querySelector("main");

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((res) => createCards(res.results));

const createCards = (data) => {
  data.forEach((element) => {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const btn = document.createElement("button");

    card.className = "card";
    name.className = "name";
    btn.className = "button";
    img.src = element.image;
    name.textContent = element.name;
    btn.innerHTML = "Like";

    
    main.append(card);
    card.append(img, name, btn);
    btn.addEventListener("click", (event) => {
      // btn.style.backgroundColor = "greenyellow"
      event.stopPropagation();
      btn.classList.toggle("active");
    });
    card.setAttribute("data-id", element.id);
    card.addEventListener("click", (event) => {
      const id = event.currentTarget.getAttribute("data-id");
      window.location.href = `details.html?id=${id}`;
   });
  });
};