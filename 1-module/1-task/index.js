/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

var m = prompt('Ведите m', '' );
var n = prompt ('Введите n', '');

function pow(m, n){
  if (n == 1)
    return m;
  else {
    return(m * pow(m,n-1));
  }
}

alert( pow (m, n) );
