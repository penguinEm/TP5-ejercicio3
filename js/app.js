/* 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.  */

/*    ---------------------------VARIABLES GLOBALES -----------------------------------------------*/
const formularioTarea = document.querySelector("#formularioTarea");

/*    ---------------------------FUNCIONES -----------------------------------------------*/

const agregarTarea = (e) => {
  e.preventDefault();
  const inputTarea = document.querySelector("#inputTarea").value;

  const tareaNueva = document.createElement("li");
  tareaNueva.innerHTML = inputTarea;
  tareaNueva.className = "col-lg-9 col-md-9 col-sm-9 mx-3";
  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.innerHTML = "Borrar";
  btnEliminar.className =
    "btn btn-outline-danger col-lg-1 col-md-1 col-sm-1 w-auto text-center mx-auto";

  const contendorLista = document.querySelector(".list-unstyled");
  contendorLista.append(tareaNueva);
  contendorLista.append(btnEliminar);

  btnEliminar.addEventListener("click", () => {
    tareaNueva.remove();
    btnEliminar.remove();
  });

  document.querySelector("#inputTarea").value = "";
};

/*    ---------------------------PARTE LÓGICA -----------------------------------------------*/
formularioTarea.addEventListener("submit", agregarTarea);
