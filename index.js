const testVar = {};

function testFunc() {
  return "hi"
}

// let formData = {
//     "dogName": "Byron",
//     "dogBreed": "Poodle"
// };

let formData = {
  firstName: "Krystle",
  registryMessage: "You have been added to the guest book"
};


// const objPassedIntoFetch=  () => {
//   let requestToServerAttribute = {
//       method: 'POST',
//       body: formData
//   };
//   return requestToServerAttribute;
// };

const registerSelf = () =>{
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    body: formData
  })
    .then (response => response.json())
    .then (function ( regMessage ){
      return regMessage.message
    })
};


const errorSelf = () =>{
  return fetch('http://guestbook.example.com/register')
      .catch(function(badRequest){
      return ":("
    })
};

// .catch(function(error){
//     alert("Bad things! Ragnarők!");
//     return "This is an error message. There are many like it, but this one is
//     for log_dogger";
//
// })
