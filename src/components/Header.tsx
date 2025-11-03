import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun } from "lucide-react";

const Header = () => {
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "GALLERY", href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="RK GREEN SOLAR Logo" className="w-8 h-8 md:w-10 md:h-10" />
            <span className="text-xl md:text-2xl font-black text-white">
              RK GREEN <span className="text-primary">SOLAR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.name === "HOME" ? (
                <Link
                  key={item.name}
                  to="/"
                  className="text-sm font-bold text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-bold text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button className="font-bold">CONTACT US</Button>
          </div>

          {/* Mobile - Only Button */}
          <div className="lg:hidden">
            <Button size="sm" className="font-bold">CONTACT US</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
