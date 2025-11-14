function validarSeguimiento(){
    var flag = 0;
    var form = document.getElementById('seguimientoForm');
    var rut = form.rut.value;
    var num = form.Poliza.value;

    if (rut.length<8){
        alert("RUT no Valido");
        flag = 1;
    }
    


    if (num.length<12){
        alert("N°de Poliza no Valido");
        flag = 1;
    }
    
    

    if(flag == 0){
        alert("Fecha de retiro: 09-09, Hora 15:00, Taller Recoleta, En Evaluacion,Dias restantes 8");
        document.seguimientoForm.submit();
    }
    else{
        return false;
    }
}

function validarAccidente(){
    var flag = 0;
    var form = document.getElementById('accidenteForm');
    var nombre = form.nombres.value;
    var apellidom = form.apellidom.value;
    var apellidop = form.apellidop.value;
    var rut = form.rut.value;
    var num = form.poliza.value;

    if (validarSoloTexto(nombre) == false){
        alert("Nombre invalido");
        flag = 1;
    }

    if (validarSoloTexto(apellidom) == false){
        alert("Apellido Materno invalido");
        flag = 1;
    }

    if (validarSoloTexto(apellidop) == false){
        alert("Apellido Paterno invalido");
        flag = 1;
    }

    if (rut.length<8){
        alert("RUT no Valido");
        flag = 1;
    }
    


    if (num.length<12){
        alert("N°de Poliza no Valido");
        flag = 1;
    }
    
    

    if(flag == 0){
        alert("Siniestro N°= 34455, Liquidador=John Doe, Taller Asignado= Taller Recoleta");
        form.submit();
    }
    else{
        return false;
    }
}
function infosiniestro(){
    alert("Siniestro N°= 34455, Liquidador=John Doe, Taller Asignado= Taller Recoleta");
}
function estado(){
    alert("Fecha de retiro: 09-09, Hora 15:00, Taller Recoleta, En Evaluacion,Dias restantes 8");
}
function validarSoloTexto(texto) {
    const re = /^[a-zA-Záéíóú ]*$/
    return re.test(String(texto).toLowerCase());
}

function nose(){
    alert("Formulario enviado correctamente");
    document.accidenteForm.submit();
}

function ingreso(){
    document.getElementById("ingresoForm").style.visibility = "visible";
    ingresoForm.style.position = 'relative';
    document.getElementById("rechazoForm").style.visibility = "hidden";
    rechazoForm.style.position = 'absolute';
}
function rechazo(){
    document.getElementById("rechazoForm").style.visibility = "visible";
    rechazoForm.style.position = 'relative';
    document.getElementById("ingresoForm").style.visibility = "hidden";
    ingresoForm.style.position = 'absolute';
}