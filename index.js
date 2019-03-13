const testVar = {}

function testFunc() {
  return "hi"
}

//You need to write a fetch() requests that sends your first name as firstName and registryMessage to an API located at http://guestbook.example.com/register. If you perform the request correctly, the server will respond with a JSON object that has a key called message. You should use then() calls to extract and, in the last callback, return the message value.

// You should write this code inside the registerSelf() function.
const configObj = {
  method: "POST",
  body: {
    "firstName": "Mazen",
    "registryMessage": "Hellloooooooo"
  }
}


const registerSelf = () => {
  return fetch("http://guestbook.example.com/register", configObj)
  .then( (response) => response.json())
  .then( (json) => {
    return json.message;
  });
}

const errorSelf = () => {
  return fetch("http://guestbook.example.com/register-error", configObj)
  .then( (response) => response.json())
  .then( (json) => {
    return json;
  }).catch( (error) => {
    return ":(";
  })
}

document.addEventListener('DOMContentLoaded', () => {
  registerSelf();
  errorSelf();
})
