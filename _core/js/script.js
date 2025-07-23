const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const navLinks = mobileNav.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileNav.classList.add('hidden');
    }
});


function renderizarProyectos(proyecto) {
    let article = document.createElement('article')
    article.className = 'bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300'

    let titulo = document.createElement('h3')
    titulo.className = 'text-xl font-bold text-gray-800'
    titulo.textContent = proyecto.titulo

    let tecnologias = document.createElement('div')
    tecnologias.className = 'flex flex-wrap gap-2'

    for (let tecnologia of proyecto.tecnologias) {
        let span = document.createElement('span')
        span.className = 'bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full'
        span.textContent = tecnologia
        tecnologias.appendChild(span)
    }

    let enlaces = document.createElement('div')
    enlaces.className = 'mt-auto'

    let enlace = document.createElement('a')
    enlace.className = 'inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline hover:text-blue-800 transition-colors'
    enlace.href = proyecto.enlace
    enlace.target = '_blank'
    enlace.innerHTML = `
    <i class="bi bi-github text-lg"></i>
    Repositorio
`

    enlaces.appendChild(enlace)

    article.appendChild(titulo)
    article.appendChild(tecnologias)
    article.appendChild(enlaces)

    return article
}

function renderizarFormacion(formacion) {
    let article = document.createElement('article');
    article.className = 'bg-gray-800 rounded-xl p-6 shadow-md w-full';

    let titulo = document.createElement('h3');
    titulo.className = 'text-xl font-semibold mb-2';
    titulo.textContent = formacion.titulo;

    let ul = document.createElement('ul');
    ul.className = 'text-sm text-gray-300 space-y-1';

    let liInstitucion = document.createElement('li');
    liInstitucion.innerHTML = `<span class="font-medium text-blue-400">${formacion.institucion}</span>`;

    let liPeriodo = document.createElement('li');
    liPeriodo.textContent = formacion.periodo;

    ul.appendChild(liInstitucion);
    ul.appendChild(liPeriodo);

    article.appendChild(titulo);
    article.appendChild(ul);

    return article;
}


const contenedorFormaciones = document.getElementById('contenedor-formaciones');
const contenedorProyectos = document.getElementById('contenedor-proyectos');


window.addEventListener('load', () => {
    fetch('../data/proyectos.json') 
        .then(res => res.json())
        .then(proyectos => {
            proyectos.forEach(proyecto => {
                contenedorProyectos.appendChild(renderizarProyectos(proyecto));
            });
        })
        .catch(error => {
            console.error('Error al cargar los proyectos:', error);
        });

    fetch('../data/formacion.json')
        .then(res => res.json())
        .then(formaciones => {
            formaciones.forEach(formacion => {
                contenedorFormaciones.appendChild(renderizarFormacion(formacion));
            });
        })
        .catch(error => {
            console.error('Error al cargar las formaciones:', error);
        });
});