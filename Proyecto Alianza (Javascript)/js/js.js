$().ready(ready);

$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus()
})

function ready() {
    $('#liPelicula').attr("class", "active")
    $('#liPelicula').click(mostrarPeliculas);
    $('#liArtista').click(mostrarArtistas);
    $('#liUsuario').click(mostrarUsuarios);
    $('#divPeliculas').show();
    $('#divUsuarios').hide();
    $('#divArtistas').hide();
    //$('.borrar').click(removeRow);
    cargarPeliculas();
    $('#cargaActores').click(cargarActores);
    $('#cargaDirectores').click(cargarDirector);
    $('#nuevaPeli').click(nuevaPelicula);
    $('#consultas').click(dispararConsultas);
    $( "#filtrar" ).click(filtrar);


}
function nuevaPelicula(){
    
    titulo = $('#titulo').val();
    fecha = $('#fecha').val();
    fechaAux = fecha.split('-');
    fechaPeli = new Fecha(fechaAux[0], fechaAux[1], fechaAux[2]);
    
    puntaje = $('#puntaje').val();    
    descripcion = $('#descripcion').val();
    var pelicula = new Pelicula(0, titulo, fechaPeli, puntaje, 0, 0, descripcion, "")
    peliculas.unshift(pelicula);
}

function mostrarPeliculas() {
    $('#liPelicula').attr("class", "active")
    $('#liUsuario').removeClass("active")
    $('#liArtista').removeClass("active")
    $('#divPeliculas').show();
    $('#divUsuarios').hide();
    $('#divArtistas').hide();
    actualizarPeliculas();
    

}

function mostrarArtistas() {
    $('#liUsuario').removeClass("active")
    $('#liPelicula').removeClass("active")
    $('#liArtista').attr("class", "active")
    $('#divArtistas').show();
    $('#divUsuarios').hide();
    $('#divPeliculas').hide();
    actualizarArtistas();
}

function mostrarUsuarios() {
    $('#liPelicula').removeClass("active")
    $('#liArtista').removeClass("active")
    $('#liUsuario').attr("class", "active")
    $('#divUsuarios').show();
    $('#divArtistas').hide();
    $('#divPeliculas').hide();
    actualizarUsuarios();
}
function actualizarPeliculas(){
    $("#tablaPelicula").html("");
    for(i=0;i<peliculas.length;i++){
        $("#tablaPelicula").append("<tr><td>"+peliculas[i].titulo+"</td><td>"+peliculas[i].fecha+"</td><td>"+peliculas[i].puntaje+"</td><td><input type='button' value='Borrar' class='borrar btn-sm btn-primary' onClick='removeRow(this)'></td></tr>");
    }
 
}

function actualizarArtistas(){
    
        for(i=0;i<actores.length;i++){
            if(actores[i].nombre.length > 0 && actores[i].paisOrigen.length > 0)
            $("#tablaArtistas").append("<tr><td>"+actores[i].nombre+"</td><td>"+actores[i].paisOrigen+"</td><td>Actor</td><td><input type='button' value='Borrar' class=' borrar btn-sm btn-primary'></td></tr>");
        }
         for(i=0;i<directores.length;i++){
            if(directores[i].nombre.length > 0 && directores[i].paisOrigen.length > 0)
            $("#tablaArtistas").append("<tr><td>"+directores[i].nombre+"</td><td>"+directores[i].paisOrigen+"</td><td>Director</td><td><input type='button' value='Borrar' class=' borrar btn-sm btn-primary'></td></tr>");
        }

     
}

