'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */

let friends = [
    {
        firstName: 'Artsiom',
        lastName: 'Mezin'
    },
    {
        firstName: 'Ilia',
        lastName: 'Kantor'
    },
    {
        firstName: 'Christopher',
        lastName: 'Michael'
    }
];

function makeFriendsList(obj) {
    let result = obj.map(item => {return `${item.firstName} ${item.lastName}`});
    console.log(result);
}

makeFriendsList(friends);
