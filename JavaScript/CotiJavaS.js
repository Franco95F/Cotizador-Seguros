document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".tab");
  var tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      // Oculta todos los contenidos de pestañas y desactiva las pestañas
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });

      // Muestra el contenido de la pestaña actual y la activa
      tab.classList.add("active");
      tabContents[index].style.display = "block";
    });
  });
  /*FORMULARIO 1*/
  var formularioCompletado = document.getElementById("formularioCompletado");
  formularioCompletado.addEventListener("click", function (event) {
    event.preventDefault();

    // Obtener los datos del formulario de la "tab1"
    var codigoPostal = document.getElementById("zipe").value;
    var ceroKm = document.querySelector('input[name="km"]:checked').value;
    var marca = document.querySelector(
      "#contenido1 select[name='marca']"
    ).value;
    var añoFabricacion = document.querySelector(
      "#contenido1 select[name='añoFabricacion']"
    ).value;
    var modelo = document.querySelector(
      "#contenido1 select[name='modelo']"
    ).value;
    var accesorio = document.querySelector(
      "#contenido1 select[name='accesorio']"
    ).value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;

    // Crear HTML con los datos del vehículo
    var datosVehiculoHTML = `
 <h5 class="tab2-title">Datos del Vehículo Ingresados</h5>
 <p class="tab2-paragraph">Código Postal: ${codigoPostal}</p>
 <p class="tab2-paragraph">Cero Km: ${ceroKm}</p>
 <p class="tab2-paragraph">Marca: ${marca}</p>
 <p class="tab2-paragraph">Año de Fabricación: ${añoFabricacion}</p>
 <p class="tab2-paragraph">Modelo: ${modelo}</p>
 <p class="tab2-paragraph">Accesorio: ${accesorio}</p>
 <p class="tab2-paragraph">Email: ${email}</p>
 <p class="tab2-paragraph">Teléfono: ${telefono}</p>
 `;

    // Mostrar los datos del vehículo en el contenedor
    var datosVehiculoContainer = document.getElementById(
      "datosVehiculoContainer"
    );
    datosVehiculoContainer.innerHTML = datosVehiculoHTML;
  });
  /*FORMULARIO 2*/
  // Manejador de eventos para los enlaces de "Contratar"
  var contratarLinks = document.querySelectorAll(
    ".pricing-table .plan-name + td a"
  );
  contratarLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Obtener la información del plan seleccionado
      var planName =
        link.parentElement.previousElementSibling.textContent.trim();
      var planPrice = link.parentElement.nextElementSibling.textContent.trim();

      // Realizar acciones correspondientes al contratar el plan
      // Por ejemplo, mostrar un mensaje de confirmación o redirigir a la "tab3".

      // Ejemplo: Mostrar un mensaje de confirmación en la consola
      console.log("Contratar plan:", planName, "Precio:", planPrice);

      // Cambiar a la "tab3" después de contratar el plan
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      tabs[2].classList.add("active"); // Cambia a la pestaña 3 (índice 2)

      var tabContents = document.querySelectorAll(".tab-content");
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });
      tabContents[2].style.display = "block"; // Muestra el contenido de la pestaña 3
    });
  });
  /*FUNCION PARA VOLVER ATRAS EN LAS TABS */
  var volverAtrasButton = document.getElementById("Volver_Atras1");

  volverAtrasButton.addEventListener("click", function () {
    // Obtén el índice de la pestaña actual
    var indicePestanaActual = Array.from(tabs).findIndex(function (tab) {
      return tab.classList.contains("active");
    });

    // Calcula el índice de la pestaña anterior
    var indicePestanaAnterior = indicePestanaActual - 1;

    // Asegúrate de que el índice no sea menor que 0
    if (indicePestanaAnterior >= 0) {
      // Oculta todos los contenidos de pestañas y desactiva las pestañas
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });

      // Muestra el contenido de la pestaña anterior y la activa
      tabs[indicePestanaAnterior].classList.add("active");
      tabContents[indicePestanaAnterior].style.display = "block";
    }
  });
  var volverAtrasButton = document.getElementById("Volver_Atras2");

  volverAtrasButton.addEventListener("click", function () {
    // Obtén el índice de la pestaña actual
    var indicePestanaActual = Array.from(tabs).findIndex(function (tab) {
      return tab.classList.contains("active");
    });

    // Calcula el índice de la pestaña anterior
    var indicePestanaAnterior = indicePestanaActual - 1;

    // Asegúrate de que el índice no sea menor que 0
    if (indicePestanaAnterior >= 0) {
      // Oculta todos los contenidos de pestañas y desactiva las pestañas
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });

      // Muestra el contenido de la pestaña anterior y la activa
      tabs[indicePestanaAnterior].classList.add("active");
      tabContents[indicePestanaAnterior].style.display = "block";
    }
  });
  var volverAtrasButton = document.getElementById("Volver_Atras3");

  volverAtrasButton.addEventListener("click", function () {
    // Obtén el índice de la pestaña actual
    var indicePestanaActual = Array.from(tabs).findIndex(function (tab) {
      return tab.classList.contains("active");
    });

    // Calcula el índice de la pestaña anterior
    var indicePestanaAnterior = indicePestanaActual - 1;

    // Asegúrate de que el índice no sea menor que 0
    if (indicePestanaAnterior >= 0) {
      // Oculta todos los contenidos de pestañas y desactiva las pestañas
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });

      // Muestra el contenido de la pestaña anterior y la activa
      tabs[indicePestanaAnterior].classList.add("active");
      tabContents[indicePestanaAnterior].style.display = "block";
    }
  });

  // Manejador de eventos para el envío del formulario de la "tab3"
  var submitForm3Button = document.getElementById("submitForm3");
  submitForm3Button.addEventListener("click", function (event) {
    event.preventDefault();

    // Lógica para procesar el formulario de la "tab3" y avanzar a la "tab4"
    // Puedes personalizar esto según tus necesidades

    // Cambiar a la "tab4" después de enviar el formulario de la "tab3"
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tabs[3].classList.add("active"); // Cambia a la pestaña 4 (índice 3)

    var tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(function (content) {
      content.style.display = "none";
    });
    tabContents[3].style.display = "block"; // Muestra el contenido de la pestaña 4
  });
});

