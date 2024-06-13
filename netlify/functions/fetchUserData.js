const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    console.log('Received event:', event);  // Log the event for debugging

    // Dynamically import 'node-fetch'
    const fetch = (await import('node-fetch')).default;
    
    const token = process.env.GITHUB_TOKEN;
    console.log('Using GitHub token:', token ? 'yes' : 'no'); // Log if token is present

    const { username } = JSON.parse(event.body);
    console.log('Fetching user data for:', username);

    const userUrl = `https://api.github.com/users/${username}`;
    const response = await fetch(userUrl, {
      headers: {
        Authorization: `token ${token}`
      }
    });

    if (!response.ok) {
      console.error(`Error fetching user data: ${response.statusText}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `HTTP error! status: ${response.statusText}` })
      };
    }

    const userData = await response.json();
    console.log('User data fetched successfully:', userData); // Log the fetched user data
    return {
      statusCode: 200,
      body: JSON.stringify(userData)
    };
  } catch (error) {
    console.error('Error in fetchUserData function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};