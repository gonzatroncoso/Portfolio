let menuVisible = false;

//ocultar/mostrar menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;

    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    //selecciono opcion y ocultar menu
    document.getElementById("nav").classList = "";
    menuVisible = false;
}