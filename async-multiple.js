const fetch = require('node-fetch');

/*
 * The await operator takes a promise and pauses a function wxecution until the promise is executed
*/

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200)
    throw Error(body.message)

  return body;
}

async function showGitHubUser(handle) {
  try {
    const userPromise = fetchFromGitHub(`/users/${handle}`);
    const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;
    console.log(user.name, repos.length)
  }
  catch (err) {
    console.error(`ERROR: ${err.message}`);
  }
}

showGitHubUser('kaladin9017')
