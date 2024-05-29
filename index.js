document.getElementById("Group_1061").addEventListener("click", fetchAdvice);

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip;
      document.getElementById("AdviceNumber").textContent = advice.id;
      document.getElementById("Text").textContent = `"${advice.advice}"`;
    })
    .catch((error) => console.error("Error fetching advice:", error));
}

window.onload = function () {
  function adjustLogoPosition() {
    const logo = document.getElementById("logo");
    const container = document.querySelector(".Container");
    if (window.innerWidth < 600) {
      logo.style.top = "-70px"; 
      logo.style.bottom = "unset"; 
    } else {   
      logo.style.top = "unset"; 
      logo.style.bottom = "-90px"; 
    }
  }

  
  adjustLogoPosition();

  
  window.addEventListener("resize", adjustLogoPosition);
};
