$().ready(iniciar);

 var pacientes = [{  Nombre:"Agustinaaa",
                     Apellido:"Caldas",
                     password:"p",
                     Ci:1,                     
                     Habilitado:true,
                     Peso:150.6,
                     Altura:178,
                     PMaximo:150,
                     PMinimo:40,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"1.png"
                 },
                 {
                     Nombre:"Matias",
                     Apellido:"Casala",
                     password:"p",
                     Ci:2,
                     Habilitado:false,
                     Peso:140,
                     Altura:176,
                     PMaximo:150,
                     PMinimo:40,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"2.png"
                 },
                 {
                     Nombre:"Gaston",
                     Apellido:"Rodriguez",
                     password:"p",
                     Ci:3,
                     Habilitado:false,
                     Peso:0,
                     Altura:0,                     
                     PMaximo:120,
                     PMinimo:90,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"3.png"
                 },
                 {
                     Nombre:"Camila",
                     Apellido:"Gonzales",
                     password:"p",
                     Ci:4,
                     Habilitado:true,
                     Peso:99,
                     Altura:142,
                     PMaximo:120,
                     PMinimo:90,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"4.png"
                 },
                 {
                     Nombre:"Sofia",
                     Apellido:"Martinez",
                     password:"p",
                     Ci:5,
                     Habilitado:false,
                     Peso:105,
                     Altura:140,
                     PMaximo:105,
                     PMinimo:80,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"5.png"
                 },
                 {
                     Nombre:"Valentina",
                     Apellido:"Herbert",
                     password:"p",
                     Ci:6,
                     Habilitado:true,
                     Peso:150,
                     Altura:205,
                     PMaximo:180,
                     PMinimo:140,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"6.png"
                 },
                 {
                     Nombre:"Lucas",
                     Apellido:"Jorgito",
                     password:"p",
                     Ci:7,
                     Habilitado:false,
                     Peso:75,
                     Altura:145,
                     PMaximo:85,
                     PMinimo:70,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"7.png"
                 },
                 {
                     Nombre:"Matias",
                     Apellido:"Lopa",
                     password:"p",
                     Ci:8,
                     Habilitado:true,
                     Peso:100,
                     Altura:176,
                     PMaximo:101,
                     PMinimo:75,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"8.png"
                 },
                 {
                     Nombre:"Martina",
                     Apellido:"Sardiña",
                     password:"p",
                     Ci:9,
                     Habilitado:true,
                     Peso:105,
                     Altura:186,
                     PMaximo:105,
                     PMinimo:78,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"9.png"
                 },
                 {
                     Nombre:"Agustina",
                     Apellido:"Gonzales",
                     password:"p",
                     Ci:10,
                     Habilitado:true,
                     Peso:153,
                     Altura:153,
                     PMaximo:120,
                     PMinimo:50,
                     IMC:function(){return this.Peso / (Math.pow(this.Altura,2) / 10000);},
                     Foto:"5.png"
                 }]; 
