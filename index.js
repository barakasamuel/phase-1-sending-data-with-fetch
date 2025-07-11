// Add your code here
// JavaScript
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name: name, email: email })
  })
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML += data.id;
    })
    .catch(error => {
      document.body.innerHTML += error.message;
    });
}