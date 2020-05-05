let jsonPedido = [];

let User = document.getElementById("inUser");
let Id = document.getElementById("inId");
let Titt = document.getElementById("inTi");
let Comple =document.getElementById("selCom");
let conten = document.getElementById("conten");

function agregar() {
    var jsonagrega = {
        userId: User.value,
        id: Id.value,
        title: Titt.value,
        completed: selCom.value  
    }
    jsonPedido.push(jsonagrega);
    llenarTabla();
}

async function traerInformacionInternet() {
    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>res.json()) 
    .then(pru => {
        jsonPedido = pru;
        llenarTabla();
    });
}

function llenarTabla() {
    var x = 0;
    conten.innerHTML = "";
    for(let info of jsonPedido) {
        conten.innerHTML += `
        <tr onclick="llenaFormulario(${x})">
            <td>${info.userId}</td>
            <td>${info.id}</td>
            <td>${info.title}</td>
            <td>${info.completed}</td>
        </tr>`;
        x++;
    }
}

function llenaFormulario(item) {
    User.value = jsonPedido[item].userId;
    Id.value = jsonPedido[item].id;
    Titt.value = jsonPedido[item].title;
    selCom.value = jsonPedido[item].completed
}

traerInformacionInternet();
