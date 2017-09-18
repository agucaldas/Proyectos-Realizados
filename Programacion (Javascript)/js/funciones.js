//INTERFAZ CUANDO SE INGRESA COMO PACIENTE
function HtmlPaciente(i){
        
    //Desabilitar Boton
    $('#btnLoguin').attr("disabled", true);
    $("#txtUsuario").prop('disabled', true);
    $("#txtContraseña").prop('disabled', true);
    
    $("#TituloLateral").html("<h5>"+pacientes[i].Nombre+",  "+pacientes[i].Apellido+"</h5>");
    $("#imgPaciente").html("<img src='imgs/"+pacientes[i].Foto+"' alt='img'/>");
    $("#selectMedicos").show();
    $("#hryBtn").show();
    
    
    $("#navPrincipal").show(1000);
    $("#lateral").show(1000);
    $("#hBienvenido").html("Consultas");
    
    $("#divDatosPersonales").hide();
    //TABLA DE DATOS PERSONALES
    
    $("#DatosPersonalesTabla").html("<table><thead><td>Datos Personales</td></thead><tbody><tr><td>Nombre</td><td><input type='text' placeholder='"+pacientes[i].Nombre+"' id='NuevoNombre'></td></tr><tr><td>Apellido</td><td><input type='text' placeholder='"+pacientes[i].Apellido+"' id='txtNuevoApellido'></td></tr><tr><td>Foto</td><td><img src='imgs/"+pacientes[i].Foto+"' alt='img'/></td></tr><tr><td><input type='file' id='inputFile'/></td></tr><tr><td><input type='button' value='Modificar Datos' id='btnModificarDatosPersonales'></td></tr></tbody></table>");
    $("#DatosPersonalesNombre").html("<h5>"+pacientes[i].Nombre+","+pacientes[i].Apellido+"</h5>");
    
    $("#btnModificarDatosPersonales").click(ModificarDatosPersonales);

    //MUESTRA DE CONSULTA DE LOS PACIENTES
    ConsultaPaciente(i);
    $("#divConsultas").show(1000);
    //Reportes
    Reportes();
    $("#pie").show(1000);
}
function DefensaFuncion(idConsulta){

for(var i=0;i<consultas.length;i++){

    if(idConsulta===consultas[i].Identificacion){
    a = consultas[i].CiMedicos;
    
    }

    for(var j=0;j<medicos.length;j++){

        if(a===medicos[j].Ci){
         b =medicos[j].Nombre;
         break;
        }

}

}
    return b;

}
function ModificarDatosPersonales(){
    var a = $("#inputFile").val();
    var b = $("#NuevoNombre").val();
    var c = $("#txtNuevoApellido").val();
    cambiarImagen(a,b,c);
        
}
function cambiarImagen(a,b,c){
    var nuevaImagen = a.split("\\").pop();
    pacientes[indice].Nombre=b;
    pacientes[indice].Apellido=c;
    pacientes[indice].Foto=nuevaImagen;
    $("#DatosPersonalesNombre").html("Sus datos se Modificaron Correctamente");
}
//INTERFAZ CUANDO SE INGRESA COMO MEDICO
function HtmlMedico(i){
     //Desabilitar Boton
    $('#btnLoguin').attr("disabled", true);
    $("#txtUsuario").prop('disabled', true);
    $("#txtContraseña").prop('disabled', true);
    $("#navPrincipal2").show(1000);
    $("#divConsultasMedico").show(1000);
    
    //MUESTRA DE CONSULTA EN UNA TABLA DE LOS MEDICOS
    ConsultaMedico(i);
    
    $(".btnConsulta").click(RealizarConsulta);
    
}
//Revisar si el paciente esta habilitado o no, asi saber que mostrar
function PacienteHabilitado(i){
    if(pacientes[i].Habilitado=== true){
        
        HtmlPaciente(i);
        
    }else{
        //Desabilitar Boton
        $("#txtUsuario").prop('disabled', true);
        $("#txtContraseña").prop('disabled', true);
    $('#btnLoguin').attr("disabled", true);
    $("#hBienvenido").html("Datos Personales"); 
    $("#divConsultas").hide();
    $("#divDatosPersonales").show(1000);
    $("#tablaFinalizadas").html("");
    $("#DatosPersonalesTabla").html("<table><thead><td>Datos Personales</td></thead><tbody><tr><td>Nombre</td><td><input type='text' placeholder='"+pacientes[i].Nombre+"' id='NuevoNombre'></td></tr><tr><td>Apellido</td><td><input type='text' placeholder='"+pacientes[i].Apellido+"' id='txtNuevoApellido'></td></tr><tr><td>Foto</td><td><img src='imgs/"+pacientes[i].Foto+"' alt='img'/></td></tr><tr><td><input type='file' id='inputFile'/></td></tr><tr><td><input type='button' value='Modificar Datos' id='btnModificarDatosPersonales'></td></tr></tbody></table>");
    $("#DatosPersonalesNombre").html("<h5>"+pacientes[i].Nombre+","+pacientes[i].Apellido+"</h5>");
    $("#btnModificarDatosPersonales").click(ModificarDatosPersonales);
         
    }
}
//Funcion que genere el Id de cada consulta y lo devuelva
function ConsultaID(nombreMedico,apellidoMedico){
    
    var nMedico = nombreMedico.charAt(0);
    var aMedico = apellidoMedico.substr(0,3);
    var ID=nMedico + aMedico;
    
    return ID;
    
}
//Cargamos todos los NOmbres y apellido de los medicos en un select y asi el paciente puede elegir con cual generar la nueva consulta
//FALTA EL VALUE DE LA CONSULTA QUE TIENE QUE SER EL ID
function CargarMedicosEnSelect(){
    for(var i=0;i<medicos.length;i++){
        $("#selectMedicos").append("<option value='"+medicos[i].Nombre+","+medicos[i].Apellido+","+i+"'>"+medicos[i].Nombre+" , "+medicos[i].Apellido+" -- "+medicos[i].Especialidad+"</option>");
    }
}
//listado de consultas del respectivo paciente
function ConsultaPaciente(indice){
    
    for(var i=0;i<consultas.length;i++){
        if(pacientes[indice].Ci === consultas[i].CiPacientes && consultas[i].Finalizada === false){
            
            $("#tablaPendientes").append("<tr><td>"+consultas[i].Identificacion+"</td><td>"+consultas[i].Descripcion+"</td></tr>");
        }
    }
    for(var i=0;i<consultas.length;i++){
        if((pacientes[indice].Ci === consultas[i].CiPacientes) && consultas[i].Finalizada === true){
            
            $("#tablaFinalizadas").append("<tr><td>"+consultas[i].Identificacion+"</td><td>"+consultas[i].Descripcion+"</td></tr>");
        }
    }
}
//listado de consultas para el medico logueado
function ConsultaMedico(indice){
    var a="";
    var b="";
    for(var i=0;i<consultas.length;i++){
        if(consultas[i].Finalizada===false){
     if(medicos[indice].Ci === consultas[i].CiMedicos){           
            a = Number(consultas[i].CiPacientes);
           for(var j=0;j<pacientes.length;j++){
               if(a === pacientes[j].Ci){
                   b =pacientes[j].Nombre;
               }
           }
            a="";
          $("#tablaConsultaMedicos").append("<tr><td>"+consultas[i].Identificacion+"</td><td>"+b+"</td><td>"+"<input type='button' value='Consulta' class='btnConsulta' id='"+consultas[i].Identificacion+"'>"+"</td></tr>");
            b="";
     }
    }
   }
        
   
}
//REPORTES
function Reportes(){
    for(var i=0;i<medicos.length;i++){
            $("#tablaReportes").append("<tr><td>"+medicos[i].Especialidad+"</td><td>"+medicos[i].Nombre+"  "+medicos[i].Apellido+"</td><td>"+medicos[i].listaFinalizada+"</td></tr>");
    }
   
    
}
function RealizarConsulta(){
  // Tomo el valor de ID del boton de la consulta a la que se quiere realizar
    var id = $(this).attr("id");
    //Asocio la consulta a travez del ID ya que el ID del boton y de la consulta son iguales, al paciente.
    for(var i=0;i<consultas.length;i++){
        if(id===consultas[i].Identificacion){
            indiceConsulta=i;
            //Si el id es igual, devolverme la CI del paciente que es la referencia a la que puedo acceder para cambiar los datos en sus propiedades.
            var a = Number(consultas[i].CiPacientes);
           indiceMedico=consultas[i].CiMedicos;
         }
}
    
    //recorro array pacientes pasa saber con el CI que paciente es, ya que es unico
    for(var i=0;i<pacientes.length;i++){
        if(pacientes[i].Ci === a){
            //Encontre el paciente de la consulta.
            //Mostrar nombre y apellido, y los campos de peso, altura, etc para modificar.
            $("#LabelLateral").html(pacientes[i].Nombre+" , "+pacientes[i].Apellido);
            //Declarar Nuevo peso, altura si es necesario y hacer todo lo que pide en consultas.
            $("#lateral").show(1000);
            $("#divDatosDeConsulta").show(1000);
            $("#btnNuevaConsulta").hide();
            indicePaciente=i;
        }
        }
        $("#btnModificarDatos").click(ModificarPesoyAltura);
    }
    
