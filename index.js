const messageElement = document.getElementById('message');
const changeMessageButton = document.getElementById('changeMessageButton');

changeMessageButton.addEventListener('click', changeMessage);

function changeMessage() {
  messageElement.textContent = 'Updated Message Text!';
}