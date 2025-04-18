document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('text-input');
  const checkBtn = document.getElementById('check-btn');
  const result = document.getElementById('result');

  // chkeo
  function palindrome(str) {
    //limpieza
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Comparar
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // true si lo es
    return cleanStr === reversedStr;
  }

 
  checkBtn.addEventListener('click', function() {
    checkPalindrome();
  });

  
  textInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      checkPalindrome();
    }
  });

  
  function checkPalindrome() {
    const text = textInput.value.trim();
    
    if (!text) {
      alert('dame la frase');
      return;
    }
    
    // Checkear
    const isPalindrome = palindrome(text);
    
    //resultado
    if (isPalindrome) {
      result.textContent = `${text} es un palindrome`;
      result.style.backgroundColor = '#d4edda';
      result.style.color = '#155724';
    } else {
      result.textContent = `${text} no es un palindrome`;
      result.style.backgroundColor = '#f8d7da';
      result.style.color = '#721c24';
    }
  }
});