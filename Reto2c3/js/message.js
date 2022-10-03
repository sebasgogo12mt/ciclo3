function leerMensajes() {
    //Funcion GET
    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType: 'json',
        
        success: function (mensajes) {
            let cs=mensajes.items;
            $("#listaMensajes").empty();
            for(i=0;i<cs.length;i++){
                $("#listaMensajes").append("<span style='color: rgb(255, 251, 0);'>"+"<b>ID: </b>"+cs[i].id +"  "+"<b>CONTENIDO DEL MENSAJE:</b> "+ cs[i].messagetext+"  ");
                $("#listaMensajes").append("<button onclick='borrarMensaje("+cs[i].id+")'>Borrar</button><br>")
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }       
    });
}


function guardarMensaje() {
    let idMensaje=$("#idMensaje").val();
    let textoMensaje=$("#textoMensaje").val();


    let data={
        id:idMensaje,
        messagetext:textoMensaje,
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'POST',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idMensaje").val("");
            $("#textoMensaje").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerMensajes();
        }
    });
}


function editarMensaje(){
    let idMensaje=$("#idMensaje").val();
    let textoMensaje=$("#textoMensaje").val();

    let data={
        id:idMensaje,
        messagetext:textoMensaje,
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'PUT',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idMensaje").val("");
            $("#textoMensaje").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerMensajes();
        }
               
    });   
}

function borrarMensaje(idMensaje){


    let data={
        id:idMensaje
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'DELETE',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idMensaje").val("");
            $("#mensajeTexto").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerMensajes();
        }              
    });   
}