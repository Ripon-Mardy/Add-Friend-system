let stutusText = document.querySelector('#stranger');
let addFriend = document.querySelector('#add');
let remove = document.querySelector('#remove');

addFriend.addEventListener('click', () => {
    stutusText.textContent = 'Friends';
    stutusText.style.color = 'green';
    addFriend.textContent = 'Request Send'
})

remove.addEventListener('click', () => {
    stutusText.textContent = 'Stranger';
    stutusText.style.color = 'red';
    addFriend.textContent = 'Add Friend'
})