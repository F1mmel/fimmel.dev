import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './GitHubProject.module.css';

function GitHubProject({ username }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch GitHub repositories
    async function fetchRepos() {
      try {        
        const response = await axios.get('https://api.github.com/users/F1mmel/repos');
        const fetchedRepos = response.data.map(repo => ({
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
          stars: repo.stargazers_count,
        }));
        setRepos(fetchedRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{username}'s GitHub Projects</h2>
      <div className={styles.grid}>
      {repos.map((repo, index) => (
          <div key={index} className={styles.card}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
              <h3 className={styles.repoName}>{repo.name}</h3>
            </a>
            <p className={styles.repoDescription}>
              {repo.description || 'No description available.'}
            </p>
            <div className={styles.projectDetails}>
              <span>💻 {repo.language || 'Not specified'}</span>
              <span> | ⭐ {repo.stars}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GitHubProject;
