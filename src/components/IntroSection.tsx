const IntroSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Un soutien silencieux, une présence essentielle
          </h2>
          <p className="section-subheading mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            En France, des chiens d'assistance judiciaire accompagnent les victimes lors de leurs démarches les plus difficiles. 
            Présents dans les tribunaux, les commissariats et les associations d'aide aux victimes, 
            ces chiens apportent un réconfort unique à ceux qui en ont le plus besoin.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-secondary-foreground">42</span>
              </div>
              <span className="text-muted-foreground">Chiens en activité</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-primary-foreground">+</span>
              </div>
              <span className="text-muted-foreground">De 10 000 victimes accompagnées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;