import Layout from "@/components/Layout";

const Donnees = () => {
  return (
    <Layout>
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-heading mb-6">Chiffres clés</h1>
            <p className="section-subheading mx-auto">
              Les chiffres clés sur les chiens d'assistance judiciaire en France.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="bg-muted rounded-lg p-8 text-center">
              <span className="block text-4xl font-bold text-primary mb-2">37</span>
              <span className="text-muted-foreground">Chiens en activité</span>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <span className="block text-4xl font-bold text-primary mb-2">+1 000</span>
              <span className="text-muted-foreground">Victimes accompagnées</span>
            </div>
            <div className="bg-muted rounded-lg p-8 text-center">
              <span className="block text-4xl font-bold text-primary mb-2">2019</span>
              <span className="text-muted-foreground">Première intervention</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Donnees;
