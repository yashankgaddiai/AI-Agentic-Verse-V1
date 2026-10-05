/**
 * @file portfolioData.ts
 * Central data and content for AI Agentic Verse.
 * Matching the exact specification:
 * - Content and Growth, Run For You
 * - Real You & AI Avatar pipelines
 * - Offers for Coaches & Founders
 * - Transparent 4-step execution blueprint
 */

export interface ShowcaseVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  tag: string;
  description: string;
  shortDescription?: string;
  thumbnailUrl: string;
  videoUrl: string;
  year?: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  navigation: {
    logo: string;
    links: { label: string; href: string }[];
    ctaButton: { label: string; href: string };
  };
  hero: {
    tag: string;
    headline: string;
    subtext: string;
    ctaButton: { label: string; href: string };
    scarcityNotice: string;
    stats: { label: string; value: string }[];
  };
  statement: string;
  whatWeDo: {
    tag: string;
    heading: string;
    services: {
      title: string;
      description: string;
      features: string[];
    }[];
  };
  howYouShowUp: {
    tag: string;
    heading: string;
    options: {
      title: string;
      badge: string;
      description: string;
      requirements: string;
      highlight: string;
    }[];
    note: string;
  };
  whoWeServe: {
    tag: string;
    heading: string;
    audiences: {
      title: string;
      tagline: string;
      description: string;
      features: string[];
      linkText: string;
      linkUrl: string;
    }[];
  };
  howWeWork: {
    tag: string;
    heading: string;
    steps: {
      number: string;
      title: string;
      description: string;
      deliverable: string;
    }[];
  };
  aboutUs: {
    tag: string;
    heading: string;
    paragraphs: string[];
    guarantees: {
      title: string;
      description: string;
    }[];
  };
  videoShowcase: {
    heading: string;
    subheading: string;
    videos: ShowcaseVideo[];
  };
  finalCta: {
    tag: string;
    heading: string;
    subtext: string;
    ctaButton: {
      label: string;
      /* PLACEHOLDER: Insert your Calendly, Cal.com or custom booking link */
      url: string;
    };
    notice: string;
  };
  footer: {
    offerLinks: { label: string; href: string }[];
    legalText: string;
  };
}

