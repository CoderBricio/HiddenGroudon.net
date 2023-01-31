function validar(){
    var login = document.getElementById('emailid').value;
    var senha = document.getElementById('senhaid').value;
    

    if(login == 'admin' && senha == 'admin'){
        location.href= "../Rotas/HomeAdmin.html";
    }else if(login == 'cliente' && senha == 'cliente'){
        location.href= "../Rotas/HomeCliente.html";
    }else{
       document.getElementById('Alerta').innerHTML = "Os dados inserios estão incorretos, use admin nos dois campos ou cliente"
    }
}

