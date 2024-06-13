const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    console.log('Received event:', event);  // Log the event for debugging

    // Dynamically import 'node-fetch'
    const fetch = (await import('node-fetch')).default;

    const token = process.env.GITHUB_TOKEN;
    console.log('Using GitHub token:', token ? 'yes' : 'no'); // Log if token is present

    const { reposUrl } = JSON.parse(event.body);
    console.log('Fetching repos data for URL:', reposUrl);

    const response = await fetch(reposUrl, {
      headers: {
        Authorization: `token ${token}`
      }
    });

    if (!response.ok) {
      console.error(`Error fetching repos data: ${response.statusText}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `HTTP error! status: ${response.statusText}` })
      };
    }

    const reposData = await response.json();
    console.log('Repos data fetched successfully:', reposData); // Log the fetched repos data
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