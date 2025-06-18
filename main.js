
// This is the JavaScript code for the hamburger menu functionality
// It toggles the visibility of the menu when the hamburger icon is clicked
const hamburger = document.getElementById("hamburger");
const menuNav = document.getElementById("menuNav");

/*hamburger.addEventListener("click", () => {
menuNav.classList.toggle("active");
});*/

if (hamburger && menuNav) {
    hamburger.addEventListener("click", () => {
        menuNav.classList.toggle("active");
    });
    
}
// Close the menu after click
menuNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menuNav.classList.remove("active");
    });
});

// Close the menu when clicking anywhere outside of it
document.addEventListener("click", (event) => {
    if (!menuNav.contains(event.target) && !hamburger.contains(event.target)) {
        menuNav.classList.remove("active");
    }
});

// change color hamburger menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
});

// This code is for the smooth scrolling effect when clicking on menu items

const menuCards = document.querySelector(".menu-cards");
const cards = document.querySelectorAll(".menu-card");
const flipCards = document.querySelectorAll(".flip-card");


cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        menuCards.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
        menuCards.classList.remove("hovered");
    });
});

// This code is for the flip card functionality
flipCards.forEach(flipcard => {
    flipcard.addEventListener('click', () => {
        flipCards.forEach(c => c !== flipcard && c.classList.remove('flipped'));
        flipcard.classList.toggle('flipped');
        
    });
   // remove flip if click outside card
document.addEventListener("click", (event) => {
    flipCards.forEach((outCard) => {
        // Check if the click is outside the card
        if (!outCard.contains(event.target)) {
            outCard.classList.remove("flipped");
        }
    });
});
    /*flipcard.addEventListener('mouseleave', () => {
        flipcard.classList.remove('flipped');
    });*/
});
// Flip a specific card when selected from the menu
const menuItems = document.querySelectorAll(".menu-list a"); // Adjust selector to match your menu items
menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        const targetCardId = menuItem.getAttribute("data-target"); // Get the target card ID from a custom attribute
        const targetCard = document.getElementById(targetCardId); // Find the corresponding card
        if (targetCard) {
            // Remove 'flipped' class from all other cards
            flipCards.forEach(card => card.classList.remove('flipped'));
            // Add 'flipped' class to the target card
            targetCard.classList.add('flipped');
            // Scroll to the target card for better visibility
            targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
});
// logo animation
  const text = "Resturant & Caffee";
  const element = document.getElementById("auto-type");

  let i = 0;               // Position in the text
  let isDeleting = false;  // Whether we're deleting characters

  function type() {
    // 1. Get current text to show
    let displayed = text.substring(0, i);
    element.innerHTML = displayed;

    // 2. Decide whether to type or delete
    if (!isDeleting) {
      if (i < text.length) {
        i++; // Keep typing
        setTimeout(type, 110); // Typing speed
      } else {
        isDeleting = true; // Start deleting after finished typing
        setTimeout(type, 1000); // Pause before deleting
      }
    } else {
      if (i > 0) {
        i--; // Delete one character
        setTimeout(type, 50); // Faster delete speed
      } else {
        isDeleting = false; // Start typing again
        setTimeout(type, 500); // Pause before re-typing
      }
    }
  }

  type(); // Start the typing loop