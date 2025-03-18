// main
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navigation');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// restrict letters on number inputs

const inputs = document.querySelectorAll(".number");
const regex = new RegExp("^[0-9]*$");

inputs.forEach(input => {
    input.addEventListener("beforeinput", (event) => {
        if (event.data != null && !regex.test(event.data)) {
            event.preventDefault();
        }
    });
});