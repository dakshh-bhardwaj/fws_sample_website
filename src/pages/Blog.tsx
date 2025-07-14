
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  readTime: string;
}

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'education-transforms-rural-communities',
      title: 'How Education is Transforming Rural Communities',
      excerpt: 'Discover the incredible impact our mobile schools are having on children in remote villages across Maharashtra.',
      content: 'Full article content here...',
      author: 'Dr. Priya Sharma',
      date: '2024-01-15',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      imageAlt: 'Children engaged in learning activities in a rural classroom setting',
      readTime: '5 min read'
    },
    {
      id: 2,
      slug: 'healthcare-reaches-remote-villages',
      title: 'Mobile Health Clinics Reach the Unreachable',
      excerpt: 'Our mobile health units are bringing essential medical care to communities that have never had access to healthcare.',
      content: 'Full article content here...',
      author: 'Dr. Rajesh Patel',
      date: '2024-01-12',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      imageAlt: 'Healthcare worker providing medical assistance in a mobile clinic',
      readTime: '4 min read'
    },
    {
      id: 3,
      slug: 'women-empowerment-success-stories',
      title: 'Empowering Women: Success Stories from Our Programs',
      excerpt: 'Meet the incredible women who have transformed their lives and communities through our skill development initiatives.',
      content: 'Full article content here...',
      author: 'Sneha Reddy',
      date: '2024-01-10',
      category: 'Empowerment',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop',
      imageAlt: 'Group of women participating in a skill development workshop',
      readTime: '6 min read'
    },
    {
      id: 4,
      slug: 'sustainable-farming-techniques',
      title: 'Sustainable Farming: A Path to Food Security',
      excerpt: 'Learn how we\'re helping farmers adopt eco-friendly practices that increase yields while protecting the environment.',
      content: 'Full article content here...',
      author: 'Amit Kumar',
      date: '2024-01-08',
      category: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop',
      imageAlt: 'Farmer working in a green field using sustainable farming methods',
      readTime: '7 min read'
    },
    {
      id: 5,
      slug: 'volunteer-experiences-making-difference',
      title: 'Volunteer Voices: Making a Difference Together',
      excerpt: 'Hear from our volunteers about their experiences and the impact they\'ve witnessed firsthand.',
      content: 'Full article content here...',
      author: 'Maya Singh',
      date: '2024-01-05',
      category: 'Volunteers',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      imageAlt: 'Volunteers working together on a community project',
      readTime: '5 min read'
    },
    {
      id: 6,
      slug: 'community-housing-project-update',
      title: 'Building Homes, Building Hope: Housing Project Update',
      excerpt: 'Get the latest updates on our affordable housing initiative and meet the families who now have safe homes.',
      content: 'Full article content here...',
      author: 'Ravi Joshi',
      date: '2024-01-03',
      category: 'Housing',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      imageAlt: 'Newly constructed homes in a community housing development project',
      readTime: '6 min read'
    },
    {
      id: 7,
      slug: 'nutrition-program-child-health',
      title: 'Nourishing Futures: Our Child Nutrition Program',
      excerpt: 'Discover how our feeding programs are combating malnutrition and supporting healthy development in children.',
      content: 'Full article content here...',
      author: 'Dr. Anita Gupta',
      date: '2024-01-01',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1594736797933-d0b22d3bb1f2?w=600&h=400&fit=crop',
      imageAlt: 'Children receiving nutritious meals at a community feeding center',
      readTime: '4 min read'
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Add JSON-LD structured data for blog
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Hope Foundation Blog",
      "description": "Stories of impact, updates from our programs, and insights from our work in community development.",
      "url": `${window.location.origin}/blog`,
      "publisher": {
        "@type": "Organization",
        "name": "Hope Foundation",
        "url": window.location.origin
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest stories, program updates, and insights from our work in communities across Maharashtra. 
            Read about the impact we're making together.
          </p>
        </div>

        {/* Featured Post */}
        {currentPage === 1 && (
          <article className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <LazyImage
                  src={blogPosts[0].image}
                  alt={blogPosts[0].imageAlt}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm text-blue-600 font-medium mb-2">Featured Post</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  <Link 
                    to={`/blog/${blogPosts[0].slug}`}
                    className="hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-blue-600"
                  >
                    {blogPosts[0].title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" aria-hidden="true" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                  <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button asChild>
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.slice(currentPage === 1 ? 1 : 0).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <LazyImage
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xs text-blue-600 font-medium mb-2 uppercase tracking-wide">
                  {post.category}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" aria-hidden="true" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" aria-hidden="true" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates, stories, and impact reports directly in your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
