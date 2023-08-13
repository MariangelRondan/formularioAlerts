function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("regBtn");
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      const inputs = document.querySelectorAll('.form-control'); // Cambiado a querySelectorAll
      const contra1 = document.getElementById("password1").value;
      const contra2 = document.getElementById("password2").value;
      const check =  document.getElementById("terminos").checked;
  
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length === 0 || inputs[i].value.length < 6) {
          return showAlertError();
        }
      }
      
      if (contra1 !== contra2 || !check) {
        return showAlertError();
      }
  
      return showAlertSuccess();
    });
  });
  
  