export const siteContent: SiteContent = {
  meta: {
    title: 'AI Agentic Verse | Content, Built And Run For You',
    description:
      'We Build And Run Content For Coaches And Founders, In Their Own Voice, On Camera Or Through An AI Avatar.',
    ogImage: '/images/hero_verse_still.jpg',
  },

  navigation: {
    logo: 'AI Agentic Verse',
    links: [
      { label: 'What We Do', href: '#what-we-do' },
      { label: 'Who We Serve', href: '#who-we-serve' },
      { label: 'How We Work', href: '#how-we-work' },
      { label: 'About', href: '#about' },
    ],
    ctaButton: {
      label: 'Book A Call',
      href: '#book',
    },
  },

  hero: {
    tag: 'Content And Growth, Run For You',
    headline: 'Your Voice, Everywhere Your Clients Are Looking.',
    subtext:
      'We Build And Run Your Content From Strategy To Daily Posts. Show Up On Camera When It Suits You, Or Let Your AI Avatar Do It. Your First Post Goes Live In 7 Days.',
    ctaButton: {
      label: 'Book A Strategy Call',
      href: '#book',
    },
    scarcityNotice: 'We Work With Four Clients A Quarter. Spots Are Limited.',
    stats: [
      { label: 'Client Intake', value: '4 / Quarter' },
      { label: 'First Post Live', value: '7 Days' },
      { label: 'Time Investment', value: '0 - 1 hr/wk' },
    ],
  },

  statement:
    "Great Experts Stay Invisible For One Reason: Content Takes Time They Don't Have. We Exist To Remove That Cost, So Your Expertise Gets Seen Without Costing You Your Week.",

  whatWeDo: {
    tag: 'What We Do',
    heading: 'One Team For Everything Between Your Idea And Your Audience',
    services: [
      {
        title: 'Strategy',
        description:
          'Hooks, Story Angles, And Content Pillars Built From Your Own Ideas And From What Is Already Winning Attention In Your Market.',
        features: [
          'High-converting hook archives',
          'Market gap & competitor analysis',
          'Tailored personal voice blueprint',
        ],
      },
      {
        title: 'Production',
        description:
          'Scripts In Your Voice, Full Editing, Captions, And Repurposing Across Every Platform That Matters To You.',
        features: [
          'Authentic speech pacing & typography',
          'Short-form reels, shorts & TikToks',
          'Long-form LinkedIn & X text carousels',
        ],
      },
      {
        title: 'Growth',
        description:
          'Social Media Management And Paid Ads That Turn Steady Content Into A Real Client Channel, With One Weekly Report.',
        features: [
          'Omnichannel scheduling & daily posting',
          'Direct response conversion retargeting',
          'Single transparent weekly metric briefing',
        ],
      },
    ],
  },

  howYouShowUp: {
    tag: 'How You Show Up',
    heading: 'Two Ways To Be On Camera. Or Never Be.',
    options: [
      {
        title: 'Real You',
        badge: 'Film On Your Phone',
        description:
          'Film Clips On Your Phone Whenever It Fits Your Day. We Turn The Footage Into Daily Posts.',
        requirements: 'Casual phone recordings whenever convenient',
        highlight: 'Zero equipment needed. Speak freely; our editors polish the narrative.',
      },
      {
        title: 'AI Avatar',
        badge: 'Film Once, Run Forever',
        description:
          'Send One HD Video And One Voice Recording, Once. We Build A Clone Of Your Face And Voice, And Every Post After That Comes From Your Avatar. You Never Film Again.',
        requirements: '1 HD studio capture + 3-minute voice sample',
        highlight: 'Indistinguishable visual sync. 100% autonomous daily production.',
      },
    ],
    note: 'Most Clients Start With Their Own Footage And Move To The Avatar Once They See It Working. Switch Any Month, No Penalty.',
  },

  whoWeServe: {
    tag: 'Who We Serve',
    heading: 'Built For People Who Sell On Trust',
    audiences: [
      {
        title: 'Coaches',
        tagline: 'High-Ticket Mentors & Executive Advisors',
        description:
          'Stay Visible Every Day Without Giving Up Your Coaching Hours. Choose The Content Engine, Or The Full Growth Engine If You Want Content And Ads Working As One Channel.',
        features: [
          'Protects all client delivery calendar blocks',
          'Positions your frameworks as industry benchmarks',
          'Automated lead qualification funnel integration',
        ],
        linkText: 'See The Coach Offer →',
        linkUrl: '/coach.html',
      },
      {
        title: 'Founders',
        tagline: 'B2B CEOs, Operators & Tech Innovators',
        description:
          'Build A Following On LinkedIn And X In Your Own Words, Without Spending Your Evenings Writing And Editing.',
        features: [
          'Ghostwritten founder thoughts & company vision',
          'Authority generation for hiring & fundraising',
          'Repurposes podcast appearances & investor updates',
        ],
        linkText: 'See The Founder Offer →',
        linkUrl: '/founder.html',
      },
    ],
  },

  howWeWork: {
    tag: 'How We Work',
    heading: 'A Clear Path From First Call To Daily Posts',
    steps: [
      {
        number: '01',
        title: 'Strategy Call',
        description:
          'Thirty Minutes To Map Your Goals, Audience, And Platforms. You Leave With A Written Game Plan.',
        deliverable: 'Tailored 90-Day Content Roadmap',
      },
      {
        number: '02',
        title: 'Content Blueprint',
        description:
          'We Study Your Market And Build Your Angles, Platforms, And Posting Volume.',
        deliverable: 'Voice Profile & Pillar Matrix',
      },
      {
        number: '03',
        title: 'Production, Handled',
        description:
          'Done For You, Or Done With You If You Want Your Own Team To Run It.',
        deliverable: 'First Batch Scripted, Cut & Approved',
      },
      {
        number: '04',
        title: 'Double Down On Winners',
        description:
          'Every Week We Review The Numbers And Shape The Next Batch Around What Works.',
        deliverable: 'Weekly Metric Review & Scaling Tweaks',
      },
    ],
  },

  aboutUs: {
    tag: 'About Us',
    heading: 'Small On Purpose',
    paragraphs: [
      'We Are A Content And Growth Team For Coaches And Founders. We Believe Your Face, Voice, And Ideas Are Your Strongest Asset, And That Sharing Them Daily Should Not Take Over Your Life.',
      'That Is Why We Keep The Client List Small. We Take On Four Clients A Quarter, And The Senior Team You Meet On The First Call Is The Team That Runs Your Account.',
      'That Is Also Why We Offer The AI Avatar. It Gives You A Way To Stay Visible Every Single Day, In Your Own Face And Voice, Without Filming Again.',
    ],
    guarantees: [
      {
        title: 'Your Voice First',
        description: 'Everything Starts From How You Speak And What You Believe.',
      },
      {
        title: 'Fast To Start',
        description: 'First Post Live In 7 Days, Or Your First Month Is Free.',
      },
      {
        title: 'Measured Weekly',
        description: 'A Clear Report Shows What Worked And What Happens Next.',
      },
    ],
  },

  videoShowcase: {
    heading: 'See The Content We Post',
    subheading: 'High-retention shorts, thought leadership narratives, and synthetic avatar releases.',
    videos: [
      {
        id: 'video-1',
        title: 'Video 1: Founder Breakdown',
        category: 'Camera & Phone Capture',
        duration: '01:24',
        tag: 'High-Retention Hook',
        description:
          'Clean, organic phone capture transformed with kinetic captioning, B-roll rhythm, and authority framing.',
        thumbnailUrl: '/images/work_chrono_pulse.jpg',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      {
        id: 'video-2',
        title: 'Video 2: Photorealistic AI Avatar',
        category: 'Synthetic Twin Production',
        duration: '00:58',
        tag: 'Zero Studio Filming',
        description:
          '100% generated from an AI clone trained on a single recording. Scripted, voiced, and published without the founder on set.',
        thumbnailUrl: '/images/hero_verse_still.jpg',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      {
        id: 'video-3',
        title: 'Video 3: High-Ticket Framework Breakdown',
        category: 'Conversion Short',
        duration: '01:45',
        tag: 'Inbound Client Generation',
        description:
          'Strategic breakdown of an advisory methodology engineered to drive direct DMs and calendar bookings.',
        thumbnailUrl: '/images/work_neural_meta.jpg',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
    ],
  },

  finalCta: {
    tag: 'Four Clients A Quarter',
    heading: 'Ready To Be Seen Without The Work?',
    subtext:
      'Book A 30 Minute Strategy Call. You Leave With A Written Game Plan, Whether Or Not We Work Together.',
    ctaButton: {
      label: 'Book A Strategy Call',
      /* PLACEHOLDER: Replace YOUR_BOOKING_LINK with your Calendly / Cal.com link */
      url: 'YOUR_BOOKING_LINK',
    },
    notice: 'Zero high-pressure pitch. Walk away with complete strategy clarity.',
  },

  footer: {
    offerLinks: [
      { label: 'Coaches', href: '/coach.html' },
      { label: 'Founders', href: '/founder.html' },
    ],
    legalText: `© ${new Date().getFullYear()} AI Agentic Verse. All Rights Reserved.`,
  },
};

// Backwards compatibility alias for components expecting VideoProject
export type VideoProject = ShowcaseVideo;
export const portfolioContent = {
  ...siteContent,
  brand: {
    name: siteContent.navigation.logo,
    logoInitials: 'AV',
  },
  projects: siteContent.videoShowcase.videos.map((v) => ({
    ...v,
    shortDescription: v.description,
    year: '2026',
  })),
  featuredProject: {
    ...siteContent.videoShowcase.videos[0],
    shortDescription: siteContent.videoShowcase.videos[0].description,
    year: '2026',
  },
  contact: {
    email: 'hello@aiagenticverse.com',
    responseWindow: 'Replies within 24 hours on business days',
    socialLinks: [
      { label: 'LinkedIn', handle: 'ai-agentic-verse', url: 'https://linkedin.com' },
      { label: 'X (Twitter)', handle: '@aiagenticverse', url: 'https://x.com' },
      { label: 'YouTube', handle: '@aiagenticverse', url: 'https://youtube.com' },
    ],
  },
};
