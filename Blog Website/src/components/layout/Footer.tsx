
import { Link } from "react-router-dom";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import { Linkedin, Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins text-blog-accent">BlogVista</h3>
            <p className="text-muted-foreground">
              A modern blog platform sharing insights and knowledge about web development, design, and technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog?category=Web Development" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/blog?category=JavaScript" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link to="/blog?category=CSS" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  CSS
                </Link>
              </li>
              <li>
                <Link to="/blog?category=Web Design" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/blog?category=Backend" className="text-muted-foreground hover:text-blog-accent transition-colors">
                  Backend
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <NewsletterSignup />
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-blog-accent transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blog-accent transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blog-accent transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blog-accent transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-blog-accent transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BlogVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
