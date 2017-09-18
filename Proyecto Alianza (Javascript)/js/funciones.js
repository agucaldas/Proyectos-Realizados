//-------------------------------------------------------
// VARIABLES
//-------------------------------------------------------

var usuarios = 
[{nombre:"Agustin-Gonzalo",id: 33010, apellido: "Grupo 1", fecDeNac:{dia:10,mes:12,anio:2010}, sexo:"M",pelisFavoritas:[]},
{nombre:"Ismael-Fabricio",id: 33007,  apellido: "Grupo 2", fecDeNac:{dia:10,mes:12,anio:1230}, sexo:"M",pelisFavoritas:[]},
{nombre:"Mary-Debray-Lucia",id: 33008,  apellido: "Grupo 3", fecDeNac:{dia:10,mes:12,anio:1230}, sexo:"M",pelisFavoritas:[]},
{nombre:"Guillermina-Ana",id: 33009,  apellido: "Grupo 4", fecDeNac:{dia:10,mes:12,anio:1230}, sexo:"M",pelisFavoritas:[]},
{nombre:"Gerardo-Jose-Luis",id: 32773,  apellido: "Grupo 5", fecDeNac:{dia:10,mes:12,anio:1230}, sexo:"M",pelisFavoritas:[]},
{nombre:"Maria Noel-Rodrigo",id: 32794,  apellido: "Grupo 6", fecDeNac:{dia:10,mes:12,anio:1230}, sexo:"M",pelisFavoritas:[]},
{nombre:"Yanina-Bernadette-Cecilia",id: 33011,  apellido: "Grupo 7", fecDeNac:{dia:10,mes:12,anio:1230}, sexo:"M",pelisFavoritas:[]}];
var peliculas = [];
var actores = [];
var directores = [];

var listaUsuarios = ["33010", "33007", "33008", "33009", "33011", "32773", "32794"];

//-------------------------------------------------------
//CONSTRUCTORES
//-------------------------------------------------------
function Pelicula(idPelicula, titulo, fecha, puntaje, IdDirector, IdActores, descripcion, imagenes) {
    this.idPelicula = idPelicula;
    this.titulo = titulo;
    this.fecha = fecha;
    this.puntaje = puntaje;
    this.IdDirector = IdDirector;
    this.IdActores = IdActores;
    this.descripcion = descripcion;
    this.imagenes = imagenes;

    this.getActorId = function() {
        return IdActor
    }
}


function Usuario(IdUsuario, nombre, apellido, fecDeNac, sexo, pelisFavoritas) {
    this.IdUsuario = IdUsuario
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecDeNac = fecDeNac;
    this.sexo = sexo;
    this.pelisFavoritas = pelisFavoritas;

    this.setPelisFavoritas = function(idUsuario) {


    }
}

function Actor(idActor, paisOrigen, biografia, nombre, fecDeNac, sexo) {
    this.IdActor = idActor;
    this.paisOrigen = paisOrigen;
    this.biografia = biografia;
    this.nombre = nombre;
    this.fecDeNac = fecDeNac;
    this.sexo = sexo;

    this.getActorId = function() {
        return IdActor;
    }

    this.getActorPaisOrigen = function() {
        return paisOrigen;
    }

    this.getActorBiografia = function() {
        return biografia;
    }

    this.getActorNombre = function() {
        return nombre;
    }

    this.getActorFecDeNac = function() {
        return fecDeNac;
    }

    this.getActorSexo = function() {
        return sexo;
    }

    this.igualActor = function(Actor) {
        if ((IdActor == Actor.getIdActor()))
            return true;
        else
            return false;

    }
}

