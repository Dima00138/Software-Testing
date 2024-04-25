function triangleType(a, b, c) {

    if(!typeof a == 'number' || !typeof b == 'number' || !typeof c == 'number'){
          return false;
        }
  
    if (a <= 0 || b <= 0 || c <= 0) {
      //'Стороны должны быть положительными числами';
      return false;
    }
  
    if (a + b <= c || a + c <= b || b + c <= a) {
      //'Сумма длин любых двух сторон должна быть больше длины третьей стороны';
      return false;
    }
  
    if (a === b && b === c) {
      //'Равносторонний треугольник';
      return true;
    } else if (a === b || a === c || b === c) {
      //'Равнобедренный треугольник';
      return true;
    } else {
      //'Разносторонний треугольник';
      return true;
    }
  }
  
module.exports = triangleType
  