function actualizarUsuarios(){
    $("#tablaUsuarios").empty();
    for(i=0;i<usuarios.length;i++){
        var fecha =new Fecha(usuarios[i].fecDeNac.anio,usuarios[i].fecDeNac.mes,usuarios[i].fecDeNac.dia)
        $("#tablaUsuarios").append("<tr><td>"+usuarios[i].nombre+"</td><td>"+fecha.toString()+"</td></tr>");
    }         
}
function filtrar(){
    $("#tablaUsuarios").html("");
    var filtro = $( "#inputFiltrar" ).val();
        for(i=0;i<peliculas.length;i++){ 
            if(filtro===peliculas[i].titulo){
            
            $("#tablaPelicula").append("<tr><td>"+peliculas[i].titulo+"</td><td>"+peliculas[i].fecha+"</td><td>"+peliculas[i].puntaje+"</td><td><input type='button' value='Borrar' class='borrar btn-sm btn-primary' onClick='removeRow(this)'></td></tr>");
            }
        }
}
function removeRow(element){

  var row = element.parentNode.parentNode;
  var table = row.parentElement;
  table.removeChild(row);    
   
}
function filtrado(){
peliculas.filter(x => x.title !== m.title);

}
function consultaC(){
    var arrayPeli = [];
    $("#tablaPelicula").html("");  
    function objeto(id,cantidad){
        this.id=id;
        this.cantidad=cantidad;        
        this.sumar = function(){
            this.cantidad++;
        }
        this.getCantidad = function(){
            return cantidad;
        }
    }

        for(i=0;i<peliculas.length;i++){           
                var p = new objeto(peliculas[i].idPelicula,0);
                arrayPeli.push(p);               
                           
        }
        console.log(arrayPeli); 
        k=0;
        while(k < arrayPeli.length){
             var idAux = arrayPeli[k].id;

            for(i=0;i<arrayPeli.length;i++){                
                if(idAux === arrayPeli[i].id){
                    arrayPeli[i].cantidad++;
                }
            }
            k++ 
        }
        console.log(arrayPeli); 
         cantAux = arrayPeli[0].cantidad;
         mayores=[];
        for(i=0;i<arrayPeli.length;i++){            
            if(arrayPeli[i].cantidad > cantAux){
                cantAux=arrayPeli[i].cantidad;                
            }                       
        }
        $("#tablaPelicula").append("<tr><td colspan='4'>Obtener la película que pertenezca a la mayor cantidad de listas de favoritos.</td></tr>") 
        for(i=0;i<arrayPeli.length;i++){ 
            if(arrayPeli[i].cantidad === cantAux){
                    var id = arrayPeli[i].id;
                    for(j=0;j<peliculas.length;j++){
                        if(id===peliculas[j].idPelicula){

                            $("#tablaPelicula").append("<tr><td>"+peliculas[j].titulo+"</td><td>"+peliculas[j].fecha+"</td><td>"+cantAux+" veces </td><td><input type='button' value='Borrar' class='borrar btn-sm btn-primary' onClick='removeRow(this)'></td></tr>");
                            break;
                        }                       
                    }
            }    
        }
   
}

function consultaDyE(sexo,consulta){
    function objeto(id,fecha,posicion){
        this.id=id;
        this.fecha=fecha;
        this.posicion=posicion;
    }
    
    var arrayActores = [];
    var idAux=0;
    var fechaAux=0;
    for(i=0;i<actores.lenght;i++){
        //El valor T de sexo corresponde a todos los actores
        console.log(actores[i]); 
        var a =new objeto(actores[i].IdActor,actores[i].fecDeNac,0);        
        arrayActores.push(a);        
    }
    var contador = 10;
    var idAux=arrayActores[0].id;
    var fechaAux=arrayActores[0].fecha;

    for(var i=1;i<arrayActores.lenght;i++){
        if(consulta=== "D"){ 
            if(arrayActores[i].fecha.esMayor(fechaAux))  {           
                idAux=arrayActores[i].id;
                fechaAux=arrayActores[i].fecha;
                     
            }
        }else{
            if(arrayActores[i].fecha.esMenor(fechaAux))  {           
                idAux=arrayActores[i].id;
                fechaAux=arrayActores[i].fecha;      
            }
        }
    }
    if(contador>0)
    for(i=0;i<arrayActores.lenght;i++){
        if(idAux===arrayActores[i].id){
            arrayActores[i].posicion=contador
            contador--;           
            break;
        }
    }
    //Aca hay que recorrer y mostrar en tabla.
    for(i=0;i<arrayActores.lenght;i++){
        if(arrayActores[i].posicion !== 0)
            $("#tablaArtistas").append("<tr><td>"+actores[i].nombre+"</td><td>"+actores[i].paisOrigen+"</td><td>Actor</td><td><input type='button' value='Borrar' class=' borrar btn-sm btn-danger'></td></tr>");
        }
}

