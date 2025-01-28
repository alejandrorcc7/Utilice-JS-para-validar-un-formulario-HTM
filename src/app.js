window.onload = function() {
  let form = document.querySelector("Card");
  form.addEventListener("submit", evento => {
    evento.preventDefault();

    console.log(evento);
  });

  let message = document.querySelector("#Message");
};
function saludar() {
  alert("Haciendo click");
}
