// ================= HOME SLIDER =================

// Get the Bootstrap carousel
const homeSlider = document.querySelector("#homeSlider");


// Create Bootstrap carousel
const carousel = new bootstrap.Carousel(homeSlider, {

    interval: 4000,

    ride: "carousel",

    pause: false,

    wrap: true

});


// ================= NAVBAR =================

// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-link");

const navbarCollapse = document.querySelector("#mainNavbar");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (window.innerWidth < 992) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});