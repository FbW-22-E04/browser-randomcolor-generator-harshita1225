const input = document.querySelector("input");
const addButton = document.querySelector("#add");
const box = document.querySelector(".box");
const closeButtons = document.querySelectorAll(".close");
const container = document.querySelector(".container");

const randomColorGenerator = (number) => {
  let hexArray = [];
  for (let i = 0; i < number; i++) {
    let hex = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    hexArray.push(hex);
  }
  console.log(hexArray);

  for (let i = 0; i < number; i++) {
    container.innerHTML += `<div class="box box${i}">
      <button class="close">X</button>
   </div>`;
  }

  for (let i = 0; i < number; i++) {
    document.querySelector(`.box${i}`).style.backgroundColor = hexArray[i];
  }
};
//add color boxes using event listner

add.addEventListener("click", () => {
  randomColorGenerator(input.value);
});

//init

const init = () => {
  for (let i = 0; i < 3; i++) {
    container.innerHTML += `<div class=" box box${i}">
        <button class="close">X</button>
     </div>`;
    document.querySelector(`.box${i}`).style.backgroundColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }
};

window.addEventListener("load", (event) => {
  init();
});
//close color boxes

function removeItemHandler(e) {
  const isDeleteButton = e.target.closest(".close");

  if (isDeleteButton !== null) {
    const item = e.target.closest("div");
    container.removeChild(item);
  }
}

container.addEventListener("click", removeItemHandler);
