
var QueDioLaBusqueda = document.getElementById("informacionEncontrada");
var boton = document.getElementById("veABuscar");


boton.addEventListener("click",comparar);

 function comparar() {


    var respuesta = new XMLHttpRequest();
    respuesta.open('GET', 'https://api.myjson.com/bins/cgm8f');

    respuesta.onload = function () {
        var nuestrosDatos = JSON.parse(respuesta.responseText);


        DefinicionBusqueda(nuestrosDatos);
        

    }

    respuesta.send();
}

//----------------------------------------------------FUNCION PARA COMPARA BUSQUEDAS -----------------------------------------------------
function DefinicionBusqueda(data){
    
    var ResultadoBusqueda = "";
    var Ulprincipal = document.getElementById("lista-buscadores");
    var cantidaddeIl = Ulprincipal.getElementsByTagName("li");

    
    
    // ------------------------------- UNA SOLA CASILLA SELECCIONADA ---------------------
    if(cantidaddeIl.length==1){

        var inp1 = cantidaddeIl[0].getElementsByTagName("input");
       

        for (i = 0; i < data.length; i++) {

            if (inp1[0].value.toUpperCase() == eval("data[i]."+cantidaddeIl[0].id).toUpperCase()) {
    
                
                ResultadoBusqueda+= "<p> Titulo: " + data[i].Titulo
                                + " </br> Autor: " + data[i].Autor
                                + " </br> Editorial: " + data[i].Editorial
                                + " </br> ISBN: " + data[i].ISBN
                                +"</br></br></p>";
    
    
            }
    
        }

    }
    //------------------------------- DOS CASILLAS SELECCIONADAS -------------------------
    if(cantidaddeIl.length==2){


        var inp1 = cantidaddeIl[0].getElementsByTagName("input");
        var inp2 = cantidaddeIl[1].getElementsByTagName("input");

        

        for (i = 0; i < data.length; i++) {

            if (inp1[0].value.toUpperCase() == eval("data[i]."+cantidaddeIl[0].id).toUpperCase() && inp2[0].value.toUpperCase() == eval("data[i]."+cantidaddeIl[1].id).toUpperCase()) {
    
                ResultadoBusqueda+= "<p> Titulo: " + data[i].Titulo
                                + " </br> Autor: " + data[i].Autor
                                + " </br> Editorial: " + data[i].Editorial
                                + " </br> ISBN: " + data[i].ISBN
                                +"</br></br></p>";
    
    
            }
    
        }

    }
    //------------------------------------------TRES CASILLAS SELECCIONADAS
    if(cantidaddeIl.length==3){

        var inp1 = cantidaddeIl[0].getElementsByTagName("input");
        var inp2 = cantidaddeIl[1].getElementsByTagName("input");
        var inp3 = cantidaddeIl[2].getElementsByTagName("input");


        for (i = 0; i < data.length; i++) {

            if (inp1[0].value.toUpperCase() == eval("data[i]."+cantidaddeIl[0].id).toUpperCase() && inp2[0].value.toUpperCase() == eval("data[i]."+cantidaddeIl[1].id).toUpperCase()&& inp3[0].value.toUpperCase() == eval("data[i]."+cantidaddeIl[2].id).toUpperCase()) {
    
                ResultadoBusqueda+= "<p> Titulo: " + data[i].Titulo
                                + " </br> Autor: " + data[i].Autor
                                + " </br> Editorial: " + data[i].Editorial
                                + " </br> ISBN: " + data[i].ISBN
                                +"</br></br></p>";
    
    
            }
    
        }

    }
    //------------------------------------CUATRO CASILLAS-------------------------------------
    if(cantidaddeIl.length==4){

        
        var inp1 = cantidaddeIl[0].getElementsByTagName("input");
        var inp2 = cantidaddeIl[1].getElementsByTagName("input");
        var inp3 = cantidaddeIl[2].getElementsByTagName("input");
        var inp4 = cantidaddeIl[3].getElementsByTagName("input");


        for (i = 0; i < data.length; i++) {

            if (inp1[0].value.toUpperCase()== eval("data[i]."+cantidaddeIl[0].id).toUpperCase() && inp2[0].value.toUpperCase()== eval("data[i]."+cantidaddeIl[1].id).toUpperCase()&& inp3[0].value.toUpperCase()== eval("data[i]."+cantidaddeIl[2].id).toUpperCase() && inp4[0].value.toUpperCase()== eval("data[i]."+cantidaddeIl[3].id).toUpperCase()) {
    
                ResultadoBusqueda+= "<p> Titulo: " + data[i].Titulo
                                + " </br> Autor: " + data[i].Autor
                                + " </br> Editorial: " + data[i].Editorial
                                + " </br> ISBN: " + data[i].ISBN
                                +"</br></br></p>";
                
    
            }
    
        }

    }
   
   
    QueDioLaBusqueda.insertAdjacentHTML('beforeend', ResultadoBusqueda);
}