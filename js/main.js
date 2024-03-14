// Baby Names Start
// 2020 Alberta Baby Names
// https://open.alberta.ca/opendata/frequency-and-ranking-of-baby-names-by-year-and-gender

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Baby Names from Text File
let babyNames = await loadTextFile("data/baby-names.txt");

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    container.innerHTML = "";
    displayAll();
  } else if (selection === "starting-letter") {
    container.innerHTML = "";
    searchStartingLetter();
  } else if (selection === "exact-length") {
    container.innerHTML = "";
    searchExactLength();
  } else if (selection === "range-length") {
    container.innerHTML = "";
    searchRangeLength();
  }
}

// Display All Characters
function displayAll() {
  nameCountSpan.innerHTML = babyNames.length + "<br/>";
  for (let i = 0; i < babyNames.length; i++) {
    container.innerHTML += "<br/>" + babyNames[i] + "<br/>";
  }
}

// Display Names with Starting Letter
function searchStartingLetter() {
  let letter = prompt("Please enter starting letter:");
  let newList = [];
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i][0] === letter) {
      container.innerHTML += "<br/>" + babyNames[i] + "<br/>";
      newList.push(babyNames[i]);
    }
  }
  nameCountSpan.innerHTML = newList.length + "<br/>";

  container.innerHTML = "Display Starting Letter";
  +prompt("Please enter starting letter:");
}

// Display Names with Exact Length
function searchExactLength() {
  let userNum = +prompt("Please enter exact length:");
  let newList = [];
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].length === userNum) {
      container.innerHTML += "<br/>" + babyNames[i] + "<br/>";
      newList.push(babyNames[i]);
    }
  }
  nameCountSpan.innerHTML = newList.length + "<br/>";

  container.innerHTML = "Display Exact Length";
  +prompt("Please enter exact length:");
}

// Display Names within a Range of Lengths
function searchRangeLength() {
  let userNumLow = +prompt("Please enter minimum length:");
  let userNumHigh = +prompt("Please enter maximum length:");
  let newList = [];
  for (let i = 0; i < babyNames.length; i++) {
    if (
      babyNames[i].length >= userNumLow &&
      babyNames[i].length <= userNumHigh
    ) {
      container.innerHTML += "<br/>" + babyNames[i] + "<br/>";
      newList.push(babyNames[i]);
    }
  }
  nameCountSpan.innerHTML = newList.length + "<br/>";
}
