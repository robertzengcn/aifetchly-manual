import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "homepage.feature1.title",
      message: "Your Local AI Agent Workspace",
    }),
    icon: "🤖",
    description: (
      <Translate id="homepage.feature1.description">
        Ask an AI agent to run research, analyze files, extract data, and
        prepare messages from a single desktop chat. The agent calls approved
        tools, uses your knowledge library, delegates to specialist subagents, and
        stays local-first with permission-gated control.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature2.title",
      message: "Bring Your Own AI Model",
    }),
    icon: "🧠",
    description: (
      <Translate id="homepage.feature2.description">
        Point your AI agent at any OpenAI-compatible provider — Ollama, LM
        Studio, OpenAI, OpenRouter, or vLLM. Use local servers or third-party
        APIs; your API key never leaves your machine.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature3.title",
      message: "Run Email Campaigns That Convert",
    }),
    icon: "📧",
    description: (
      <Translate id="homepage.feature3.description">
        Design campaigns with AI-generated templates tailored to your tone and
        audience. Send outreach campaigns through your own SMTP, apply smart filters to
        target the right contacts, and track delivery status in real time.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature4.title",
      message: "Unlock Business Data from Global Directories",
    }),
    icon: "📒",
    description: (
      <Translate id="homepage.feature4.description">
        Organize business names, contact info, ratings, locations, and social
        links from global directory platforms. AI-assisted data alignment adapts
        to directory changes so your data stays accurate.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature5.title",
      message: "Manage and Grow Your Social Presence",
    }),
    icon: "📱",
    description: (
      <Translate id="homepage.feature5.description">
        Connect your Facebook, Twitter, YouTube, and TikTok accounts. Schedule
        posts, automate content sharing.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature6.title",
      message: "Put Your Workflow on Autopilot",
    }),
    icon: "⏱️",
    description: (
      <Translate id="homepage.feature6.description">
        Schedule any task — searches, email campaigns, scrapes — with flexible
        cron timing. Set up recurring jobs, chain dependent tasks, and monitor
        execution history without lifting a finger.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature7.title",
      message: "Your Private AI Assistant, Powered by Your Own Data",
    }),
    icon: "📚",
    description: (
      <Translate id="homepage.feature7.description">
        Upload documents (PDF, DOCX, TXT, MD) and chat with an AI that
        understands your content. Semantic search finds exactly what you need
        across your entire knowledge base.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature8.title",
      message: "Extend the Platform with Installable Skills",
    }),
    icon: "🧩",
    description: (
      <Translate id="homepage.feature8.description">
        Import skill packages to add new AI capabilities on demand. From PDF
        processing to data analysis, the skill system lets the platform grow
        with your needs — no coding required.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature9.title",
      message: "Stay Anonymous, Stay Unblocked",
    }),
    icon: "🌐",
    description: (
      <Translate id="homepage.feature9.description">
        Manage rotating HTTP, HTTPS, and SOCKS5 proxies with one click. Bulk
        import, validate, and test proxies to ensure uninterrupted access across
        all platforms.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature10.title",
      message: "Track Every Metric That Matters",
    }),
    icon: "📊",
    description: (
      <Translate id="homepage.feature10.description">
        Get a real-time overview of searches, emails extracted, campaigns sent,
        and success rates. Filter by date range, break down by search engine,
        and spot trends to optimize your strategy.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature11.title",
      message: "Export Clean Data in One Click",
    }),
    icon: "💾",
    description: (
      <Translate id="homepage.feature11.description">
        Download any dataset as CSV with custom formatting. Generate performance
        reports with conversion tracking and ROI metrics to share with your team
        or clients.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.feature12.title",
      message: "Work in Your Language",
    }),
    icon: "🌍",
    description: (
      <Translate id="homepage.feature12.description">
        Full interface support for English, Chinese, Spanish, French, German,
        and Japanese. Switch languages on the fly — the entire app adapts
        instantly.
      </Translate>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem): ReactNode {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
