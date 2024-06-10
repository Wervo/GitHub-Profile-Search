import React from "react";

export default function Main({ username, repos }) {
  if (!repos || repos.length === 0) {
    return (
      <div className="container-main">
        <div className="row-container">
          <div className="container">
            <h3>.github</h3>
            <p>Community health files for the @GitHub organization</p>
            <div className="container-stats">
              <div className="nesting">
                <img src="./image/nesting.svg" alt="Nesting" />
                <span>2,369</span>
              </div>
              <div className="star">
                <img src="./image/Star.svg" alt="Star" />
                <p>703</p>
              </div>
              <div className="update">
                <span>updated 4 days ago</span>
              </div>
            </div>
          </div>
          <div className="container">
            <h3>accessibility-alt-text-bot</h3>
            <p>An action to remind users to add alt text on Issues, Pull, Requests, and Discussions</p>
            <div className="container-stats">
              <div className="MIT">
                <img src="./image/Chield_alt.svg" alt="MIT" />
                <span>MIT</span>
              </div>
              <div className="nesting">
                <img src="./image/nesting.svg" alt="Nesting" />
                <p>7</p>
              </div>
              <div className="star">
                <img src="./image/Star.svg" alt="Star" />
                <p>50</p>
              </div>
              <div className="update">
                <span>updated 3 days ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row-container">
          <div className="container">
            <h3>accessibilityjs</h3>
            <p>Client side accessibility error scanner.</p>
            <div className="container-stats">
              <div className="MIT">
                <img src="./image/Chield_alt.svg" alt="MIT" />
                <span>MIT</span>
              </div>
              <div className="nesting">
                <img src="./image/nesting.svg" alt="Nesting" />
                <p>72</p>
              </div>
              <div className="star">
                <img src="./image/Star.svg" alt="Star" />
                <p>2181</p>
              </div>
              <div className="update">
                <span>updated 4 days ago</span>
              </div>
            </div>
          </div>
          <div className="container">
            <h3>actions-cheat-sheet</h3>
            <p>A cheat sheet for GitHub Actions</p>
            <div className="container-stats">
              <div className="MIT">
                <img src="./image/Chield_alt.svg" alt="MIT" />
                <span>MIT</span>
              </div>
              <div className="nesting">
                <img src="./image/nesting.svg" alt="Nesting" />
                <p>26</p>
              </div>
              <div className="star">
                <img src="./image/Star.svg" alt="Star" />
                <p>194</p>
              </div>
              <div className="update">
                <span>updated 4 days ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="repositories">
          <a href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noopener noreferrer">
            <p>View all repositories</p>
          </a>
        </div>
      </div>
    );
  }

  const renderRepoContainers = (repos) => {
    return repos.slice(0, 4).map((repo, index) => (
      <a 
        key={index} 
        href={repo.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="repo-link"
      >
        <div className="container">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <div className="container-stats">
            <div className="nesting">
              <img src="./image/nesting.svg" alt="Nesting" />
              <span>{repo.forks_count}</span>
            </div>
            <div className="star">
              <img src="./image/Star.svg" alt="Star" />
              <p>{repo.stargazers_count}</p>
            </div>
            <div className="update">
              <span>updated {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <div className="container-main">
      <div className="row-container">
        {renderRepoContainers(repos.slice(0, 2))}
      </div>
      <div className="row-container">
        {renderRepoContainers(repos.slice(2, 4))}
      </div>
      <div className="repositories">
      <a href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noopener noreferrer">
          <p>View all repositories</p>
        </a>
      </div>
    </div>
  );
}