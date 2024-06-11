// functions/fetchUserData.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const token = process.env.GITHUB_TOKEN; // Use environment variable
  const { username } = JSON.parse(event.body);
  const userUrl = `https://api.github.com/users/${username}`;

  const response = await fetch(userUrl, {
    headers: {
      Authorization: `token ${token}`
    }
  });

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: `HTTP error! status: ${response.status}` })
    };
  }

  const userData = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(userData)
  };
};