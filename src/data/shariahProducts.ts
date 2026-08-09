export type ShariahProduct = {
  id: string
  name: string
  structure: string
  description: string
  defaultProfitRate: number
  minRate: number
  maxRate: number
  tokenPrice: number
  compounding: 'simple' | 'periodic'
  aaofiNote: string
}

export const shariahProducts: ShariahProduct[] = [
  {
    id: 'murabaha',
    name: 'Murabaha Note',
    structure: 'Cost-plus sale',
    description:
      'Asset-backed deferred sale structure with a disclosed profit margin over a defined tenor.',
    defaultProfitRate: 6.5,
    minRate: 4,
    maxRate: 10,
    tokenPrice: 100,
    compounding: 'simple',
    aaofiNote: 'Profit is fixed at inception and not interest-based.',
  },
  {
    id: 'sukuk-ijara',
    name: 'Sukuk al-Ijara',
    structure: 'Lease-based sukuk',
    description:
      'Certificates representing ownership in leased assets with rental distributions to holders.',
    defaultProfitRate: 5.8,
    minRate: 3.5,
    maxRate: 9,
    tokenPrice: 250,
    compounding: 'periodic',
    aaofiNote: 'Returns are linked to rental income from underlying assets.',
  },
  {
    id: 'sukuk-murabaha',
    name: 'Sukuk al-Murabaha',
    structure: 'Trade finance sukuk',
    description:
      'Tokenized participation in Shariah-compliant trade finance and commodity murabaha programmes.',
    defaultProfitRate: 7.2,
    minRate: 5,
    maxRate: 11,
    tokenPrice: 500,
    compounding: 'simple',
    aaofiNote: 'Suitable for short-to-medium tenor working capital facilities.',
  },
  {
    id: 'musharakah',
    name: 'Musharakah Facility',
    structure: 'Equity partnership',
    description:
      'Joint venture participation where profit is shared according to an agreed ratio.',
    defaultProfitRate: 9.0,
    minRate: 6,
    maxRate: 14,
    tokenPrice: 1000,
    compounding: 'periodic',
    aaofiNote: 'Expected return is illustrative; actual profit depends on venture performance.',
  },
  {
    id: 'mudarabah',
    name: 'Mudarabah Fund Unit',
    structure: 'Profit-sharing',
    description:
      'Capital provider units in a managed Shariah investment pool with profit-sharing distribution.',
    defaultProfitRate: 8.4,
    minRate: 5,
    maxRate: 13,
    tokenPrice: 100,
    compounding: 'periodic',
    aaofiNote: 'Capital provider bears commercial risk; losses are not guaranteed.',
  },
  {
    id: 'wakalah',
    name: 'Wakalah Investment',
    structure: 'Agency investment',
    description:
      'Agency-based placement where a wakeel invests funds for an expected profit within mandate limits.',
    defaultProfitRate: 6.0,
    minRate: 3.5,
    maxRate: 9.5,
    tokenPrice: 200,
    compounding: 'simple',
    aaofiNote: 'Expected profit is indicative and subject to agency performance.',
  },
]
