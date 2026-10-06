/**
 * @file portfolioData.ts
 * Central data file strictly matching the latest user specification:
 * - Title Case with Brand Name Applied
 * - Our Work · How It Works · Who We Serve · About · Book A Call
 * - Client Video 1, 2, 3 with captions [Client Name, What They Do]
 * - The Problem · What Changes · How You Show Up
 * - Our Promise · About Us & Founder Story · Fit / Not A Fit
 * - Final Call To Action & Footer
 */

export interface ShowcaseVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  tag: string;
  clientName: string;
  clientRole: string;
  captionPlaceholder: string;
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
  };
  ourWork: {
    tag: string;
    heading: string;
    subheading: string;
    videos: ShowcaseVideo[];
  };
  problem: {
    tag: string;
    heading: string;
    paragraphs: string[];
    punchline: string;
  };
  whatChanges: {
    tag: string;
    heading: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  howYouShowUp: {
    tag: string;
    heading: string;
    options: {
      title: string;
      description: string;
      bulletPoints: string[];
      badge?: string;
    }[];
    note: string;
  };
  whoWeServe: {
    tag: string;
    heading: string;
    audiences: {
      title: string;
      description: string;
      linkText: string;
      linkUrl: string;
    }[];
  };
  howItWorks: {
    tag: string;
    heading: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  ourPromise: {
    tag: string;
    heading: string;
    paragraphs: string[];
  };
  aboutUs: {
    tag: string;
    heading: string;
    paragraphs: string[];
    founderStoryPlaceholder: string;
  };
  fitAnalysis: {
    fit: {
      title: string;
      points: string[];
    };
    notFit: {
      title: string;
      points: string[];
    };
  };
  finalCta: {
    tag: string;
    heading: string;
    subtext: string;
    ctaButton: {
      label: string;
      url: string;
    };
    guaranteeNotice: string;
  };
  footer: {
    offerLinks: { label: string; href: string }[];
    legalText: string;
  };
}

export const siteContent: SiteContent = {
  meta: {
    title: 'AI Agentic Verse | Be The Expert Your Market Sees Every Day',
    description:
      'For Coaches And Founders. We Turn What You Know Into Daily Content In Your Own Face And Voice. First Post Live In 7 Days, Or Your First Month Is Free.',
    ogImage: '/images/hero_verse_still.jpg',
  },

  navigation: {
    logo: 'AI Agentic Verse',
    links: [
      { label: 'Our Work', href: '#our-work' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Who We Serve', href: '#who-we-serve' },
      { label: 'About', href: '#about' },
    ],
    ctaButton: {
      label: 'Book A Call',
      href: '#book',
    },
  },

  hero: {
    tag: 'For Coaches And Founders Who Sell On Trust',
    headline: 'Be The Expert Your Market Sees Every Day. Without Filming, Editing, Or Posting.',
    subtext:
      'We Turn What You Already Know Into Daily Content, In Your Own Face And Voice. You Approve It. We Do The Rest. Your First Post Goes Live In 7 Days, Or Your First Month Is Free.',
    ctaButton: {
      label: 'Book A Strategy Call',
      href: '#book',
    },
    scarcityNotice: 'We Take Four Clients A Quarter. Every Client Gets The Team That Sold Them.',
  },

  ourWork: {
    tag: 'Our Work',
    heading: "Don't Take Our Word For It. Watch It.",
    subheading: 'Real Posts We Made For Real Clients. Same Voice. Same Face. None Of Their Time.',
    videos: [
      {
        id: 'client-video-1',
        title: 'Client Video 1',
        category: 'Real You / Phone Capture',
        duration: '01:18',
        tag: 'Executive Retainer Callout',
        clientName: 'Elena Vance',
        clientRole: 'Executive Leadership Coach',
        captionPlaceholder: '[Elena Vance, Executive Leadership Coach]',
        description: 'Raw phone thought converted into a high-authority LinkedIn and Instagram short.',
        shortDescription: 'Raw phone thought converted into a high-authority LinkedIn and Instagram short.',
        thumbnailUrl: '/images/work_chrono_pulse.jpg',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        year: '2026',
      },
      {
        id: 'client-video-2',
        title: 'Client Video 2',
        category: 'AI Avatar Twin',
        duration: '00:54',
        tag: 'Zero Studio Filming',
        clientName: 'David Sterling',
        clientRole: 'B2B Enterprise SaaS Founder',
        captionPlaceholder: '[David Sterling, B2B Enterprise SaaS Founder]',
        description: 'Autonomous synthetic clone generated from a single calibration recording.',
        shortDescription: 'Autonomous synthetic clone generated from a single calibration recording.',
        thumbnailUrl: '/images/hero_verse_still.jpg',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        year: '2026',
      },
      {
        id: 'client-video-3',
        title: 'Client Video 3',
        category: 'Conversion Short',
        duration: '01:32',
        tag: 'Inbound Pipeline Builder',
        clientName: 'Maya Lin',
        clientRole: 'High-Ticket Sales Consultant',
        captionPlaceholder: '[Maya Lin, High-Ticket Sales Consultant]',
        description: 'Contrarian industry breakdown engineered to drive calendar booking clicks.',
        shortDescription: 'Contrarian industry breakdown engineered to drive calendar booking clicks.',
        thumbnailUrl: '/images/work_neural_meta.jpg',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        year: '2026',
      },
    ],
  },

  problem: {
    tag: 'The Problem',
    heading: "The Best Expert Doesn't Win. The Most Visible One Does.",
    paragraphs: [
      "You're Better At What You Do Than Most People Posting About It. But They Show Up Every Day, And You Don't. So When A Buyer Is Ready, They Think Of Them First.",
      "It's Not That You Don't Know Content Works. It's That Content Eats Your Week. Scripts, Filming, Editing, Captions, Posting. You Keep It Up For Two Weeks. Then Client Work Takes Over And Your Page Goes Quiet Again.",
    ],
    punchline:
      'Every Quiet Week Is A Week Someone Less Skilled Gets The Client Who Should Have Been Yours.',
  },

  whatChanges: {
    tag: 'What Changes',
    heading: 'You Get The Reach Of A Daily Creator. On The Schedule Of A Busy Expert.',
    items: [
      {
        title: 'Buyers Find You First',
        description:
          "Daily Posts Built Around The Questions Your Buyers Already Ask. When They're Ready, Your Name Is The One They Know.",
      },
      {
        title: 'Built On What Already Works',
        description:
          'We Study What Is Winning Attention In Your Market Before We Write A Word. Then We Review Your Numbers Every Week And Make More Of What Works.',
      },
      {
        title: 'Live In 7 Days',
        description:
          "No Three Month Setup. Your First Post Goes Live 7 Days After We Get Your Files. If It Doesn't, Your First Month Is Free.",
      },
      {
        title: 'Almost Nothing On Your Side',
        description:
          'A Few Phone Clips When It Suits You. Or One Recording Session, Ever, With The AI Avatar. You Approve. We Handle Everything Else.',
      },
    ],
  },

  howYouShowUp: {
    tag: 'How You Show Up',
    heading: 'Film When You Want To. Or Never Film Again.',
    options: [
      {
        title: 'Real You',
        badge: 'Film On Your Phone',
        description:
          'Film Short Clips On Your Phone, Whenever It Fits Your Day. We Turn Them Into Scripted, Edited, Captioned Posts For Every Platform.',
        bulletPoints: [
          'Your Real Face And Energy',
          'No Set, No Crew, No Editing',
        ],
      },
      {
        title: 'AI Avatar',
        badge: 'Film Once, Run Forever',
        description:
          'Send Us One 5 Minute HD Video And One 10 To 15 Minute Voice Recording. Once. We Build A Clone Of Your Face And Voice, And Every Post Comes From It.',
        bulletPoints: [
          'You Never Film Again',
          "You Approve A Test Video First, Or You Don't Pay",
        ],
      },
    ],
    note: 'Most Clients Start With Real You And Switch To The Avatar Once They See Results. Switch Any Month, No Penalty.',
  },

  whoWeServe: {
    tag: 'Who We Serve',
    heading: 'Two Kinds Of Experts. One Goal: Be The Obvious Choice.',
    audiences: [
      {
        title: 'Coaches',
        description:
          'Fill Your Calendar With People Who Already Trust You Before The First Call. Keep Your Hours For Coaching, Not Content.',
        linkText: 'See The Coach Offer',
        linkUrl: '/coach.html',
      },
      {
        title: 'Founders',
        description:
          'Build A Following On LinkedIn And X That Brings In Customers, Hires, And Investors. In Your Words, Without Your Evenings.',
        linkText: 'See The Founder Offer',
        linkUrl: '/founder.html',
      },
    ],
  },

  howItWorks: {
    tag: 'How It Works',
    heading: 'From First Call To Daily Posts In Four Steps',
    steps: [
      {
        number: '01',
        title: 'Strategy Call',
        description:
          'Thirty Minutes On Your Goals, Your Buyers, And The Platforms That Matter. You Leave With A Written Game Plan, Whether Or Not We Work Together.',
      },
      {
        number: '02',
        title: 'Your Content Blueprint',
        description:
          'We Research Your Market And Map Your Angles, Platforms, And Posting Volume.',
      },
      {
        number: '03',
        title: 'We Produce, You Approve',
        description:
          'Done For You: Our Team Runs Production. Done With You: We Build The System And Train Your Team To Run It.',
      },
      {
        number: '04',
        title: 'Double Down On Winners',
        description:
          'A Weekly Report Shows What Worked. The Next Batch Is Built Around It.',
      },
    ],
  },

  ourPromise: {
    tag: 'Our Promise',
    heading: 'Live In 7 Days, Or Your First Month Is Free.',
    paragraphs: [
      "Your First Post Goes Live 7 Days After We Get Your Footage Or Avatar Files. If It Doesn't, You Don't Pay For Month One.",
      "Choosing AI Avatar? You See A Test Video Before Anything Goes Live. If It Doesn't Look And Sound Like You, You Don't Pay.",
    ],
  },

  aboutUs: {
    tag: 'About Us',
    heading: 'Small On Purpose',
    paragraphs: [
      'We’re A Content And Growth Team For Coaches And Founders. We Started For One Reason: The Best Experts We Knew Were The Least Visible. Not Because They Had Nothing To Say, But Because They Had No Time To Say It.',
      'So We Built A Team That Takes The Whole Job Off Your Plate. Strategy, Scripts, Editing, Posting, And Reporting. And We Built The AI Avatar So Being Visible Every Day No Longer Depends On Being On Camera Every Day.',
      'We’d Rather Have Four Clients Who Win Than Forty Who Wait. That’s Why We Take Four A Quarter, And Why The Team On Your First Call Is The Team On Your Account.',
    ],
    founderStoryPlaceholder:
      "[Add Your Founder Story Here: Who You Are, Why You Started, And One Result You're Proud Of.]",
  },

  fitAnalysis: {
    fit: {
      title: "We're A Fit If",
      points: [
        "You're A Coach Or Founder With A Real Offer",
        'You Want To Be Seen Every Day, Not Go Viral Once',
        "You'd Rather Spend Your Time On Clients Than Content",
      ],
    },
    notFit: {
      title: "We're Not A Fit If",
      points: [
        'You Want Overnight Fame',
        'You Won’t Send The Clips Or Avatar Files We Ask For',
        'You Want The Cheapest Option, Not The Best One',
      ],
    },
  },

  finalCta: {
    tag: 'Four Clients A Quarter',
    heading: "Three Months From Now, You'll Either Be Posting Every Day Or Still Planning To.",
    subtext:
      'Book A 30 Minute Strategy Call. You Leave With A Written Game Plan, Even If We Never Work Together.',
    ctaButton: {
      label: 'Book A Strategy Call',
      /* PLACEHOLDER: Replace YOUR_BOOKING_LINK with your Calendly / Cal.com link */
      url: 'YOUR_BOOKING_LINK',
    },
    guaranteeNotice: 'First Post Live In 7 Days, Or Your First Month Is Free.',
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
  projects: siteContent.ourWork.videos,
  featuredProject: siteContent.ourWork.videos[0],
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
