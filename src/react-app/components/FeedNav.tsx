import { useState } from "react";
import { Home, Search, Bell, Mail, Bookmark, User, Settings } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Search, label: "Explore" },
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Messages" },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

export default function FeedNav() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className="flex flex-col gap-1 py-2">
      {/* Logo */}
      <div className="px-3 py-3 mb-2">
        <img
          src="/branding2.png"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      {navItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => setActiveItem(label)}
          className={`flex items-center gap-4 px-4 py-3 rounded-full transition-colors ${
            activeItem === label
              ? "font-bold text-white"
              : "text-zinc-400 hover:bg-white/5"
          }`}
        >
          <Icon className="w-6 h-6" />
          <span className="text-xl hidden xl:block">{label}</span>
        </button>
      ))}

      <button className="mt-4 mx-3 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400 transition-colors xl:px-8">
        <span className="hidden xl:block">Post</span>
        <span className="xl:hidden">+</span>
      </button>
    </nav>
  );
}
