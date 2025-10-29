export type Channel =
  | "Instagram"
  | "Facebook"
  | "LinkedIn"
  | "YouTube"
  | "Blog"
  | "Email"
  | "WhatsApp"
  | "PR"
  | "Product"
  | "Events";

export interface ContentPiece {
  title: string;
  description: string;
  channel: Channel | Channel[];
  format: string;
  cadence: string;
  callToAction: string;
}

export interface WeeklyPlan {
  week: number;
  timeframe: string;
  focus: string;
  objective: string;
  heroContent: ContentPiece;
  supportingContent: ContentPiece[];
  communityActivation: string;
  partnershipIdeas: string[];
  measurement: string[];
  notes: string[];
}

export interface MonthlyTheme {
  month: string;
  theme: string;
  narrative: string;
  northStarMetric: string;
  keyMoments: string[];
  heroCampaign: string;
}

export interface ChannelCadenceItem {
  channel: Channel;
  cadence: string;
  contentMix: string;
  storytellingAngle: string;
  optimizationNotes: string;
}

export const monthlyThemes: MonthlyTheme[] = [
  {
    month: "Month 1 (Weeks 1-4)",
    theme: "Ignite nostalgia and articulate the Shero promise",
    narrative:
      "Re-introduce Shero as the trusted bridge between cravings for comfort food and women-led home kitchens. Spotlight the scale achieved in five years while preserving the warmth of a single home-cooked meal.",
    northStarMetric: "Increase qualified top-of-funnel traffic by 28% through storytelling-led awareness across owned channels.",
    keyMoments: [
      "Week 1 anniversary storytelling drop highlighting 1.6M+ meals milestone",
      "Week 2 #SheroSpotlight kickoff featuring high-performing home chefs",
      "Week 4 regional tasting menu live on app & WhatsApp broadcast"
    ],
    heroCampaign:
      "5 Years of Homemade Love – A multimedia story (long-form blog + Instagram reel series + press pitch) charting Shero’s growth and commitment to women-centric entrepreneurship."
  },
  {
    month: "Month 2 (Weeks 5-8)",
    theme: "Empower the community and demonstrate everyday utility",
    narrative:
      "Share practical reasons to choose Shero daily – nutrition, affordability, consistency – while continuing to hero the women behind the meals. Blend educational nutrition content with behind-the-scenes training narratives.",
    northStarMetric:
      "Lift repeat order intent signals (wishlist adds, app reminder opt-ins) by 18% through value-driven storytelling.",
    keyMoments: [
      "Week 5 Shero Skills Lab live-stream workshop clip",
      "Week 6 Nutritionist co-created recipe swaps",
      "Week 8 Community lunch pop-up photo recap"
    ],
    heroCampaign:
      "Cook From Home, Lead From Home – A mid-funnel campaign showcasing Shero’s training pipeline, featuring carousels, LinkedIn case study, and customer testimonial montage."
  },
  {
    month: "Month 3 (Weeks 9-13)",
    theme: "Drive festive trial and geographic expansion",
    narrative:
      "Prime audiences for seasonal celebrations, office catering, and city launches. Merge festive menu innovation with clear CTAs to order, gift, and refer.",
    northStarMetric:
      "Boost conversions from content touchpoints to orders/leads by 22% via gated offers and festive bundles.",
    keyMoments: [
      "Week 9 Festive preorder announcement",
      "Week 11 City expansion teaser drip",
      "Week 13 Gift card + referral finale"
    ],
    heroCampaign:
      "Share the Shero Table – A conversion-focused push with landing page refresh, high-intent email flows, and collaborative reels with local creators."
  }
];

