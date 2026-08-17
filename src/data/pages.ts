export type SegmentPage = {
  eyebrow: string
  title: string
  description: string
  highlights: { title: string; text: string }[]
  ctaLabel?: string
  showRwaUseCases?: boolean
  showShariahCalculator?: boolean
  showEngagementPath?: boolean
  showOnboardingProcess?: boolean
  process?: {
    title: string
    steps: {
      number: string
      title: string
      text?: string
      bullets?: string[]
    }[]
  }
}

export const segmentPages: Record<string, SegmentPage> = {
  '/investors': {
    eyebrow: 'Investors',
    title: 'Institutional access to tokenized private markets',
    description:
      'Assnture Capital provides eligible investors with regulated access to carefully structured real-world asset opportunities. Issuances are originated and structured under under regulatory regime. The local regulatoryframework is designed to deliver clear regulatory pathways while maintaining robust investor protection and operational controls.',
    showShariahCalculator: true,
    highlights: [
      {
        title: 'Qualified access',
        text: 'Access curated private market opportunities designed for professional and institutional investors.',
      },
      {
        title: 'Transparent ownership',
        text: 'Track entitlements and lifecycle events through digitally maintained records.',
      },
      {
        title: 'Efficient settlement',
        text: 'Benefit from near real-time settlement on compliant rails with institutional-grade controls.',
      },
    ],
  },
  '/investors/market-access': {
    eyebrow: 'Investors',
    title: 'Market access built for sophisticated capital',
    description:
      'Explore tokenized funds, real-world assets and private credit instruments distributed through controlled digital channels.',
    highlights: [
      {
        title: 'Curated opportunities',
        text: 'Evaluate listings prepared for institutional diligence and compliant distribution.',
      },
      {
        title: 'Cross-border reach',
        text: 'Engage opportunities structured for qualified investors across multiple markets.',
      },
      {
        title: 'Portfolio flexibility',
        text: 'Access fractional interests that can broaden exposure without sacrificing controls.',
      },
    ],
  },
  '/investors/get-started': {
    eyebrow: 'Investors',
    title: 'Start with your mandate',
    description:
      'Share your jurisdiction, investor classification and allocation preferences. We guide eligibility, onboarding and opportunity matching.',
    showOnboardingProcess: true,
    highlights: [
      {
        title: 'Eligibility review',
        text: 'Confirm investor classification and requirements before access.',
      },
      {
        title: 'Secure onboarding',
        text: 'Complete KYC/AML and account setup through institutional workflows.',
      },
      {
        title: 'Opportunity matching',
        text: 'Receive introductions to offerings aligned with your mandate and risk profile.',
      },
    ],
    ctaLabel: 'Begin onboarding',
  },
  '/asset-managers': {
    eyebrow: 'Asset Managers',
    title: 'Originate, structure and distribute with institutional-grade rails',
    description:
      'Assnture Capital enables asset managers to bring real-world strategies and portfolios into a regulated digital issuance and distribution framework. Through our Private Financing Platform licence, we provide a structured pathway from origination to investor allocation — using ring-fenced compartments and securitisation vehicle.',
    highlights: [
      {
        title: 'Structure',
        text: 'Design the vehicle, cash-flow rights and Shariah or conventional framework so the asset is issuance-ready.',
      },
      {
        title: 'Advise',
        text: 'Guide regulation, investor eligibility, token economics and go-to-market sequencing.',
      },
      {
        title: 'Issue',
        text: 'Digitise ownership on compliant rails with lifecycle controls, registers and servicing workflows.',
      },
      {
        title: 'Distribute',
        text: 'Place offerings with qualified investors through controlled private-market channels.',
      },
    ],
  },
  '/asset-managers/issuance': {
    eyebrow: 'Asset Managers',
    title: 'Issuance built for private market products',
    description:
      'Tokenize funds, credit, real estate and structured instruments with clear legal mapping and operational automation.',
    highlights: [
      {
        title: 'Structured issuance',
        text: 'Map legal rights into programmable securities without losing governance clarity.',
      },
      {
        title: 'Operational automation',
        text: 'Automate registers, distributions and corporate actions across the asset lifecycle.',
      },
      {
        title: 'Audit-ready records',
        text: 'Maintain consistent ownership and event history for investors and stakeholders.',
      },
    ],
    process: {
      title: 'How Asset Managers Work with Assnture',
      steps: [
        {
          number: '01',
          title: 'Origination & Structuring',
          text: 'You retain control of the underlying strategy and assets. Assnture works with you to define the commercial terms, investor eligibility, and structural parameters. We prepare the documentation pack and coordinate the creation of a dedicated, ring-fenced compartment within the existing multi-compartment Securitisation Special Purpose Entity (SSPE).',
        },
        {
          number: '02',
          title: 'Compartment Activation & Asset Transfer',
          text: 'Each series sits in its own compartment under local laws. This delivers statutory limited recourse, non-petition protection and bankruptcy remoteness. True sale or equivalent risk transfer of the real-world assets into the compartment is completed before any securities are issued.',
        },
        {
          number: '03',
          title: 'Digital Issuance',
          text: 'Securities are issued at compartment level. Where tokenisation is used, tokens represent claims against the specific compartment they do not confer direct legal title to the underlying assets. Token parameters, transfer restrictions and investor eligibility rules are configured on the Optimus platform under dual-control governance.',
        },
        {
          number: '04',
          title: 'Distribution',
         text: 'Investors are onboarded under Assnture’s regulatory perimeter complying with local regulatory frameworks. This dual-channel approach gives asset managers access to qualified investor bases without the need to establish a new SPV for each transaction.',
        },
        {
          number: '05',
          title: 'Ongoing Lifecycle',
          text: 'Investor reporting, corporate actions, transfers (subject to whitelist and restrictions), and compartment-level servicing run through the Optimus platform, with legal-entity reporting obligations remaining with the SSPE operator.',
        },
      ],
    },
  },
  '/asset-managers/distribution': {
    eyebrow: 'Asset Managers',
    title: 'Reach qualified capital through compliant channels',
    description:
      'ASSNTURE connects your offering to eligible investors with controlled visibility, onboarding and settlement workflows.',
    showEngagementPath: true,
    highlights: [
      {
        title: 'Targeted placement',
        text: 'Reach professional and institutional investors with controlled visibility and eligibility gates.',
      },
      {
        title: 'Investor readiness',
        text: 'Support onboarding, documentation and allocation workflows end to end.',
      },
      {
        title: 'Secondary optionality',
        text: 'Design for future transferability where market and regulation allow.',
      },
    ],
  },
  '/institutions': {
    eyebrow: 'Institutions',
    title: 'Enterprise infrastructure for on-chain capital markets',
    description:
      'Banks, custodians, exchanges and market participants can integrate ASSNTURE rails for tokenization, settlement and regulated digital asset operations.',
    showRwaUseCases: true,
    highlights: [
      {
        title: 'Institutional architecture',
        text: 'Deploy compliant workflows designed for multi-party capital markets operations.',
      },
      {
        title: 'Interoperable rails',
        text: 'Connect issuance, distribution and settlement layers without fragmented tooling.',
      },
      {
        title: 'Risk-aware design',
        text: 'Align technology choices with regulatory, custody and operational requirements.',
      },
    ],
  },
  '/institutions/infrastructure': {
    eyebrow: 'Institutions',
    title: 'Market infrastructure that scales with confidence',
    description:
      'From settlement to servicing, ASSNTURE provides the operational backbone institutions need to bring capital markets activity on-chain.',
    highlights: [
      {
        title: 'Settlement efficiency',
        text: 'Enable T+0 delivery-versus-payment models on blockchain rails.',
      },
      {
        title: 'Operational resilience',
        text: 'Support high-integrity workflows for issuance, transfers and corporate actions.',
      },
      {
        title: 'Integration ready',
        text: 'Connect with existing institutional stacks through practical implementation paths.',
      },
    ],
  },
  '/institutions/compliance': {
    eyebrow: 'Institutions',
    title: 'Compliance-first digital markets',
    description:
      'Operate with processes designed for institutional oversight, transparency and controlled access across digital capital markets workflows.',
    highlights: [
      {
        title: 'Regulatory alignment',
        text: 'Build on frameworks shaped for institutional digital asset activity.',
      },
      {
        title: 'Controlled participation',
        text: 'Enforce eligibility, permissions and auditability across market workflows.',
      },
      {
        title: 'Governance clarity',
        text: 'Maintain clear operational accountability across issuance and settlement.',
      },
    ],
  },
}
