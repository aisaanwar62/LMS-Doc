import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary h-96  bg-amber-500  ",
        "p-10",
        styles.heroBanner
      )}
    >
      <div className="container flex items-center">
        <div className="flex-1">
          <Heading as="h1" className="text-4xl text-slate-700 font-bold">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle mt-3">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg mt-5 text-slate-700"
              to="/docs/Get Started/Introduction"
            >
              View LMS Documentation
            </Link>
          </div>
        </div>
        <img
          src="/img/main-page.PNG"
          alt="Main Page"
          className="w-96 h-auto ml-auto p-3 shadow-lg" // Tailwind CSS classes to control width and push the image to the right
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