export const weeklyPlan: WeeklyPlan[] = [
  {
    week: 1,
    timeframe: "Days 1-7",
    focus: "Brand Anniversary Kick-off",
    objective:
      "Reignite awareness by celebrating Shero’s 5-year journey and communicating impact numbers to media and audiences.",
    heroContent: {
      title: "5 Years of Shero: From One Kitchen to 1.6M Meals",
      description:
        "Long-form origin story with timeline graphics, customer quotes, and data viz showing growth milestones.",
      channel: ["Blog", "PR"],
      format: "Long-form article + downloadable press kit",
      cadence: "Publish Day 2; pitch to 10 relevant food/entrepreneurship outlets",
      callToAction: "Read the story and download press resources"
    },
    supportingContent: [
      {
        title: "Reel: The Shero Journey in 30 Seconds",
        description: "Fast-cut montage of home cooks, delivery moments, impact stats, and customer smiles.",
        channel: "Instagram",
        format: "Short-form video",
        cadence: "Day 3",
        callToAction: "Share your Shero memory with #5YearsOfShero"
      },
      {
        title: "Founder LinkedIn Post",
        description: "Personal note from founders on building the world’s largest home food platform led by women.",
        channel: "LinkedIn",
        format: "Thought-leadership post",
        cadence: "Day 4",
        callToAction: "Connect for partnership inquiries"
      },
      {
        title: "Email: Thank You, Shero Family",
        description: "Milestone gratitude note to customers and cooks with sneak peek of upcoming 90-day roadmap.",
        channel: "Email",
        format: "Newsletter",
        cadence: "Day 5",
        callToAction: "Refer a friend and earn ₹150 credit"
      }
    ],
    communityActivation:
      "Launch #SheroStory submissions asking customers to share their favourite home food memories for a chance to be featured.",
    partnershipIdeas: [
      "Pitch milestone story to regional lifestyle journalists",
      "Co-author op-ed with women entrepreneurship forums"
    ],
    measurement: [
      "Track referral code usage post email drop",
      "Monitor spike in branded search volume vs. previous week"
    ],
    notes: [
      "Repurpose hero visuals into website hero banner",
      "Update Google Business Profile with anniversary creative"
    ]
  },
  {
    week: 2,
    timeframe: "Days 8-14",
    focus: "Hero the Home Cooks",
    objective:
      "Deepen emotional connection by profiling top-performing Sheroes and their signature dishes.",
    heroContent: {
      title: "#SheroSpotlight: Meet Latha from Chennai",
      description:
        "Video portrait capturing a day in the life, her best-selling milagu rasam, and economic impact on her family.",
      channel: ["YouTube", "Instagram"],
      format: "2-minute docu-style video + reels cutdowns",
      cadence: "Premiere Day 2 with cross-posting on Day 3",
      callToAction: "Order Latha’s curated mini menu"
    },
    supportingContent: [
      {
        title: "Carousel: Shero Kitchens Across India",
        description: "Photo carousel introducing 6 diverse kitchens with quick stats (city, specialties, orders served).",
        channel: "Instagram",
        format: "Carousel",
        cadence: "Day 4",
        callToAction: "Vote for the next city feature"
      },
      {
        title: "Blog: Empowering 1,689 Women to Lead",
        description: "Data-backed explainer of training modules, earnings, and testimonials from new recruits.",
        channel: "Blog",
        format: "Story + infographic",
        cadence: "Day 5",
        callToAction: "Apply to become a Shero"
      }
    ],
    communityActivation:
      "Instagram Live Q&A with featured cook and nutritionist to answer audience questions about quality and hygiene.",
    partnershipIdeas: [
      "Collaborate with women entrepreneur communities for amplification",
      "Invite micro-influencers to duet the spotlight video"
    ],
    measurement: [
      "Track live session attendance and retention",
      "Monitor increase in Be-a-Shero application form starts"
    ],
    notes: [
      "Capture vertical footage during shoot for future ads",
      "Translate captions into Tamil, Hindi, English"
    ]
  },
  {
    week: 3,
    timeframe: "Days 15-21",
    focus: "Comfort Classics Relaunch",
    objective:
      "Promote top 10 comfort dishes and encourage habitual ordering mid-week and weekends.",
    heroContent: {
      title: "The Comfort Classics Edit",
      description:
        "Landing page + blog pairing popular combos (e.g., kathirikai murungai sambar + keerai kootu) with personal stories and nutrition notes.",
      channel: ["Blog", "Product"],
      format: "Landing page refresh + long-form copy",
      cadence: "Day 1 go-live with homepage placement",
      callToAction: "Order a Comfort Classic combo"
    },
    supportingContent: [
      {
        title: "Reel Series: From Prep to Plate",
        description: "3-part vertical videos showing the making of each combo from pantry to plating.",
        channel: "Instagram",
        format: "Reel series",
        cadence: "Day 2, Day 4, Day 6",
        callToAction: "Save the combo you want this week"
      },
      {
        title: "WhatsApp Broadcast Templates",
        description: "Templatized texts for city managers featuring daily specials and add-on desserts.",
        channel: "WhatsApp",
        format: "Copy + image pack",
        cadence: "Daily",
        callToAction: "Tap to order now"
      }
    ],
    communityActivation:
      "Encourage customers to submit ‘comfort food playlists’ to be featured on Instagram Stories highlights.",
    partnershipIdeas: [
      "Cross-promote with local spice brands for combo giveaways",
      "Invite office micro-communities to trial weekday lunch bundles"
    ],
    measurement: [
      "Track uptick in combo purchases vs baseline",
      "Monitor WhatsApp click-to-order rate"
    ],
    notes: [
      "Prepare 4 variant hero images for paid ads",
      "Document packaging shots for later reuse"
    ]
  },
  {
    week: 4,
    timeframe: "Days 22-28",
    focus: "Regional Rotations – South India",
    objective:
      "Showcase depth of regional menus to drive discovery and first-time orders in new cities.",
    heroContent: {
      title: "Taste of Tamil Nadu Week",
      description:
        "Feature story introducing 4 Tamil Nadu-inspired thali experiences with background on the home cooks.",
      channel: ["Blog", "Email"],
      format: "Blog + segmented email",
      cadence: "Blog Day 2, email Day 3",
      callToAction: "Pre-book your regional thali"
    },
    supportingContent: [
      {
        title: "Instagram Guides: Regional Food Trails",
        description: "Curated guide compiling Shero dishes from Tamil Nadu, Andhra, Kerala with saveable itineraries.",
        channel: "Instagram",
        format: "Guide",
        cadence: "Day 4",
        callToAction: "Save and try every dish"
      },
      {
        title: "LinkedIn Slide Deck",
        description: "Show how Shero localizes menus city-by-city for F&B partners and corporate catering leads.",
        channel: "LinkedIn",
        format: "Document post",
        cadence: "Day 5",
        callToAction: "Book a tasting for your office"
      }
    ],
    communityActivation:
      "Regional quiz on Instagram Stories with discount codes for participants scoring 80%+.",
    partnershipIdeas: [
      "Collaborate with regional travel pages for cross-promotion",
      "Offer tasting to relocation services for onboarding packages"
    ],
    measurement: [
      "Track pre-book conversions from segmented email",
      "Monitor Instagram Guide saves and DMs"
    ],
    notes: [
      "Prep next region (North India) creative for Month 2",
      "Update SEO metadata for regional keywords"
    ]
  },
  {
    week: 5,
    timeframe: "Days 29-35",
    focus: "Skills & Training Spotlight",
    objective:
      "Showcase Shero’s training academy to attract new home cooks and reassure customers on quality.",
    heroContent: {
      title: "Inside the Shero Skills Lab",
      description:
        "Mini-documentary featuring onboarding process, hygiene protocols, and mentorship circles.",
      channel: ["YouTube", "Facebook"],
      format: "4-minute video",
      cadence: "Premiere Day 3",
      callToAction: "Apply for the next cohort"
    },
    supportingContent: [
      {
        title: "Instagram Stories: Training Day",
        description: "Storyboarded day showcasing modules (menu engineering, pricing, digital skills).",
        channel: "Instagram",
        format: "Stories with stickers",
        cadence: "Day 4",
        callToAction: "Swipe up to become a Shero"
      },
      {
        title: "Blog: Quality You Can Taste",
        description: "Breakdown of lab testing, delivery SOPs, and zero-waste initiatives.",
        channel: "Blog",
        format: "Educational article",
        cadence: "Day 5",
        callToAction: "Refer a home cook and earn ₹1000"
      }
    ],
    communityActivation:
      "Host a webinar for aspiring Sheroes with alumni panel and live FAQs.",
    partnershipIdeas: [
      "Align with women’s self-help groups for recruitment",
      "Co-host hygiene certification demo with partner lab"
    ],
    measurement: [
      "Applications started vs target",
      "Watch time on hero video"
    ],
    notes: [
      "Capture testimonials to reuse in paid ads",
      "Create printable checklist for onboarding team"
    ]
  },
  {
    week: 6,
    timeframe: "Days 36-42",
    focus: "Nutrition & Wellness",
    objective:
      "Position Shero as the go-to for balanced meals by partnering with nutrition experts.",
    heroContent: {
      title: "Nutritionist-Approved Shero Meal Plans",
      description:
        "Downloadable 5-day meal plan created with a certified nutritionist, mapping dishes to macros and portion suggestions.",
      channel: ["Blog", "Email"],
      format: "Downloadable PDF + gated blog",
      cadence: "Launch Day 2 with lead capture",
      callToAction: "Download and schedule your first plan"
    },
    supportingContent: [
      {
        title: "Reel: Lunchbox Swaps",
        description: "Before/after lunchbox ideas replacing processed options with Shero dishes.",
        channel: "Instagram",
        format: "Reel",
        cadence: "Day 3",
        callToAction: "Tag a parent who needs easy lunchbox ideas"
      },
      {
        title: "LinkedIn Article",
        description: "How corporates can boost employee wellness by partnering with Shero for healthy lunches.",
        channel: "LinkedIn",
        format: "Article",
        cadence: "Day 5",
        callToAction: "Book a wellness tasting session"
      }
    ],
    communityActivation:
      "Nutrition quiz on the app with badge rewards and discount for quiz completion.",
    partnershipIdeas: [
      "Collaborate with fitness studios for meal plan bundles",
      "Feature nutrition expert takeover on Instagram"
    ],
    measurement: [
      "Number of gated downloads",
      "Leads generated for corporate wellness program"
    ],
    notes: [
      "Repurpose meal plan into WhatsApp carousel",
      "Collect testimonials for case study"
    ]
  },
  {
    week: 7,
    timeframe: "Days 43-49",
    focus: "Family Celebrations",
    objective:
      "Drive weekend catering and group orders by highlighting family-centric menus.",
    heroContent: {
      title: "Shero Family Feast Kits",
      description:
        "Landing page bundling appetisers, mains, desserts with flexible serving sizes and heat-at-home instructions.",
      channel: ["Product", "Blog"],
      format: "Landing page + interactive menu",
      cadence: "Day 1 release with slider on homepage",
      callToAction: "Reserve your weekend feast kit"
    },
    supportingContent: [
      {
        title: "Customer Story: The Rao Family Sunday Tradition",
        description: "Short film / reel showing a family’s weekend ritual with Shero.",
        channel: "YouTube",
        format: "60-second story",
        cadence: "Day 4",
        callToAction: "Share your Shero Sunday photo"
      },
      {
        title: "Email Series: Family Weekend Reminders",
        description: "Friday reminder email + Saturday morning SMS linking to feast kits.",
        channel: "Email",
        format: "Triggered flow",
        cadence: "Friday 5pm & Saturday 10am",
        callToAction: "Pre-order before slots fill"
      }
    ],
    communityActivation:
      "UGC contest: Post your family table with #SheroFamilyFeast to win a free dessert add-on.",
    partnershipIdeas: [
      "Bundle with home decor brands for tablescape tips",
      "Cross-promote with parenting communities"
    ],
    measurement: [
      "Group order volume vs previous month",
      "UGC submissions and reach"
    ],
    notes: [
      "Capture leftover content for paid retargeting",
      "Add optional donation toggle for supporting new Sheroes"
    ]
  },
  {
    week: 8,
    timeframe: "Days 50-56",
    focus: "Community Pop-up & Offline Touchpoints",
    objective:
      "Strengthen trust via in-person tasting pop-up and nurture local advocates.",
    heroContent: {
      title: "Shero Community Lunch Pop-up",
      description:
        "Recap video + carousel capturing highlights, testimonials, and QR codes for instant downloads.",
      channel: ["Instagram", "YouTube", "PR"],
      format: "Aftermovie + photo story",
      cadence: "Event Day 3, recap Day 5",
      callToAction: "Join the next city pop-up"
    },
    supportingContent: [
      {
        title: "LinkedIn Post-Event Insights",
        description: "Share attendance metrics, partner shout-outs, and corporate catering leads generated.",
        channel: "LinkedIn",
        format: "Summary post",
        cadence: "Day 6",
        callToAction: "Schedule an on-site tasting"
      },
      {
        title: "WhatsApp: Pop-up Photo Album",
        description: "Send curated album to attendees with thank-you note and exclusive offer.",
        channel: "WhatsApp",
        format: "Image carousel + copy",
        cadence: "Day 6",
        callToAction: "Redeem attendee-only code"
      }
    ],
    communityActivation:
      "Prompt attendees to leave Google reviews and tag Shero for a giveaway.",
    partnershipIdeas: [
      "Partner with local delivery fleets for co-branding",
      "Invite city food bloggers for coverage"
    ],
    measurement: [
      "Number of leads from QR downloads",
      "Spike in Google review velocity"
    ],
    notes: [
      "Document SOP for future pop-ups",
      "Compile highlight reel for Q4 investor deck"
    ]
  },
  {
    week: 9,
    timeframe: "Days 57-63",
    focus: "Festive Menu Warm-up",
    objective:
      "Prime audience for upcoming festive season with teaser recipes and giftable bundles.",
    heroContent: {
      title: "Festive Forward: Shero Celebration Calendar",
      description:
        "Interactive calendar outlining upcoming festivals (Navratri, Diwali, Eid, regional harvest) with matching Shero menus.",
      channel: ["Blog", "Email"],
      format: "Interactive article + downloadable calendar",
      cadence: "Day 2",
      callToAction: "Join waitlist for festive preorders"
    },
    supportingContent: [
      {
        title: "Reel: Building the Diwali Sweet Box",
        description: "Behind-the-scenes of home cooks preparing sweets with packaging reveal.",
        channel: "Instagram",
        format: "Reel",
        cadence: "Day 4",
        callToAction: "Vote for the next sweet to include"
      },
      {
        title: "PR Pitch",
        description: "Pitch to lifestyle media about women-led festive catering and gifting trends.",
        channel: "PR",
        format: "Press angle",
        cadence: "Day 5",
        callToAction: "Book interview/demo"
      }
    ],
    communityActivation:
      "Launch referral drive: gift ₹250 credit for every festive order referral.",
    partnershipIdeas: [
      "Collaborate with gift hamper startups",
      "Co-create limited-edition boxes with artisanal craft brands"
    ],
    measurement: [
      "Festive waitlist sign-ups",
      "Referral code activations"
    ],
    notes: [
      "Finalize packaging photography",
      "Align supply chain timelines with marketing"
    ]
  },
  {
    week: 10,
    timeframe: "Days 64-70",
    focus: "Office & Bulk Ordering",
    objective:
      "Convert corporate leads by showcasing seamless ordering flows and testimonials.",
    heroContent: {
      title: "Case Study: How XYZ Tech Feeds 800 Employees with Shero",
      description:
        "Downloadable PDF featuring problem-solution-impact narrative, metrics, and quotes from HR.",
      channel: ["LinkedIn", "Email"],
      format: "Case study lead magnet",
      cadence: "Day 3",
      callToAction: "Book a corporate tasting"
    },
    supportingContent: [
      {
        title: "Workflow Demo Video",
        description: "Screen recording + voiceover showing how office managers place recurring orders.",
        channel: "YouTube",
        format: "Product walkthrough",
        cadence: "Day 4",
        callToAction: "Start a corporate account"
      },
      {
        title: "Email Nurture Sequence",
        description: "3-part drip to leads focusing on pricing, menu customization, logistics.",
        channel: "Email",
        format: "Automated flow",
        cadence: "Day 4, 6, 8",
        callToAction: "Schedule a consultation"
      }
    ],
    communityActivation:
      "Offer limited-time corporate sampler boxes for office admins and gather feedback videos.",
    partnershipIdeas: [
      "Tie-up with coworking spaces for pop-up lunches",
      "Co-market with HR tech platforms"
    ],
    measurement: [
      "MQLs generated and meetings booked",
      "Video completion rate on workflow demo"
    ],
    notes: [
      "Set up LinkedIn Conversation Ads",
      "Update website B2B landing page with fresh testimonials"
    ]
  },
  {
    week: 11,
    timeframe: "Days 71-77",
    focus: "City Expansion Teasers",
    objective:
      "Build anticipation for upcoming city launches and gather waitlists.",
    heroContent: {
      title: "Where Should Shero Go Next?",
      description:
        "Interactive map showing existing coverage and teasing next 3 cities with form to register interest.",
      channel: ["Product", "Instagram"],
      format: "Microsite + poll stickers",
      cadence: "Day 2",
      callToAction: "Join your city waitlist"
    },
    supportingContent: [
      {
        title: "UGC Montage",
        description: "Compilation of customer requests from different cities overlayed with launch dates.",
        channel: "Instagram",
        format: "Reel",
        cadence: "Day 5",
        callToAction: "Tag friends in the next launch city"
      },
      {
        title: "LinkedIn Update",
        description: "Share expansion roadmap with call for hyperlocal partners and delivery riders.",
        channel: "LinkedIn",
        format: "Carousel",
        cadence: "Day 4",
        callToAction: "Partner with Shero in your city"
      }
    ],
    communityActivation:
      "City-specific WhatsApp groups for launch updates and beta tasting invites.",
    partnershipIdeas: [
      "Coordinate with local food bloggers for countdowns",
      "Engage resident welfare associations for sampling"
    ],
    measurement: [
      "Waitlist sign-ups per city",
      "Group engagement rates"
    ],
    notes: [
      "Prepare localized PR kits",
      "Ensure ops alignment on launch commitments"
    ]
  },
  {
    week: 12,
    timeframe: "Days 78-84",
    focus: "Festive Conversion Sprint",
    objective:
      "Turn festive interest into confirmed orders via scarcity messaging and exclusive add-ons.",
    heroContent: {
      title: "Festive Preorder Window Now Open",
      description:
        "Homepage takeover + dynamic countdown banner linking to curated festive bundles and sweet boxes.",
      channel: ["Product", "Email"],
      format: "Homepage hero + triggered email",
      cadence: "Day 1",
      callToAction: "Lock in your festive box"
    },
    supportingContent: [
      {
        title: "Festive Kitchen Tour",
        description: "IG Live from a Shero kitchen prepping festive sweets, with live questions answered.",
        channel: "Instagram",
        format: "Live stream",
        cadence: "Day 3",
        callToAction: "Order during the live for bonus add-on"
      },
      {
        title: "WhatsApp Countdown Messages",
        description: "3 automated nudges reminding waitlist customers of preorder deadlines.",
        channel: "WhatsApp",
        format: "Automated broadcast",
        cadence: "Day 2, 4, 6",
        callToAction: "Tap to confirm order"
      }
    ],
    communityActivation:
      "Refer-and-earn festive edition: both referrer and referee get complimentary sweet jars.",
    partnershipIdeas: [
      "Bundle with eco-friendly diyas/gift bags",
      "Cross-promote with fintech app for festive cashback"
    ],
    measurement: [
      "Preorder conversion rate",
      "Live viewers and comments"
    ],
    notes: [
      "Prepare contingency stock messaging",
      "Capture testimonials for post-festive recap"
    ]
  },
  {
    week: 13,
    timeframe: "Days 85-90",
    focus: "Retention & Advocacy",
    objective:
      "Close the 90-day sprint with loyalty hooks, feedback loops, and evergreen assets.",
    heroContent: {
      title: "Share the Shero Table Loyalty Program",
      description:
        "Launch page outlining tiers, perks (free delivery, surprise desserts, early access), and referrals.",
      channel: ["Product", "Email"],
      format: "Landing page + onboarding email",
      cadence: "Day 2",
      callToAction: "Join the loyalty program"
    },
    supportingContent: [
      {
        title: "Quarter-in-Review Infographic",
        description: "Visual recap of impact stats, top dishes, cities served, and community highlights.",
        channel: "Instagram",
        format: "Carousel",
        cadence: "Day 4",
        callToAction: "Comment your favourite Shero moment"
      },
      {
        title: "Email: Thank You & Feedback",
        description: "Survey request + net promoter score with incentive for sharing testimonials.",
        channel: "Email",
        format: "Survey email",
        cadence: "Day 5",
        callToAction: "Complete survey for ₹100 credit"
      }
    ],
    communityActivation:
      "UGC montage of top customer stories compiled into a gratitude reel.",
    partnershipIdeas: [
      "Co-create case study with social impact partners",
      "Pitch success story to entrepreneurship podcasts"
    ],
    measurement: [
      "Loyalty sign-ups",
      "Survey completion rate and NPS score"
    ],
    notes: [
      "Publish internal playbook summarizing best-performing content",
      "Roll learnings into next quarter roadmap"
    ]
  }
];

