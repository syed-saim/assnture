export type ListingStatus = 'Open' | 'Coming Soon' | 'Closed'

export interface Listing {
  id: string
  tag: string
  title: string
  assetClass: string
  geography: string
  minTicket: string
  status: ListingStatus
  href: string
}

export const listings: Listing[] = [
  {
    id: 'gcc-infra-debt-ii',
    tag: 'Private Placement · UAE',
    title: 'GCC Infrastructure Debt Fund II',
    assetClass: 'Private Debt',
    geography: 'GCC',
    minTicket: 'USD 50,000',
    status: 'Open',
    href: 'https://tblocs.com',
  },
  {
    id: 'ad-re-income-note',
    tag: 'Digital Securities · ADGM',
    title: 'Abu Dhabi Real Estate Income Note',
    assetClass: 'Real Estate',
    geography: 'UAE',
    minTicket: 'USD 10,000',
    status: 'Open',
    href: 'https://tblocs.com',
  },
  {
    id: 'saudi-corp-credit',
    tag: 'Private Credit · KSA',
    title: 'Saudi Corporate Credit Facility',
    assetClass: 'Private Credit',
    geography: 'Saudi Arabia',
    minTicket: 'USD 25,000',
    status: 'Open',
    href: 'https://tblocs.com',
  },
  {
    id: 'gcc-tech-growth',
    tag: 'Equity · Cross-Border',
    title: 'GCC Technology Growth Fund',
    assetClass: 'Private Equity',
    geography: 'GCC / Global',
    minTicket: 'USD 100,000',
    status: 'Coming Soon',
    href: 'https://tblocs.com',
  },
  {
    id: 'trade-finance-recv',
    tag: 'Structured Finance · UAE',
    title: 'Trade Finance Receivables Programme',
    assetClass: 'Trade Finance',
    geography: 'UAE / GCC',
    minTicket: 'USD 75,000',
    status: 'Coming Soon',
    href: 'https://tblocs.com',
  },
  {
    id: 'gulf-sukuk-note',
    tag: 'Sukuk · ADGM',
    title: 'Gulf Sovereign Sukuk Note Series A',
    assetClass: 'Fixed Income',
    geography: 'GCC',
    minTicket: 'USD 40,000',
    status: 'Open',
    href: 'https://tblocs.com',
  },
]

export const assetClasses = [
  'All',
  ...Array.from(new Set(listings.map((l) => l.assetClass))),
]

export const statuses: Array<'All' | ListingStatus> = [
  'All',
  'Open',
  'Coming Soon',
  'Closed',
]
