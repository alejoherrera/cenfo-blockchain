function getAverage(scores) {
  // Inicializar la variable para la suma
  let sum = 0;
  
  // Sumar todos los valores del array
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  
  // Calcular y devolver el promedio
  return sum / scores.length;
}