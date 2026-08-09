export type SegmentPage = {
  eyebrow: string
  title: string
  description: string
  highlights: { title: string; text: string }[]
  ctaLabel?: string
  showRwaUseCases?: boolean
}

export const segmentPages: Record<string, SegmentPage> = {
  '/investors': {
    eyebrow: 'Investors',
    title: 'Institutional access to tokenized private markets',
    description:
      'ASSNTURE connects qualified investors to digitally native securities through regulated infrastructure — with clearer settlement, stronger auditability and institutional-grade controls.',
    highlights: [
      {
        title: 'Qualified access',
        text: 'Participate in private placements designed for professional and institutional investors.',
      },
      {
        title: 'Transparent ownership',
        text: 'Track entitlements and lifecycle events through digitally maintained records.',
      },
      {
        title: 'Efficient settlement',
        text: 'Move from traditional lag to near real-time delivery-versus-payment workflows.',
      },
    ],
  },
  '/investors/market-access': {
    eyebrow: 'Investors',
    title: 'Market access built for sophisticated capital',
    description:
      'Discover opportunities across tokenized funds, real-world assets and private market instruments — distributed through compliant digital channels.',
    highlights: [
      {
        title: 'Curated opportunities',
        text: 'Evaluate listings prepared for institutional diligence and regulated distribution.',
      },
      {
        title: 'Cross-border reach',
        text: 'Engage opportunities structured across ADGM and Kenya regulatory environments.',
      },
      {
        title: 'Portfolio flexibility',
        text: 'Access fractional interests that can broaden exposure without sacrificing controls.',
      },
    ],
  },
  '/investors/get-started': {
    eyebrow: 'Investors',
    title: 'Start your investor journey with ASSNTURE',
    description:
      'Share your mandate, jurisdiction and investment preferences. Our team will guide eligibility, onboarding and access to relevant opportunities.',
    highlights: [
      {
        title: 'Eligibility review',
        text: 'Confirm investor classification and jurisdictional requirements before access.',
      },
      {
        title: 'Secure onboarding',
        text: 'Complete KYC/AML and account setup through institutional workflows.',
      },
      {
        title: 'Opportunity matching',
        text: 'Receive introductions to listings aligned with your mandate and risk profile.',
      },
    ],
    ctaLabel: 'Begin onboarding',
  },
  '/asset-managers': {
    eyebrow: 'Asset Managers',
    title: 'Originate, tokenize and distribute at institutional grade',
    description:
      'ASSNTURE gives asset managers a regulated path from structuring to investor distribution — with tokenization, lifecycle automation and compliant placement rails.',
    highlights: [
      {
        title: 'Faster time-to-market',
        text: 'Digitise issuance workflows without compromising legal and regulatory integrity.',
      },
      {
        title: 'Broader distribution',
        text: 'Connect with qualified investors through controlled private market channels.',
      },
      {
        title: 'Lifecycle control',
        text: 'Automate reporting, distributions and secondary transfer processes.',
      },
    ],
  },
  '/asset-managers/issuance': {
    eyebrow: 'Asset Managers',
    title: 'Digital issuance for modern capital formation',
    description:
      'Structure real-world assets and funds as programmable securities with enterprise-grade issuance tooling and compliance-first design.',
    highlights: [
      {
        title: 'Structured issuance',
        text: 'Map legal rights into token representations with clear governance and controls.',
      },
      {
        title: 'Operational automation',
        text: 'Reduce manual servicing through smart workflows across the asset lifecycle.',
      },
      {
        title: 'Audit-ready records',
        text: 'Maintain consistent ownership and event history for investors and stakeholders.',
      },
    ],
  },
  '/asset-managers/distribution': {
    eyebrow: 'Asset Managers',
    title: 'Compliant distribution for private market products',
    description:
      'Place digital securities with the right investor base through regulated infrastructure built for private markets and institutional diligence.',
    highlights: [
      {
        title: 'Targeted placement',
        text: 'Reach qualified capital with controlled visibility and eligibility gates.',
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
      'Operate within ADGM and Kenya regulatory frameworks with processes designed for institutional oversight, transparency and controlled access.',
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
