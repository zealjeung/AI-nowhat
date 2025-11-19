
import type { NewsCategory } from './types';
import { BrainIcon, RobotIcon, ChipIcon, CodeIcon, BriefcaseIcon, LayersIcon, ShieldIcon, GlobeIcon, SmartphoneIcon } from './components/icons';

export const NEWS_DATA: NewsCategory[] = [
  {
    id: 'ai-models',
    title: 'AI Models, Frameworks & Tools',
    icon: BrainIcon,
    trendingTopics: [],
    items: [
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'sora2', title: 'OpenAI Sora 2', description: 'A significant leap in video generation technology, creating highly realistic and imaginative scenes from text instructions.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'atlas', title: 'OpenAI ChatGPT Atlas', description: 'A new iteration of ChatGPT focused on providing more contextual and personalized conversational experiences.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'gemini', title: 'Gemini 2.5 Flash', description: 'Designed to help students learn complex subjects step-by-step with tailored explanations and guidance.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'claude', title: 'Claude Haiku 4.5', description: 'The latest model from Anthropic, offering a balance of high performance, speed, and cost-effectiveness for various tasks.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'chatgpt-search', title: 'ChatGPT Becomes a Search Engine', description: 'Integrating real-time web search capabilities, allowing it to provide up-to-date answers with cited sources.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'grokipedia', title: 'Grokipedia.com', description: 'A new encyclopedia built by xAI, Elon Musk’s AI company, aiming to provide unfiltered and comprehensive information.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'mico', title: 'Microsoft Copilot "Mico"', description: 'Microsoft announced 12 major updates to Copilot, including a new AI character called “Mico” and enhanced features across Windows, Edge, and Office.', url: '#' },
      // Merged Frameworks & SDKs items
      { id: 'openai-sdk', title: 'OpenAI SDK', description: 'Latest updates on the official SDK for accessing OpenAI models like GPT-4.', url: '#' },
      { id: 'mcp', title: 'Microsoft Copilot (MCP)', description: 'News regarding the platform, integrations, and development tools for Microsoft Copilot.', url: '#' },
      { id: 'autogen', title: 'AutoGen', description: 'Updates on Microsoft\'s framework for building applications with multiple collaborating AI agents.', url: '#' },
      { id: 'langgraph', title: 'LangGraph', description: 'The latest developments for this library that extends LangChain for building stateful, multi-agent applications.', url: '#' },
      { id: 'crewai', title: 'CrewAI', description: 'Recent news and features for this framework focused on orchestrating autonomous AI agents.', url: '#' },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics & Physical AI',
    icon: RobotIcon,
    trendingTopics: [],
    items: [
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'neo', title: '1X Technologies NEO', description: 'Pre-orders opened for this humanoid robot designed for domestic tasks like dishwashing, watering plants, and carrying groceries.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'figure03', title: 'Figure AI Figure 03', description: 'An advanced humanoid robot capable of folding laundry, pouring drinks, and navigating cluttered spaces with human-like dexterity.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'optimus', title: 'Tesla Optimus', description: 'Tesla continues development on its humanoid robot, focusing on achieving human-like dexterity for manufacturing and general-purpose tasks.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'newton', title: 'Newton Physics Engine', description: 'A collaboration between Disney, Nvidia, and Google DeepMind to create a GPU-accelerated physics engine for training robots in complex simulations.', url: '#' },
    ],
  },
  {
    id: 'science-space',
    title: 'Science & Space',
    icon: GlobeIcon,
    trendingTopics: [],
    items: [
      { id: 'spacex-starship', title: 'SpaceX Starship Update', description: 'The latest test flight results and future milestones for the massive Starship rocket aimed at Mars colonization.', url: '#' },
      { id: 'nuclear-fusion', title: 'Nuclear Fusion Breakthrough', description: 'Scientists achieve new record in energy output, bringing commercial fusion power one step closer to reality.', url: '#' },
      { id: 'crispr-therapy', title: 'New CRISPR Therapy Approved', description: 'FDA approves a new gene-editing therapy for treating rare genetic blood disorders.', url: '#' },
      { id: 'james-webb', title: 'James Webb Telescope Discovery', description: 'New images from JWST reveal potential biosignatures on a distant exoplanet.', url: '#' }
    ]
  },
  {
    id: 'hardware',
    title: 'Hardware & Quantum Computing',
    icon: ChipIcon,
    trendingTopics: [],
    items: [
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'willow', title: 'Google Willow Quantum Chip', description: 'Ran a "Quantum Echoes" algorithm in ~2 hours, a task that would take the world’s fastest supercomputer 3.2 years.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'ibm-quantum', title: 'IBM Quantum on AMD Chips', description: 'Announced the ability to run quantum error-correction algorithms on regular AMD chips, a major step for practical quantum computing.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'nvqlink', title: 'Nvidia NVQLink', description: 'A new system that bridges the gap by connecting quantum processors directly to their powerful AI chips for hybrid computing.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'samsung-hbm4', title: 'Samsung & Nvidia HBM4', description: 'Samsung is in "close discussion" to supply Nvidia with HBM4, the next generation of high-bandwidth memory crucial for AI accelerators.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'apple-m5', title: 'Apple Launches M5 Chip', description: 'The next generation of Apple Silicon, promising significant performance and efficiency gains for Mac and iPad lineups.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'nvidia-5t', title: 'Nvidia Hits $5T Market Value', description: 'Became the first semiconductor company to reach a $5 trillion market valuation, driven by immense demand for its AI chips.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'amd-openai', title: 'OpenAI & AMD Partnership', description: 'OpenAI inked a multi-year deal with AMD to use their hardware, diversifying its supply of powerful AI chips.', url: '#' },
    ],
  },
  {
    id: 'software',
    title: 'Software & Developer Tools',
    icon: CodeIcon,
    trendingTopics: [],
    items: [
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'ts-1', title: 'TypeScript #1 on GitHub', description: 'Surpassed other languages to become the most used language on GitHub, reflecting its popularity in modern web development.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'python', title: 'Python 3.14 Released', description: 'Still dominating AI and data science, Python grew 48% YoY. Version 3.14 was officially released on October 7th.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'rust', title: 'Rust is the Developer Darling', description: 'Boasts a 72% approval rating for its memory safety and performance, despite having a smaller market share.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'linux-kernel', title: 'Linux Kernel 6.17', description: 'The latest kernel version dropped on September 28th, bringing new hardware support and performance improvements.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'comet-browser', title: 'Perplexity Comet Browser', description: 'Launched for free on Oct 2nd, this AI-powered browser can research, organize tabs, draft emails, and even shop for you.', url: '#' },
    ],
  },
  {
    id: 'consumer-tech',
    title: 'Consumer Tech & Gadgets',
    icon: SmartphoneIcon,
    trendingTopics: [],
    items: [
        { id: 'iphone-flip', title: 'Apple Foldable iPhone Rumors', description: 'Leaks suggest Apple is finalizing designs for a foldable iPhone to be released in late 2026.', url: '#' },
        { id: 'samsung-s25', title: 'Samsung Galaxy S25 Leak', description: 'Early renders show a major design overhaul and new AI-integrated camera features.', url: '#' },
        { id: 'smart-glasses-meta', title: 'Next-Gen Meta Ray-Bans', description: 'Features include a heads-up display and improved AI assistant integration for real-time translation.', url: '#' },
        { id: 'steam-deck-2', title: 'Valve Steam Deck 2 News', description: 'Valve hints at better battery life and screen technology in the upcoming iteration of their handheld console.', url: '#' }
    ]
  },
  {
    id: 'industry',
    title: 'Industry & Business',
    icon: BriefcaseIcon,
    trendingTopics: [],
    items: [
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: '6g', title: 'Building AI-Powered 6G', description: 'NVIDIA and Nokia formed a strategic partnership to develop AI-native 6G networks, looking beyond the current 5G standard.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'meta-invest', title: 'Meta\'s $27B AI Investment', description: 'Meta is investing $27 billion in AI, with their AI-powered ad tools now generating over $60 billion annually.', url: '#' },
      // Fix: Add missing 'url' property to conform to NewsItem type.
      { id: 'adobe-max', title: 'Adobe MAX 2025', description: 'Showcased new AI tools for creating voiceovers, generating custom soundtracks, and editing projects via text descriptions.', url: '#' },
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    icon: ShieldIcon,
    trendingTopics: [],
    items: [
      { id: 'black-hat-2025', title: 'Black Hat 2025 Highlights', description: 'Major vulnerabilities and exploits revealed at the leading security conference, shaping the future of digital defense.', url: '#' },
      { id: 'log4shell-2', title: 'Log4Shell 2.0 Emerges', description: 'A new critical vulnerability discovered in a widely used logging library, putting millions of systems at risk.', url: '#' },
      { id: 'ai-phishing', title: 'AI-Powered Phishing Attacks', description: 'Sophisticated phishing campaigns are using generative AI to create highly convincing and personalized lures.', url: '#' },
      { id: 'raas-trends', title: 'Rise of Ransomware-as-a-Service', description: 'New trends and major players in the RaaS ecosystem, making sophisticated attacks more accessible.', url: '#' },
      { id: 'nation-state-espionage', title: 'Nation-State Cyber Espionage', description: 'Reports on recent cyber-espionage campaigns targeting critical infrastructure and government agencies.', url: '#' },
    ]
  }
];
