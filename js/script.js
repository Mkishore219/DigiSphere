window.addEventListener("load", function() {
    ScrollTrigger.refresh();
});


function lenisScroll() {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000); 
    });

    gsap.ticker.lagSmoothing(0);

}
lenisScroll()




function cursorMove() {

    var body = document.querySelector("body");
    var cursor = document.querySelector("#cursor");

    body.addEventListener("mousemove", function (e) {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            duration: 1,
            ease: "back.out"
        })
    })

}
cursorMove()


function loaderPage() {
    if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
        document.addEventListener('DOMContentLoaded', function () {
            const loaderNumber = document.querySelector('.loader-number');
            let count = 0;

            const interval = setInterval(() => {
                if (count <= 100) {
                    loaderNumber.textContent = (count < 10 ? '0' + count : count) + '%'; 
                    count++;
                } else {
                    clearInterval(interval);
                    loaderNumber.style.opacity = '0'; 
                    setTimeout(() => {
                        loaderNumber.style.display = 'none'; 
                    }, 500); 
                }
            }, 25); 

            const tl1 = gsap.timeline();
            
            tl1.from("header .logo", {
                y: -15,
                opacity: 0,
                duration: 0.5
            });
            tl1.from("section#hero  button", {
                y: -110,
                duration: 0.7
            }, "hero");
            tl1.from("section#hero h5", {
                x: -455,
                duration: 0.7,
                display: "none"
            });
            tl1.from("section#hero h1", {
                x: -500,
                duration: 1.5,
                display: "none"
            }, "hero");
            tl1.from("section#hero p", {
                x: -500,
                duration: 1.5,
                display: "none"
            }, "hero");

            tl1.from("section#hero nav ", {
                y: -90,
                duration: 0.7,
                stagger: 0.2
            }, "hero");
            tl1.from(".hamburger", {
                y: -110,
                duration: 0.7,
                stagger: 0.2
            }, "hero");
        });
    }
}

// loaderPage();








function sliderPart() {
    if (typeof gsap !== 'undefined') {
        const hamburger = document.querySelector('.ham-icon i'); 
        const mobileHamburger = document.querySelector('.mobile-ham-icon i'); 
        const closeIcon = document.querySelector('.close-icon i'); 
        const slider = document.querySelector('.slider'); 
        const navItems = document.querySelectorAll('.slider nav ul li'); 

        const tl = gsap.timeline({ paused: true }); 

        tl.to(slider, {
            duration: 0.5,
            left: '0vw',
            ease: 'power1.out',
        });
        tl.from(navItems, {
            duration: 1,
            opacity: 0,
            x: 20,
            stagger: 0.1,
            ease: 'power1.out'
        });
        tl.from(".close-icon", {
            duration: 0.5,
            opacity: 0,
            ease: 'power1.out'
        }, "-=0.9");

        const openSlider = () => {
            tl.restart();
        };

        if (hamburger) hamburger.addEventListener('click', openSlider); 
        if (mobileHamburger) mobileHamburger.addEventListener('click', openSlider); 

        closeIcon.addEventListener('click', () => {
            var tl9 = gsap.timeline();

            tl9.to(navItems, {
                duration: 0.8,
                opacity: 0,
                x: -20,
                stagger: 0.1,
                ease: 'power1.out'
            });

            tl9.to(".close-icon", {
                duration: 0.5,
                opacity: 0,
                ease: 'power1.out'
            }, "-=0.9");

            tl.to(".slider-social-media li", {
                duration: 0.8,
                opacity: 0,
                stagger:0.3,
                ease: 'power1.out'
            }, "-=1");

            tl9.to(slider, {
                duration: 0.5,
                left: '-100vw',
                ease: 'power1.in'
            });
        });
    }
}

sliderPart();



function heroTxt() {
    const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["MARKETING", "DEVELOPMENT", "BRANDING"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
}
heroTxt()






function aboutSection() {
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const blocks = document.querySelectorAll(".block");
        const contents = document.querySelectorAll(".content");
        const brick = document.querySelector(".brick");
    
        blocks.forEach(block => {
            block.addEventListener("mouseover", () => {
                const target = block.getAttribute("data-target");
                contents.forEach(content => {
                    if (content.classList.contains(`${target}-content`)) {
                        content.classList.add("active");
                    } else {
                        content.classList.remove("active");
                    }
                });
            });
        });
    
        // Reset to block-1-content on mouse leave
        brick.addEventListener("mouseleave", () => {
            contents.forEach(content => content.classList.remove("active"));
            document.querySelector(".block-1-content").classList.add("active");
        });
    });

}
// aboutSection()



function servicesPage() {

    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "section#services",
            scroller: "body",
            start: "top 100%", 
            end: "bottom 0%",
            scrub: 2
        }
    });

    // document.querySelectorAll("#services .col-12").forEach((el, i) => {
    //     tl6.from(el, {
    //         y: 40,
    //         opacity: 0,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: el,
    //             scroller: "body",
    //             start: "top 70%",
    //             end: "center 60%",
    //             scrub: 2
    //         }
    //     });
    // });

}
// servicesPage()




function ourClients() {

    document.addEventListener("DOMContentLoaded", () => {
        const viewMoreBtn = document.querySelector(".our-clients-view-more-btn button");
        const dropdownRows = document.querySelectorAll(".our-clients-dropdown");
    
        viewMoreBtn.addEventListener("click", () => {
            // Make all dropdown rows visible
            dropdownRows.forEach(row => {
                row.classList.add("visible");
            });
    
            // Hide the "View More" button
            viewMoreBtn.parentElement.style.display = "none";
        });
    });
    
    
}
ourClients()





// case











// ModalL
function footerSection() {
    document.addEventListener("DOMContentLoaded", function () {
      const popupModal = document.getElementById("popup-modal");
      const openModalLinks = document.querySelectorAll(".footer-left a, .client-btn"); // Select both elements
      const closeModal = document.querySelector(".close-btn");
  
      // Show modal on click
      openModalLinks.forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent default link behavior
          popupModal.style.display = "flex"; // Show the modal
        });
      });
  
      // Hide modal on close button click
      closeModal.addEventListener("click", function () {
        popupModal.style.display = "none"; // Hide the modal
      });
  
      // Hide modal on clicking outside the modal content
      window.addEventListener("click", function (e) {
        if (e.target === popupModal) {
          popupModal.style.display = "none"; // Hide the modal
        }
      });
    });
  }
  
  footerSection();
  













