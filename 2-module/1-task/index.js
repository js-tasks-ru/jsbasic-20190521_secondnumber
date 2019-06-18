/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
'use strict';

function cloneObj(obj) {
    let clone = {};
    for(const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            clone[key] = cloneObj(obj[key]);
        } else clone[key] = obj[key];
    }
        return clone;
    }

function clone(obj) {
    for (const key in obj){
        if ( typeof obj[key] == 'object') {
            clone[key] = cloneObj(obj[key]);
        }
        else clone[key] = obj[key];
    }
        return clone;
}