function Director(IdDirector, paisOrigen, biografia, nombre, fecDeNac, sexo) {
    this.IdDirector = IdDirector;
    this.paisOrigen = paisOrigen;
    this.biografia = biografia;
    this.nombre = nombre;
    this.fecDeNac = fecDeNac;
    this.sexo = sexo;

    this.getDirectorId = function() {
        return IdActor
    }

    this.getDirectorPaisOrigen = function() {
        return paisOrigen
    }

    this.getDirectorBiografia = function() {
        return biografia
    }

    this.getDirectorNombre = function() {
        return nombre
    }

    this.getDirectorFecDeNac = function() {
        return fecDeNac
    }

    this.getDirectorSexo = function() {
        return sexo
    }

    this.igualDirector = function(Director) {
        if ((IdDirector == Actor.getIdDirector()))
            return true;
        else
            return false;
    }
}

function Fecha(aa, mm, dd) {
    var dia = dd;
    var mes = mm;
    var anio = aa;

    this.getDia = function() {
        return dia;
    }

    this.getMes = function() {
        return mes;
    }

    this.getAnio = function() {
        return anio;
    }

    this.setDia = function(dd) {
        dia = dd;
    }

    this.setMes = function(ma) {
        mes = mm;
    }

    this.setAnio = function(aa) {
        anio = aa;
    }

    this.toString = function() {
        return dia + '/' + mes + '/' + anio;
    }

    this.esIgual = function(fecha) {
        if ((dia == fecha.getDia()) && (mes == fecha.getMes()) && (anio == fecha.getAnio()))
            return true;
        else
            return false;
    }

    this.esMayor = function(fecha) {
        if (anio > fecha.getAnio())
            return true;
        else
        if (anio == fecha.getAnio())
            if (mes > fecha.getMes())
                return true;
            else
        if (mes == fecha.getMes())
            if (dia > fecha.getDia())
                return true;
            else
                return false;
        else
            return false;
        else
            return false;
    }

    this.esMenor = function(fecha) {
        if (anio < fecha.getAnio())
            return true;
        else
        if (anio == fecha.getAnio())
            if (mes < fecha.getMes())
                return true;
            else
        if (mes == fecha.getMes())
            if (dia < fecha.getDia())
                return true;
            else
                return false;
        else
            return false;
        else
            return false;
    }

}

//-------------------------------------------------------
//FUNCIONES
//-------------------------------------------------------

//Crear un Actor desde una pelicula
function nuevoActor(id) {

    var data = "{}";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {

            var respuestaActor = JSON.parse(this.responseText);
            paisOrigen = respuestaActor.place_of_birth;

            biografia = respuestaActor.biography;
            nombre = respuestaActor.name;
            
            var fechaAux = respuestaActor.birthday.split('-');
            fechaDeNac = new Fecha(fechaAux[0],fechaAux[1],fechaAux[2]);
            if (respuestaActor.gender == 0)
                sexo = "F";
            else
                sexo = "M";
            var actor = new Actor(id, paisOrigen, biografia, nombre,fechaDeNac, sexo);
            actores.push(actor);
        }
    });

    xhr.open("GET", "https://api.themoviedb.org/3/person/" + id + "?language=en-US&api_key=d44ebafb72bdd56e5f9a0b1cd161e058");
    xhr.send(data);
}

//Crear un nuevo Director desde una pelicula
function nuevoDirector(id) {

    var data = "{}";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {

            var respuestaActor = JSON.parse(this.responseText);
            paisOrigen = respuestaActor.place_of_birth;

            biografia = respuestaActor.biography;
            nombre = respuestaActor.name;
            var fechaAux = respuestaActor.birthday.split('-');
            fechaDeNac = new Fecha(fechaAux[0],fechaAux[1],fechaAux[2]);
            if (respuestaActor.gender == 0)
                sexo = "F";
            else
                sexo = "M";
            var director = new Director(id, paisOrigen, biografia, nombre, fechaDeNac, sexo);
            directores.push(director);
        }
    });

    xhr.open("GET", "https://api.themoviedb.org/3/person/" + id + "?language=en-US&api_key=d44ebafb72bdd56e5f9a0b1cd161e058");
    xhr.send(data);
}

