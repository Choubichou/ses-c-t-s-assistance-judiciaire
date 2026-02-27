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

            <div className="flex flex-col gap-8">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4">Qui sommes-nous ?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous sommes un groupe de quatre étudiantes en journalisme, animées par l'envie 
                  de raconter des histoires qui comptent. Curieuses, engagées et passionnées par 
                  le terrain, nous avons choisi de mettre nos compétences au service d'un sujet 
                  encore peu médiatisé : les chiens d'assistance judiciaire.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4">À Ses Côtés, c'est quoi ?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  « À Ses Côtés » est un projet journalistique qui met en lumière le rôle essentiel 
                  des chiens d'assistance judiciaire en France. Ces compagnons à quatre pattes 
                  apportent un soutien silencieux mais crucial aux victimes lors de leurs démarches 
                  judiciaires les plus difficiles. À travers des articles, des témoignages et des 
                  données, nous explorons comment ces chiens transforment l'accompagnement des 
                  victimes dans le système judiciaire français.
                </p>
              </div>

              <div className="bg-muted rounded-lg p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4">Remerciements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous tenons à remercier chaleureusement toutes les personnes qui ont contribué 
                  à ce projet : les professionnels du monde judiciaire qui nous ont ouvert leurs 
                  portes, les associations de chiens d'assistance pour leur disponibilité et leur 
                  confiance, ainsi que nos enseignants pour leur accompagnement tout au long de 
                  cette aventure. Un merci tout particulier aux victimes qui ont accepté de 
                  partager leur témoignage avec courage et générosité.
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