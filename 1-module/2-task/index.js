'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (userName) {
    if ( userName.length <= 4 && userName !== ''
        && userName[0] !== ' ' && userName[1]!== ' ' && userName[2] !== ' ' && userName[3] !== ' ') {
        return userName;
    }

}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

