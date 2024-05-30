import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container">
          <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>🚰⚙️🔧</h1>
            <h2>Welcome to Baked's pipeline site!</h2>
            <h2>___</h2>
            <h1>🥳 v0.6.0-bakedstudios.0.5.4 is out! 🎉</h1>
            <h2>___</h2>
            <h2>Helpful links:</h2>
            <h3>
              <Link
                to="https://community.shotgridsoftware.com/"
                className="external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Autodesk Flow Forums
              </Link>
            </h3>
            <h3>
              <Link
                to="https://forums.thinkboxsoftware.com"
                className="external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deadline Forums
              </Link>
            </h3>
            <h3>
              <Link
                to="https://support.suitestudios.io/en/"
                className="external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suite Knowledge Base
              </Link>
            </h3>
            <h3>
              <Link
                to="https://help.massive.io/en"
                className="external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                MASV Support
              </Link>
            </h3>
            <h2>___</h2>
            <div style={{ marginTop: "20px" }}>
              <Link className="button button--primary button--lg" to="/blog">
                Latest Post
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
