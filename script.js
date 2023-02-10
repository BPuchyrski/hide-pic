const img = document.querySelector(".item1");
const btn = document.querySelector(".arrow");
let libraryArr = [];
let queueArr = [];
let id = "Banana";
let addToLibrary = (id) => {
  let parsedLibrary = JSON.parse(localStorage.getItem("library"));

  if (libraryArr.includes(id)) {
    return;
  } else if (libraryArr.length <= 0 && parsedLibrary !== null) {
    parsedLibrary.forEach((element) => {
      libraryArr.unshift(element);
    });
    if (libraryArr.includes(id)) {
      return;
    } else {
      libraryArr.unshift(id);
    }
  } else {
    libraryArr.unshift(id);
  }
  console.log(parsedLibrary);
  console.log(libraryArr);
};

let addToQueue = () => {
  queueArr.unshift(movieId);
  localStorage.setItem("queue", JSON.stringify(queueArr));
};

btn.addEventListener("click", () => {
  addToLibrary(id);
  localStorage.setItem("library", JSON.stringify(libraryArr));
  img.classList.toggle("hide");
  btn.classList.toggle("arrowRotate");
});