export const channelCadence: ChannelCadenceItem[] = [
  {
    channel: "Instagram",
    cadence: "Reels 2x/week (Tue & Thu), Stories daily, Guides twice/quarter",
    contentMix:
      "Blend of hero storytelling, behind-the-scenes prep, UGC reposts, and interactive stickers for polls/quizzes.",
    storytellingAngle:
      "Highlight the warmth of home kitchens and empowerment of women entrepreneurs while nudging saves and shares.",
    optimizationNotes:
      "Batch shoot vertical clips, localize subtitles, and pin seasonal highlights for quick access."
  },
  {
    channel: "Facebook",
    cadence: "3 posts/week repurposed from Instagram with community-first captions",
    contentMix:
      "Customer testimonials, festival announcements, regional dish explainers, and live event invites.",
    storytellingAngle:
      "Focus on nostalgia and family-centric messaging for slightly older demographic segments.",
    optimizationNotes:
      "Encourage shares into local foodie groups, boost top posts with geo-targeted ads."
  },
  {
    channel: "LinkedIn",
    cadence: "1 long-form leadership post + 1 carousel/case study each week",
    contentMix:
      "Founder insights, growth metrics, B2B case studies, recruitment and partnership spotlights.",
    storytellingAngle:
      "Position Shero as a scale-up blending social impact with operational excellence.",
    optimizationNotes:
      "Leverage employee advocacy, add strong CTAs to book tastings or explore franchise model."
  },
  {
    channel: "YouTube",
    cadence: "Bi-weekly hero video (2-4 mins) + Shorts stitched from reels",
    contentMix:
      "Home cook documentaries, customer stories, product walkthroughs, and event recaps.",
    storytellingAngle:
      "Invest in cinematic storytelling that underscores authenticity and the sensory appeal of home food.",
    optimizationNotes:
      "Maintain playlists (Shero Stories, Training Lab, Festive Specials) and add subtitles for accessibility."
  },
  {
    channel: "Blog",
    cadence: "1 in-depth article per week aligned with weekly hero focus",
    contentMix:
      "Origin stories, regional food guides, nutritional explainers, and campaign landing pages.",
    storytellingAngle:
      "Combine data-backed impact with vibrant cultural storytelling to support SEO and nurture leads.",
    optimizationNotes:
      "Include schema markup for recipes/events, interlink to conversion pages, and update seasonal CTAs."
  },
  {
    channel: "Email",
    cadence: "Weekly campaign mailer + bi-weekly automated flows (onboarding, win-back, corporate)",
    contentMix:
      "Milestone announcements, curated menus, referral pushes, and survey requests.",
    storytellingAngle:
      "Personalized, city-wise messaging that feels like a note from their neighbourhood Shero kitchen.",
    optimizationNotes:
      "Segment by order frequency and cuisine preference, test send-time automation, maintain consistent header design."
  },
  {
    channel: "WhatsApp",
    cadence: "Broadcasts 3x/week (Mon, Wed, Sat) with templated flows per city",
    contentMix:
      "Daily specials, preorder deadlines, event invites, and loyalty nudges.",
    storytellingAngle:
      "Utility-first messaging with friendly tone; highlight scarcity and convenience.",
    optimizationNotes:
      "Use quick-reply buttons, track click-through to ordering app, respect DND preferences."
  },
  {
    channel: "PR",
    cadence: "1 strategic pitch or press release per month tied to key milestones",
    contentMix:
      "Impact milestones, city launches, partnerships, and women entrepreneurship narratives.",
    storytellingAngle:
      "Frame Shero as a national movement redefining home food and women-led gig work.",
    optimizationNotes:
      "Keep media kit updated, cultivate columnist relationships, and offer tasting boxes for reviews."
  },
  {
    channel: "Events",
    cadence: "Quarterly flagship pop-up + monthly community meet-up",
    contentMix:
      "Tasting sessions, skill workshops, franchise discovery days, and festival previews.",
    storytellingAngle:
      "Show physical proof of community, training rigor, and flavour authenticity.",
    optimizationNotes:
      "Stream highlights, capture testimonials on-site, and integrate QR flows for conversions."
  }
];
