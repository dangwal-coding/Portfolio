const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});
// here the code of deergha sandhi page code
//assigning Sangyas
const ak = [
  "अ",
  "आ",
  "इ",
  "ई",
  "उ",
  "ऊ",
  "ऋ",
  "ॠ",
  "ऌ",
  "ा",
  "ि",
  "ी",
  "ु",
  "ू",
  "ृ",
  "ॄ",
  "ॢ",
];

const deergha = [
  "आ",
  "आ",
  "ई",
  "ई",
  "ऊ",
  "ऊ",
  "ॠ",
  "ॠ",
  "ॠ",
  "ा",
  "ी",
  "ी",
  "ू",
  "ू",
  "ॄ",
  "ॄ",
  "ॄ",
];

//sawarna sangyas
const a = ["अ", "आ", "ा"];
const i = ["इ", "ई", "ि", "ी"];
const u = ["उ", "ऊ", "ु", "ू"];
const r = ["ऋ", "ॠ", "ऌ", "ृ", "ॄ", "ॢ"];

function deerghaSandhi(event) {
  event.preventDefault();
  const preContainer = document.getElementById("preWord");
  const postContainer = document.getElementById("postWord");

  let preWord = preContainer.value;
  let postWord = postContainer.value;
  let preLetter = preWord.slice(-1);
  let postLetter = postWord.slice(0, 1);

  let index = ak.indexOf(preLetter);
  let adesh = deergha[index];

 let output ="";
  if (
    (a.includes(preLetter) && a.includes(postLetter)) ||
    (i.includes(preLetter) && i.includes(postLetter)) ||
    (u.includes(preLetter) && u.includes(postLetter)) ||
    (r.includes(preLetter) && r.includes(postLetter))
  ) {
    output = preWord.slice(0, -1) + adesh + postWord.slice(1);
  } else {
    output = "Invalid Input";
  }
  // Nayi row banayein (har attempt ke liye)
  const tableBody = document.querySelector("#resultTable tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${preWord}</td>
        <td>${postWord}</td>
        <td>${output}</td>
    `;
  tableBody.appendChild(newRow);

  document.getElementById("resultTable").style.display = "table";
}
