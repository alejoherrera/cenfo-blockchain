function getAverage(scores) {
  // Inicializar variable  suma
  let sum = 0;
  
  // Sumar todos los valores
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  
  // Calcular promedio
  return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));