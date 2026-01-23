import Layout from "@/components/Layout";

const Articles = () => {
  return (
    <Layout>
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-heading mb-6">Articles</h1>
            <p className="section-subheading mx-auto">
              Retrouvez ici tous nos articles sur les chiens d'assistance judiciaire.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-muted rounded-lg p-8 text-center">
              <p className="text-muted-foreground">Articles à venir...</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Articles;