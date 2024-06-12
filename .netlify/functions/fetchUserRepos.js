import fetch from 'node-fetch';

export async function handler(event, context) {
  const token = process.env.GITHUB_TOKEN;
  const { reposUrl } = JSON.parse(event.body);

  const response = await fetch(reposUrl, {
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

  const reposData = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(reposData)
  };
}
