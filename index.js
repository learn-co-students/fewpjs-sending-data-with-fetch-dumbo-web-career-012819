const testVar = {}

function testFunc() {
  return "hi"
}

const formData = {firstName: "Dallas", registryMessage: "Oh yeah."};
const object = {method: "POST", body: formData};

const registerSelf = () => {
     return fetch('http://guestbook.example.com/register', object)
    .then(response => response.json())
    .then( (parsedResponse) => {
        return parsedResponse.message
    });
}

const errorSelf = () => {
     return fetch('http://guestbook.example.com/register-error')
    .catch(function(error) {
        return ":("
    })
}
