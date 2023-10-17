"strict mode";
const input = document.querySelector("input");
let string = "";
let button = document.querySelectorAll(".button");
Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;
      input.classList.add("input-rt");
    } else if (e.target.innerHTML === "C") {
      string = "";
      input.value = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
