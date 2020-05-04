let jsonUsuarios=[
        {
            id:1,
            login:"csilva",
            nombre:"Carlos",
            password:"carlos"
        },
        {
            id:2,
            login:"cmatus",
            nombre:"Claudio",
            password:"Claudio"
        }
]
 
let login="";
let password="";

function Ingresar() { 
    login = $("#user").val();
    password = $("#psw").val();
    if(login!="" && password!=""){
    validar();
    }
 };

function validar(){
    let retorno=false;
for( let i = 0; i < jsonUsuarios.length ; i++){
    if(login===jsonUsuarios[i].login){
       if(password===jsonUsuarios[i].password){
         retorno =true;
       }
    }
}
if(retorno){
    document.location.replace("Formulario.html");
}else{
    $("#user").val();
    $("#psw").val();
    alert("debe ingresar un usuario o contraseña validos");
    $("#user").focus();
}

}