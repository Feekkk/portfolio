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
  name: "Wan Afiq",
  handle: "@wanafiq.d",
  avatar: "/profile.jpeg",
  banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop",
  bio: "Software Developer for University Kuala Lumpur Royal College of Medicine",
  location: "Ipoh, Perak",
  website: "https://github.com/Feekkk",
  joinDate: "March 2023",
  following: 1,
  followers: 256,
  skills: ["React", "TypeScript", "Node.js", "MySQL", "PLESK"]
};

export const tweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Wan Afiq",
      handle: "@wanafiq.d",
      avatar: "/profile.jpeg",
      verified: true
    },
    content: "Welcome to my Personal Portfolio 🪽 Im passionate about Software, AI, Networking and Cybersecurity \n\nFeels free to scroll down to see the milestone of my careers \n\np/s: This is just a fun project I created for myself, its not associated with any other applications \n\n",
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
      name: "Univeriti Teknologi MARA (UITM)",
      handle: "@Jasin_melaka",
      avatar: "https://www.isianpadu.com/v2/images/uitmg.png",
      verified: false
    },
    content: "Im a student from Bachelor of Computer Science (HONS) Netcentric Computing in UiTM Jasin, Melaka",
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
      name: "Albert Einstein",
      handle: "@albert.einstein",
      avatar: "https://cdn.mos.cms.futurecdn.net/W2xQZxs7T2gUE2fMbUv4s6.jpg",
      verified: false
    },
    content: "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”\n\n Quotes by a random folks with a big brain 🧠🤓",
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
      name: "Wan Afiq",
      handle: "@wanafiq.d",
      avatar: "/profile.jpeg",
      verified: true
    },
    content: "My tech stack for 2024:\n\n🎨 Frontend: React + TypeScript + Tailwind + Laravel\n⚡ Backend: Node.js + Express \n🗄️ Database: MySQL + Redis + Postgre\n☁️ Infra: Cloudflare + PLESK \n🤖 AI: OpenAI + Co-Pilot\n\nand excited to learning ASTRO framework",
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
      name: "Dean List",
      handle: "@uitm_jasin",
      avatar: "https://www.isianpadu.com/v2/images/uitmg.png",
      verified: true
    },
    content: "🔥 During my Degree era, I got to keep my streak into 3 times straight\n\nI guess the sleepless night and grinding is working but im too late LOL",
    timestamp: "1d",
    media: {
      type: 'image',
      url: '/dean.jpg'
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
      name: "Nexcheck Inventory System",
      handle: "@nexcheck",
      avatar: "/logo-nims.png",
      verified: true
    },
    content: "March 2026\n\nI just launch an Inventory System to be used by Information Technology Department 🚀\n\nCheck it out ! 🔗 https://nims.rcmp.edu.my",
    timestamp: "2d",
    media: {
      type: 'image',
      url: '/nims.png'
    },
    metrics: {
      comments: 445,
      retweets: 2341,
      likes: 15678,
      views: 456700
    }
  },
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
    name: "Royal College of Medicine",
    handle: "@unikl_rcmp",
    avatar: "https://rcmp.unikl.edu.my/wp-content/uploads/2021/11/Logo-UniKL-PCM.png"
  },
  {
    name: "Cloudflare",
    handle: "@cloudflare",
    avatar: "https://make-cxp-documentation.ams3.digitaloceanspaces.com/apps-center-icons/cloudflare.png"
  },
  {
    name: "React Dev",
    handle: "@react",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49sBsCfLlzkVBQ5NNlZSGUOMKMUr9HxkyMg&s"
  }
];
