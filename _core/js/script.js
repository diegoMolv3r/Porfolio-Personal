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