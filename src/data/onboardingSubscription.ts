import type { ChromaItem } from '../components/ChromaGrid/ChromaGrid'

export const onboardingSubscriptionSteps: ChromaItem[] = [
  {
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    title: 'Registration & KYC',
    handle: 'Step 01',
    subtitle:
      'Registration and completion of KYC / AML procedures under the relevant regulatory perimeter.',
    location: 'Onboarding',
    borderColor: '#F07030',
    gradient: 'linear-gradient(145deg,#F07030,#111)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    title: 'Eligibility assessment',
    handle: 'Step 02',
    subtitle:
      'Eligibility assessment against the investor category and any additional criteria set for the specific issuance.',
    location: 'Onboarding',
    borderColor: '#0EA5E9',
    gradient: 'linear-gradient(210deg,#0EA5E9,#111)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    title: 'Document review',
    handle: 'Step 03',
    subtitle:
      'Review of offering documents (Terms & Conditions, risk factors, compartment structure).',
    location: 'Onboarding',
    borderColor: '#10B981',
    gradient: 'linear-gradient(165deg,#10B981,#111)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    title: 'Subscription & allocation',
    handle: 'Step 04',
    subtitle:
      'Subscription submission and allocation subject to capacity and final approval.',
    location: 'Onboarding',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(195deg,#8B5CF6,#111)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80',
    title: 'Settlement & holding',
    handle: 'Step 05',
    subtitle:
      'Settlement and confirmation of holding (including token delivery to an approved wallet where applicable).',
    location: 'Onboarding',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(225deg,#F59E0B,#111)',
  },
]
