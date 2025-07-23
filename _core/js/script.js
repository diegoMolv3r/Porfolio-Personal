var header = document.getElementById('header-nav');
var nav = document.getElementById('navegation-var');

function navState(){
    if(header.classList.contains('animate__slideInLeft')){
        header.classList.remove('animate__slideInLeft');
        header.classList.add('animate__slideOutLeft');
        
    }else if(header.classList.contains('animate__slideOutLeft')){
        header.classList.remove('animate__slideOutLeft');
        header.classList.add('animate__slideInLeft');
        
    }
}


const proyectos = [
    {
        titulo: 'Gestion Bancaria',
        tecnologias: ['Java', 'Junit'],
        enlace: 'https://github.com/diegoMolv3r/Proyecto-Banco-PB2'
    }
]


function renderizarProyectos(proyecto){
    let article = document.createElement('article')
    article.classList.add('card')

    let titulo = document.createElement('h3')
    titulo.classList.add('titulo-proyecto')
    titulo.textContent = proyecto.titulo
    
    let tecnologias = document.createElement('div')
    tecnologias.classList.add('tecnologias-proyecto')

    let enlaces = document.createElement('div')
    enlaces.classList.add('enlaces')

    for(let tecnologia of proyecto.tecnologias){
        let span = document.createElement('span')
        span.textContent = tecnologia
        tecnologias.appendChild(span)
    }

    let enlace = document.createElement('a')
    enlace.classList.add('github-button')
    enlace.href = proyecto.enlace
    enlace.target = '_blank'
    enlace.textContent = 'Repositorio'
    
    enlaces.appendChild(enlace)

    article.appendChild(titulo)
    article.appendChild(tecnologias)
    article.appendChild(enlaces)

    return article
}

const contenedorProyectos = document.getElementById('contenedor-proyectos-front')

window.addEventListener('load', () => {
    proyectos.forEach(proyecto => {
        contenedorProyectos.appendChild(renderizarProyectos(proyecto))
    });
})
