//display side menu
let object = document.querySelector("#sides_menu");
let btn = document.querySelectorAll(".order");
let closeBtn = document.getElementById("close_btn");
let cancel_btn = document.getElementById("cancel_btn");
let submitBtn = document.getElementById("submit");

function showMenu() {
  object.classList.remove("disabled");
  object.classList.add("active");
}

function closeMenu() {
  object.classList.remove("active");
  object.classList.add("disabled");
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", showMenu, false);
}
closeBtn.addEventListener("click", closeMenu);
cancel_btn.addEventListener("click", closeMenu);

// form validation

function validateForm() {
  // Get the value of the input field with id="email"
  let x = document.getElementById("email").value;
  // If x is Not a Number type succes
  // If not PLease enter valid email
  let text;
  if (isNaN(x)) {
    text = "Success";
  } else {
    text = "Please enter valid Name";
  }
  document.getElementById("demo").innerHTML = text;
}

submitBtn.addEventListener("click", validateForm);
