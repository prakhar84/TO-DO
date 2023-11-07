const head = document.getElementById("heading");
const today = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = days[today.getDay()];
const date = new Date();
const current_date =
  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
head.innerText = `TO-DO LIST --> ${day} (${current_date})`;

const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listcontainer");
var category = document.getElementById("category");
const colors = {
  General: "red",
  Personal: "blue",
  Bookstoread: "green",
  ToBuy: "orange",
};

function addTask() {
  if (category.value === "0") {
    alert("Select a category !!!");
  } else if (inputBox.value === "")
    alert(`Enter your ${category.value} tasks !!!`);
  else {
    let li = document.createElement("li");
    li.innerHTML = category.value + "-->" + inputBox.value;
    li.style.color = colors[category.value.split(" ").join("")];
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  category.value = "0";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
