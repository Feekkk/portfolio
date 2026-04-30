import { profile } from "@/data/tweets";
import { MapPin, Link as LinkIcon, Calendar, BadgeCheck } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50">
      {/* Banner */}
      <div className="h-24 relative">
        <img
          src={profile.banner}
          alt="Profile banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-8 left-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-16 h-16 rounded-full border-4 border-black object-cover"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-10 px-4 pb-4">
        <div className="flex items-center gap-1">
          <h2 className="font-bold text-lg text-white">{profile.name}</h2>
          <BadgeCheck className="w-5 h-5 text-cyan-400" />
        </div>
        <p className="text-zinc-500 text-sm">{profile.handle}</p>

        <p className="mt-3 text-[15px] text-white leading-normal">{profile.bio}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-zinc-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {profile.location}
          </span>
          <a href={`https://${profile.website}`} className="flex items-center gap-1 text-cyan-400 hover:underline">
            <LinkIcon className="w-4 h-4" />
            {profile.website}
          </a>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Joined {profile.joinDate}
          </span>
        </div>

        <div className="flex gap-4 mt-3 text-sm">
          <span>
            <span className="font-semibold text-white">{profile.following.toLocaleString()}</span>
            <span className="text-zinc-500 ml-1">Following</span>
          </span>
          <span>
            <span className="font-semibold text-white">{profile.followers.toLocaleString()}</span>
            <span className="text-zinc-500 ml-1">Followers</span>
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
