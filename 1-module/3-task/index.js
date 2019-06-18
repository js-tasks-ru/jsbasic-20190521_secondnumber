'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

let inputData = '25,-1,-234,4,  1000';

function compareNumeric(a, b) {
    return a - b;
}

function getMinMax(Data) {
    let replacedData = (Data.replace(/[^0-9.-]/g, ' '));
    let arrData = replacedData.split(/\s+/);
    arrData.sort(compareNumeric);
    let min = arrData.shift();
    let max = arrData.pop();
    let minMax = {min: +min, max: +max};
    return minMax;
}

getMinMax(inputData);
