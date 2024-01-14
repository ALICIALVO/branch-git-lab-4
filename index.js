const messageElement = document.getElementById('message');
const changeMessageButton = document.getElementById('changeMessageButton');

changeMessageButton.addEventListener('mouseover', changeMessage);

function changeMessage() {
  messageElement.textContent = 'New Message!';
}