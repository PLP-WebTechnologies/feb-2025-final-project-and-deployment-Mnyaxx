
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CalendarIcon, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import BlogCard from "@/components/blog/BlogCard";
import { marked } from "marked";

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [post, setPost] = useState(blogPosts.find(post => post.id === Number(id)));
  const [relatedPosts, setRelatedPosts] = useState(blogPosts.filter(p => 
    p.id !== Number(id) && 
    (p.category === post?.category || p.featured)
  ).slice(0, 3));
  
  useEffect(() => {
    // If post not found, redirect to blog page
    if (!post && id) {
      navigate("/blog");
      toast.error("Blog post not found");
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id, post, navigate]);
  
  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      })
      .catch(() => {
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };
  
  if (!post) return null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-8 md:py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <Button variant="ghost" size="sm" asChild className="inline-flex items-center">
                  <Link to="/blog">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Blog
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={sharePost} className="inline-flex items-center">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6">
                <span className="font-medium mr-3">{post.author}</span>
                <div className="flex items-center mr-3">
                  <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center mr-3">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog?category=${post.category}`} className="bg-muted px-2 py-0.5 rounded text-xs mt-1 hover:bg-muted/70 transition-colors">
                  {post.category}
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Image */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="py-6 md:py-10">
          <div className="container mx-auto px-4">
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
          </div>
        </section>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-muted/20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Post;
