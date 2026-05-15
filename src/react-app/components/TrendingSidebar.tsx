import { trendingTopics, whoToFollow } from "@/data/tweets";
import { MoreHorizontal } from "lucide-react";

export default function TrendingSidebar() {
  return (
    <div className="space-y-4">
      {/* Trending */}
      <div className="border border-white/10 rounded-2xl bg-zinc-900/50 overflow-hidden">
        <h2 className="px-4 py-3 text-xl font-bold text-white">Trending in Tech</h2>
        {trendingTopics.map((item, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-white/[0.03] cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white text-[15px]">{item.topic}</p>
                <p className="text-sm text-zinc-500">{item.tweets} posts</p>
              </div>
              <button className="p-2 -mr-2 rounded-full hover:bg-cyan-500/10 text-zinc-500 hover:text-cyan-400 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        <div className="px-4 py-3 text-cyan-400 hover:bg-white/[0.03] cursor-pointer transition-colors text-[15px]">
          Show more
        </div>
      </div>

      {/* Who to follow */}
      <div className="border border-white/10 rounded-2xl bg-zinc-900/50 overflow-hidden">
        <h2 className="px-4 py-3 text-xl font-bold text-white">Who to follow</h2>
        {whoToFollow.map((person, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-white/[0.03] cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-white text-[15px] truncate">{person.name}</p>
                  <p className="text-sm text-zinc-500 truncate">{person.handle}</p>
                </div>
              </div>
              <button className="px-4 py-1.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-colors flex-shrink-0">
                Follow
              </button>
            </div>
          </div>
        ))}
        <div className="px-4 py-3 text-cyan-400 hover:bg-white/[0.03] cursor-pointer transition-colors text-[15px]">
          Show more
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 text-xs text-zinc-600">
        <p>This is a portfolio demo. Not affiliated with any social media.</p>
        {/* <p className="mt-1">Built with React + TypeScript + Tailwind</p> */}
      </div>
    </div>
  );
}
