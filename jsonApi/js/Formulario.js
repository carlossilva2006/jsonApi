let jsonPedido=[]

let User = document.getElementById("inUser");
let Id = document.getElementById("inId");
let Titt = document.getElementById("inTi");
let Comple =document.getElementById("selCom");
let conten = document.getElementById("conten");

function Agregar(){
    let jsonagrega={
        userId : User.value,
        id : Id.value,
        title :Titt.value,
        completed :Comple.value  
    }
    //afirma que estan vacias saltando el required del input
    if(User=="" && Id=="" && Comple==""){
        jsonPedido.push(jsonagrega);   
        llenar();
        Nuevo();       
    }
}   

function Eliminar(){
    if(User=="" && Id=="" && Comple==""){
        User.value = $("#inUser").remove();
        Id.value   = $("#inId").remove();
        Titt.value = $("#inTi").remove();
        Comple.value =$("#inCom").remove();
    }
}

function Nuevo(){ 
   User.value = " ";
   Id.value = " ";
   Titt.value = " ";
   Comple.value = " ";
   User.focus(); 
}

async function capturarDeInternet(){
    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>res.json()) 
    .then(pru => {
        jsonPedido=pru;
        llenar();
    }) 
}

function llenar(){
    let cont =0;
    conten.innerHTML="";
        for(let info of jsonPedido){
        conten.innerHTML +=`
        <tr onclick="capturarFormulario(${cont})">
            <td>${info.userId}</td>
            <td>${info.id}</td>
            <td>${info.title}</td>
        <td>${info.completed}</td>
        </tr>`
        cont++;
    }    
}

function capturarFormulario(dato){
    User.value = jsonPedido[dato].userId;
    Id.value   = jsonPedido[dato].id;
    Titt.value = jsonPedido[dato].title;
    Comple.value = jsonPedido[dato].completed;
}
  capturarDeInternet();  

 
  