//Recorrer peliculas, obtener la fecha mas reciente, agarrar la lista de actores y mostrarla
function consultaF(){
    var idAux=peliculas[0].id;
    var fechaAux=peliculas[0].fecha;
    $("#tablaPelicula").html("");

    for(i=1;i<peliculas.length;i++){        
            if(peliculas[i].fecha.esMayor(fechaAux)){           
                idAux=peliculas[i].idPelicula;
                fechaAux=peliculas[i].fecha;      
            }        
    } 
    $("#tablaPelicula").append("<tr><td colspan='4'>Listado de actores que participaron en la pelicula mas reciente.</td></tr>");   
    for(i=0;i<peliculas.length;i++){        
            if(peliculas[i].idPelicula === idAux){           
                   for(j=0;j<peliculas[i].IdActores.length;j++){ 
                       console.log(peliculas[i].IdActores);
                       for(k=0;k<actores.length;k++){    
                           if(peliculas[i].IdActores[j]===actores[k].IdActor) {
                                    
                              $("#tablaPelicula").append("<tr><td>"+actores[k].nombre+"</td><td>"+fechaAux+"</td><td>"+peliculas[i].titulo+"</td><td><input type='button' value='Borrar' class=' borrar btn-sm btn-primary'></td></tr>");
                              console.log(actores[k].IdActor);
                            }  
                        }  
                         
                    }
            }            
    }   
}
function consultaG(){
    var promedio = 0;
    var idAux = 0;
    var promAux = 0;
    var b = 0;
    var c= 0;
    for(i=0;i<usuarios.length;i++){ 
            promedio= 0;       
            for(j=0;j<usuarios[i].pelisFavoritas.length;j++){
                    promedio += usuarios[i].pelisFavoritas[j].puntaje;
            }
            a =usuarios[i].id;
            b = promedio;
            console.log(a+"  "+b);
            promedio = promedio / usuarios[i].pelisFavoritas.length;
            c = usuarios[i].pelisFavoritas.length;
            if(promedio > promAux){  
                promAux = promedio;
                idAux = usuarios[i].id;
            }
    }
    console.log(idAux);
    $("#tablaPelicula").html(""); 
    $("#tablaPelicula").append("<tr><td colspan='4'>Usuario con mayor promedio de puntaje de película en su lista.</td></tr>");   
    for(i=0;i<usuarios.length;i++){
            if(usuarios[i].id === idAux){                  
                $("#tablaPelicula").append("<tr><td>"+usuarios[i].nombre+"</td><td>"+promAux+"</td><td><input type='button' value='Borrar' class='borrar btn-sm btn-primary'></td></tr>");
                break;
            }

    }
    
}



function dispararConsultas(){
    var consulta = $("#selectConsultas").val();
    switch(consulta){
        case "C":
                consultaC();
                break;
        case "D":
                consultaDyE("T","D");
                break;
        case "E":
                consultaDyE("F","E");
                break;
        case "F":
                consultaF();
                break;
        case "G":
                consultaG();
                break;
    }
}


function sort(a,b){   

        if (a.esIgual(b))
            return 0;
        if (a.esMenor(b))
            return -1;
        else
            return 1; 
    
}
function ordenarArray(){
    var a = peliculas[0].fecha;
for(i=1;i<peliculas.length;i++){
     
    peliculas.sort(sort(a,peliculas[i].fecha));

}
console.log(peliculas);

}