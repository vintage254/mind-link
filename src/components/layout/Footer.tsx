import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  MessageCircle, // for TikTok (no official icon in lucide, this works great)
} from 'lucide-react';

const footerNavigation = {
  about: [
    { name: 'Our Story', href: '/about#our-story' },
    { name: 'Team', href: '/about#team' },
    { name: 'Impact', href: '/about#impact' },
    { name: 'Annual Reports', href: '/about#annual-reports' },
  ],
  services: [
    { name: 'Workshops', href: '/services#workshops' },
    { name: 'Online Programs', href: '/services#online-programs' },
    { name: 'Peer Support', href: '/services#peer-support' },
    { name: 'Campaigns', href: '/services#campaigns' },
  ],
  resources: [
    { name: 'Crisis Support', href: '/resources#crisis-support' },
    { name: 'Articles', href: '/resources#articles' },
    { name: 'Videos', href: '/resources#videos' },
    { name: 'Professional Help', href: '/resources#professional-help' },
  ],
  getInvolved: [
    { name: 'Volunteer', href: '/get-involved#volunteer' },
    { name: 'Youth Ambassadors', href: '/get-involved#ambassadors' },
    { name: 'Donate', href: '/get-involved#donate' },
    { name: 'Partnerships', href: '/get-involved#partnerships' },
  ],
};

// Updated with your real accounts
const socialMedia = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mindlink11',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@mind.link__',
    icon: MessageCircle, // Best looking substitute in lucide-react for TikTok
  },
  // You can add Facebook, YouTube, Twitter later when you have them
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">MindLink</span>
            </Link>
            <p className="mt-4 text-sm">
              Empowering Montreal youth with mental health support and resources.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-5">
              {socialMedia.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation columns */}
          <div>
            <h3 className="text-sm font-semibold text-white">About Us</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get Involved</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.getInvolved.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact + Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:info@mindlink.org" className="hover:text-primary">
                info@mindlink.org
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+15141234567" className="hover:text-primary">
                (514) 123-4567
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Montreal, Quebec</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} MindLink. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <Link href="/faq" className="hover:text-primary">FAQ</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}