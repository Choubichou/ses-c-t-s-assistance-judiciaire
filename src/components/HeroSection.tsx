import { Play, ChevronDown } from "lucide-react";
import logoBaseline from "@/assets/logo-baseline.png";

const HeroSection = () => {
  const handleWatchDocumentary = () => {
    window.open("https://www.youtube.com/watch?v=XhtFr-XmHSE", "_blank");
  };

  const handleScrollDown = () => {
    const introSection = document.getElementById("intro-section");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={logoBaseline}
            alt="À SES CÔTÉS - Des chiens pour soutenir les victimes"
            className="w-full max-w-2xl mx-auto mb-12 drop-shadow-2xl"
          />

          <button
            onClick={handleWatchDocumentary}
            className="btn-hero-outline group mb-8"
          >
            <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
            Voir le documentaire
          </button>

          <div className="mt-4">
            <button
              onClick={handleScrollDown}
              className="text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2 mx-auto"
            >
              <span className="text-sm font-medium tracking-wide">Découvrir</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
