const userMessages = [];

const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');

function renderMessages() {
  let messageItems = '';

  for (const message of userMessages) {
    messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-image">
          <img src="${message.image}">
        </div>
        <p>${message.text}</p>
      </li>
    `;
  }

  userMessagesList.innerHTML = messageItems;
}

function sanitize(data) {
  return data.replace(/<(?!script)[^>]*>/g, '')
}

function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = event.target.querySelector('textarea');
  const messageImageInput = event.target.querySelector('input');
  const userMessage = sanitize(userMessageInput.value);
  const imageUrl = messageImageInput.value;

  if (
    !userMessage ||
    !imageUrl ||
    userMessage.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert('Please insert a valid message and image.');
    return;
  }

  userMessages.push({
    text: userMessage,
    image: imageUrl,
  });

  userMessageInput.value = '';
  messageImageInput.value = '';

  renderMessages();
}

// fetch(`http://localhost:8080/hack?token=${localStorage.getItem('token')}`, { method: 'GET', headers: { 'Content-Type': 'application/json', }, })

userMessageForm.addEventListener('submit', formSubmitHandler);