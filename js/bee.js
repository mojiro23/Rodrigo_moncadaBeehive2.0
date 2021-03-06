var conexion = new XMLHttpRequest();
//Aquí se pone la url del JSON
var url = 'https://beehive-270a2.ﬁrebaseio.com/data/users.json';

conexion.onreadystatechange = function() {
    if (conexion.readyState == 4 && conexion.status == 200) {
      //aquí se define el arreglo que va contener el resultado del JSON parseado a texto
        var myArray = JSON.parse(conexion.responseText);
        myFunction(myArray);
    }
}
  conexion.open("GET", url, true);
  conexion.send();

function myFunction(arr) {
   //esta variable se usará para ir mostrando los elmentos del JSON y su formato de salida en html
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
             

        out +='<div class="card d-flex flex-row text-white border-secondary mb-2 ml-1" style="width: 42rem";>'
        out += '<img src="Resources/default.jpg" class="card-img-top ml-1 mt-1 mb-1 mr-1   flex-row " style="width: 150px";style="heigth: 150px">'
        out += '<div class="card-body text-white mt-1 mb-1 bg-secondary ">'
        out += '<h5 class="card-title">'
        out +=  arr[i].name + '<br>'
        out += '</h5>'
        out += arr[i].username +'<br>'
        out += '</div>'
        out += '<ul class="list-group list-group-flush">'
        //out += '<li class="list-group-item mt-1 mb-1 bg-secondary">'+ "bee_id: " + arr[i].id + '</li>'
        out += '<li class="list-group-item mt-1 mb-1 bg-secondary">'+ arr[i].email + '</li>'
        out += '<li class="list-group-item mt-1 mb-1 bg-secondary">'+ arr[i].phone + '</li>'
        out += '<li class="list-group-item mt-1 mb-1 bg-secondary">'+ arr[i].address.city + '</li>'
        out += '</form>'
        out += '</ul>'
        out +='<div class="list-group list-group-flush ">'
        out += '<div class="card-body d-flex flex-column ">'
        /*A cada href de las paginas le concateno el id del usuario que va tomando en el recorrido del array;
        esto es para que desde la pagina a la que redireccione, pueda tomar ese id y meterlo en una variable y así
        compararlo contra el id del usuario y mostrar solo la data que le corresponda de cada pagina, además separado
        por un & mandé el nombre del usuario para ponerlo en cada post,todo o album del mismo*/
        out += '<a href="posts.html?id='+ arr[i].id + '&username='+ arr[i].name +'" class="btn btn-warning mb-1">Posts</a>'
        out += '<a href="album.html?id='+ arr[i].id + '&username='+ arr[i].name +'" class="btn btn-warning mb-1">Album</a>'
        out += '<a href="todos.html?id='+ arr[i].id + '&username='+ arr[i].name +'" class="btn btn-warning mb-1">Todos</a>'
        out += '</div>'
        out += '</div>'
        out+= '</div>';
        //id = document.getElementById("button").innerHTML;
        }
    //Esto es para mostrar dentro de de un elemento del html que se le puso el id "contenido", lo que pusimos en los out 
    document.getElementById("contenido").innerHTML = out;
    //esto es para mostrar en consola, el JSON que está trayendo el array 
    //console.log(arr);
  
    }
