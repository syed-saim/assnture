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
        description: 'Built for institutional scale in digital capital markets',
      },
      {
        label: 'Compliance',
        href: '/company/compliance',
        description: 'Shariah-compliant architecture and AAOIFI-aligned standards',
      },
    ],
  },
  {
    label: 'Investors',
    children: [
      {
        label: 'Overview',
        href: '/investors',
        description: 'Institutional access to tokenized private markets',
      },
      {
        label: 'Market Access',
        href: '/investors/market-access',
        description: 'Market access built for sophisticated capital',
      },
      {
        label: 'Get Started',
        href: '/investors/get-started',
        description: 'Start with your mandate',
      },
    ],
  },
  {
    label: 'Asset Managers',
    children: [
      {
        label: 'Overview',
        href: '/asset-managers',
        description: 'Structure, advise, issue and distribute with ASSNTURE',
      },
      {
        label: 'Digital Issuance',
        href: '/asset-managers/issuance',
        description: 'Issuance built for private market products',
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
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
]
