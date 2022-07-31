let menu = document.getElementById('menu');

let toggleOpen = document.getElementById('toggle-open');
let toggleClose = document.getElementById('toggle-close');

toggleOpen.addEventListener('click' , toggleMenu);
toggleClose.addEventListener('click' , toggleMenu)

function toggleMenu(){
    menu.classList.toggle('show-menu')
    if(menu.classList.contains('show-menu')){
        toggleOpen.style.display = 'none';
        toggleClose.style.display = 'block'
    }
    else{
        toggleOpen.style.display = 'block';
        toggleClose.style.display = 'none'
    }
}