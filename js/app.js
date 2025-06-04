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

//vidhi sutra
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

  const resultBox = document.getElementById("result");

  if (
    (a.includes(preLetter) && a.includes(postLetter)) ||
    (i.includes(preLetter) && i.includes(postLetter)) ||
    (u.includes(preLetter) && u.includes(postLetter)) ||
    (r.includes(preLetter) && r.includes(postLetter))
  ) {
    resultBox.value = preWord.slice(0, -1) + adesh + postWord.slice(1);
  } else {
    resultBox.value = "Invalid Input";
  }
}

//here the code of deergha sandhi page code ends
function deerghaSandhi(event) {
  event.preventDefault();
  const preWord = document.getElementById("preWord").value;
  const postWord = document.getElementById("postWord").value;
  // Replace this with your actual sandhi logic
  const result = preWord + postWord;

  // Nayi row banayein
  const tableBody = document.querySelector("#resultTable tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${preWord}</td>
        <td>${postWord}</td>
        <td>${result}</td>
    `;
  tableBody.appendChild(newRow);

  document.getElementById("resultTable").style.display = "table";
  // document.getElementById('preWord').value = '';
  // document.getElementById('postWord').value = '';
}
