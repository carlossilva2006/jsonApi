let jsonPedido=[];
 jsonPedido=elem;


let User = document.getElementById("inUser");
let Id = document.getElementById("inId");
let Titt = document.getElementById("inTi");
let Comple =document.getElementById("inCom");
let conten = document.getElementById("conten");

function btnAgregar(){
    jsonagrega={
        userId : User.value,
        id : Id.value,
        title :Titt.value,
        completed :Comple.value  
    }
    jsonPedido.push(jsonagrega);
 llenar();
}
llenar();
function llenar(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>res.json()) 
    .then(pru => {
        fila(pru);
    }) 
    .catch()
}

function fila(elem){
    conten.innerHTML="";
    for(let info of elem){
        conten.innerHTML +=`<tr>
                                 <td>${info.userId}</td>
                                 <td>${info.id}</td>
                              <td>${info.title}</td>
        <td>${info.completed ? "True" : "false"}</td>
     </tr>`
    }
        
    }
    

 
  
