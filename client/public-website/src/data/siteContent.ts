import {
  Activity,
  BookOpenText,
  HeartHandshake,
  MessageCircle,
  Music2,
  PersonStanding,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'

export type NavigationItem = {
  label: string
  to: string
}

export type Service = {
  slug: string
  title: string
  summary: string
  icon: LucideIcon
  detail: string
}

export type PageContent = {
  title: string
  description: string
}

export const navigation: NavigationItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'For families', to: '/families' },
  { label: 'Our impact', to: '/impact' },
  { label: 'News & events', to: '/news-events' },
]

export const footerGroups: { title: string; links: NavigationItem[] }[] = [
  {
    title: 'Discover',
    links: [
      { label: 'About Tunaweza', to: '/about' },
      { label: 'Our services', to: '/services' },
      { label: 'Programmes', to: '/programmes' },
      { label: 'Our impact', to: '/impact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'For families', to: '/families' },
      { label: 'News & events', to: '/news-events' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Get involved', to: '/get-involved' },
      { label: 'Contact us', to: '/contact' },
    ],
  },
  {
    title: 'More information',
    links: [
      { label: 'Resources', to: '/resources' },
      { label: 'Partners', to: '/partners' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Safeguarding', to: '/safeguarding' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
  },
]

export const services: Service[] = [
  {
    slug: 'assessment',
    title: 'Child assessment & treatment plans',
    summary: 'Understand a child’s strengths and plan support around their needs.',
    icon: Sparkles,
    detail:
      'The assessment process, referral requirements, and availability need confirmation from the Tunaweza team before publication.',
  },
  {
    slug: 'physiotherapy',
    title: 'Physiotherapy',
    summary: 'Movement and physical development support for children.',
    icon: PersonStanding,
    detail:
      'Physiotherapy services, delivery approach, age ranges, and current availability need confirmation from the Tunaweza team.',
  },
  {
    slug: 'occupational-behavioural-therapy',
    title: 'Occupational & behavioural therapy',
    summary: 'Support for participation, everyday activities, and development.',
    icon: Activity,
    detail:
      'Occupational and behavioural therapy services, delivery approach, and availability need confirmation from the Tunaweza team.',
  },
  {
    slug: 'speech-language-therapy',
    title: 'Speech & language therapy',
    summary: 'Communication support for children and families.',
    icon: MessageCircle,
    detail:
      'Speech and language services, delivery approach, age ranges, and availability need confirmation from the Tunaweza team.',
  },
  {
    slug: 'music-therapy',
    title: 'Music therapy',
    summary: 'Music-based activities as part of child development support.',
    icon: Music2,
    detail:
      'Music therapy activities and current availability need confirmation from the Tunaweza team.',
  },
  {
    slug: 'special-education',
    title: 'Special education',
    summary: 'Individualised learning support for children.',
    icon: BookOpenText,
    detail:
      'Education services, individualised learning plans, and programme details need confirmation from the Tunaweza team.',
  },
  {
    slug: 'psychosocial-support',
    title: 'Psychosocial support',
    summary: 'Support for children and families as part of a holistic approach.',
    icon: HeartHandshake,
    detail:
      'Psychosocial support services, referral requirements, and availability need confirmation from the Tunaweza team.',
  },
  {
    slug: 'outreach',
    title: 'Outreach',
    summary: 'Community programmes that help children and families connect with support.',
    icon: UsersRound,
    detail:
      'Outreach activities, locations, and eligibility need confirmation from the Tunaweza team.',
  },
]

export const pageMetadata: Record<string, PageContent> = {
  '/': {
    title: 'Home',
    description:
      'Discover Tunaweza Children’s Centre, its services, programmes, news, and ways to connect.',
  },
  '/about': {
    title: 'About Tunaweza',
    description: 'Learn about Tunaweza Children’s Centre and its work with children and families.',
  },
  '/services': {
    title: 'Our services',
    description: 'Explore service information from Tunaweza Children’s Centre.',
  },
  '/programmes': {
    title: 'Programmes',
    description: 'Learn about programmes at Tunaweza Children’s Centre.',
  },
  '/families': {
    title: 'For families',
    description: 'Information for parents and caregivers exploring support for their family.',
  },
  '/impact': {
    title: 'Our impact',
    description: 'Approved stories, reports, and impact information from Tunaweza.',
  },
  '/news-events': {
    title: 'News & events',
    description: 'Newsletters, articles, and events from Tunaweza Children’s Centre.',
  },
  '/stories': {
    title: 'Stories',
    description: 'Stories shared with consent and approval from Tunaweza Children’s Centre.',
  },
  '/gallery': {
    title: 'Gallery',
    description: 'A gallery of approved Tunaweza Children’s Centre media.',
  },
  '/get-involved': {
    title: 'Get involved',
    description: 'Explore ways to support or partner with Tunaweza Children’s Centre.',
  },
  '/partners': {
    title: 'Partners',
    description: 'Meet organisations partnering with Tunaweza Children’s Centre.',
  },
  '/resources': {
    title: 'Resources',
    description: 'Browse information and resources for families and the community.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Contact information and an enquiry form preview for Tunaweza.',
  },
  '/privacy': {
    title: 'Privacy',
    description: 'Privacy information for the Tunaweza Children’s Centre website.',
  },
  '/safeguarding': {
    title: 'Safeguarding',
    description: 'Safeguarding information for the Tunaweza Children’s Centre website.',
  },
  '/accessibility': {
    title: 'Accessibility',
    description: 'Accessibility information for the Tunaweza Children’s Centre website.',
  },
}
