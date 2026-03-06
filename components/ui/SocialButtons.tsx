"use client";

import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Erick28Hdz",
    icon: "/images/Iconos/redes-sociales/github.png",
    color: "from-slate-100 to-slate-300 border-slate-400/50",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/erick-hernandez-sapere-aude/",
    icon: "/images/Iconos/redes-sociales/linkedin1.png",
    color: "from-blue-600 to-blue-900 border-blue-500/50",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sapereaude.jsh/",
    icon: "/images/Iconos/redes-sociales/instagram1.png",
    color: "from-pink-500 to-purple-700 border-pink-400/50",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/573022016072",
    icon: "/images/Iconos/redes-sociales/whatsapp1.png",
    color: "from-green-500 to-green-700 border-green-400/50",
  },
  {
    name: "Gmail",
    url: "mailto:tuemail@gmail.com",
    icon: "/images/Iconos/redes-sociales/gmail.png",
    color: "from-gray-500 to-gray-700 border-gray-400/50"
  },
];

export default function SocialButtons() {
  return (
    <div className="flex justify-center">

      {/* clipPath */}
      <svg width={0} height={0} style={{ position: "absolute" }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />

        <div className="relative flex items-end gap-x-2 p-2">

          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              data-social={social.name}
              className={`w-11 h-11 flex items-center justify-center bg-linear-to-br ${social.color} rounded-xl shadow-lg hover:scale-110 hover:-translate-y-1 transition`}
              style={{ clipPath: "url(#squircleClip)" }}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={30}
                height={30}
              />
            </a>
          ))}

        </div>
      </div>
    </div>
  );
}