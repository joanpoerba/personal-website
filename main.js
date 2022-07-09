let toggle = document.getElementById('toggle')
let body = document.body

toggle.onclick =  function(){
  body.classList.toggle('darkMode')

  if(body.classList.contains('darkMode')){
    toggle.src = 'assets/sun (2).png'
  } else {
    toggle.src = 'assets/moon (3).png'
  }
}

let navToggle = document.getElementById('navToggle')
let navbar = document.getElementById('nav')

navToggle.onclick = function(){
  navbar.classList.toggle('sidebar')
}