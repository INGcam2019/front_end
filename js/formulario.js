$(document).ready(function () {
    estadoInicial()
});

function regis(){
    //capturar los datos que ingreso el usuario en la pagina
    
    
    let reference=$("#reference").val()
    let brand = $("#brand").val()
    let category = $("#category").val()
    let objetivo = $("#objetivo").val()
    let description = $("#description").val()
    let availability = $("#availability").val()
    let price = $("#price").val()
    let quantity = $("#quantity").val()
    let photography = $("#photography").val()

    
    let datos={
        reference:$("#reference").val(),
        brand:$("#brand").val(),
        category : $("#category").val(),
        objetivo :$("#objetivo").val(),
        description : $("#description").val(),
        availability : $("#availability").val(),
        price : $("#price").val(),
        quantity : $("#quantity").val(),
        photography : $("#photography").val()
    
    }

    let datosPeticion = JSON.stringify(datos)

    //utilizo la funcion de JQuery $.ajax para hacer un llamado asincrono
    //a un ws
    $.ajax({
        //url del servicio
        url: "http://152.70.219.133:8080/api/supplements/new",
        
        //envio datos capturados por el usuario a la peticion
        data: datosPeticion,

        //tipo de peticion
        type: 'POST',

        contentType: "application/JSON",

        //tipo de contenido
        dataType: 'json',

        //success: funcion con acciones si todo sale ok
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            resultado(respuesta)	
        },

        //error: funcion con acciones si hay error
        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            //$("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);		
            console.log("algo fallo");	
        },
        //complete: funcion con al final de la petición
        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            console.log("Todo super bien"  + status);
            
        }
    });
    
}

/**
 * valida si en el id viene un dato nulo, o viene el codigo del usuario
 * 
 * Configura mensaje de bienvenida o de error según el caso
 */
function resultado(respuesta){
        alert("Bienvenido : " )

}

function estadoInicial(){
    $("#reference").focus()
}

