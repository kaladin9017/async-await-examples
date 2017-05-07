const fetch = require('node-fetch');

/*
 * The await operator takes a promise and pauses a function wxecution until the promise is executed
*/

async function fetchGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200)
    throw Error(body.message)

  return body;
}

async function showGitHubUser(handle) {
  try {
    const user = await fetchGitHubUser(handle);
    console.log(user.name);
    console.log(user.location);
  }
  catch (err) {
    console.error(`ERROR: ${err.message}`);
  }
}

showGitHubUser('kaladin90178')
