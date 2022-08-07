document.addEventListener("DOMContentLoaded", function (event) {
  lightbox.option({
    positionFromTop: 250,
    imageFadeDuration: 100,
  });

  const regexNumber = /[^0-9]/g;
  const regexName = /[0-9\.\,\/\/]/g;

  const inputName = document.querySelector("#name");
  const inputAdress = document.querySelector("#adress");
  const inputNumber = document.querySelector("#number");

  const formButton = document.querySelector("#button_form");
  const form = document.querySelector(".delivery_form");
  const popUpButton = document.querySelector("#button_pop-up");
  const popUp = document.querySelector(".pop_up");

  inputName.oninput = function () {
    this.value = this.value.replace(regexName, "");
  };

  inputNumber.oninput = function () {
    this.value = this.value.replace(regexNumber, "");
  };

  formButton.addEventListener("click", (event) => {
    if (!inputName.value | !inputAdress.value | !inputNumber.value) return;

    event.preventDefault();

    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.open("POST", "http://someurl");
    request.send(formData);

    popUp.classList.add("active");
  });

  popUpButton.addEventListener("click", (event) => {
    popUp.classList.remove("active");
  });
});
