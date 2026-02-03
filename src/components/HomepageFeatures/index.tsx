import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI Outreach Automation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Launch high-performing outreach programs in minutes. Aifetchly orchestrates
        sequencing, personalization, and follow-ups so your team can focus on the
        conversations that matter.
      </>
    ),
  },
  {
    title: 'Unified Lead Intelligence',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Blend CRM, enrichment, and intent data into a single workspace. Surface
        the highest-value targets automatically with transparent scoring models
        your revenue teams can trust.
      </>
    ),
  },
  {
    title: 'Enterprise-Ready Governance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Built-in compliance controls, audit-ready logging, and role-based access
        keep every workflow secure. Aifetchly scales with the rigor demanded by
        modern go-to-market teams.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
