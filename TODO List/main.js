const InputBox = document.getElementById("itemInput");
const InputList = document.getElementById("ListContainer");

function Addtask() {
  if (InputBox.value === "") {
    alert("Pleaes Enter Your Task!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    InputList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  InputBox.value = "";
}
InputList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
