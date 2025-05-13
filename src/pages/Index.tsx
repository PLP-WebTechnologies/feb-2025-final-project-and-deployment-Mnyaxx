
import { useState, useEffect } from "react";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogCard from "@/components/blog/BlogCard";

const Index = () => {
  const [featuredPost, setFeaturedPost] = useState(blogPosts.find(post => post.featured));
  const [recentPosts, setRecentPosts] = useState(blogPosts.filter(post => !post.featured).slice(0, 3));
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-blog-accent">BlogVista</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover articles and insights about web development, design, and technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/blog">
                  Explore Articles
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/about">
                  About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Article</h2>
              <FeaturedPost post={featuredPost} />
            </div>
          </section>
        )}
        
        {/* Recent Posts */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Recent Articles</h2>
              <Link to="/blog" className="text-blog-accent hover:underline inline-flex items-center">
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map(category => (
                <Link 
                  key={category} 
                  to={`/blog?category=${category}`}
                  className="bg-muted hover:bg-muted/80 text-center py-8 px-4 rounded-lg transition-colors"
                >
                  <h3 className="font-medium">{category}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blog-accent/10 to-blog-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to dive deeper?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our collection of articles, tutorials, and insights about the latest in web development and design.
            </p>
            <Button asChild size="lg">
              <Link to="/blog">
                Explore All Articles
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
