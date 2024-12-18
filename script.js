document.addEventListener('DOMContentLoaded', () => {
    // Swiper functionality
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });

    // Video Play/Pause Functionality
    const video = document.getElementById('food-video');
    const playIcon = document.getElementById('play-icon');

    video.addEventListener('pause', () => {
        playIcon.style.display = 'flex';
    });

    video.addEventListener('ended', () => {
        playIcon.style.display = 'flex';
    });

    video.addEventListener('play', () => {
        playIcon.style.display = 'none';
    });

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    playIcon.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Cart Modal Functionality
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const closeModal = document.getElementById('closeModal');
    const backToMenu = document.getElementById('backToMenu');

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable page scroll
    });

    closeModal.addEventListener('click', closeCartModal);
    backToMenu.addEventListener('click', closeCartModal);

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });

    function closeCartModal() {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable page scroll
    }

    // ============================
    // Request a Dish Modal Functionality
    // ============================
    const openRequestModalButton = document.getElementById('openRequestModal'); // Button to open the request modal
    const requestDishModal = document.getElementById('requestDishModal'); // Request modal container
    const closeRequestModalButton = document.getElementById('closeRequestModal'); // Close button in modal
    const submitRequestButton = document.getElementById('submitRequestButton'); // Submit button in modal

    // Open Request Dish Modal
    openRequestModalButton.addEventListener('click', () => {
        requestDishModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Completely disable page scroll
    });

    // Close Modal
    function closeRequestDishModal() {
        requestDishModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable page scroll
    }

    closeRequestModalButton.addEventListener('click', closeRequestDishModal);
    submitRequestButton.addEventListener('click', closeRequestDishModal);

    // Close Modal on clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === requestDishModal) {
            closeRequestDishModal();
        }
    });
});


const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("header nav");

// Toggle menu visibility on smaller screens
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active"); // Toggle the "active" class to show/hide the menu
});




const sliderm = new Sliderm('#sliderm-main', {
    arrow: false,
    pagination: false,
    grouping: false,
    loop: true,
    preview: false,
    columns: 3,
    duration: 1000,
    spacing: 15,
    align: 'start',
});

// Function to scale the middle slide based on position
function scaleMiddleSlide() {
    // Get the current position of the slider
    const position = sliderm.getPosition();
    
    // Get all the slides in the slider
    // const slides = document.querySelectorAll('#sliderm-main .sliderm-slide');
    const slides = sliderm.getItems()
    
    console.log(position)
    slides.forEach((slide) => {
        slide.classList.remove('scaled');
    });
    // Remove any previous scaling
    if (slides[position]) { // Check to avoid accessing undefined slides
        slides[position].classList.add('scaled');
    } 
    // slides.forEach((slide,index) => {
    //     if(index == position){
    //         slide.classList.add('scaled');  // Remove scaled class from current slide
    //     }
    // });

}
scaleMiddleSlide();


document.getElementById("prevBtn").addEventListener("click", () => {
    sliderm.slideTo('>');
    const position = sliderm.getPosition();
    scaleMiddleSlide()
    console.log(position);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    sliderm.slideTo('<');
    const position = sliderm.getPosition();
    scaleMiddleSlide()
    console.log(position);
});



document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const resetArrowColors = () => {
        document.querySelectorAll(".arrow-path").forEach((path) => {
            path.setAttribute("fill", path.dataset.originalColor || "#1AC073");
        });
    };

    // Store the original colors for SVG paths
    document.querySelectorAll(".arrow-path").forEach((path) => {
        path.dataset.originalColor = path.getAttribute("fill");
    });

    // Apply reverse hover effect
    prevBtn.addEventListener("click", () => {
        resetArrowColors();
        const arrowPath = prevBtn.querySelector(".arrow-path");
        arrowPath.setAttribute("fill", "white"); // Change arrow color
    });

    nextBtn.addEventListener("click", () => {
        resetArrowColors();
        const arrowPath = nextBtn.querySelector(".arrow-path");
        arrowPath.setAttribute("fill", "#1AC073"); // Change arrow color
    });

    // Add hover effect
    prevBtn.addEventListener("mouseenter", () => {
        const arrowPath = prevBtn.querySelector(".arrow-path");
        arrowPath.setAttribute("fill", "#1AC073");
    });

    prevBtn.addEventListener("mouseleave", () => {
        const arrowPath = prevBtn.querySelector(".arrow-path");
        arrowPath.setAttribute("fill", "white");
    });

    nextBtn.addEventListener("mouseenter", () => {
        const arrowPath = nextBtn.querySelector(".arrow-path");
        arrowPath.setAttribute("fill", "white");
    });

    nextBtn.addEventListener("mouseleave", () => {
        const arrowPath = nextBtn.querySelector(".arrow-path");
        arrowPath.setAttribute("fill", "#1AC073");
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize Sliderm
//     const sliderm = new Sliderm('#sliderm-main', {
//         arrow: false,
//         pagination: false,
//         grouping: false,
//         loop: true,
//         preview: false,
//         columns: 3, // Number of visible slides
//         duration: 1000,
//         spacing: 15,
//         align: 'center', // Center-align the slider
//     });

    
// const items = sliderm.getItems();
// console.log(items)

// const position = sliderm.getPosition();
// console.log(position)

//     // Function to highlight and scale the middle slide
//     const highlightMiddleSlide = () => {
//         // Get all visible slides
//         const slides = document.querySelectorAll('.sliderm__slide');
        
//         // Remove the active class from all slides
//         slides.forEach(slide => slide.classList.remove('active-slide'));
        
//         // Find and highlight the middle slide
//         const middleIndex = Math.floor(slides.length / 2);
//         slides[middleIndex].classList.add('active-slide');
//     };

//     // Call this function initially to highlight the middle slide
//     highlightMiddleSlide();

//     // Recalculate middle slide on slide event
//     sliderm.on('slide.start', highlightMiddleSlide);

//     // Navigation Buttons (if manually controlled)
//     document.getElementById("prevBtn").addEventListener("click", () => {
//         sliderm.slideTo('>'); // Move to previous slide
//     });

//     document.getElementById("nextBtn").addEventListener("click", () => {
//         sliderm.slideTo('<'); // Move to next slide
//     });
// });


