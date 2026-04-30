import { useState } from "react";
import { Tweet } from "@/data/tweets";
import { MessageCircle, Repeat2, Heart, BarChart2, Share, MoreHorizontal, BadgeCheck } from "lucide-react";

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

interface TweetCardProps {
  tweet: Tweet;
}

export default function TweetCard({ tweet }: TweetCardProps) {
  const [isLiked, setIsLiked] = useState(tweet.isLiked || false);
  const [isRetweeted, setIsRetweeted] = useState(tweet.isRetweeted || false);
  const [likes, setLikes] = useState(tweet.metrics.likes);
  const [retweets, setRetweets] = useState(tweet.metrics.retweets);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweets(prev => isRetweeted ? prev - 1 : prev + 1);
  };

  return (
    <article className="border-b border-white/10 px-4 py-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
      <div className="flex gap-3">
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 min-w-0">
              <span className="font-semibold text-[15px] text-white truncate">
                {tweet.author.name}
              </span>
              {tweet.author.verified && (
                <BadgeCheck className="w-[18px] h-[18px] text-cyan-400 flex-shrink-0" />
              )}
              <span className="text-[15px] text-zinc-500 truncate">
                {tweet.author.handle}
              </span>
              <span className="text-zinc-500">·</span>
              <span className="text-[15px] text-zinc-500 flex-shrink-0">
                {tweet.timestamp}
              </span>
            </div>
            <button className="p-2 -mr-2 rounded-full hover:bg-cyan-500/10 text-zinc-500 hover:text-cyan-400 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-0.5 text-[15px] text-white whitespace-pre-wrap leading-normal">
            {tweet.content}
          </div>

          {tweet.media?.type === 'image' && tweet.media.url && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={tweet.media.url}
                alt="Tweet media"
                className="w-full h-auto max-h-[300px] object-cover"
              />
            </div>
          )}

          <div className="flex items-center justify-between mt-3 max-w-md -ml-2">
            <button className="group flex items-center gap-1 text-zinc-500 hover:text-cyan-400 transition-colors">
              <span className="p-2 rounded-full group-hover:bg-cyan-500/10 transition-colors">
                <MessageCircle className="w-[18px] h-[18px]" />
              </span>
              <span className="text-[13px] group-hover:text-cyan-400">
                {formatNumber(tweet.metrics.comments)}
              </span>
            </button>

            <button 
              onClick={handleRetweet}
              className={`group flex items-center gap-1 transition-colors ${
                isRetweeted ? 'text-emerald-400' : 'text-zinc-500 hover:text-emerald-400'
              }`}
            >
              <span className={`p-2 rounded-full transition-colors ${
                isRetweeted ? 'bg-emerald-500/10' : 'group-hover:bg-emerald-500/10'
              }`}>
                <Repeat2 className="w-[18px] h-[18px]" />
              </span>
              <span className="text-[13px]">
                {formatNumber(retweets)}
              </span>
            </button>

            <button 
              onClick={handleLike}
              className={`group flex items-center gap-1 transition-colors ${
                isLiked ? 'text-rose-500' : 'text-zinc-500 hover:text-rose-500'
              }`}
            >
              <span className={`p-2 rounded-full transition-colors ${
                isLiked ? 'bg-rose-500/10' : 'group-hover:bg-rose-500/10'
              }`}>
                <Heart className={`w-[18px] h-[18px] ${isLiked ? 'fill-current' : ''}`} />
              </span>
              <span className="text-[13px]">
                {formatNumber(likes)}
              </span>
            </button>

            <button className="group flex items-center gap-1 text-zinc-500 hover:text-cyan-400 transition-colors">
              <span className="p-2 rounded-full group-hover:bg-cyan-500/10 transition-colors">
                <BarChart2 className="w-[18px] h-[18px]" />
              </span>
              <span className="text-[13px] group-hover:text-cyan-400">
                {formatNumber(tweet.metrics.views)}
              </span>
            </button>

            <button className="group p-2 rounded-full text-zinc-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">
              <Share className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