var medicos = [{     Nombre:"Josefina",
                     Apellido:"Gonzales",
                     Especialidad:"Odontologo",
                     NProfesional:23568,
                     listaFinalizada:12,                     
                     password:"m",
                     Ci:1                   
                 },
                 {
                     Nombre:"Maria",
                     Apellido:"Rodriguez",
                     Especialidad:"Pedriata",
                     NProfesional:89567,
                     listaFinalizada:15,                     
                     password:"m",
                     Ci:2
                 },
                 {
                     Nombre:"Tamaraaaaaa",
                     Apellido:"Trukiski",
                     Especialidad:"Cardiologa",
                     NProfesional:12789,
                     listaFinalizada:20,
                     password:"m",
                     Ci:3
                 },
                 {
                     Nombre:"Roberta",
                     Apellido:"Regueiro",
                     Especialidad:"Pedriata",
                     NProfesional:25498,
                     listaFinalizada:25,
                     password:"m",
                     Ci:4
                 },
                 {
                     Nombre:"Romina",
                     Apellido:"Grana",
                     Especialidad:"Fisioterapeuta",
                     NProfesional:23568,
                     listaFinalizada:68,
                     password:"m",
                     Ci:5
                 },
                 {
                     Nombre:"Pamela",
                     Apellido:"Rodriguez",
                     Especialidad:"Cirujano",
                     NProfesional:78569,
                     listaFinalizada:37,
                     password:"m",
                     Ci:6
                 },
                 {
                     Nombre:"Karen",
                     Apellido:"Yuyit",
                     Especialidad:"Deportologo",
                     NProfesional:23568,
                     listaFinalizada:45,
                     password:"m",
                     Ci:7
                 },
                 {
                     Nombre:"Romina",
                     Apellido:"Rodriguez",
                     Especialidad:"Ginecologo",
                     NProfesional:86597,
                     listaFinalizada:2,
                     password:"m",
                     Ci:8
                 },
                 {
                     Nombre:"Jimena",
                     Apellido:"Peluffo",
                     Especialidad:"Cardiologa",
                     NProfesional:23569,
                     listaFinalizada:5,
                     password:"m",
                     Ci:9
                 },
                 {
                     Nombre:"Magela",
                     Apellido:"Guerrero",
                     Especialidad:"Cirujano",
                     NProfesional:23489,
                     listaFinalizada:8,                     
                     password:"m",
                     Ci:10
                 }]; 
             
 var consultas = [{    
                     CiMedicos:1,
                     CiPacientes:1,
                     Identificacion:"JGon1",
                     Descripcion:"Hola tengo dolor de cabeza",
                     Finalizada:true,
                     Peso:108,
                     Altura:186,
                     Paga:false
                                          
                 },
                 {    
                     CiMedicos:2,
                     CiPacientes:2,
                     Identificacion:"MRod2",
                     Descripcion:"",
                     Finalizada:false,
                     Peso:0,
                     Altura:0,
                     Paga:false                     
                 },
                 {
                     CiMedicos:1,
                     CiPacientes:3,
                     Identificacion:"JGon3",
                     Descripcion:"asasdasdasd",
                     Finalizada:true,
                     Peso:90,
                     Altura:178,
                     Paga:true 
                 },
                 {    
                     CiMedicos:2,
                     CiPacientes:4,
                     Identificacion:"MRod4",
                     Descripcion:"",
                     Finalizada:false,
                     Peso:0,
                     Altura:0,
                     Paga:false                     
                 },
                 {    
                     CiMedicos:1,
                     CiPacientes:5,
                     Identificacion:"JGon5",
                     Descripcion:"asdasdasd",
                     Finalizada:true,
                     Peso:108,
                     Altura:175,
                     Paga:true                      
                 },
                 {    
                     CiMedicos:2,
                     CiPacientes:6,
                     Identificacion:"MRod6",
                     Descripcion:"",
                     Finalizada:false,
                     Peso:0,
                     Altura:0,
                     Paga:true                     
                 },
                 {    
                     CiMedicos:2,
                     CiPacientes:7,
                     Identificacion:"MRod7",
                     Descripcion:"Hola tengo dolor de espalda",
                     Finalizada:true,
                     Peso:108,
                     Altura:0189,
                     Paga:true                      
                 },
                 {    
                     CiMedicos:3,
                     CiPacientes:8,
                     Identificacion:"TTru8",
                     Descripcion:"",
                     Finalizada:false,
                     Peso:0,
                     Altura:0,
                     Paga:false                     
                 },
                 {    
                     CiMedicos:4,
                     CiPacientes:9,
                     Identificacion:"RReg9",
                     Descripcion:"Hola tengo dolor de espalda",
                     Finalizada:true,
                     Peso:106,
                     Altura:168,
                     Paga:true                     
                 },
                 {    
                     CiMedicos:5,
                     CiPacientes:10,
                     Identificacion:"RGra10",
                     Descripcion:"Hola tengo dolor de espalda",
                     Finalizada:true,
                     Peso:110,
                     Altura:190,
                     Paga:true                      
                 },
                 {    
                     CiMedicos:2,
                     CiPacientes:1,
                     Identificacion:"MRod11",
                     Descripcion:"Hola tengo dolor de espalda",
                     Finalizada:true,
                     Peso:105,
                     Altura:160,
                     Paga:false                     
                 },
                 {    
                     CiMedicos:3,
                     CiPacientes:2,
                     Identificacion:"TTru12",
                     Descripcion:"Hola tengo dolor de espalda",
                     Finalizada:true,
                     Peso:120,
                     Altura:185,
                     Paga:true                      
                 },
                 {    
                     CiMedicos:1,
                     CiPacientes:3,
                     Identificacion:"JGon13",
                     Descripcion:"",
                     Finalizada:false,
                     Peso:1,
                     Altura:0,
                     Paga:false                     
                 },
                 {    
                     CiMedicos:2,
                     CiPacientes:1,
                     Identificacion:"MRod14",
                     Descripcion:"Hola tengo dolor de espalda",
                     Finalizada:true,
                     Peso:89,
                     Altura:150,
                     Paga:true                    
                 },
                 {    
                     CiMedicos:4,
                     CiPacientes:2,
                     Identificacion:"RReg15",
                     Descripcion:"",
                     Finalizada:false,
                     Peso:1,
                     Altura:0,
                     Paga:false                    
                 },
                 {    
                     CiMedicos:5,
                     CiPacientes:3,
                     Identificacion:"RGra16",
                     Descripcion:"",
                     Finalizada:true,
                     Peso:100,
                     Altura:178,
                     Paga:true                     
                 }];
             
