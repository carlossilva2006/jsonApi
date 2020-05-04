let jsonPedido=[{}];

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
}

function fila(elem){
    jsonPedido=elem;
    conten.innerHTML="";
    for(let i = 0; i< jsonPedido.length; i++){    
    conten.innerHTML +=`<tr>
                            <td>${jsonPedido[i].userId}</td>
                            <td>${jsonPedido[i].id}</td>
                            <td>${jsonPedido[i].title}</td>
        <td>${jsonPedido[i].completed}</td>
     </tr>`
    }
        
}   
    

 
  
