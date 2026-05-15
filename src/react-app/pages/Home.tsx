import { useState } from "react";
import { tweets, profile } from "@/data/tweets";
import TweetCard from "@/react-app/components/TweetCard";
import ProfileSidebar from "@/react-app/components/ProfileSidebar";
import TrendingSidebar from "@/react-app/components/TrendingSidebar";
import FeedNav from "@/react-app/components/FeedNav";
import { Sparkles, Image, Smile, Calendar, MapPin } from "lucide-react";

type Tab = "for-you" | "following";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>("for-you");
  const [tweetText, setTweetText] = useState("");

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row px-4 sm:px-6">
        {/* Left Sidebar - Navigation */}
        <aside className="hidden lg:block w-[72px] xl:w-[275px] flex-shrink-0 sticky top-0 h-screen border-r border-white/10">
          <FeedNav />
        </aside>

        {/* Main Feed */}
        <main className="flex-1 w-full min-w-0 lg:max-w-[700px] border-r border-white/10">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center justify-between px-4 py-3">
              <h1 className="text-xl font-bold">Home</h1>
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
            
            {/* Tabs */}
            <div className="flex">
              <button
                onClick={() => setActiveTab("for-you")}
                className={`flex-1 py-4 text-[15px] font-medium transition-colors relative ${
                  activeTab === "for-you" ? "text-white" : "text-zinc-500 hover:bg-white/5"
                }`}
              >
                For you
                {activeTab === "for-you" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("following")}
                className={`flex-1 py-4 text-[15px] font-medium transition-colors relative ${
                  activeTab === "following" ? "text-white" : "text-zinc-500 hover:bg-white/5"
                }`}
              >
                Following
                {activeTab === "following" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full" />
                )}
              </button>
            </div>
          </header>

          {/* Compose Tweet */}
          <div className="px-4 py-3 border-b border-white/10">
            <div className="flex gap-3">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <textarea
                  placeholder="Fiq Personal Portfolio"
                  value={tweetText}
                  onChange={(e) => setTweetText(e.target.value)}
                  className="w-full bg-transparent text-xl placeholder-zinc-600 resize-none outline-none min-h-[56px]"
                />
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex gap-1 -ml-2">
                    <button className="p-2 rounded-full hover:bg-cyan-500/10 text-cyan-500 transition-colors">
                      <Image className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-cyan-500/10 text-cyan-500 transition-colors">
                      <Smile className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-cyan-500/10 text-cyan-500 transition-colors">
                      <Calendar className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-cyan-500/10 text-cyan-500 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </button>
                  </div>
                  <button 
                    disabled={!tweetText.trim()}
                    className="px-5 py-1.5 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            {tweets.map((tweet) => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[350px] flex-shrink-0 pl-6 pr-4 py-4 space-y-4 hidden lg:block sticky top-0 h-screen overflow-y-auto">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 px-12 bg-zinc-900 border border-white/10 rounded-full text-white placeholder-zinc-500 outline-none focus:border-cyan-500 transition-colors"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <ProfileSidebar />
          <TrendingSidebar />
        </aside>
      </div>
    </div>
  );
}
