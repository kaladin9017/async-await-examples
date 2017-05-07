const fetch = require('node-fetch');

class GitHubApiClient {
  async fetchUser(handle) {
      const url = `https://api.github.com/users/${handle}`;
      const response = await fetch(url);
      return await response.json();
  }
}

(async function() {
  const client = new GitHubApiClient();
  const user = await client.fetchUser('kaladin9017');
  console.log(user.name);
})()