var indice="";
var indiceConsulta="";
var autoIncremento= 17;
var indiceDePago="";
var indiceMedico="";
function iniciar(){
    
    CargarMedicosEnSelect();
    $("#btnLoguin").click(Loguin);
    $("#aDatos").click(DatosPersonales);
    $("#btnNuevaConsulta").click(CrearConsulta);
    $("#aHome").click(Home);
    $("#aPacientes").click(InterfazHabilitarPacientes);
    $("#aCerrarSesion").click(CerrarSesion);
    $("#btnBuscarPaciente").click(BuscarPaciente);
    $("#aConsultas").click(ConsultaHtml);
    $("#aDefensa").click(Defensa);
    
    
    $("#navPrincipal").hide();
    $("#pie").hide();
    $("#lateral").hide();
    $("#divConsultas").hide();   
    $("#navPrincipal2").hide();
    $("#divConsultasMedico").hide();
    $("#selectMedicos").hide();    
    $("#divDatosDeConsulta").hide();
    $("#divPacienteHabilitar").hide();
    $("#TableEstadoPaciente").hide();
    $("#ConsultasPagas").hide();
    
    
    
}
function Defensa(){

$("#tablaPendientes").html("");



for(var i=0;i<consultas.length;i++){

    idConsul = consultas[i].Identificacion;
    MedicoNombre = DefensaFuncion(idConsul);
    
    if(MedicoNombre.length > 7){

        $("#tablaPendientes").append("<tr><td>"+idConsul+"</td><td>"+MedicoNombre+"</td></tr>");
    
    }

}


}

