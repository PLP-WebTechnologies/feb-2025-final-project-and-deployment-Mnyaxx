
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn more about BlogVista and our mission to share knowledge about web development and design.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                BlogVista was founded in 2025 with a simple mission: to create a platform where web developers and designers could share knowledge, insights, and experiences with the community.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a personal blog has grown into a collaborative platform featuring articles from experts across the web development spectrum. We believe in the power of knowledge sharing and continuous learning in an ever-evolving industry.
              </p>
              <p className="text-muted-foreground">
                Our team consists of passionate developers, designers, and writers who are committed to producing high-quality, informative content that helps others grow in their careers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Values</h2>
              
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Knowledge Sharing</h3>
                  <p className="text-muted-foreground">
                    We believe that knowledge should be accessible to all. By sharing our experiences and insights, we contribute to a more collaborative and innovative community.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Quality Content</h3>
                  <p className="text-muted-foreground">
                    We are committed to producing high-quality, accurate, and relevant content that provides real value to our readers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    The tech industry is ever-changing, and we embrace the opportunity to continuously learn and adapt. We share this journey with our readers.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Community Support</h3>
                  <p className="text-muted-foreground">
                    We value the web development community and strive to create content that supports developers at all stages of their careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop" 
                    alt="Sarah Jones" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sarah Jones</h3>
                <p className="text-blog-accent mb-2">Founder & Editor-in-Chief</p>
                <p className="text-sm text-muted-foreground">
                  Full-stack developer with 10+ years of experience and a passion for teaching.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop" 
                    alt="David Kim" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">David Kim</h3>
                <p className="text-blog-accent mb-2">Lead Developer</p>
                <p className="text-sm text-muted-foreground">
                  Backend specialist with expertise in API design and scalable architectures.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop" 
                    alt="Sophia Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sophia Rodriguez</h3>
                <p className="text-blog-accent mb-2">UX/UI Specialist</p>
                <p className="text-sm text-muted-foreground">
                  Designer with a focus on creating accessible and intuitive user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blog-accent/10 to-blog-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Want to be part of our journey? Explore our articles, join our newsletter, or get in touch to collaborate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/blog">
                  Explore Articles
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
