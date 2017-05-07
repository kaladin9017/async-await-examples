const fetch = require('node-fetch');

// Not Async

function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  fetch(url)
    .then(response => response.json())
    .then(user => {
      console.log(user.name);
      console.log(user.location);
    });
}

showGitHubUser('kaladin9017');

/* The await operator takes a promise and pauses a function wxecution until the promise is executed */

async function showGitHubUserAsync(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name)
  console.log(user.location)

}

showGitHubUserAsync('kaladin9017');