// Oculta las tablas al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  var tabContents = document.querySelectorAll(".tab-content");

  tabContents.forEach(function (content) {
    content.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".tab");
  var tabContents = document.querySelectorAll(".tab-content");
  var tabsContainer = document.getElementById("tabsContainer"); // Reemplaza con el ID real

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      // Oculta todos los contenidos de pestañas y desactiva las pestañas
      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tabContents.forEach(function (content) {
        content.style.display = "none";
      });

      // Muestra el contenido de la pestaña actual y la activa
      tab.classList.add("active");
      tabContents[index].style.display = "block";
    });
  });

  var formularioCompletado = document.getElementById("formularioCompletado");
  formularioCompletado.addEventListener("click", function (event) {
    event.preventDefault();

    // Obtener el índice de la pestaña actual
    var indicePestanaActual = Array.from(tabs).findIndex(function (tab) {
      return tab.classList.contains("active");
    });

    // Calcula el índice de la siguiente pestaña
    var indiceSiguientePestana = indicePestanaActual + 1;

    // Cambia a la siguiente pestaña
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tabContents.forEach(function (content) {
      content.style.display = "none";
    });
    tabs[indiceSiguientePestana].classList.add("active");
    tabContents[indiceSiguientePestana].style.display = "block";
  });
});

var btnFinalizar = document.getElementById("Finalizar");

btnFinalizar.addEventListener("click", function () {
  // Redirigir a la página deseada al hacer clic en "Finalizar"
  window.location.href = "index.html"; // Cambia 'pagina_finalizar.html' por la URL correcta
});
// JavaScript para mostrar el formulario al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  // Obtén el elemento div con id "contenido1"
  var formularioDiv = document.getElementById("contenido1");

  // Muestra el formulario estableciendo su estilo a "block"
  formularioDiv.style.display = "block";
});
