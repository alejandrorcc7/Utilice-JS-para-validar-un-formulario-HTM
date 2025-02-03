let form = document.getElementById("container");
let send = document.getElementById("send-submit");
let alertMessage = document.getElementById("alert");

window.onload = function() {

    
  send.addEventListener("click", function(event) {
    const requiredFieldIds = ["Card","CVC","Amount","First","Last","City","State","Postal","message"];
    let isValid = true;

    requiredFieldIds.forEach(id => {
      const field = document.getElementById(id);
      if (!field || !field.value.trim()) {
        isValid = false;
        if (field) {
          field.classList.add("warnings");
        }
      } else {
        if (field) {
          field.classList.remove("warnings");
        }
      }
    });

    if (!isValid) {
      event.preventDefault();
      alertMessage.classList.remove("d-none");
    } else {
      alertMessage.classList.add("d-none");
    }
  });
};
