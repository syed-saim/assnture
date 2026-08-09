export type NavChild = {
  label: string
  href: string
  description: string
}

export type NavItem =
  | {
      label: string
      href: string
      children?: undefined
    }
  | {
      label: string
      href?: undefined
      children: NavChild[]
    }

export const navigation: NavItem[] = [
  {
    label: 'Company',
    children: [
      {
        label: 'Platform',
        href: '/company/platform',
        description: 'Regulated digital capital markets infrastructure',
      },
      {
        label: 'Solutions',
        href: '/company/solutions',
        description: 'Arrange, advise, issue and distribute on digital rails',
      },
      {
        label: 'About',
        href: '/company/about',
        description: 'Built for institutional scale across ADGM and Kenya',
      },
    ],
  },
  {
    label: 'Investors',
    children: [
      {
        label: 'Overview',
        href: '/investors',
        description: 'Access tokenized private markets with institutional safeguards',
      },
      {
        label: 'Market Access',
        href: '/investors/market-access',
        description: 'Qualified investor pathways into digital securities',
      },
      {
        label: 'Get Started',
        href: '/investors/get-started',
        description: 'Onboarding, eligibility and next steps',
      },
    ],
  },
  {
    label: 'Asset Managers',
    children: [
      {
        label: 'Overview',
        href: '/asset-managers',
        description: 'Originate, tokenize and distribute with confidence',
      },
      {
        label: 'Digital Issuance',
        href: '/asset-managers/issuance',
        description: 'Lifecycle automation for digital securities',
      },
      {
        label: 'Distribution',
        href: '/asset-managers/distribution',
        description: 'Reach qualified capital through compliant channels',
      },
    ],
  },
  {
    label: 'Institutions',
    children: [
      {
        label: 'Overview',
        href: '/institutions',
        description: 'Enterprise rails for on-chain capital markets',
      },
      {
        label: 'Infrastructure',
        href: '/institutions/infrastructure',
        description: 'Settlement, custody-ready workflows and interoperability',
      },
      {
        label: 'Compliance',
        href: '/institutions/compliance',
        description: 'Regulatory alignment across ADGM and Kenya frameworks',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
]
