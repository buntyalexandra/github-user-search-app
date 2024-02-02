// search feature

function fetchUser(user) {
  // 1. need to capture the input value
  // select the search input by id
  const searchInput = document.getElementById("searchInput");
  // declare the input value
  let inputValue = searchInput.value;
  // 2. need to fetch the user (if they exist) from GitHub API
  fetch(`https://api.github.com/users/${inputValue}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data:", data);
    })
    .catch((error) => console.log(error));
}

// select seach button by id
const searchButton = document.getElementById("searchButton");
// add on click event listener to search button
searchButton.addEventListener("click", fetchUser);

// update search result card
