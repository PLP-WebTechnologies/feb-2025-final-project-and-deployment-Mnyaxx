
import { BlogPost } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarIcon, Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <Card className={`overflow-hidden h-full flex flex-col transition-all hover:shadow-md
      ${featured ? 'border-blog-accent/30' : ''}`}>
      <Link to={`/blog/${post.id}`} className="group">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {post.featured && !featured && (
            <div className="absolute top-2 right-2 bg-blog-accent text-white text-xs font-medium px-2 py-1 rounded">
              Featured
            </div>
          )}
          <div className="absolute bottom-0 left-0 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs">
            {post.category}
          </div>
        </div>
      </Link>
      
      <CardContent className="flex-1 flex flex-col pt-4">
        <Link to={`/blog/${post.id}`} className="group">
          <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-semibold leading-tight mb-2 group-hover:text-blog-accent transition-colors`}>
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm flex-1">{post.excerpt}</p>
      </CardContent>
      
      <CardFooter className="border-t pt-4 text-xs text-muted-foreground">
        <div className="flex justify-between items-center w-full">
          <span>{post.author}</span>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <CalendarIcon className="h-3 w-3 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
