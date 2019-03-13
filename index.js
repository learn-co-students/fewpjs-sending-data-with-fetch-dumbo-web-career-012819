const testVar = {}
function testFunc() {
  return "hi"
}

let formData = {
  firstName: 'Cristian',
  registryMessage: 'Hello'
}


const registerSelf = () => {
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    body: formData
  }).then(function(res) {
    return res.json()
  }).then(function(content) {
    return content.message
  })
} 

const errorSelf = () => {
  return fetch('http://guestbook.example.com/register-error')
    .catch(function(error) {
      return ":("
    })
}
