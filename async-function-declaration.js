const fetch = require('node-fetch');

const fetchGitHubUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();

}

(async function() {
  const user = await fetchGitHubUser('kaladin9017');
  console.log(user.name);
})()
