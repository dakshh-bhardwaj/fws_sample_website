import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically fetch from an API or CMS
  const post = {
    id: 1,
    slug: 'education-transforms-rural-communities',
    title: 'How Education is Transforming Rural Communities',
    content: `
      <p>Education has always been the cornerstone of development, but in rural Maharashtra, access to quality education has been a persistent challenge. Over the past five years, Frontier's welfare society's mobile school initiative has been making remarkable strides in bringing education directly to children who would otherwise have no access to formal learning.</p>
      
      <h2>The Challenge</h2>
      <p>Many villages in Maharashtra lack proper school infrastructure, qualified teachers, and educational resources. Children, especially girls, often miss out on education due to geographical barriers, economic pressures, and cultural factors. Our research showed that over 60% of children in remote areas were not receiving any formal education.</p>
      
      <h2>Our Mobile School Solution</h2>
      <p>Our mobile schools are equipped with:</p>
      <ul>
        <li>Digital learning tools and tablets</li>
        <li>Interactive educational content in local languages</li>
        <li>Qualified teachers trained in rural education</li>
        <li>Basic medical check-up facilities</li>
        <li>Nutritional support programs</li>
      </ul>
      
      <h2>Impact Stories</h2>
      <p>Meera, a 12-year-old from Ahmednagar district, had never held a pencil before our mobile school arrived in her village. Today, she can read and write in both Marathi and English, and dreams of becoming a teacher herself. Her story is one of thousands that demonstrate the transformative power of accessible education.</p>
      
      <p>In the village of Koregaon, our mobile school has achieved a 95% literacy rate among children aged 6-14, up from just 15% three years ago. Parents report that children are more confident, curious, and engaged with their communities.</p>
      
      <h2>The Ripple Effect</h2>
      <p>Education doesn't just transform individual lives—it transforms entire communities. We've observed:</p>
      <ul>
        <li>Increased community participation in local governance</li>
        <li>Better health practices and sanitation</li>
        <li>Economic improvements through skill development</li>
        <li>Greater gender equality and women's empowerment</li>
        <li>Reduced child labor and early marriages</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>Our goal is to expand the mobile school program to reach 100 more villages over the next two years. With continued support from donors and volunteers, we can ensure that every child in rural Maharashtra has access to quality education.</p>
      
      <p>The transformation we've witnessed gives us hope for a future where geographical location doesn't determine a child's access to education and opportunities. Together, we're not just teaching children to read and write—we're empowering them to write their own futures.</p>
    `,
    author: 'Dr. Priya Sharma',
    date: '2024-01-15',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    imageAlt: 'Children engaged in learning activities in a rural classroom setting',
    readTime: '5 min read'
  };

  useEffect(() => {
    // Add JSON-LD structured data for the blog post
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": `${window.location.origin}${post.image}`,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Frontier's welfare society",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo.png`
        }
      },
      "datePublished": post.date,
      "dateModified": post.date,
      "description": post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="text-sm text-blue-600 font-medium mb-2 uppercase tracking-wide">
            {post.category}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" aria-hidden="true" />
              <span className="mr-4">{post.author}</span>
              <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
              <span className="mr-4">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </span>
              <span>{post.readTime}</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              aria-label="Share this article"
            >
              <Share2 className="h-4 w-4 mr-2" aria-hidden="true" />
              Share
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <LazyImage
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Published by <span className="font-medium text-gray-900">{post.author}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Share this article:</span>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(post.title);
                    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
                  }}
                  aria-label="Share on Twitter"
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                  }}
                  aria-label="Share on Facebook"
                >
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </footer>

        {/* Call to Action */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Support Our Education Programs</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Help us continue transforming lives through education. Your donation can provide school supplies, 
            fund teacher training, or support a mobile school for an entire month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/get-involved">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
