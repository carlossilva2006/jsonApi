/*let jsonPedido=[
    {
        userId:1,
        id:1,
        title:"delectus aut autem",
        completed:false
    },
    {
        userId:1,
        id:2,
        title:"quis ut nam facilis et officia qui",
        completed:false
    },
    {
        userId:1,
        id:3,
        title:"fugiat veniam minus",
        completed:false
    },
    {
        userId:1,
        id:4,
        title:"et porro tempora",
        completed:true
    }
];*/

/*    jsonPedido.push(jsonlistado);
      */
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
    info.push(jsonagrega);
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
    

 
  