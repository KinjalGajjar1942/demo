import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Menu", href: "/menu" },
  { label: "Franchise", href: "/franchise" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-40 bg-kudoz-cream/95 backdrop-blur-sm border-b border-kudoz-blush shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0" data-ocid="nav.link">
            <img
              src="/assets/generated/kudoz-logo-transparent.dim_400x160.png"
              alt="Kudoz India"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-kudoz-pink font-semibold"
                    : "text-kudoz-maroon hover:text-kudoz-pink hover:bg-kudoz-blush"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button
              asChild
              className="rounded-full bg-kudoz-pink hover:bg-[#c23d5d] text-white font-semibold px-5 shadow-none border-0"
              data-ocid="nav.primary_button"
            >
              <Link to="/franchise">Franchise Inquiry</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-kudoz-maroon hover:bg-kudoz-blush transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-kudoz-cream border-t border-kudoz-blush"
          >
            <nav className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-kudoz-pink bg-kudoz-blush font-semibold"
                      : "text-kudoz-maroon hover:text-kudoz-pink hover:bg-kudoz-blush"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="rounded-full bg-kudoz-pink hover:bg-[#c23d5d] text-white font-semibold mt-2"
                data-ocid="nav.primary_button"
              >
                <Link to="/franchise" onClick={() => setMobileOpen(false)}>
                  Franchise Inquiry
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
