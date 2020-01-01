// Fetch API new way to deal with HTTP Request
document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

//GET LOCAL TEXT FILE DATA
function getText() {
  fetch("test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

//GET LOCAL JSON DATA
function getJson() {
  fetch("posts.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

//GET EXTERNAL DATA
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
