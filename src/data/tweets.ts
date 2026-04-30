export interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  timestamp: string;
  media?: {
    type: 'image' | 'code';
    url?: string;
    code?: string;
    language?: string;
  };
  metrics: {
    comments: number;
    retweets: number;
    likes: number;
    views: number;
  };
  isLiked?: boolean;
  isRetweeted?: boolean;
}

export interface Profile {
  name: string;
  handle: string;
  avatar: string;
  banner: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  following: number;
  followers: number;
  skills: string[];
}

export const profile: Profile = {
  name: "Alex Chen",
  handle: "@alexchendev",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop",
  bio: "Full-stack developer passionate about building beautiful, performant web apps. Currently exploring AI/ML. Open source contributor. Coffee enthusiast ☕",
  location: "San Francisco, CA",
  website: "alexchen.dev",
  joinDate: "March 2019",
  following: 892,
  followers: 12400,
  skills: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS"]
};

export const tweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Alex Chen",
      handle: "@alexchendev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      verified: true
    },
    content: "Just shipped v2.0 of my open source project TaskFlow! 🚀\n\nNew features:\n• Real-time collaboration\n• AI-powered task suggestions\n• Dark mode (finally!)\n• 50% faster load times\n\nCheck it out and let me know what you think!",
    timestamp: "2h",
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop'
    },
    metrics: {
      comments: 47,
      retweets: 234,
      likes: 1289,
      views: 45600
    },
    isLiked: true
  },
  {
    id: "2",
    author: {
      name: "Alex Chen",
      handle: "@alexchendev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      verified: true
    },
    content: "Hot take: TypeScript isn't just \"JavaScript with types\"\n\nIt fundamentally changes how you think about code architecture.\n\nOnce you start leveraging discriminated unions, mapped types, and conditional types, you realize it's a completely different paradigm.",
    timestamp: "5h",
    metrics: {
      comments: 156,
      retweets: 423,
      likes: 2847,
      views: 89200
    }
  },
  {
    id: "3",
    author: {
      name: "Sarah Miller",
      handle: "@sarahcodes",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      verified: true
    },
    content: "Just had an amazing code review session with @alexchendev. The way they break down complex problems into simple, elegant solutions is inspiring.\n\nIf you're not following them already, you're missing out!",
    timestamp: "8h",
    metrics: {
      comments: 23,
      retweets: 89,
      likes: 567,
      views: 12300
    }
  },
  {
    id: "4",
    author: {
      name: "Alex Chen",
      handle: "@alexchendev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      verified: true
    },
    content: "My tech stack for 2024:\n\n🎨 Frontend: React + TypeScript + Tailwind\n⚡ Backend: Node.js + Hono + Drizzle\n🗄️ Database: PostgreSQL + Redis\n☁️ Infra: Cloudflare + Vercel\n🤖 AI: OpenAI + LangChain\n\nWhat's your stack looking like?",
    timestamp: "12h",
    metrics: {
      comments: 234,
      retweets: 567,
      likes: 3421,
      views: 123400
    },
    isRetweeted: true
  },
  {
    id: "5",
    author: {
      name: "Tech Insider",
      handle: "@techinsider",
      avatar: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop",
      verified: true
    },
    content: "🔥 Developer to watch: @alexchendev\n\nTheir open source contributions have helped over 50,000 developers this year alone.\n\nFrom TaskFlow to their React component library, they're building tools that actually make a difference.",
    timestamp: "1d",
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop'
    },
    metrics: {
      comments: 89,
      retweets: 1234,
      likes: 8765,
      views: 234500
    }
  },
  {
    id: "6",
    author: {
      name: "Alex Chen",
      handle: "@alexchendev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      verified: true
    },
    content: "5 years ago I was a bootcamp grad struggling to land my first job.\n\nToday I'm a senior engineer at a company I love, with side projects that reach thousands of users.\n\nThe secret? Consistency. Ship something every week. Learn in public. Help others.\n\nYou've got this 💪",
    timestamp: "2d",
    metrics: {
      comments: 445,
      retweets: 2341,
      likes: 15678,
      views: 456700
    }
  },
  {
    id: "7",
    author: {
      name: "DevConf 2024",
      handle: "@devconf",
      avatar: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop",
      verified: true
    },
    content: "🎤 Speaker announcement!\n\n@alexchendev will be presenting \"Building AI-Powered Developer Tools\" at DevConf 2024.\n\nDon't miss this deep dive into practical AI integration patterns.\n\n🗓️ March 15-17\n📍 San Francisco",
    timestamp: "3d",
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=450&fit=crop'
    },
    metrics: {
      comments: 67,
      retweets: 345,
      likes: 1890,
      views: 78900
    }
  },
  {
    id: "8",
    author: {
      name: "Alex Chen",
      handle: "@alexchendev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      verified: true
    },
    content: "Excited to share my latest project: an AI-powered code review assistant.\n\nIt catches bugs before they hit production, suggests performance improvements, and even explains why certain patterns are problematic.\n\nBuilt with GPT-4 + custom fine-tuning. Link in bio!",
    timestamp: "4d",
    metrics: {
      comments: 178,
      retweets: 678,
      likes: 4532,
      views: 167800
    }
  }
];

export const trendingTopics = [
  { topic: "#ReactConf2024", tweets: "24.5K" },
  { topic: "TypeScript 5.4", tweets: "18.2K" },
  { topic: "#100DaysOfCode", tweets: "156K" },
  { topic: "Cloudflare Workers", tweets: "8.9K" },
  { topic: "#OpenSource", tweets: "45.3K" }
];

export const whoToFollow = [
  {
    name: "Dan Abramov",
    handle: "@dan_abramov",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Cassidy Williams",
    handle: "@cassidoo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Kent C. Dodds",
    handle: "@kentcdodds",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  }
];
