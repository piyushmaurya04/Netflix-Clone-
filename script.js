document.addEventListener("DOMContentLoaded", function() {
    const backgroundImages = [
      "bg.jpg",
      "Anima1.jpg",
      "net.jpg"
    ];
    const backgroundSlider = document.querySelector(".main");
  
    let currentIndex = 0;
  
    function changeBackground() {
      backgroundSlider.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
      currentIndex = (currentIndex + 1) % backgroundImages.length;
      setTimeout(changeBackground, 5000); // Change image every 5 seconds
    }
  
    changeBackground(); // Start the background slider
  });
  