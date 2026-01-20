export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectArchitecture = {
  label: string;
  description: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: ProjectArchitecture[];
  techStack: string[];
  improvements: string[];
  links: ProjectLink[];
  repo?: string;
};

export const projects: ProjectCaseStudy[] = [
  {
    slug: "memor",
    title: "Memor — Modern Flashcards",
    summary:
      "Cross-platform React Native flashcards app with spaced repetition, offline mode, and cloud sync for 1,000+ potential learners.",
    stack: ["React Native", "TypeScript", "Offline Sync", "Mobile"],
    highlights: [
      "Spaced repetition algorithm with CSV import.",
      "Offline-first storage with cloud synchronization.",
      "Built for 1,000+ potential users."
    ],
    overview:
      "Memor is a cross-platform flashcards application focused on retention through spaced repetition. The product balances offline reliability with seamless cloud synchronization.",
    problem:
      "Learners needed a fast, reliable flashcards tool that works offline without losing progress across devices.",
    solution:
      "Designed a React Native app with a spaced repetition engine, CSV import pipeline, and a sync layer that reconciles local progress with cloud state.",
    architecture: [
      {
        label: "Client",
        description: "React Native app with local persistence and spaced repetition logic."
      },
      {
        label: "Sync Layer",
        description: "Conflict-safe syncing to keep progress consistent across devices."
      },
      {
        label: "Cloud",
        description: "Cloud storage powering account-based access and backups."
      }
    ],
    techStack: ["React Native", "TypeScript", "Cloud Sync", "Offline Storage"],
    improvements: [
      "Add adaptive difficulty tuning based on recall accuracy.",
      "Introduce collaborative decks with shared analytics."
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Relectrik/memor"
      }
    ],
    repo: "Relectrik/memor"
  },
  {
    slug: "shia-dpo-lora",
    title: "Shia LaBeouf DPO LoRA",
    summary:
      "Direct Preference Optimization pipeline with LoRA adapters, emotion classification, and iterative preference learning for narrative alignment.",
    stack: ["PyTorch", "LoRA", "DPO", "NLP"],
    highlights: [
      "Preference pair construction + emotion classification.",
      "Adapters trained on GPT-2 and Qwen-2.5-Instruct.",
      "Improved narrative coherence and output diversity."
    ],
    overview:
      "An interactive narrative system that aligns text generation with user sentiment using DPO and LoRA adapters.",
    problem:
      "Baseline language models struggled to stay aligned with evolving user sentiment in a narrative experience.",
    solution:
      "Built a DPO training pipeline with emotion classification, preference pair construction, and adapter fine-tuning to iteratively align outputs.",
    architecture: [
      {
        label: "Data",
        description: "Emotion classifier + preference pair generator."
      },
      {
        label: "Training",
        description: "DPO pipeline with LoRA adapters for efficient fine-tuning."
      },
      {
        label: "Inference",
        description: "Interactive narrative engine with aligned outputs."
      }
    ],
    techStack: ["PyTorch", "HuggingFace", "LoRA", "DPO", "GPT-2", "Qwen-2.5"],
    improvements: [
      "Add automated safety filtering for multi-turn sessions.",
      "Scale preference collection with active learning."
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Relectrik/Shia-Leboufs-NLP-Journey"
      }
    ],
    repo: "Relectrik/Shia-Leboufs-NLP-Journey"
  },
  {
    slug: "dubois-portraits",
    title: "Du Bois Data Portraits",
    summary:
      "Recreated W.E.B. Du Bois spiral data portraits using custom radial geometry in R and ggplot2.",
    stack: ["R", "ggplot2", "Data Viz", "Geometry"],
    highlights: [
      "Custom radial geometry + spiral ribbon construction.",
      "Tidyverse preprocessing for year-over-year values.",
      "Manual color scales to preserve visual integrity."
    ],
    overview:
      "A faithful recreation and extension of the Du Bois data portraits using programmatic geometry and meticulous visual encoding.",
    problem:
      "Historical portraits needed a modern, programmatic pipeline that preserved their original aesthetic and structure.",
    solution:
      "Implemented spiral geometry computations with tidyverse preprocessing and ggplot2 rendering to match the visual language of the originals.",
    architecture: [
      {
        label: "Preprocess",
        description: "Tidyverse pipelines for data shaping and scaling."
      },
      {
        label: "Geometry",
        description: "Custom spiral and polygon math for ribbon construction."
      },
      {
        label: "Render",
        description: "ggplot2 rendering with curated palettes."
      }
    ],
    techStack: ["R", "ggplot2", "tidyverse", "Custom Geometry"],
    improvements: [
      "Add interactive annotations for educational context.",
      "Publish an open-source visualization toolkit."
    ],
    links: [
      {
        label: "Source Inspiration",
        href: "https://github.com/ajstarks/dubois-data-portraits/tree/master/challenge"
      }
    ]
  },
  {
    slug: "passive-trading-bot",
    title: "Passive Trading Bot",
    summary:
      "Automated portfolio manager with Alpaca + AWS Lambda, delivering ~2% net growth since Oct 2025.",
    stack: ["Alpaca", "AWS Lambda", "Discord", "Python"],
    highlights: [
      "Automated inflows, allocation, and rebalancing.",
      "Discord notifications for trades and health checks.",
      "Achieved ~2% net growth since Oct 2025."
    ],
    overview:
      "A rules-based trading system that automates capital allocation and keeps the portfolio balanced over time.",
    problem:
      "Manual investing was inconsistent; automation was needed to maintain disciplined, periodic rebalancing.",
    solution:
      "Deployed a Lambda-driven system connected to Alpaca with automated notifications for execution and monitoring.",
    architecture: [
      {
        label: "Scheduler",
        description: "Timed Lambda triggers for periodic buys and rebalancing."
      },
      {
        label: "Execution",
        description: "Alpaca API orchestration for orders and portfolio reads."
      },
      {
        label: "Observability",
        description: "Discord alerts for trades, updates, and health checks."
      }
    ],
    techStack: ["Alpaca", "AWS Lambda", "Python", "Discord Webhooks"],
    improvements: [
      "Add risk-based position sizing with volatility controls.",
      "Integrate portfolio analytics dashboards."
    ],
    links: []
  }
];

