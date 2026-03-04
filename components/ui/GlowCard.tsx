interface GlowCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({
  title,
  children,
  className = "",
}: GlowCardProps) {
  return (
    <div className="relative group">
      {/* Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-fuchsia-500 to-cyan-400 blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>

      {/* Card */}
      <div
        className={`relative bg-secondary border border-accent p-8 rounded-2xl ${className}`}
      >
        {title && (
          <h3 className="text-subtitulo font-titulos text-primary mb-6 drop-shadow-[2px_4px_3px_#068fff] text-center">
            {title}
          </h3>
        )}

        {children}
      </div>
    </div>
  );
}