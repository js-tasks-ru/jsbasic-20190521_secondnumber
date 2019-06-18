/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
'use strict';

function isEmpty (obj) {
    for (const key in obj) {
        return false;
    } return  true;
}

