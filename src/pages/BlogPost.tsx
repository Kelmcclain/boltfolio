import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Copy, ArrowLeft } from "lucide-react";
import { useState } from "react";

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
    title: "The Future of Web Development",
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
    author: "McClain Kelvin",
    date: "2024-02-28",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    tags: ["Web Development", "Technology", "Future Trends"],
  },
  2: {
    title: "Mobile App Development Best Practices",
    content: `
      In today's fast-paced digital landscape, mobile app development is essential for businesses looking to expand their reach and provide excellent user experiences. There are several best practices that developers should follow to ensure the success of their mobile applications.

      ## Focus on User Experience

      The user experience (UX) is at the core of successful mobile apps. Developers need to prioritize intuitive navigation, responsive designs, and consistency across platforms to provide a seamless user experience.

      ## Performance Optimization

      Performance plays a critical role in mobile app success. Best practices like minimizing memory usage, reducing battery consumption, and optimizing loading times are crucial to keep users engaged and happy.

      ## Security Considerations

      Security must be addressed from the beginning of development. Implementing features like data encryption, secure APIs, and following OWASP guidelines ensures that your application is resilient to threats and protects user data.

      ## Conclusion

      By following best practices in user experience, performance optimization, and security, developers can create mobile apps that stand out in a crowded market and meet user expectations.
    `,
    author: "McClain Kelvin",
    date: "2024-02-25",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
    tags: ["Mobile Development", "Best Practices", "User Experience"],
  },
  3: {
    title: "Cloud Computing Solutions",
    content: `
      Cloud computing has become an indispensable part of the modern business landscape, offering scalable and flexible solutions to meet evolving needs. Understanding various cloud computing options can help businesses make informed decisions about their infrastructure.

      ## Types of Cloud Solutions

      There are three main types of cloud solutions: public, private, and hybrid clouds. Each has its advantages depending on business requirements such as scalability, security, and cost.

      ## Benefits of Cloud Adoption

      Cloud adoption offers numerous benefits, including cost savings, enhanced collaboration, and scalability. Businesses can quickly expand or reduce their resources based on demand, which is especially valuable in a rapidly changing market.

      ## Security in the Cloud

      Cloud security remains a key concern for many businesses. It's essential to choose a cloud provider that offers robust security features, including data encryption, identity management, and compliance certifications.

      ## Conclusion

      Cloud computing is a powerful tool that can help businesses achieve greater efficiency and adaptability. By understanding the different types of cloud solutions and the associated benefits and challenges, businesses can leverage the cloud to drive innovation and growth.
    `,
    author: "McClain Kelvin",
    date: "2024-02-20",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    tags: ["Cloud Computing", "Business Solutions", "Technology"],
  },
  4: {
    title: "Data Privacy in 2024",
    content: `
      With increasing concern over user data privacy, businesses must stay ahead by adopting stringent data protection practices. In 2024, legislation like GDPR continues to inspire similar policies around the globe, pushing for stricter controls over how personal data is collected, processed, and stored.

      ## Emerging Privacy Laws

      Governments worldwide are focusing on ensuring user data remains private, resulting in a growing patchwork of regional laws. Businesses need to stay compliant by adapting to these varying rules.

      ## Privacy by Design

      Companies are now integrating privacy into the early stages of product development. 'Privacy by Design' ensures that personal data is handled securely right from the concept phase of application development.

      ## Conclusion

      In today's data-driven world, ensuring data privacy is crucial not only to maintain user trust but also to avoid legal consequences. Staying updated with evolving regulations and incorporating privacy-centric practices is key to success.
    `,
    author: "McClain Kelvin",
    date: "2024-02-18",
    readTime: "6 min read",
    image:"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["Data Privacy", "Cybersecurity", "Tech Laws"],
  },
  5: {
    title: "The Role of DevOps in Modern Software Development",
    content: `
      DevOps has become a fundamental part of software development, bridging the gap between development and operations teams to improve collaboration and productivity. The DevOps approach allows organizations to deliver software faster and more reliably.

      ## Continuous Integration and Continuous Delivery (CI/CD)

      CI/CD pipelines are a central component of DevOps, automating the process of testing and deployment. This has drastically reduced the time it takes to get new features to users while maintaining high quality.

      ## Culture of Collaboration

      DevOps is not just a technical practice; it's also about building a culture of collaboration. Cross-functional teams working together can solve problems faster and deliver value more effectively.

      ## Conclusion

      The DevOps movement is here to stay. It empowers teams to build better software by fostering a culture of collaboration, enhancing automation, and reducing deployment risks.
    `,
    author: "McClain Kelvin",
    date: "2024-02-15",
    readTime: "7 min read",
    image:"https://images.pexels.com/photos/11035393/pexels-photo-11035393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["DevOps", "Software Development", "Best Practices"],
  },
  6: {
    title: "Sustainable IT Practices",
    content: `
      As concerns over climate change grow, the tech industry is seeking ways to reduce its environmental footprint. Sustainable IT practices are becoming crucial for companies wanting to lead responsibly in the 21st century.

      ## Green Data Centers

      Energy efficiency is a key focus for many data centers. With advancements in cooling technologies and renewable energy adoption, companies are reducing the carbon footprint of their data storage operations.

      ## E-Waste Management

      Managing electronic waste is another important aspect of sustainable IT. Recycling old hardware and minimizing waste through longer product lifespans are effective ways to lessen the environmental impact.

      ## Conclusion

      Sustainability in IT is not just about reducing harm—it's about actively contributing to a healthier planet. Companies adopting sustainable practices can expect both ecological benefits and improved public perception.
    `,
    author: "McClain Kelvin",
    date: "2024-02-10",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80&w=1000",
    tags: ["Sustainability", "Green Tech", "IT Solutions"],
  },
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

  const handleShare = (platform: "twitter" | "facebook" | "linkedin") => {
    const text = encodeURIComponent(`Check out this article: ${post.title}`);
    const url = encodeURIComponent(shareUrl);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
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
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => handleShare("linkedin")}
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
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
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
