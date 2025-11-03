import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-slate-100 border-t border-slate-200 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">RK Solar Green Mount</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Powering India with sustainable and affordable green energy solutions.
            </p>
            <div className="space-y-3 text-sm text-slate-500 font-medium">
              <p>Phone: +91 90002 72748, +91 93479 20454</p>
              <p>Email: rkgreenmountenergies@gmail.com</p>
              <p>Address: 5-6-51/23/1, High Tension Line Rd, Venkat Rao Nagar, Kukatpally, Hyderabad, Telangana 500072</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-800">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-600 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-slate-600 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-slate-800">Policies</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-600 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Warranty Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Refund Policy
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 pt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-primary/10"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919000272748"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-primary/10"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-primary/10"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:rkgreenmountenergies@gmail.com"
                className="text-slate-500 hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-primary/10"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 font-medium">
            © 2024 RK Solar Green Mount. All rights reserved.
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 px-6 py-3 rounded-full backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <span className="text-sm font-bold text-slate-800">
              Developed with ❤️ by M. Ashrith Sai
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
