const formData = {
  "firstName": "Angelo",
  "registryMessage": "Whassup?"
}

const configObj = {
  "method": 'POST',
  "body": formData
}
//
// function testFunc() {
//   return "hi"
// }
//
//
function registerSelf() {
  return fetch("http://guestbook.example.com/register", configObj)
    .then(function(response){
    return response.json();
  }).then(function(json){
    return json.message;
  })
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", configObj)
   .then(function(response){
    return response.json();
  }).then(function(json){
    return json.message;
  }).catch(function(error){
    return ":(";
  })
}
