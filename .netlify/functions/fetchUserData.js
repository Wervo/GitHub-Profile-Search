// functions/fetchUserData.js
export async function handler(event, context) {
  console.log('Received event:', event);  // Log the event for debugging
  const token = process.env.GITHUB_TOKEN;
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
}
