function listarMantencionesUsuarios() {
    $("#btnTraer").click(() => {
        $("#body_mantenciones").html("");
        const url = "http://34.70.86.84:3000/users/listar-mantenciones-usuarios";
        $.get(url, (respuesta) => {
            console.log(respuesta)
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
                    "<td> <a href='#' style='text-align: right;'>Ver Detalle</a></td></tr>");
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
            console.log(respuesta)
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
                    "<td> <a href='#' style='text-align: right;'>Ver Detalle</a></td></tr>");
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
            console.log(respuesta)
            let mantenciones = respuesta;


            $.each(mantenciones, (index, item) => {
                let id = item.id;
                let Fecha = item.Fecha;
                let Mecanico = item.Mecanico;
                let Sucursal = item.Sucursal;
                let Categoria = item.Categoria;
                let Patente_Vehiculo = item.Patente_Vehiculo;

                $("#body_mantenciones").append(

                    "<tr><td><input type='radio' name='radio'></td>" +
                    "<td>" + Fecha + "</td>" +
                    "<td>" + Mecanico + "</td>" +
                    "<td>" + Sucursal + "</td>" +
                    "<td>" + Categoria + "</td>" +
                    "<td>" + Patente_Vehiculo + "</td>" +
                    "<td> <a data-bs-toggle='modal' data-bs-target='#exampleModal' href='#' style='text-align: right;'>Rechazar</a></td>");
            })
        });
    });
    document.getElementById("btnTraer").click();
}