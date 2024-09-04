// Active Navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll  = () =>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remove("scroll-on")
    }
}

// Nav Hide 
let navBar = document.querySelectorAll(".nav-link")
let navCollab = document.querySelector(".navbar-collapse.collapse")
navBar.forEach((a) => {
    a.addEventListener('click' , () =>{
        navCollab.classList.remove("show")
    })
})
// Counter desing

document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id, start, end , duration ){
        let obj = document.getElementById(id),
        current = start,
        range = end - start;
        increment = end > start ? 1 : -1 ,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if(current ==end){
                clearInterval(timer)
            }
        }, step)
    }
    counter("counter1", 0, 1278 , 3000)
    counter("counter2", 100, 5278 , 2600)  
  counter("counter3", 0, 1278 , 3000)
  counter("counter4", 0, 7278 , 3000) 

})

