function leerDisfraces() {
    //Funcion GET
    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'GET',
        dataType: 'json',
        
        success: function (disfraces) {
            let cs=disfraces.items;
            $("#listaDisfraces").empty();
            for(i=0;i<cs.length;i++){
                $("#listaDisfraces").append("<span style='color: rgb(255, 251, 0);'>"+"<b>ID: </b>" + cs[i].id +"  "+ "<b> MARCA: </b>"+cs[i].brand+"  "+ "<b>MODELO: </b>"+cs[i].model+"  "+"<b>ID_CATEGORIA:  </b>"+cs[i].category_id+"  "+"<b>NOMBRE: </b>"+cs[i].name+"  ");
                $("#listaDisfraces").append("<button onclick='borrarDisfraz("+cs[i].id+")'>Borrar</button><br>")
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }       
    });
}


function guardarDisfraz() {
    let idDisfraz=$("#idDisfraz").val();
    let marcaDisfraz=$("#marcaDisfraz").val();
    let modeloDisfraz=$("#modeloDisfraz").val();
    let categoriaDisfraz=$("#categoriaDisfraz").val();
    let nombreDisfraz=$("#nombreDisfraz").val();

    let data={
        id:idDisfraz,
        brand:marcaDisfraz,
        model:modeloDisfraz,
        category_id:categoriaDisfraz,
        name:nombreDisfraz
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'POST',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idDisfraz").val("");
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $("#categoriaDisfraz").val("");
            $("#nombreDisfraz").val("");
            
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerDisfraces();
        }
    });
}


function editarDisfraz(){
    let idDisfraz=$("#idDisfraz").val();
    let marcaDisfraz=$("#marcaDisfraz").val();
    let modeloDisfraz=$("#modeloDisfraz").val();
    let categoriaDisfraz=$("#categoriaDisfraz").val();
    let nombreDisfraz=$("#nombreDisfraz").val();

    let data={
        id:idDisfraz,
        brand:marcaDisfraz,
        model:modeloDisfraz,
        category_id:categoriaDisfraz,
        name:nombreDisfraz
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'PUT',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idDisfraz").val("");
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $("#categoriaDisfraz").val("");
            $("#nombreDisfraz").val("");
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerDisfraces();
        }
               
    });   
}

function borrarDisfraz(idDisfraz){


    let data={
        id:idDisfraz
    };

    let datosAEnviar=JSON.stringify(data);
    //console.log(datosAEnviar);


    $.ajax({
        url: 'https://g7041e062a1c85f-reto1c3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/costume/costume',
        type: 'DELETE',
        //dataType: 'json',
        data:datosAEnviar,
        contentType:'application/json',       
        success: function (pepito) {
            $("#idDisfraz").val("");
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $("#cateoriaDisfraz").val("");
            $("#nombreDisfraz").val("");
            
        },
        error: function (xhr, status) {
            //alert('ha sucedido un problema');
        },
        complete: function(){
            leerDisfraces();
        }              
    });   
}