import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="section-heading mb-6">Contact</h1>
            <p className="section-subheading mx-auto mb-12">
              Une question sur notre projet ? N'hésitez pas à nous contacter.
            </p>
            
            <div className="bg-muted rounded-lg p-8">
              <div className="flex items-center justify-center gap-3 text-primary">
                <Mail className="w-6 h-6" />
                <span className="font-medium">contact@asescotes.fr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;