import Layout from "@/components/Layout";

const APropos = () => {
  return (
    <Layout>
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-heading mb-6 text-center">À propos</h1>
            <p className="section-subheading mx-auto text-center mb-12">
              Découvrez l'équipe derrière ce projet journalistique.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4">Le projet</h3>
                <p className="text-muted-foreground leading-relaxed">
                  « À SES CÔTÉS » est un projet journalistique qui met en lumière le rôle essentiel 
                  des chiens d'assistance judiciaire en France. Ces compagnons à quatre pattes 
                  apportent un soutien silencieux mais crucial aux victimes lors de leurs démarches 
                  judiciaires les plus difficiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default APropos;