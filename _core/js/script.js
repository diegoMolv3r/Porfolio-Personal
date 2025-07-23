var header = document.getElementById('header-nav');
var nav = document.getElementById('navegation-var');

function navState() {
    if (header.classList.contains('animate__slideInLeft')) {
        header.classList.remove('animate__slideInLeft');
        header.classList.add('animate__slideOutLeft');

    } else if (header.classList.contains('animate__slideOutLeft')) {
        header.classList.remove('animate__slideOutLeft');
        header.classList.add('animate__slideInLeft');

    }
}


const proyectos = [
    {
        titulo: 'Quiz Code',
        tecnologias: ['PHP', 'Javascript', 'MySQL', 'Mustache', 'AJAXX' ],
        enlace: 'https://github.com/Urielito1031/preguntados-app-mvc'
    },
    {
        titulo: 'FutCode',
        tecnologias: ['Java', 'Spring MVC', 'Hamcrest', 'Javascript', 'JQuery', 'HSQL'],
        enlace: 'https://github.com/Urielito1031/Taller-webi-FutCode'
    },
    {
        titulo: 'SickDogs Ind',
        tecnologias: ['HTML', 'CSS', 'Javascript'],
        enlace: ''
    },
    {
        titulo: 'Pokedex',
        tecnologias: ['PHP', 'MySQL'],
        enlace: 'https://github.com/diegoMolv3r/PHPokedex'
    },
    {
        titulo: 'Gestion Bancaria',
        tecnologias: ['Java', 'Junit'],
        enlace: 'https://github.com/diegoMolv3r/Proyecto-Banco-PB2'
    },
    {
        titulo: 'El mato a un policia motorizado',
        tecnologias: ['Bootstrap'],
        enlace: 'https://el-mato-un-gorra-en-moto.netlify.app/'
    },
    {
        titulo: 'Calculadora Web',
        tecnologias: ['Javascript', 'Tailwind'],
        enlace: 'https://molvercalc.netlify.app/'
    },



]


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


const contenedorProyectos = document.getElementById('contenedor-proyectos')

window.addEventListener('load', () => {
    proyectos.forEach(proyecto => {
        contenedorProyectos.appendChild(renderizarProyectos(proyecto))
    });
})
