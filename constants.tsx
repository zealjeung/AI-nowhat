import type { NewsCategory } from './types';
import { BrainIcon, RobotIcon, ChipIcon, CodeIcon, BriefcaseIcon, LayersIcon } from './components/icons';

export const NEWS_DATA: NewsCategory[] = [
  {
    id: 'ai-models',
    title: 'AI Models & Platforms',
    icon: BrainIcon,
    items: [
      { id: 'sora2', title: 'OpenAI Sora 2', description: 'A significant leap in video generation technology, creating highly realistic and imaginative scenes from text instructions.' },
      { id: 'atlas', title: 'OpenAI ChatGPT Atlas', description: 'A new iteration of ChatGPT focused on providing more contextual and personalized conversational experiences.' },
      { id: 'gemini', title: 'Gemini 2.5 Flash', description: 'Designed to help students learn complex subjects step-by-step with tailored explanations and guidance.' },
      { id: 'claude', title: 'Claude Haiku 4.5', description: 'The latest model from Anthropic, offering a balance of high performance, speed, and cost-effectiveness for various tasks.' },
      { id: 'chatgpt-search', title: 'ChatGPT Becomes a Search Engine', description: 'Integrating real-time web search capabilities, allowing it to provide up-to-date answers with cited sources.' },
      { id: 'grokipedia', title: 'Grokipedia.com', description: 'A new encyclopedia built by xAI, Elon Musk’s AI company, aiming to provide unfiltered and comprehensive information.' },
      { id: 'mico', title: 'Microsoft Copilot "Mico"', description: 'Microsoft announced 12 major updates to Copilot, including a new AI character called “Mico” and enhanced features across Windows, Edge, and Office.' }
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics & Physical AI',
    icon: RobotIcon,
    items: [
      { id: 'neo', title: '1X Technologies NEO', description: 'Pre-orders opened for this humanoid robot designed for domestic tasks like dishwashing, watering plants, and carrying groceries.' },
      { id: 'figure03', title: 'Figure AI Figure 03', description: 'An advanced humanoid robot capable of folding laundry, pouring drinks, and navigating cluttered spaces with human-like dexterity.' },
      { id: 'optimus', title: 'Tesla Optimus', description: 'Tesla continues development on its humanoid robot, focusing on achieving human-like dexterity for manufacturing and general-purpose tasks.' },
      { id: 'newton', title: 'Newton Physics Engine', description: 'A collaboration between Disney, Nvidia, and Google DeepMind to create a GPU-accelerated physics engine for training robots in complex simulations.' },
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware & Quantum Computing',
    icon: ChipIcon,
    items: [
      { id: 'willow', title: 'Google Willow Quantum Chip', description: 'Ran a "Quantum Echoes" algorithm in ~2 hours, a task that would take the world’s fastest supercomputer 3.2 years.' },
      { id: 'ibm-quantum', title: 'IBM Quantum on AMD Chips', description: 'Announced the ability to run quantum error-correction algorithms on regular AMD chips, a major step for practical quantum computing.' },
      { id: 'nvqlink', title: 'Nvidia NVQLink', description: 'A new system that bridges the gap by connecting quantum processors directly to their powerful AI chips for hybrid computing.' },
      { id: 'samsung-hbm4', title: 'Samsung & Nvidia HBM4', description: 'Samsung is in "close discussion" to supply Nvidia with HBM4, the next generation of high-bandwidth memory crucial for AI accelerators.' },
      { id: 'apple-m5', title: 'Apple Launches M5 Chip', description: 'The next generation of Apple Silicon, promising significant performance and efficiency gains for Mac and iPad lineups.' },
      { id: 'nvidia-5t', title: 'Nvidia Hits $5T Market Value', description: 'Became the first semiconductor company to reach a $5 trillion market valuation, driven by immense demand for its AI chips.' },
      { id: 'amd-openai', title: 'OpenAI & AMD Partnership', description: 'OpenAI inked a multi-year deal with AMD to use their hardware, diversifying its supply of powerful AI chips.' },
    ],
  },
  {
    id: 'software',
    title: 'Software & Developer Tools',
    icon: CodeIcon,
    items: [
      { id: 'ts-1', title: 'TypeScript #1 on GitHub', description: 'Surpassed other languages to become the most used language on GitHub, reflecting its popularity in modern web development.' },
      { id: 'python', title: 'Python 3.14 Released', description: 'Still dominating AI and data science, Python grew 48% YoY. Version 3.14 was officially released on October 7th.' },
      { id: 'rust', title: 'Rust is the Developer Darling', description: 'Boasts a 72% approval rating for its memory safety and performance, despite having a smaller market share.' },
      { id: 'linux-kernel', title: 'Linux Kernel 6.17', description: 'The latest kernel version dropped on September 28th, bringing new hardware support and performance improvements.' },
      { id: 'comet-browser', title: 'Perplexity Comet Browser', description: 'Launched for free on Oct 2nd, this AI-powered browser can research, organize tabs, draft emails, and even shop for you.' },
    ],
  },
  {
    id: 'industry',
    title: 'Industry & Business',
    icon: BriefcaseIcon,
    items: [
      { id: '6g', title: 'Building AI-Powered 6G', description: 'NVIDIA and Nokia formed a strategic partnership to develop AI-native 6G networks, looking beyond the current 5G standard.' },
      { id: 'meta-invest', title: 'Meta\'s $27B AI Investment', description: 'Meta is investing $27 billion in AI, with their AI-powered ad tools now generating over $60 billion annually.' },
      { id: 'adobe-max', title: 'Adobe MAX 2025', description: 'Showcased new AI tools for creating voiceovers, generating custom soundtracks, and editing projects via text descriptions.' },
    ]
  },
  {
    id: 'ai-frameworks',
    title: 'AI Frameworks & SDKs',
    icon: LayersIcon,
    items: [
      { id: 'openai-sdk', title: 'OpenAI SDK', description: 'Latest updates on the official SDK for accessing OpenAI models like GPT-4.' },
      { id: 'mcp', title: 'Microsoft Copilot (MCP)', description: 'News regarding the platform, integrations, and development tools for Microsoft Copilot.' },
      { id: 'autogen', title: 'AutoGen', description: 'Updates on Microsoft\'s framework for building applications with multiple collaborating AI agents.' },
      { id: 'langgraph', title: 'LangGraph', description: 'The latest developments for this library that extends LangChain for building stateful, multi-agent applications.' },
      { id: 'crewai', title: 'CrewAI', description: 'Recent news and features for this framework focused on orchestrating autonomous AI agents.' },
    ]
  }
];