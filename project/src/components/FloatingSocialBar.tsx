import { type FC } from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';
import { trackSocialMediaClick } from '../utils/tracking';

interface SocialLink {
  href: string;
  icon: FC<{ className?: string }>;
  name: string;
  color: string;
  id: string;
}

interface FloatingSocialBarProps {
  className?: string;
  variant?: 'default' | 'minimal';
}

export function FloatingSocialBar({ className = "", variant = 'default' }: FloatingSocialBarProps) {
  const socialLinks: SocialLink[] = [
    {
      href: "https://bit.ly/Instagram-Lore-Fries",
      icon: Instagram,
      name: "Instagram",
      color: "hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
      id: "instagram"
    },
    {
      href: "https://bit.ly/TikTok-Lore-Fries",
      icon: TikTokIcon,
      name: "TikTok",
      color: "hover:bg-black",
      id: "tiktok"
    },
    {
      href: "https://bit.ly/X-Lore-Fries",
      icon: Twitter,
      name: "Twitter",
      color: "hover:bg-blue-500",
      id: "twitter"
    },
    {
      href: "https://bit.ly/Facebook-Lore-Fries",
      icon: Facebook,
      name: "Facebook",
      color: "hover:bg-blue-600",
      id: "facebook"
    },
    {
      href: "https://bit.ly/YouTube-Lore-Fries",
      icon: Youtube,
      name: "YouTube",
      color: "hover:bg-red-600",
      id: "youtube"
    }
  ];

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackSocialMediaClick(social.id)}
          className="group"
          aria-label={`Sígueme en ${social.name}`}
        >
          <div className={`w-10 h-10 flex items-center justify-center rounded-full 
            bg-white shadow-md border border-neutral-200 transition-all duration-300 transform
            ${social.color} group-hover:scale-110 group-hover:shadow-lg group-hover:border-transparent`}>
            <social.icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" />
          </div>
        </a>
      ))}
    </div>
  );
}

export default FloatingSocialBar;
