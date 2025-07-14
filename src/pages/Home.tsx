import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

const Home = () => {
  useEffect(() => {
    // Add JSON-LD structured data for organization
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NonProfit",
      "name": "Frontier's welfare society",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "description": "Empowering communities through education, healthcare, and sustainable development initiatives.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Hope Street",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9xx65-4xx10",
        "contactType": "customer service"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const stats = [
    { icon: Users, label: 'Lives Impacted', value: '50,000+' },
    { icon: Heart, label: 'Active Volunteers', value: '1,200+' },
    { icon: Globe, label: 'Communities Served', value: '150+' },
    { icon: Award, label: 'Years of Service', value: '15+' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Program Beneficiary',
      content: 'The education program changed my life. I can now read and write, and I\'m teaching my children too.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b512?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Raj Patel',
      role: 'Volunteer',
      content: 'Being part of Frontier\'s welfare society has been incredibly rewarding. Seeing the direct impact of our work is amazing.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop"
            alt="Community members working together in a rural village setting"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Communities,
            <span className="block text-yellow-400">Building Hope</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join us in creating lasting change through education, healthcare, and sustainable development initiatives across India.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/donate">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" aria-hidden="true" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Frontier's welfare society is dedicated to creating sustainable change in underserved communities across India. Through our comprehensive programs in education, healthcare, and community development, we empower individuals and families to build better futures.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 2009, we have been working directly with communities to understand their needs and develop solutions that create lasting impact. Our approach focuses on collaboration, sustainability, and measurable outcomes.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div>
              <LazyImage
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
                alt="Diverse group of people collaborating at a table with laptops and documents"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Stories of Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <LazyImage
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="donate" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Your support helps us reach more communities and create lasting change. Every contribution, no matter the size, makes a meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/donate">
                Donate Today
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link to="/get-involved">
                Volunteer With Us
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
