const slides = document.querySelectorAll(".slider img");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

},3000);
// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
// Scroll Animation

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(sectionTop < screenHeight - 100){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerHTML = "☀️ Light Mode";

    }else{

        themeBtn.innerHTML = "🌙 Dark Mode";

    }

});