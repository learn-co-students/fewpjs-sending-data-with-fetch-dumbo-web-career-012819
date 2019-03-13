const testVar = {}

function testFunc() {
  return "hi"
}

const obj = {
  method: "POST",
  body: {
    firstName: "Michael",
    registryMessage: "You have been added to the guest book"
  }
};

function registerSelf() {

  return fetch('http://guestbook.example.com/register', obj)
    .then(response => response.json())
    .then(responseObj => responseObj.message)
  // return fetch('http://guestbook.example.com/register', obj)
  //   .then(function(response) {
  //     return response.json()
  //   })
  //   .then(function(parsedObj) {
  //     return parsedObj.message;
  //   })
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', obj)
    .then(response => response.json())
    .then(parsedObj => parsedObj)
    .catch(error => ":(")
}
