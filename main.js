// Menu Hamburguesa
function show(){
    document.querySelector('.btnHamburguesa').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

// Esfera de skills
const Texts = [
    'HTML5', 'CSS3', 'JAVASCRIPT',
    'REACT.JS', 'SASS', 'GIT/GITHUB', 
    'BOOTSTRAP', 'MATERIAL UI',
    'FIREBASE', 'RESPONSIVE DESIGN', 'SEO', 'CONSULTAS MySQL'
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 220,

    // animation speed slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: false,
});

// Giving color to each text in sphere
var color = '#fff'
document.querySelector('.SphereResponsive').style.color = color;

// SPHERE RESPONSIVE
var tagCloud = TagCloud('.SphereResponsive', Texts, {

    // Sphere radius in px
    radius: 180,

    // animation speed slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: false,
});

// Giving color to each text in sphere
var color = '#fff'
document.querySelector('.Sphere').style.color = color;

// Cursor
let cursorInner = document.querySelector('.cursor-inner')
let cursorOuter = document.querySelector('.cursor-outer')

window.addEventListener("mousemove", cursorMove)

function cursorMove(e) {
    let x = e.clientX;
    let y = e.clientY;

    cursorInner.style.top = `${y}px`
    cursorInner.style.left = `${x}px`

    cursorOuter.style.top = `${y}px`
    cursorOuter.style.left = `${x}px`
}

// let content = Array.from(document.querySelectorAll('.content'))

// content.forEach((content) => {
//     content.addEventListener("mouseover", () => {
//         cursorInner.classList.add("grow");
//     })
//     content.addEventListener("mouseleave", () => {
//         cursorInner.classList.remove("grow")
//     })
// })

let dark = Array.from(document.querySelectorAll('.black'))

dark.forEach((dark) => {
    dark.addEventListener("mouseover", () => {
        cursorInner.classList.add("black");
        cursorOuter.classList.add("black")
    })
    dark.addEventListener("mouseleave", () => {
        cursorInner.classList.remove("black")
        cursorOuter.classList.remove("black")
    })
})

let menuItems = document.querySelectorAll(".navbar-menu-item")


function funcionPrueba() {
    let navItems = document.querySelectorAll(".navbar-menu-item")
    document.querySelector('.btnHamburguesa').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}



