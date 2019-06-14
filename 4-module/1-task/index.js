'use strict';


function makeFriendsList(data) {
    let dataNew = data.map(item => {
        return `${item.firstName} ${item.lastName}`
    });
    let ul = document.createElement('ul');
    ul.innerHTML =
        `<li>${dataNew[0]}</li>
        <li>${dataNew[1]}</li>
        <li>${dataNew[2]}</li>`;
    document.body.appendChild(ul);

}

makeFriendsList(friends);



/*
let result = obj.map(item => {
    return `${item.firstName} ${item.lastName}`
});*/
