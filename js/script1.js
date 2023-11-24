const inputBox = document.getElementById("textvalue");
const listContainer = document.getElementById("list-container");

const addtask = () => {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
};
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

const savedata = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const datarefresh = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
datarefresh();
