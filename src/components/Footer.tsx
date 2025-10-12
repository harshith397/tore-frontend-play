import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "About",
      links: ["Contact Us", "About Us", "Careers", "Press", "Corporate Information"],
    },
    {
      title: "Help",
      links: ["Payments", "Shipping", "Cancellation & Returns", "FAQ", "Report Infringement"],
    },
    {
      title: "Policy",
      links: ["Return Policy", "Terms Of Use", "Security", "Privacy", "EPR Compliance"],
    },
    {
      title: "Social",
      links: ["Facebook", "Twitter", "Instagram", "YouTube"],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase mb-4 opacity-80">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:underline opacity-70 hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-70">© 2025 ApnaStore. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
