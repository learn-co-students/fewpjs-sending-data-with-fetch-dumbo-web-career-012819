const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', {
    'method': 'POST',
    'body': {
      'firstName': 'Nate',
      'registryMessage': "This is a message in a test in a course in life."
    }
  })
    .then(response => response.json())
    .then(data => data.message);
}

//



function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', {
    'method': 'POST',
    'body': {
      'firstName': 'Nate',
      'registryMessage': "This is a message in a test in a course in life."
    }
  })
  .then(response => response.json())
  .then(data => data.message)
  .catch(error => ":(")
}
