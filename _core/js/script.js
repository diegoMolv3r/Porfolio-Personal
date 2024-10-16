var header = document.getElementById('header-nav');
var imagenOculta = document.getElementById('imagen-oculta');

function navState(){
    if(header.classList.contains('nav-desplegado')){
        header.classList.remove('nav-desplegado');
        header.classList.add('nav-replegado');
        imagenOculta.style.display="block";

    }else if(header.classList.contains('nav-replegado')){
        header.classList.remove('nav-replegado');
        header.classList.add('nav-desplegado');
        imagenOculta.style.display="none";
    }
}