function ModificarPesoyAltura(){
    for(var i=0;i<medicos.length;i++){
        if(indiceMedico===medicos[i].Ci){
            var a =i;
        }
    }
    var imcPaciente=pacientes[indicePaciente].IMC();
    var nuevoPeso = Number($("#NuevoPeso").val());
    var nuevaAltura =  Number($("#NuevaAltura").val());
    var nuevaDescripcion = $("#NuevaDescripcion").val();
 
 //Modifico Datos en paciente
 consultas[indiceConsulta].Peso = nuevoPeso;
 consultas[indiceConsulta].Altura = nuevaAltura;
 consultas[indiceConsulta].Descripcion = nuevaDescripcion;
     //Finalizo la consulta
    consultas[indiceConsulta].Finalizada = true;
    //Sumo 1 consulta Finalizada
    medicos[a].listaFinalizada +=1;
       //Modifico datos en paciente
 pacientes[indicePaciente].Peso = nuevoPeso;
 pacientes[indicePaciente].Altura = nuevaAltura;
 
 //Nuevo Maximo o Nuevo Minimo
    if (pacientes[indicePaciente].Peso > pacientes[indicePaciente].PMaximo){
      
        //Asignar Nuevo Maximo
        pacientes[indicePaciente].PMaximo = nuevoPeso;
        
          //Avisar Nuevo MAximo
        
    }else if (pacientes[indicePaciente].Peso < pacientes[indicePaciente].PMinimo){
        
        
        //Asignar Nuevo Minimo
        pacientes[indicePaciente].PMinimo = nuevoPeso;
        
        //Avisar Nuevo Minimo
        
        
    }
    var a = pacientes[indicePaciente].IMC();
    //Aviso si hay cambio de IMC
    if(a < imcPaciente*0.9){
        
        $("#hBienvenido").html("Disminuyo menos de 10%");
        
    }else if(a > imcPaciente*1.1){
        
        $("#hBienvenido").html("Aumento mas de 10%"); 
        
    }    
}
function CerrarSesionsDivs(){
    
    $("#txtUsuario").prop('disabled', false);
    $("#txtContraseña").prop('disabled', false);
    
    $("#pLoguinError").html("");
    $('#btnLoguin').attr("disabled", false);
    
    //Botones de Navegacion
    $("#navPrincipal2").hide();
    $("#navPrincipal").hide();
    
    $("#hBienvenido").html("Bienvenido Ingrese sus Datos");
    $("#divConsultas").hide();  
    $("#tablaPendientes").html(""); 
    $("#divConsultasMedico").hide();
    $("#tablaConsultaMedicos").html("");
    
    
    $("#divDatosPersonales").hide();
    //TABLA DE DATOS PERSONALES
    $("#DatosPersonalesTabla").html("");
    $("#DatosPersonalesNombre").html("");
    $("#DatosPersonalesImg").html("");
    
    
    $("#tablaReportes").html("");
    
    $("#tBodyPagosPaciente").html("");
    $("#tBodyEstadoPaciente").html("");
    $("#TituloLateral").html("");
    $("#imgPaciente").html("");
    $("#LabelLateral").html("");
    $("#selectMedicos").hide(); 
    
    $("#pie").hide();
    
    $("#hryBtn").hide();
    $("#lateral").hide();
    $("#divPacienteHabilitar").hide();
    $("#ConsultasPagas").hide();
    
}
function devolverHabilitado(Habilitado){
    var a="Habilitado";
    var b="Deshabilitado";
    
    if(Habilitado===true){
        
        return a;
    }else{
        return b;
    }
                   
}
function devolverPago(Habilitado){
    var a="paga";
    var b="Debe Pagar";
    
    if(Habilitado===true){
        
        return a;
    }else{
        return b;
    }
    
    
}