// Menu Button 1 //

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
}

// Menu Button 1 //

const typedTextSpan = document.querySelector(".typing-text");
        const cursorSpan = document.querySelector(".cursor");
        
        const textArray = ["Reels", "Videos", "Posters"];
        const typingDelay = 100;
        const erasingDelay = 100;
        const newTextDelay = 1200; // Delay between current and next text
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



        /* Show scrolltop button
======================================= */
const scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  window.scrollY > 150
    ? scrolltop.classList.add("scrolltop--active")
    : scrolltop.classList.remove("scrolltop--active");
});

/* Scrollreveal Animations
======================================= */
const sr = ScrollReveal({
  distance: "150px",
  duration: 2500,
  delay: 200,
  reset: false,
});

sr.reveal(".header-left", { origin: "top" });
sr.reveal(".img-hom, .features-header, .feature-desc-4, .f-menu", { origin: "bottom", interval: 200 });
sr.reveal(
  ".c-1, .c-2, .ani-img-2, .feature-desc-2, .ani-img-4, .feature-desc-5",
  { origin: "left" }
);
sr.reveal(
  ".c-3, .c-4, .feature-desc, .ani-img-3, .feature-desc-3, .ani-img-5",
  { origin: "right" }
);

