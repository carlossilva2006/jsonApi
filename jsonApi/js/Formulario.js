let jsonPedido=[
    {
        userId : 2,
        id : 201,
        title :"dadsgsdgksdfñlalñd",
        completed :true
    }
]

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
    for(let info of elem){
        console.log(info);
        conten.innerHTML +=`<tr>
                            <td>${info.userId}</td>
                            <td>${info.id}</td>
                            <td>${info.title}</td>
                            <td>${info.completed}</td>
                        </tr>`
   
    }
}

    

 
  
