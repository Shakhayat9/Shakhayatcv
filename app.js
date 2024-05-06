import { allWebsiteData } from "./Data.js";

// Dark Mode and Light Mode
let dark = document.getElementById("darkMode");
let logo = document.getElementById("logo");
dark.onclick = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    dark.src = "./assets/images/brightness.png";
    logo.src = "./assets/images/logo-white.png";
  } else {
    dark.src = "./assets/images/night-mode.png";
    logo.src = "./assets/images/logo-dark.png";
  }
};
// all webitems links name here
itemOutput(allWebsiteData);
function itemOutput(items) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let div = document.createElement("div");
    div.classList.add("card");
    // output here
    document.getElementById("allwebsites").appendChild(div);
    div.innerHTML = `
    <div class="card-body">
      <a href="${item.link}" target="_blank"
        ><img src="./assets/images/${item.image}" alt=""
      /></a>
    </div>
    <div class="card-link">
      <a href="${item.link}" target="_blank"
        >${item.name}</a
      >
    </div>`;
  }
}
