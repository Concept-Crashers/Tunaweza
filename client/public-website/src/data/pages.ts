export type ContentSection = {
  title: string
  body: string
}

export type ContentPageData = {
  eyebrow: string
  title: string
  highlight?: string
  intro: string
  notice?: string
  sections: ContentSection[]
}

export const contentPages: Record<string, ContentPageData> = {
  programmes: {
    eyebrow: 'Programmes',
    title: 'Learning through',
    highlight: 'everyday moments.',
    intro: 'Explore programmes offered by Tunaweza and find out how to ask about current availability.',
    notice: 'Programme details below are drawn from existing public copy. Confirm hours, schedules, eligibility, activities, and availability with the centre.',
    sections: [
      { title: 'Half-day and full-day options', body: 'Existing programme copy describes four or more hours of programming, with structured activities between therapy sessions. Confirm current options and hours with the centre.' },
      { title: 'Therapy and activities', body: 'Existing information lists physical, occupational, speech and language therapy, art, music and movement, outside play, brain games, interactive activities, breaks, massage, and rest. Confirm what is currently offered.' },
      { title: 'A complement to school', body: 'The day programme is not designed to replace a child’s academic placement in school. Families should confirm individual suitability directly with the centre.' },
      { title: 'Outreach', body: 'Outreach is listed in the project overview. Locations, activities, and access information will be added after staff review.' },
    ],
  },
  families: {
    eyebrow: 'For parents & caregivers',
    title: 'You do not have to figure it out',
    highlight: 'on your own.',
    intro: 'A starting place for families looking for information about the centre and a next step.',
    notice: 'This page is general information, not medical advice. Please do not share diagnoses or sensitive child information through the preview form.',
    sections: [
      { title: 'Getting started', body: 'Contact the centre to ask about current services and how to access them. Intake steps and requirements will be added once approved.' },
      { title: 'What to ask', body: 'Families may want to ask about current services, programme availability, visits, and any documents to bring. Details are being confirmed.' },
      { title: 'Helpful resources', body: 'Family information and educational resources will be published after review for accuracy and accessibility.' },
    ],
  },
  impact: {
    eyebrow: 'Our impact',
    title: 'Every step forward',
    highlight: 'matters.',
    intro: 'Read approved reports and learn about the work of Tunaweza Children’s Centre.',
    notice: 'The figures shown on the homepage are copied from supplied existing website text and are not independently verified. Confirm their definitions, dates, and methodology before publication.',
    sections: [
      { title: 'Reports & publications', body: 'Approved reports and newsletters will be available here when cleared for public release.' },
      { title: 'Stories shared with care', body: 'Any story involving a child or family requires documented consent and organisational approval before publication.' },
    ],
  },
  stories: {
    eyebrow: 'Stories',
    title: 'Real voices, shared',
    highlight: 'with care.',
    intro: 'Stories and experiences will be published only when they are approved and safe to share.',
    notice: 'There are no stories in this preview. Child-related stories require documented consent and organisational approval.',
    sections: [
      { title: 'Consent comes first', body: 'The organisation will review consent, attribution, and safeguarding needs before a story is made public.' },
      { title: 'A respectful approach', body: 'Stories will focus on dignity, strengths, and the voices of the people who choose to share them.' },
    ],
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Information to help you',
    highlight: 'find your way.',
    intro: 'Browse useful, reviewed information for families, educators, and the wider community.',
    notice: 'Resources will be added after review for accuracy, accessibility, and relevance.',
    sections: [
      { title: 'Family resources', body: 'Reviewed family information and educational resources will be published here.' },
      { title: 'Reports & newsletters', body: 'Approved public documents will be available to read or download here.' },
    ],
  },
  'get-involved': {
    eyebrow: 'Get involved',
    title: 'Let’s make room for',
    highlight: 'possibility.',
    intro: 'Explore ways to connect with Tunaweza and start a conversation about the kind of support you have in mind.',
    notice: 'Volunteer requirements, partnership opportunities, donation instructions, and payment methods must be confirmed before publication. This preview does not accept donations.',
    sections: [
      { title: 'Volunteer or share your skills', body: 'Opportunities, requirements, safeguarding checks, and application steps will be confirmed by the organisation.' },
      { title: 'Partner with us', body: 'Organisations interested in working together can start a conversation through the contact page.' },
      { title: 'Donations', body: 'Donation instructions and payment methods will only be shown after they are confirmed by Tunaweza.' },
    ],
  },
  partners: {
    eyebrow: 'Partners',
    title: 'Working together for',
    highlight: 'children and families.',
    intro: 'Partnerships help build a stronger, more connected community around children and families.',
    notice: 'Partner names, logos, and descriptions will be added after approval from each organisation.',
    sections: [
      { title: 'Our partners', body: 'Approved partner profiles and links will be published here.' },
      { title: 'Explore a partnership', body: 'If your organisation would like to connect, please use the contact page to start a conversation.' },
    ],
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'Your information deserves',
    highlight: 'care.',
    intro: 'The organisation’s approved privacy policy will be published before live forms or analytics are enabled.',
    notice: 'This preview is not a privacy policy. Do not submit personal or sensitive information through it.',
    sections: [
      { title: 'Policy pending approval', body: 'Tunaweza must approve the privacy notice, data handling, retention, and contact process before launch.' },
    ],
  },
  safeguarding: {
    eyebrow: 'Safeguarding',
    title: 'Children’s safety and dignity',
    highlight: 'come first.',
    intro: 'Tunaweza’s approved safeguarding and media-consent information will be published here.',
    notice: 'This placeholder does not replace the organisation’s safeguarding policy.',
    sections: [
      { title: 'Statement pending approval', body: 'The safeguarding policy and media-consent process must be approved before launch.' },
    ],
  },
  accessibility: {
    eyebrow: 'Accessibility',
    title: 'A website designed for',
    highlight: 'everyone.',
    intro: 'We are building this frontend with accessibility and inclusive access in mind.',
    notice: 'This page is a draft and is not a complete accessibility statement.',
    sections: [
      { title: 'Statement pending review', body: 'A complete statement, feedback route, and known-issues list will be added before launch.' },
    ],
  },
}