// Retorna el id de el director de una pelicula
function cargarDirectorPeli(IdPeli) {
    var director = [];
    var data = "{}";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {

        if (this.readyState === this.DONE) {
            var creditos = JSON.parse(this.responseText);

            for (i = 0; i < creditos.crew.length; i++) {
                if (creditos.crew[i].job === "Director") {
                    //director = creditos.crew[i].name;
                    IdDirector = creditos.crew[i].id;
                    director.push(IdDirector);
                    break;

                }
            }
        }
    });
    xhr.open("GET", "https://api.themoviedb.org/3/movie/" + IdPeli + "/credits?api_key=d44ebafb72bdd56e5f9a0b1cd161e058");
    xhr.send(data);
    return director;
}

// Carga de id de los actores de la pelicula
function cargarIdActores(IdPeli) {
    var arrayIdActores = [];
    var data = "{}";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            var creditos = JSON.parse(this.responseText);
            var tope = 2;
            if (creditos.cast.length < tope)
                tope = creditos.cast.length;

            for (i = 0; i < tope; i++) {

                arrayIdActores.push(creditos.cast[i].id);
            }
        }
    });

    xhr.open("GET", "https://api.themoviedb.org/3/movie/" + IdPeli + "/credits?api_key=d44ebafb72bdd56e5f9a0b1cd161e058");
    xhr.send(data);
    return arrayIdActores;
}

//-------------------------------------------------------
// Carga de Datos
//-------------------------------------------------------
function cargarPeliculas() {
    for (i = 0; i < listaUsuarios.length; i++) {

        var peliculasUsuario = [];

        var data = JSON.stringify({});
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === this.DONE) {
                respuestaLista = JSON.parse(this.responseText);
                for (j = 0; j < respuestaLista.results.length; j++) {

                    IdPeli = respuestaLista.results[j].id;
                    tituloPeli = respuestaLista.results[j].title;
                    var fechaAux = respuestaLista.results[j].release_date.split('-');
                    fechaPeli = new Fecha(fechaAux[0], fechaAux[1], fechaAux[2]);

                    puntajePeli = respuestaLista.results[j].vote_average;
                    descripcionPeli = respuestaLista.results[j].overview;
                    imgPeli = "https://api.themoviedb.org/3/movie/" + IdPeli + "?language=en-US&api_key=d44ebafb72bdd56e5f9a0b1cd161e058";
                    imgPeli += respuestaLista.results[j].poster_path;

                    IdDirectorPeli = cargarDirectorPeli(IdPeli);
                    IdActoresPeli = cargarIdActores(IdPeli);
                    nuevaPelicula = new Pelicula(IdPeli, tituloPeli, fechaPeli, puntajePeli, IdDirectorPeli, IdActoresPeli, descripcionPeli, imgPeli);
                    peliculas.push(nuevaPelicula);
                    peliculasUsuario.push(nuevaPelicula);
                    
                }
                usuarios[i].pelisFavoritas = peliculasUsuario;
                peliculasUsuario = [];
            }
        });
        xhr.open("GET", "https://api.themoviedb.org/4/list/" + listaUsuarios[i] + "?api_key=d44ebafb72bdd56e5f9a0b1cd161e058&page=1");
        xhr.setRequestHeader("content-type", "application/json;charset=utf-8");
        xhr.setRequestHeader("authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRlYmFmYjcyYmRkNTZlNWY5YTBiMWNkMTYxZTA1OCIsInN1YiI6IjU5YWRlMjY1OTI1MTQxMDc5ZDA0OTQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qIVJpxAh0GmjIIRuvoY-F2_jfZMyu6-8wKfc3FcCI4");
        xhr.send(data);
    }

}

function cargarDirector() {
    var tope = 40;
    for (i = 0; i < tope; i++) {
        nuevoDirector(peliculas[i].IdDirector[0]);
    }
}

function cargarActores() {
    var tope = 40;
    for (i = 0; i < tope; i++) {
        for (j = 0; j < peliculas[i].IdActores.length; j++) {
            nuevoActor(peliculas[i].IdActores[j]);
        }
    }

}
