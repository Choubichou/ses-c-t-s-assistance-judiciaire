import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="À SES CÔTÉS" className="h-10 w-auto brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              Un projet journalistique sur les chiens d'assistance judiciaire en France.
            </p>
          </div>

          {/* Navigation - centered */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/70 hover:text-background transition-colors text-sm">Accueil</Link></li>
              <li><Link to="/articles" className="text-background/70 hover:text-background transition-colors text-sm">Articles</Link></li>
              <li><Link to="/donnees" className="text-background/70 hover:text-background transition-colors text-sm">Chiffres clés</Link></li>
              <li><Link to="/a-propos" className="text-background/70 hover:text-background transition-colors text-sm">À propos</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-background/70 text-sm mb-4">
              Pour toute question concernant ce projet, n'hésitez pas à nous contacter via nos réseaux.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/a.ses.cotes?igsh=MTJzOWRlaHozYTNidw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587283439128"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} À SES CÔTÉS. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
