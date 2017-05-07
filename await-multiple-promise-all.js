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

async function showUserAndRepos(handle) {
  // Use of destructuring
   const [users, repos] = await Promise.all([
    fetchFromGitHub(`/users/${handle}`),
    fetchFromGitHub(`/users/${handle}/repos`),
  ]);

  console.log(users.name)
  console.log(repos.length)
}

showUserAndRepos('kaladin9017')
