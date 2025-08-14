import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if smooth scrolling is supported
  const isSmoothScrollingSupported = 'scrollBehavior' in document.documentElement.style;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Close mobile menu when scrolling
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('nav');
      if (navbar && !navbar.contains(event.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollClose);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollClose);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Toggle body class when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    // Force close mobile menu immediately
    setIsMobileMenuOpen(false);
    
    // Wait for the mobile menu to close before scrolling
    setTimeout(() => {
      performScroll(href);
    }, 100); // Reduced delay since we're forcing the close
  };

  const performScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      // Use a more reliable scroll method for mobile
      const elementTop = element.offsetTop;
      const navbarHeight = 64; // Height of the navbar
      const targetScrollTop = elementTop - navbarHeight;
      
      // Get actual viewport height (handles mobile browser viewport issues)
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Ensure scroll position is within valid bounds
      const maxScrollTop = documentHeight - viewportHeight;
      const finalScrollTop = Math.max(0, Math.min(targetScrollTop, maxScrollTop));
      
      // Debug information for mobile
      if (window.innerWidth < 768) {
        console.log(`Mobile scroll: ${href}`, {
          elementTop,
          navbarHeight,
          targetScrollTop,
          finalScrollTop,
          currentScroll: window.scrollY,
          viewportHeight,
          documentHeight,
          isSmoothSupported: isSmoothScrollingSupported
        });
      }
      
      // Ensure we're at the top of the page for mobile devices
      if (window.innerWidth < 768) {
        // For mobile, use a more reliable scroll method
        if (isSmoothScrollingSupported) {
          try {
            // Try smooth scrolling first
            window.scrollTo({
              top: finalScrollTop,
              behavior: 'smooth'
            });
          } catch (error) {
            // Fallback to instant scroll if smooth scrolling fails
            console.warn('Smooth scrolling failed, using instant scroll:', error);
            window.scrollTo(0, finalScrollTop);
          }
        } else {
          // Fallback for devices that don't support smooth scrolling
          window.scrollTo(0, finalScrollTop);
        }
      } else {
        // For desktop, use the original method
        if (isSmoothScrollingSupported) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          element.scrollIntoView();
        }
      }
    } else {
      console.warn(`Element with href ${href} not found`);
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (href) => {
    // Prevent default touch behavior that might interfere with scrolling
    return (e) => {
      e.preventDefault();
      scrollToSection(href);
    };
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button 
            className="flex items-center space-x-3" 
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')} // ✅ Added onClick to scroll to home
            onTouchStart={handleTouchStart('#home')}
          >
            <motion.img
              src={profileImage}
              alt="Shrish"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary"
            />
            <motion.span className="text-xl font-bold font-montserrat text-gradient">
              Shrish
            </motion.span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onTouchStart={handleTouchStart(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeSection"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden mobile-menu bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onTouchStart={handleTouchStart(item.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  } rounded-lg`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
