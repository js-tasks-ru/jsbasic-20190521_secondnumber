/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

'use strict';

let m = prompt('Ведите m', '' );
let n = prompt ('Введите n', '');

function pow(m, n){
  if (n == 1)
    return m;
  else {
    return(m * pow(m,n-1));
  }
}

pow (m, n);
