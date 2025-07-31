import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 & 2: Contact Info */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Contact & Location</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>
                  <strong>Address:</strong><br />
                  169 Voortrekker Road, Glenlily, Parow, Cape Town, 7500
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:0714050762" className="hover:text-primary transition-colors">071 405 0762</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:faullsphy@icon.co.za" className="hover:text-primary transition-colors">faullsphy@icon.co.za (Placeholder)</a>
              </li>
            </ul>
          </div>

          {/* Column 3, 4, 5: Google Map */}
          <div className="md:col-span-3">
             <div className="rounded-lg overflow-hidden border shadow-sm">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.233041696015!2d18.60155737637889!3d-33.90940312154695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b02163b36ed%3A0x67a9967119e86055!2sFaull&#39;s%20Pharmacy!5e0!3m2!1sen!2sza!4v1700049445100!5m2!1sen!2sza"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Faull's Pharmacy Location"
                ></iframe>
             </div>
          </div>
        </div>
      </div>
      
      {/* Demo Notice */}
      <div className="bg-muted/40">
        <div className="container py-4 text-center">
            <p className="text-xs text-muted-foreground">
            *This is a demo site created by Coderon (Pty) Ltd for proposal purposes. This is not the official Faull’s Pharmacy website.*
            </p>
        </div>
      </div>
    </footer>
  );
}