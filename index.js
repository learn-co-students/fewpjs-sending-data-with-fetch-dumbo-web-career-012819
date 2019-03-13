const testVar = {}

let formData = {
  'firstName': 'Name',
  'registryMessage': 'Message'
};

let configObj = {
  method: "POST",
  body: JSON.stringify(formData)
};

function testFunc() {
  return "hi"
}

function registerSelf() {
  return fetch("http://guestbook.example.com/register" , configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(content){
      return content.message;
    })
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error" , configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(content){
      return content.message;
    })
    .catch(function(error){
      return ':(';
    })
}
