import fetch from 'node-fetch';

exports.handler = async function(event, context) {
  try {
    const token = process.env.GITHUB_TOKEN;
    const { reposUrl } = JSON.parse(event.body);
    console.log('Fetching repos from URL:', reposUrl);

    const response = await fetch(reposUrl, {
      headers: {
        Authorization: `token ${token}`
      }
    });

    if (!response.ok) {
      console.error(`Error fetching user repos: ${response.statusText}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `HTTP error! status: ${response.statusText}` })
      };
    }

    const reposData = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(reposData)
    };
  } catch (error) {
    console.error('Error in fetchUserRepos function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};
