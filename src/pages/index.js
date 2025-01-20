import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import GitHubProject from '@site/src/components/GitHubProject'; // Import der Komponente
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A portfolio showcasing projects and more."
    >
      <main>
        <div className="container">
          <GitHubProject username="F1mmel" />
        </div>
      </main>
    </Layout>
  );
}
