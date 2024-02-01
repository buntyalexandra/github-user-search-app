// search feature
// select the search input by id
const searchInput = document.getElementById("searchInput");
// select seach button by id
const searchButton = document.getElementById("searchButton");
// declare the input value
const inputValue = searchInput.value;
// function to get input value and print it to the console
function getInputVal() {
  console.log("inputValue:", inputValue);
}
// add on click event listener to search button
searchButton.addEventListener("click", getInputVal);

function fetchUser(user) {
  fetch(`https://api.github.com/users/${searchInput}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data:", data);
    })
    .catch((error) => console.log(error));
}

// update search result card
