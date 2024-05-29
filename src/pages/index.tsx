import React from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Markdown from "react-markdown";

const Home: React.FC = () => {
  const markdownPageUrl = useBaseUrl("/markdown-page.md");

  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container">
          <Markdown>{`
            import Content from '${markdownPageUrl}';

            <Content />
          `}</Markdown>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
