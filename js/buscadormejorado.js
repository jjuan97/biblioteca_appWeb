(function () {

    var entradaTitulo = 0,
        entradaAutor = 0,
        entradaEditorial = 0,
        entradaISBN = 0;

    var idBusqueda = "sinBusqueda";
    var Agregar = document.getElementById("lista-buscadores"),
        OPBusqueda = document.getElementById(idBusqueda),

        defTitulo = document.getElementById("por-titulo"),
        defAutor = document.getElementById("por-autor"),
        defEditorial = document.getElementById("por-editorial"),
        defISBN = document.getElementById("por-isbn"),

        Titulo = document.getElementById("agregar-por-titulo"),
        Autor = document.getElementById("agregar-por-autor"),
        Editorial = document.getElementById("agregar-por-editorial"),
        ISBN = document.getElementById("agregar-por-isbn");


    function agregarTitulo() {
        
        if (entradaTitulo === 0) {
            entradaTitulo = 1;
            var nuevoin = document.createElement("input"),
                nuevoBtn = document.createElement("input"),
                nuevoli = document.createElement("li");


            nuevoin.setAttribute("placeholder", "Titulo");
            nuevoBtn.setAttribute("type", "submit");
            nuevoBtn.setAttribute("value", "X");
            nuevoBtn.setAttribute("class", "X");            
            nuevoBtn.addEventListener("click", eliminarTitulo);
            nuevoli.setAttribute("class", "EliminandoElementoTitulo");
            nuevoli.setAttribute("id", "Titulo");
            nuevoli.appendChild(nuevoin);
            nuevoli.appendChild(nuevoBtn);
            


            Agregar.appendChild(nuevoli);

        }
    }

    function agregarAutor() {

        if (entradaAutor === 0) {
            entradaAutor = 1;
            var nuevoin = document.createElement("input"),
                nuevoBtn = document.createElement("input"),
                nuevoli = document.createElement("li");
            nuevoin.setAttribute("placeholder", "Autor");
            nuevoli.appendChild(nuevoin);
            nuevoBtn.setAttribute("type", "submit");
            nuevoBtn.setAttribute("value", "X");
            nuevoBtn.setAttribute("class", "X");
            nuevoBtn.addEventListener("click", eliminarAutor);
            nuevoli.setAttribute("class", "EliminandoElementoAutor");
            nuevoli.setAttribute("id", "Autor");
            nuevoli.appendChild(nuevoin);
            nuevoli.appendChild(nuevoBtn);
            


            Agregar.appendChild(nuevoli);

        }
    }
    function agregarEditorial() {
        if (entradaEditorial === 0) {
            entradaEditorial = 1;
            var nuevoin = document.createElement("input"),
                nuevoBtn = document.createElement("input"),
                nuevoli = document.createElement("li");
            nuevoin.setAttribute("placeholder", "Editorial");
            nuevoli.appendChild(nuevoin);
            nuevoBtn.setAttribute("type", "submit");
            nuevoBtn.setAttribute("value", "X");
            nuevoBtn.setAttribute("class", "X");
            nuevoBtn.addEventListener("click", eliminarEditorial);
            nuevoli.setAttribute("class", "EliminandoElementoEditorial");
            nuevoli.setAttribute("id", "Editorial");
            nuevoli.appendChild(nuevoin);
            nuevoli.appendChild(nuevoBtn);
            


            Agregar.appendChild(nuevoli);

        }
    }
    function agregarISBN() {
        if (entradaISBN === 0) {
            entradaISBN = 1;
            var nuevoin = document.createElement("input"),
                nuevoBtn = document.createElement("input"),
                nuevoli = document.createElement("li");
            nuevoin.setAttribute("placeholder", "ISBN");
            nuevoBtn.setAttribute("type", "submit");
            nuevoBtn.setAttribute("value", "X");
            nuevoBtn.setAttribute("class", "X");
            nuevoBtn.addEventListener("click", eliminarISBN);
            nuevoli.setAttribute("class", "EliminandoElementoISBN");
            nuevoli.setAttribute("id", "ISBN");
            nuevoli.appendChild(nuevoin);
            nuevoli.appendChild(nuevoBtn);
            

            Agregar.appendChild(nuevoli);

        }
    }
    //eliminar
    function eliminarTitulo() {

        var lista = document.getElementById("lista-buscadores"),
            liEliminar = document.getElementById("Titulo");

        lista.removeChild(liEliminar);
        entradaTitulo = 0;
    }

    function eliminarAutor() {

        var lista = document.getElementById("lista-buscadores"),
            liEliminar = document.getElementById("Autor");

        lista.removeChild(liEliminar);
        entradaAutor = 0;
    }
    function eliminarEditorial() {

        var lista = document.getElementById("lista-buscadores"),
            liEliminar = document.getElementById("Editorial");

        lista.removeChild(liEliminar);
        entradaEditorial = 0;
    }
    function eliminarISBN() {

        var lista = document.getElementById("lista-buscadores"),
            liEliminar = document.getElementById("ISBN");

        lista.removeChild(liEliminar);
        entradaISBN = 0;
    }
    //Eventos

    Titulo.addEventListener("click", agregarTitulo);
    Autor.addEventListener("click", agregarAutor);
    Editorial.addEventListener("click", agregarEditorial);
    ISBN.addEventListener("click", agregarISBN);



}());