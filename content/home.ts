// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... [types unchanged]

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "Effortless Email Marketing",
    titleBefore: "",
    titleHighlight: "Effortless Email Marketing",
    titleAfter: "",
    subtitle:
      "Create stunning email campaigns, manage subscriber lists, and track your results—all in one place.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "Explore Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "MailNest dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why MailNest?",
    heading: "A practical email marketing platform",
    description:
      "MailNest gives you all the tools you need to connect with your audience and grow your business. Build professional emails, organize your contacts, and gain insights with powerful analytics—no technical skills required.",
    items: [
      {
        icon: "Blocks",
        title: "No Code Needed",
        description: "Create and send emails using a beautiful, intuitive interface.",
      },
      {
        icon: "LineChart",
        title: "Powerful Analytics",
        description: "Track your campaigns and understand your audience with clear reports.",
      },
      {
        icon: "Wallet",
        title: "Affordable Pricing",
        description: "Start for free and scale easily as your mailing list and team grows.",
      },
      {
        icon: "Sparkle",
        title: "Frictionless Collaborations",
        description: "Invite teammates, manage permissions, and work together on campaigns.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Powerful Campaigns, Simple Workflow",
    subtitle:
      "Design, send, and analyze campaigns in minutes. Our intuitive dashboard keeps everything organized so you can focus on your message.",
    items: [
      { icon: "TabletSmartphone", title: "Responsive Email Builder", description: "Your emails look great on any device with zero extra effort." },
      { icon: "BadgeCheck", title: "List Management", description: "Organize, segment, and import subscribers with ease." },
      { icon: "Goal", title: "Instant Reporting", description: "See opens, clicks, and success metrics for every campaign, instantly." },
      { icon: "PictureInPicture", title: "Professional Templates", description: "Leverage stunning templates or design your own from scratch." },
      { icon: "MousePointerClick", title: "Simple Sending Flow", description: "Preview, schedule, and send campaigns in a few clicks." },
      { icon: "Newspaper", title: "Team Collaboration", description: "Work together, manage permissions, and scale your workflow." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "What MailNest Offers",
    subtitle:
      "All the essentials to launch email campaigns that connect and convert.",
    items: [
      { title: "Campaign Creation", description: "Design and launch email campaigns effortlessly.", pro: false },
      { title: "Subscriber Management", description: "Grow, segment, and organize your email lists.", pro: false },
      { title: "Performance Tracking", description: "Get real-time analytics and improve over time.", pro: false },
      { title: "Integrations", description: "Connect the tools you already use.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams succeeding with MailNest",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "MailNest helped us engage customers better. Easy to use and reliable.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, OrbitDesk", comment: "Our email campaigns are finally organized. MailNest is a game changer.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "We send beautiful campaigns without any code. The analytics are crystal clear!", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Growth Manager, Nimbus", comment: "Adding teammates and segmenting contacts is so simple in MailNest.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Marketing, PulseOps", comment: "Best value for the money in simple email marketing.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Built for Growing Teams",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/bidxai" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, Transparent Pricing",
    subtitle: "Grow your mailing list and features as your business scales.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Send campaigns to up to 500 subscribers for free.",
        buttonText: "Start for free",
        benefits: ["Up to 1 user", "500 subscribers", "Basic analytics", "Core email builder", "Community support"],
      },
      {
        title: "Growth",
        popular: true,
        price: 39,
        description: "For small teams ready to grow their audience.",
        buttonText: "Start trial",
        benefits: ["3 users", "10,000 subscribers", "Advanced analytics", "All templates", "Priority email support"],
      },
      {
        title: "Pro",
        popular: false,
        price: 99,
        description: "Full features for rapidly growing organizations.",
        buttonText: "Contact sales",
        benefits: ["Unlimited users", "100,000 subscribers", "Segmentation", "Automation", "Premium onboarding"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the MailNest team",
    description:
      "Want to see how MailNest can level up your marketing? Or have a feature idea? We'd love to hear from you.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • India" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Reach out", value: ["Monday - Friday", "9AM - 6PM IST"] },
    },
    formSubjects: ["Product Demo", "Feature Request", "Pricing & Plans", "Support", "Other"],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "Is MailNest free?", answer: "Yes! Use all core features for free with up to 500 subscribers." },
      { question: "Can I upgrade from Starter?", answer: "You can upgrade plans as your business grows, anytime." },
      { question: "Do I need design skills?", answer: "No. Anyone can design beautiful emails in MailNest—no technical skills required." },
      { question: "Does MailNest support automation?", answer: "Automation is coming soon! For now, schedule and send campaigns anytime." },
      { question: "Is support available?", answer: "Growth and Pro plans include priority support. We're always happy to help!" },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "MailNest",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "https://github.com/bidxai" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
        ],
      },
    ],
    copyright: "\u00a9 2026 MailNest.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "MailNest",
    routes: [
      { href: "/#why", label: "Why MailNest?" },
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "MailNest preview" },
    features: [
      { title: "Campaign Builder", description: "Create, schedule, and send beautiful emails in minutes." },
      { title: "Subscriber Management", description: "Organize, import, and segment your audience easily." },
      { title: "Analytics Dashboard", description: "Track performance, opens, clicks, growth, and more." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started Free",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/bidxai", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

// Keep this function export for backward compatibility with older imports.
// Primary consumers should import `homeContent` directly.
export function getHomeContent(): HomeContent {
  return homeContent;
}