document.getElementById('Group_1061').addEventListener('click', fetchAdvice);

function fetchAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip;
      document.getElementById('AdviceNumber').textContent = advice.id;
      document.getElementById('Text').textContent = `"${advice.advice}"`;
    })
    .catch(error => console.error('Error fetching advice:', error));
}
