function registerSelf() {
  let formData = {
    "firstName": "Shemar",
    "registryMessage": "Poodle"
  };

  let configObj = {
    method: "POST",
    body: formData
  }

  return fetch("http://guestbook.example.com/register", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json.message;
    });
}

function errorSelf() {
  let formData = {
    "firstName": "Shemar",
    "registryMessage": "Poodle"
  };

  let configObj = {
    method: "POST",
    body: formData
  }
  return fetch("http://guestbook.example.com/register-error", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json.message;
    })
    .catch(function(error) {
      console.log(error)
      return ":("

    })
}