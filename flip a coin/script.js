document.getElementById('flipBtn').addEventListener('click', function() {
    const resultElem = document.getElementById('result');
    const coinElem = document.getElementById('coin');
  
    coinElem.classList.add('flipping', 'flyUp');
  
    setTimeout(function() {
      const randomNum = Math.random();
      const result = randomNum < 0.5 ? 'Heads' : 'Tails';
      resultElem.textContent = `Result: ${result}`;
      coinElem.classList.remove('flipping', 'flyUp');
      updateCoinFaces(result);
      setTimeout(function() {
        coinElem.classList.add('landDown');
        setTimeout(function() {
          coinElem.classList.remove('landDown');
        }, 1000); // Wait for landing animation to complete (1 second)
      }, 1000); // Wait for flip animation to complete (1 second)
    }, 1000); // Wait for flying animation to complete (1 second)
  });
  
  function updateCoinFaces(result) {
    const headsFace = document.querySelector('.heads');
    const tailsFace = document.querySelector('.tails');
  
    if (result === 'Heads') {
      headsFace.textContent = 'H';
      tailsFace.textContent = 'T';
    } if (result === 'Tails') 
    {
      headsFace.textContent = 'T';
      tailsFace.textContent = 'T';
    }
  }
  