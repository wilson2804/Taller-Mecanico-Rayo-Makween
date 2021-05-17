function listarMantencionesUsuarios() {
    $("#btnTraer").click(() => {
        $("#body_mantenciones").html("");
        const url = "http://34.70.86.84:3000/users/listar-mantenciones-usuarios";
        $.get(url, (respuesta) => {
            let mantenciones = respuesta;


            $.each(mantenciones, (index, item) => {
                let id = item.id;
                let Fecha = item.Fecha;
                let Mecanico = item.Mecanico;
                let Sucursal = item.Sucursal;
                let Categoria = item.Categoria;
                let Patente_Vehiculo = item.Patente_Vehiculo;

                $("#body_mantenciones").append(

                    "<tr><td>" + id + "</td>" +
                    "<td>" + Fecha + "</td>" +
                    "<td>" + Mecanico + "</td>" +
                    "<td>" + Sucursal + "</td>" +
                    "<td>" + Categoria + "</td>" +
                    "<td>" + Patente_Vehiculo + "</td>" +
                    "<td> <a data-toggle='modal' data-target='#exampleModal' href='#' style='text-align: right;'>Ver Detalle</a></td></tr>");
            })
        });
    });
    document.getElementById("btnTraer").click();
}

function listarMantencionesRechazos() {
    $("#btnTraer").click(() => {
        $("#body_rechazos").html("");
        const url = "http://34.70.86.84:3000/users/listar-publicaciones-rechazadas";
        $.get(url, (respuesta) => {
            let mantenciones = respuesta;


            $.each(mantenciones, (index, item) => {
                let id = item.id;
                let Fecha = item.Fecha;
                let Mecanico = item.Mecanico;
                let Sucursal = item.Sucursal;
                let Categoria = item.Categoria;
                let Patente_Vehiculo = item.Patente_Vehiculo;
                let Motivo_Rechazo = item.Motivo_Rechazo;

                $("#body_rechazos").append(

                    "<tr><td>" + id + "</td>" +
                    "<td>" + Fecha + "</td>" +
                    "<td>" + Mecanico + "</td>" +
                    "<td>" + Sucursal + "</td>" +
                    "<td>" + Categoria + "</td>" +
                    "<td>" + Patente_Vehiculo + "</td>" +
                    "<td>" + Motivo_Rechazo + "</td>" +
                    "<td> <a data-toggle='modal' data-target='#exampleModal' href='#' style='text-align: right;'>Ver Detalle</a></td></tr>");
            })
        });
    });
    document.getElementById("btnTraer").click();
}

function listarMantencionesAdmin() {
    $("#btnTraer").click(() => {
        $("#body_mantenciones").html("");
        const url = "http://34.70.86.84:3000/users/listar-mantenciones-usuarios";
        $.get(url, (respuesta) => {
            let mantenciones = respuesta;


            $.each(mantenciones, (index, item) => {
                let id = item.id;
                let Fecha = item.Fecha;
                let Mecanico = item.Mecanico;
                let Sucursal = item.Sucursal;
                let Categoria = item.Categoria;
                let Patente_Vehiculo = item.Patente_Vehiculo;

                $("#body_mantenciones").append(

                    "<tr><td>" + id + "</td>" +
                    "<td>" + Fecha + "</td>" +
                    "<td>" + Mecanico + "</td>" +
                    "<td>" + Sucursal + "</td>" +
                    "<td>" + Categoria + "</td>" +
                    "<td>" + Patente_Vehiculo + "</td>" +
                    "<td> <a data-toggle='modal' data-target='#exampleModal' href='#' style='text-align: right;'>Rechazar</a></td>");
            })
        });
    });
    document.getElementById("btnTraer").click();
}

function rechazarPublicacion() {

    $("#closeModal").click();
    setTimeout(function() {
        $('#exampleModalRechazo').modal('show')
    }, 500);

}

function contacto() {
    $('#exampleModal').modal('show');

}

function recuperar() {
    let x = $('#correoelec').val();
    if(x !== ""){
        $('#exampleModal').modal('show');

   

        $('#correoamostar').html(x);
   
    }
    }

    
   



function verificacionlogin(){
$("#formlogin").submit(function(event){
    event.preventDefault();
    const url = "http://34.70.86.84:3000/users/listar-usuarios";
    $.get(url, function(data){
       $.each(data, function(index,user){
           if (user.Correo === $("#correo").val() && user.Clave === $("#clave").val()){
               console.log("coincide");
               switch(user.Tipo_Usuario){
                   case "Administrador":
                   $(location).attr('href', 'vistaAdmin.html');
                   break;
                   case "Mecanico":
                   $(location).attr('href', 'registroactividades.html');
                   break;
                   case "Cliente":
                   $(location).attr('href', 'vistaUsuario.html');
                   break;

                   
                   
               } 

               
           }
       }) 
       
    })

})
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
