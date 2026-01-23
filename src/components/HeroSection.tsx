import { Play } from "lucide-react";
import logoBaseline from "@/assets/logo-baseline.png";

const HeroSection = () => {
  const handleWatchDocumentary = () => {
    window.open("https://www.youtube.com/watch?v=XhtFr-XmHSE", "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Logo with Baseline */}
          <img
            src={logoBaseline}
            alt="À SES CÔTÉS - Des chiens pour soutenir les victimes"
            className="w-full max-w-2xl mx-auto mb-12 drop-shadow-2xl"
          />

          {/* CTA Button */}
          <button
            onClick={handleWatchDocumentary}
            className="btn-hero-outline group"
          >
            <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
            Voir le documentaire
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;