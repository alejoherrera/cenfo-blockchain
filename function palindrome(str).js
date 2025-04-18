function palindrome(str) {
  // Convertir a minúsculas y limpiar
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Comparar con su reverso
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Devolver true si son iguales
  return cleanStr === reversedStr;
}