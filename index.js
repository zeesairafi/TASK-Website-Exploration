let isDark = false;

// 1. This function will toggle the appearance from light text to dark text
function toggleColor() {
  const body = document.getElementsByTagName("body")[0];
  isDark = !isDark;
  if (isDark) {
    body.style.color = "black";
  } else {
    body.style.color = "white";
  }
}

// 2. This will make everything lowercase
function beGentle() {
  document.getElementsByTagName("body")[0].style.textTransform = "lowercase";
}

// 3. This will make everything uppercase.
// if you read this line, then you solved the task!
// add shout() inside the quotation marks after onclick in index.html like this.
// <button onclick="shout()">SHOUT!</button>
function shout() {
  document.getElementsByTagName("body")[0].style.textTransform = "uppercase";
}

// 4. This will fetch a random name from the internet, and replace your name with it!
async function fetchRandomName() {
  try {
    const response = await fetch("https://randomuser.me/api/", {
      method: "GET",
    });
    const data = await response.json();
    const name = data.results[0].name.first;
    document.getElementsByTagName("h3")[0].innerText = name;
  } catch (err) {
    alert(`Couldn't make the request, ${err.message}`);
  }
}
