
import { BlogPost } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { CalendarIcon, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blog-accent/10 to-blog-accent/5 p-1 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg bg-card">
        <div className="overflow-hidden rounded-lg">
          <Link to={`/blog/${post.id}`} className="block">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-blog-accent text-white text-xs font-medium px-2 py-1 rounded">
                Featured
              </span>
              <span className="ml-2 text-xs text-muted-foreground">
                {post.category}
              </span>
            </div>
            
            <Link to={`/blog/${post.id}`} className="group">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blog-accent transition-colors">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-muted-foreground mb-6">
              {post.excerpt}
            </p>
          </div>
          
          <div>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <span className="font-medium">{post.author}</span>
              <span className="mx-2">•</span>
              <CalendarIcon className="h-3.5 w-3.5 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{post.readTime}</span>
            </div>
            
            <Link to={`/blog/${post.id}`}>
              <Button variant="outline" className="group">
                Read Article
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
