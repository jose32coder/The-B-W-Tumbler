const img = document.querySelector('.img-content img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

let toggleV = true; 


toggleBtn.addEventListener('click', () =>{
    if (toggleV === true) {
        img.src = "./img/cup-light.png";

        toggleText.forEach(e =>{
            e.innerText = "White";
        });

        toggleV = false;
    }
    else{
        img.src = "./img/cup-dark.png";

        toggleText.forEach(e =>{
            e.innerText = "Blvck";
        });

        toggleV = true;
    }

    document.body.classList.toggle('light-theme');

    toggleBtn.firstElementChild.classList.toggle('fa-sun')


})