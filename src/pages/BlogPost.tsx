import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Copy, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

type Post = {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
};

const posts: { [key: number]: Post } = {
  1: {
    title: 'The Future of Web Development',
    content: `
      The landscape of web development is constantly evolving, bringing new challenges and opportunities for developers and businesses alike. As we look towards the future, several key trends are shaping the way we build and interact with web applications.

      ## The Rise of AI-Powered Development

      Artificial Intelligence is revolutionizing how we approach web development. From automated testing to intelligent code completion, AI tools are becoming an integral part of the development workflow. This integration is not just about automation; it's about enhancing developer capabilities and improving code quality.

      ## Web Assembly and the Future of Performance

      WebAssembly (Wasm) continues to push the boundaries of what's possible in web applications. By allowing developers to write high-performance code in languages like Rust and C++ and run it in the browser, we're seeing a new generation of web applications that rival native performance.

      ## The Evolution of Frontend Frameworks

      Frontend frameworks are evolving to meet modern development needs. With innovations in server components, streaming SSR, and partial hydration, frameworks like React, Vue, and Svelte are providing more efficient ways to build interactive applications.

      ## Conclusion

      The future of web development is exciting and full of possibilities. As developers, staying informed and adaptable is key to leveraging these new technologies effectively.
    `,
    author: 'McClain Kelvin',
    date: '2024-02-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    tags: ['Web Development', 'Technology', 'Future Trends']
  },
  // Add more blog posts as needed
};

function BlogPost() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  
  const post = posts[Number(id)];
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-400 hover:text-blue-300">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const text = encodeURIComponent(`Check out this article: ${post.title}`);
    const url = encodeURIComponent(shareUrl);
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <Link 
          to="/blog"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <img
                  src="https://flashfocusstudios.org/flashfocus/mcclain.png"
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm">{post.author}</span>
              </div>
              
              <div className="flex items-center gap-2 ml-auto">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors relative"
                  onClick={handleCopyLink}
                >
                  <Copy className="w-5 h-5" />
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                    >
                      Copied!
                    </motion.span>
                  )}
                </motion.button>
              </div>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BlogPost;