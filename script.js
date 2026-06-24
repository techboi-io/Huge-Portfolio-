// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Contact Form

const form =
document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
      "Message Sent Successfully!"
    );

});

// Login Button

const loginBtn =
document.querySelector(".login-section .btn");

loginBtn.addEventListener("click", () => {

    alert("Login Feature Coming Soon!");

});

// Google Button

const googleBtn =
document.querySelector(".google-btn");

googleBtn.addEventListener("click", () => {

    alert("Google Authentication Coming Soon!");

});