function CerrarSesion(){
    
     indice="";
     CerrarSesionsDivs();
}
function DatosPersonales(){
   $("#hBienvenido").html("Datos Personales"); 
   $("#divConsultas").hide();
   $("#divDatosPersonales").show(1000);
   $("#tablaFinalizadas").html("");
  
}
function Home(){
    $("#divConsultas").show(1000);
    $("#divDatosPersonales").hide();
    $("#tablaPendientes").html("");
    $("#tablaFinalizadas").html("");
               ConsultaPaciente(indice);
}
function ConsultaHtml(){
    
    $("#tablaConsultaMedicos").html("");
    ConsultaMedico(indice);
    $("#divConsultasMedico").show(1000);
    
    $("#hBienvenido").html("Consultas Medicas"); 
       
    $("#divPacienteHabilitar").hide();
    $(".btnConsulta").click(RealizarConsulta);
    RealizarConsulta();
    
    
    
    
    $("#tBodyEstadoPaciente").html("");
    $("#tBodyPagosPaciente").html("");
    $("#ConsultasPagas").hide();
   $("#TableEstadoPaciente").hide();
}
//Funcion para cuando el paciente genera la nueva consulta
function CrearConsulta(){
    var MedicoCi = Number(1);
    var nombreMedico=$("#selectMedicos").val().split(",");
    var ConsultaId = ConsultaID(nombreMedico[0],nombreMedico[1]);
    
    MedicoCi += Number(nombreMedico[2]);
    
    var consultaNueva = {    
                     CiMedicos:MedicoCi,
                     CiPacientes:pacientes[indice].Ci,
                     Identificacion:ConsultaId+autoIncremento,
                     Descripcion:"",
                     Finalizada:false,
                     Paga:false
                                          
                 };
    consultas.push(consultaNueva);
            $("#tablaPendientes").html("");
            $("#tablaFinalizadas").html("");
    ConsultaPaciente(indice);
    autoIncremento++;
}
//FUNCION DE LOGUIN
function Loguin(){
    
        var usuario = Number($("#txtUsuario").val());
        var contraseña = $("#txtContraseña").val();
    
    var emboco=false;
    
    for(var i=0;i<pacientes.length;i++){
        if(usuario === pacientes[i].Ci && contraseña === pacientes[i].password){
            emboco=true;
            indice=i;
            PacienteHabilitado(indice);
            break;            
      }
    }
    if(!emboco) {
        
       for(var i=0;i<medicos.length;i++){
        if(usuario === medicos[i].Ci && contraseña === medicos[i].password){
            
            emboco=true;
            indice=i;
            HtmlMedico(indice);
            break;
      }
    }
    }
    if(indice===""){
        $("#pLoguinError").html("Los datos ingresados son incorrectos");
    }
   }
   
//INTERFAZ DE CUANDO EL MEDICO PUEDE HABILITAR/DESABILITAR PACIENTES
function InterfazHabilitarPacientes(){
    $("#lateral").hide();
       $("#hBienvenido").html("Lista de Pacientes"); 
       
       $("#divConsultasMedico").hide();
       
       $("#divPacienteHabilitar").show();
       
}
function Habilitar(ci,i){
    for(var j=0;j<consultas.length;j++){
                if(ci===consultas[j].CiPacientes){
                    if (pacientes[i].Habilitado === false){
                        pacientes[i].Habilitado=true;
                    }else{
                        pacientes[i].Habilitado=false;
                    }
                }
            }
}
function BuscarPaciente(){
      $("#tBodyEstadoPaciente").html("");
      $("#tBodyPagosPaciente").html("");
      var ci = Number($("#txtBuscarPaciente").val());
      for(var i=0;i<pacientes.length;i++){
        if(ci === pacientes[i].Ci){
            $("#tBodyEstadoPaciente").append("<tr><td>"+pacientes[i].Nombre+"</td><td>"+pacientes[i].Apellido+"</td><td>"+devolverHabilitado(pacientes[i].Habilitado)+"</td><td><input type='button' class='btnHabilitado' value='Modificar' id='"+pacientes[i].Ci+"' /></td></tr>");
            $("#TableEstadoPaciente").show();
            var a = pacientes[i].Ci;
            
            for(var j=0;j<consultas.length;j++){
                if((a===consultas[j].CiPacientes) && consultas[j].Paga === false){
                    
                    $("#tBodyPagosPaciente").append("<tr><td>"+consultas[j].Identificacion+"</td><td>"+devolverPago(consultas[j].Paga)+"</td><td><input type='button' class='btnPagos' value='Modificar' id='"+consultas[j].Identificacion+"' /></td></tr>");
                    $("#ConsultasPagas").show(1000);
                                    }
            }
            break;
      }
    }
    $(".btnPagos").click(ModificarPago);
    $(".btnHabilitado").click(ModificarHabilitado);
    
  }
  function ModificarHabilitado(){
      
      var ci = $(this).attr("id");
      
      for(var i=0;i<pacientes.length;i++){
                if(Number(ci)===pacientes[i].Ci){
                    if(pacientes[i].Habilitado===false){
                        pacientes[i].Habilitado=true;
                    }else{
                        pacientes[i].Habilitado=false;
                    }
                    break;
                }
  }
  }
  function ModificarPago(){
      
      var id = $(this).attr("id");
      for(var i=0;i<consultas.length;i++){
                if(id===consultas[i].Identificacion){
                       consultas[i].Paga=true;
                    break;
                }
  }
  }