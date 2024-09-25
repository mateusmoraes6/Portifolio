let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

function openPopup(projectId) {
    document.getElementById('popup' + projectId).style.display = 'flex';
}

function closePopup(projectId) {
    document.getElementById('popup' + projectId).style.display = 'none';
}

