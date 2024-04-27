const textCode = document.getElementById("color-text");
const btn = document.getElementById(".btn");

function getColor() {
  let code = "";
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  code += randomCode;
  code = textCode;
  textCode.innerHTML = randomCode;
  console.log(randomCode);
  document.body.style.backgroundColor = randomCode;
}

btn.addEventListener("click", copyText);
{
  function copyText() {
    textCode.select();
    document.execCommand("copy");
  }
}
