import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { trackSocialMediaClick } from '../utils/tracking';

interface FloatingSocialBarProps {
  className?: string;
}

const FloatingSocialBar = ({ className = "" }: FloatingSocialBarProps) => {
  const handleSocialClick = (platform: string) => {
    trackSocialMediaClick(platform);
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Instagram */}
      <a
        href="https://bit.ly/Instagram-Lore-Fries"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleSocialClick('instagram')}
        className="group"
        aria-label="Sígueme en Instagram"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white shadow-md border border-neutral-200 transition-all duration-300 transform
          hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 
          group-hover:scale-110 group-hover:shadow-lg group-hover:border-transparent">
          <Instagram className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" />
        </div>
      </a>

      {/* TikTok */}
      <a
        href="https://bit.ly/TikTok-Lore-Fries"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleSocialClick('tiktok')}
        className="group"
        aria-label="Sígueme en TikTok"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white shadow-md border border-neutral-200 transition-all duration-300 transform
          hover:bg-black group-hover:scale-110 group-hover:shadow-lg group-hover:border-transparent">
          <svg 
            viewBox="0 0 24 24" 
            className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300"
            fill="currentColor"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z"/>
          </svg>
        </div>
      </a>

      {/* Twitter */}
      <a
        href="https://bit.ly/X-Lore-Fries"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleSocialClick('twitter')}
        className="group"
        aria-label="Sígueme en Twitter"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white shadow-md border border-neutral-200 transition-all duration-300 transform
          hover:bg-blue-500 group-hover:scale-110 group-hover:shadow-lg group-hover:border-transparent">
          <Twitter className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" />
        </div>
      </a>

      {/* Facebook */}
      <a
        href="https://bit.ly/Facebook-Lore-Fries"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleSocialClick('facebook')}
        className="group"
        aria-label="Sígueme en Facebook"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white shadow-md border border-neutral-200 transition-all duration-300 transform
          hover:bg-blue-600 group-hover:scale-110 group-hover:shadow-lg group-hover:border-transparent">
          <Facebook className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" />
        </div>
      </a>

      {/* YouTube */}
      <a
        href="https://bit.ly/YouTube-Lore-Fries"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleSocialClick('youtube')}
        className="group"
        aria-label="Sígueme en YouTube"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white shadow-md border border-neutral-200 transition-all duration-300 transform
          hover:bg-red-600 group-hover:scale-110 group-hover:shadow-lg group-hover:border-transparent">
          <Youtube className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" />
        </div>
      </a>
    </div>
  );
};

export default FloatingSocialBar;