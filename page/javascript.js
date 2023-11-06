// Función para calcular el total a pagar
function calcularTotal() {
    const cantidad = parseInt(document.getElementById("cantidad").value, 10);
    const categoria = document.getElementById("categoria").value;
  
    let descuento = 0;
    let categoriaTexto = "";
  
    if (categoria === "estudiante") {
      descuento = 0.8; // 80% de descuento para estudiantes
      categoriaTexto = "Estudiante";
    } else if (categoria === "trainee") {
      descuento = 0.5; // 50% de descuento para trainees
      categoriaTexto = "Trainee";
    } else if (categoria === "junior") {
      descuento = 0.15; // 15% de descuento para juniors
      categoriaTexto = "Junior";
    }
  
    const precioUnitario = 200; // Precio unitario de los boletos
    const totalPagar = cantidad * precioUnitario * (1 - descuento);
  
    // Actualizar el campo de "Total a pagar $"
    document.getElementById("total").value = `$${totalPagar.toFixed(2)}`;
  
    // Mostrar el resumen
    document.getElementById("resumen-cantidad").textContent = cantidad;
    document.getElementById("resumen-descuento").textContent = `${descuento * 100}%`;
    document.getElementById("resumen-categoria").textContent = categoriaTexto;
    document.getElementById("resumen-total").textContent = `$${totalPagar.toFixed(2)}`;
  }
  
  // Event listener para el botón "Resumen"
  document.getElementById("resumen").addEventListener("click", function() {
    calcularTotal(); // Calcular el total nuevamente antes de mostrar el resumen
    document.getElementById("resumen-box").style.display = "block"; // Mostrar el resumen
  });
  
  // Event listener para el botón "Borrar"
  document.getElementById("borrar").addEventListener("click", function() {
    // Restablecer todos los campos y ocultar el resumen
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "estudiante";
    document.getElementById("total").value = "";
    document.getElementById("resumen-box").style.display = "none";
    document.getElementById("resumen-cantidad").textContent = "";
    document.getElementById("resumen-descuento").textContent = "";
    document.getElementById("resumen-categoria").textContent = "";
    document.getElementById("resumen-total").textContent = "";
  });
  
  
  