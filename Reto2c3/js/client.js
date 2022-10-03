

function leerClientes() {
    //Funcion GET
    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType: 'json',
        
        success: function (clientes) {
            let cs=clientes.items;
            $("#listaClientes").empty();
            for(i=0;i<cs.length;i++){
                $("#listaClientes").append("<span style='color: rgb(255, 251, 0);'>"+"<b>ID: </b>"+cs[i].id+"  " + "<b>NOMBRE: </b>"+cs[i].name+"  "+"<b>CORREO: </b>"+cs[i].email+"  "+"<b>EDAD: </b>"+cs[i].age+" ");
                $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>")
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }       
    });
}


function guardarCliente() {
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let correo=$("#emailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:correo,
        age:edad
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'POST',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edadCliente").val("");
            
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
    });
}


function editarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let correo=$("#emailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:correo,
        age:edad
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'PUT',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edadCliente").val("");
            
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
               
    });   
}

function borrarCliente(idCliente){


    let data={
        id:idCliente
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'DELETE',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edadCliente").val("");
            
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }              
    });   
}