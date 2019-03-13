// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }

function errorSelf(){
  let info = {
    method: "POST",
    body: {
      firstName: "Seann",
      registryMessage: "Hello"
    }
  }
  return fetch("http://guestbook.example.com/register-error", info)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsedResponse) {
      return parsedResponse.message
    })
    .catch(function(error){
      return ":("
    })
}

function registerSelf() {
  let info = {
    method: "POST",
    body: {
      firstName: "Seann",
      registryMessage: "Hello"
    }
  }
  return fetch("http://guestbook.example.com/register", info)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsedResponse) {
      return parsedResponse.message
    })
}
