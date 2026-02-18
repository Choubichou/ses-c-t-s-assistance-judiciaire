import { useState, useEffect, useRef } from "react";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";

const photos = [photo1, photo2, photo3];

const IntroSection = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro-section" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text - Left */}
          <div className="lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              A Ses Côtés est un projet qui vous invite à découvrir le rôle des chiens d'assistance judiciaire.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Ces chiens sont spécialement formés pour accompagner les victimes d'infractions pénales et leur apporter un soutien moral dans l'épreuve du témoignage face à la justice.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Depuis sa mise en place en 2019 en France, ce dispositif tend à se généraliser dans chaque département sur le territoire. Mais il reste encore trop méconnu du grand public, d'où la nécessité de le mettre en lumière.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary-foreground">37</span>
                </div>
                <span className="text-muted-foreground">Chiens en activité</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">+</span>
                </div>
                <span className="text-muted-foreground">De 1 000 victimes accompagnées</span>
              </div>
            </div>
          </div>

          {/* Photos - Right (sticky carousel) */}
          <div className="lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }} ref={sectionRef}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Chien d'assistance judiciaire ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentPhoto ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhoto(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentPhoto ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
