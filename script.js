document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded!");

    const workCards = document.querySelectorAll(".work-card");
    const workSection = document.querySelector("#work");

    function fadeInWork() {
        const sectionTop = workSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            workCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = 1;
                    card.style.transform = "translateY(0)";
                }, index * 300);
            });
            window.removeEventListener("scroll", fadeInWork);
        }
    }
    window.addEventListener("scroll", fadeInWork);
    fadeInWork(); 

    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
