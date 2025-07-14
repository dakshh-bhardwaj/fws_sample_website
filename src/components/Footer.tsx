import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Frontier's welfare society</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through education, healthcare, and sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-300 hover:text-white underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-white transition-all">Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-white transition-all">Get Involved</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-white transition-all">Blog</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-white transition-all">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a href="mailto:info@frontierswelfaresociety.org" className="hover:text-white underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-white transition-all">
                  info@frontierswelfaresociety.org
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>123 Hope Street, Mumbai, Maharashtra 400001</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Stay updated with our latest news and impact stories.
            </p>
            <form className="space-y-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Frontier's welfare society. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
