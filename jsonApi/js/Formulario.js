
/*
	Llenar la tabla con los datos que vienen de internet, memoria o base de datos en forma automática
	
	* Capturar la información desde internet, memoria o API
	* Agregar una fila en la tabla por cada registro capturado

1. Agregar

	Tomar los datos que están en los textos, agregar una fila en la tabla  e insertarlos en dicha fila
	
	* Crear un boton
	* Darle funcionalidad de agregar
	* Capturar los datos de los campos de texto
	* Validar que todos los campos estén llenos
	* Agregar una fila en la tabla
	* Agregar los valores de los campos como celdas de la fila
	* Limpiar los valores de los campos de texto una vez agregada la fila
	
2. Modificar
	
	Modificar los valores de la fila seleccionada con el mouse de la tabla
	
	* Conforme proceda, el botón de agregación podrá modificar
	* Capturar los datos seleccionados de la fila seleccionada con el mouse
	* Tomar los datos capturados y llenar los campos de texto con ellos
	* Cambiar la leyenda del botón "Agregar" por "Modificar"
	* Capturar los datos de los campos de texto
	* Validar que todos los campos estén llenos
	* Identificar la fila a modificar y reemplazar sus valores
	
3. Eliminar

	Elimina la fila seleccionada con el mouse de la tabla
	
	* Crear un botón y darle la funcionalidad de eliminar
	* Capturar los datos seleccionados de la fila seleccionada con el mouse
	* Tomar los datos capturados y llenar los campos de texto con ellos
	* Habilitar el botón "Eliminar"
	* Identificar la fila a eliminar y eliminarla
	* Vaciar los valores de los campos
	* Deshabilitar el botón "Eliminar"

4. Nuevo

	Deja vacíos los valores de los campos de texto y ubica el cursor en el primero de ellos
	
	* Crear un botón y darle la funcionalidad de limpiar los valores de los campos de texto
	* Vaciar los valores de los campos
	* Dejar el cursor en el primer campo de texto

*/

let jsonPedido=[]


let User = document.getElementById("inUser");
let Id = document.getElementById("inId");
let Titt = document.getElementById("inTi");
let Comple =document.getElementById("selCom");
let tabPedido = document.getElementById("tabPedido").tBodies[0];
let btnAgregar = document.getElementById("btnAgregar"); 
let btnEliminar = document.getElementById("btnEliminar");
let btnNuevo = document.getElementById("btnNuevo");
let SeleccionFila;

// eventListener
btnAgregar.addEventListener("click",function() { Agregar();});
btnNuevo.addEventListener("click",function() { Nuevo();});
btnEliminar.addEventListener("click",function() { Eliminar();});


function Agregar() { 
   if(User.value !==" " && Id.value !== "" && Titt.value !== " "){
         if(SeleccionFila ==null){
			agregaFila(User.value,Id.value,Titt.value,Comple.value);
		 }else{
			SeleccionFila.cells[0].innerHTML = User.value; 
			SeleccionFila.cells[1].innerHTML = Id.value; 
			SeleccionFila.cells[2].innerHTML = Titt.value; 
			SeleccionFila.cells[3].innerHTML = Comple.value;

		}  
	  }
	Nuevo();
}     
   //alert("deben estar los campos llenos");

function Nuevo(){
	User.value = " ";
	Id.value = " ";
	Titt.value =" ";
	Comple.value =" ";
	SeleccionFila = null;
	mostrarAgregar();
	ocultarEliminar();
	User.focus();
}

function Eliminar(){
 if(SeleccionFila !== null){
	 tabPedido.deleteRow(SeleccionFila.rowIndex -1);
	 Nuevo();
 }
}


async function capturaInternet() {
    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => resp.json())
    .then(respInternet =>{
        jsonPedido = respInternet;
        llenarTabla();
    })
}

function llenarTabla() { 
	tabPedido.innerHTML = "";
    for(let i = 0; i < jsonPedido.length; i++){
    agregaFila(jsonPedido[i].userId,jsonPedido[i].id,jsonPedido[i].title,jsonPedido[i].completed);
	}
}

function agregaFila(userId,id,title,completed) {
    
    let fila=tabPedido.insertRow(0);
    let celdaUserId = fila.insertCell(0);
    let celdaID = fila.insertCell(1);
    let celdaTii = fila.insertCell(2);
    let celdaCompleted = fila.insertCell(3);
    
    celdaUserId.innerHTML = userId;
    celdaID.innerHTML = id;
    celdaTii.innerHTML = title;
	celdaCompleted.innerHTML = completed;
	
	fila.addEventListener("click",function(){capturaCampos(this);});
}

function capturaCampos(fila){
User.value = fila.cells[0].innerHTML;
Id.value = fila.cells[1].innerHTML;
Titt.value = fila.cells[2].innerHTML;
Comple.value = fila.cells[3].innerHTML;

SeleccionFila = fila;
mostrarEliminar();
mostrarModificar();
}

function mostrarModificar(){
	btnAgregar.innerHTML = "Modificar";
}
	

function mostrarEliminar(){
btnEliminar.style.display = "inline-block";
}

function ocultarEliminar(){
btnEliminar.style.display = "none";
}

function mostrarAgregar(){
btnAgregar.innerHTML = "Agregar ";
}

capturaInternet();


  
