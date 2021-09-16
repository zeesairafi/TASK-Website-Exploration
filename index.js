let appearance = "light";

// 1. This function will toggle the appearance from white text to dark text
function toggleColor() {
  if (appearance == "light") {
    appearance = "dark";
    const body = document.getElementsByTagName("body")[0];
    body.style.color = "black";
  } else {
    appearance = "light";
    const body = document.getElementsByTagName("body")[0];
    body.style.color = "white";
  }
}

// 2. This will make everything lower-cased
function beGentle() {
  document.getElementsByTagName("body")[0].style.textTransform = "lowercase";
}

// 3. This will make everything upper-cased.
// if you read this line, then you solved the task!
// add shout() inside the quotation marks after onclick in index.html like this.
// <button onclick="shout()">SHOUT!</button>
function shout() {
  document.getElementsByTagName("body")[0].style.textTransform = "uppercase";
}

// 4. This will fetch a random name from the internet, and replace your name with it!
function fetchRandomName() {
  fetch("https://randomuser.me/api/", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const name = data.results[0].name.first;
      document.getElementsByTagName("h3")[0].innerText = name;
    })
    .catch((err) => {
      alert(`Couldn't make the request, ${err.message}`);
    });
}
