let rating;
let container = document.getElementById("float-container");
let l = [1, 2, 3, 4, 5];
l.map(function (val, index) {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("value", val);
  button.onclick = function (_) {
    rating = val;
    // remove any existing button with button-selected class
    const allElement = document.querySelectorAll("button-selected");
    allElement.forEach((element) => {
      element.classList.remove("button-selected");
    });
    button.className = "float-child " + "button-selected";
  };
  button.className = "float-child";
  button.innerText = val;
  container.appendChild(button);
});

function submitForm() {
  console.log(rating);
  if (rating != undefined) {
    let ratingSection = document.getElementById("Rating");
    ratingSection.className = "hide";
    let thanks = document.getElementById("Thanks");
    thanks.className = "display";
    let result = document.getElementById("result");
    result.innerHTML =
      "You selected <span id='display-rates'>" + rating + "</span> out of 5";
  }
}
