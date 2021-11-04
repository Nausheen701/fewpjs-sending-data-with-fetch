// Add your code here

submitData(userName, userEmail);

let submitData = {
    userName: "Bob",
    userEmail: "Bob123"
  };
  
  let configObj = {
      method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(submitData)
  };
  
  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });