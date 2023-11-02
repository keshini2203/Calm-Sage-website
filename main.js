

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const setNameButton = document.getElementById("setNameButton");
  const blackSectionTitle = document.querySelector("#black-section h3");

  setNameButton.addEventListener("click", function () {
    const name = nameInput.value;

    if (name.trim() !== "") {
      // Update the black section title with the user's name
      blackSectionTitle.textContent = `Hello, ${name}!`;

      // Scroll to the black section with smooth scrolling
      smoothScrollToElement(blackSectionTitle);
    } else {
      // Provide a message if the name is empty
      blackSectionTitle.textContent = "It feels so nice to see you today";
    }
  });
});


// Function for smooth scrolling to an element
function smoothScrollToElement(element) {
  const targetY = element.getBoundingClientRect().top + window.scrollY;
  const initialY = window.scrollY;
  const distance = Math.abs(targetY - initialY);
  const duration = 2000; // Adjust this value to control the scroll speed

  const start = performance.now();

  function step() {
    const currentTime = performance.now();
    const progress = Math.min((currentTime - start) / duration, 3);
    window.scrollTo(0, initialY + progress * distance);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}





// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const volumeIcon = document.getElementById("volume-icon");
  
    // Add a click event listener to the volume control
    volumeIcon.addEventListener("click", function() {
      if (audio.paused) {
        // If the audio is paused, play it and change the icon to "volume off"
        audio.play();
        volumeIcon.className = "fas fa-volume-off";
      } else {
        // If the audio is playing, pause it and change the icon to "volume up"
        audio.pause();
        volumeIcon.className = "fas fa-volume-up";
      }
    });
  });
  

const circles = document.querySelectorAll(".circle");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");

circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        const text = circle.querySelector("p").textContent;
        popup.innerHTML = text;
        overlay.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.style.display = "none";
    }
});

popup.addEventListener("click", (event) => {
    event.stopPropagation();
});


document.addEventListener("DOMContentLoaded", function () {
  const inhaleText = document.getElementById("inhale");
  const exhaleText = document.getElementById("exhale");

  setTimeout(function () {
    inhaleText.style.opacity = 0; // Hide "Inhale" after 10 seconds
    exhaleText.style.opacity = 1; // Show "Exhale"
  }, 10000); // 10 seconds in milliseconds
});

document.addEventListener('DOMContentLoaded', function () {
  const inhaleText = document.querySelector('.inhale');
  const exhaleText = document.querySelector('.exhale');

  function cycleText() {
    // Show the "Inhale" text
    inhaleText.style.opacity = 1;
    setTimeout(function () {
      inhaleText.style.opacity = 0;
      // Show the "Exhale" text after hiding "Inhale"
      setTimeout(function () {
        exhaleText.style.opacity = 1;
        // Hide the "Exhale" text after 5 seconds
        setTimeout(function () {
          exhaleText.style.opacity = 0;
        }, 5000); // Show "Exhale" for 5 seconds
      }, 1000); // Hide "Inhale" for 1 second
    }, 5000); // Show "Inhale" for 5 seconds
  }

  // Initial cycle
  cycleText();

  // Repeat the cycle every 11 seconds (5 seconds for "Inhale" and 5 seconds for "Exhale")
  setInterval(cycleText, 11000);
});

  document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-button');
  
    startButton.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default behavior of the link
      const targetSection = document.querySelector(this.getAttribute('href'));
  
      if (targetSection) {
        smoothScrollTo(targetSection);
      }
    });
  });
  
  function smoothScrollTo(targetElement) {
    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Adjust the duration as needed for smoother scrolling
    const startTime = performance.now();
  
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const scrollTo = easeInOut(elapsedTime, startPosition, distance, duration);
  
      window.scrollTo(0, scrollTo);
  
      if (elapsedTime < duration) {
        requestAnimationFrame(step);
      }
    }
  
    function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(step);
  }
  
  const bubbleContainer = document.getElementById("bubble-container");

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    const size = Math.random() * 100 + 30;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    const xPos = Math.random() * window.innerWidth;
    bubble.style.left = `${xPos}px`;

    bubble.addEventListener("click", () => {
        bubble.remove();
    });

    bubbleContainer.appendChild(bubble);
}

setInterval(createBubble, 1000); // Create bubbles every 1 second

document.addEventListener("DOMContentLoaded", function() {
  var scrollButton = document.querySelector(".scroll-down-button");

  if (scrollButton) {
      scrollButton.addEventListener("click", function(e) {
          e.preventDefault();
          var targetSection = document.getElementById("river-section");
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth" });
          }
      });
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 0; // You can adjust this value to fine-tune the scroll position
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      };
      
      // Delay the scroll action
      setTimeout(() => {
        targetElement.scrollIntoView(scrollOptions);
      }, 100); // Adjust the delay (milliseconds) as needed
    }
  });
});


