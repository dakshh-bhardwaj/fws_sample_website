import { Users, GraduationCap, Heart, Leaf, Home, Utensils } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Education for All',
      description: 'Providing quality education to children in rural communities through our mobile schools and learning centers.',
      impact: '12,000+ children educated',
      stats: [
        { label: 'Schools Built', value: '45' },
        { label: 'Teachers Trained', value: '200+' },
        { label: 'Literacy Rate Increase', value: '85%' }
      ],
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      imageAlt: 'Children sitting in a classroom, engaged in learning activities'
    },
    {
      id: 2,
      title: 'Healthcare Access',
      description: 'Mobile health clinics and community health programs bringing medical care to remote areas.',
      impact: '25,000+ patients treated',
      stats: [
        { label: 'Health Camps', value: '150+' },
        { label: 'Vaccinations Given', value: '8,000+' },
        { label: 'Communities Covered', value: '75' }
      ],
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      imageAlt: 'Healthcare worker examining a patient in a mobile clinic setting'
    },
    {
      id: 3,
      title: 'Sustainable Agriculture',
      description: 'Training farmers in sustainable farming practices and providing resources for improved crop yields.',
      impact: '3,500+ farmers supported',
      stats: [
        { label: 'Farmers Trained', value: '3,500+' },
        { label: 'Yield Increase', value: '40%' },
        { label: 'Organic Farms', value: '120' }
      ],
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      imageAlt: 'Farmer working in a green field with sustainable farming techniques'
    },
    {
      id: 4,
      title: 'Women Empowerment',
      description: 'Skill development programs and microfinance initiatives to empower women economically.',
      impact: '5,000+ women empowered',
      stats: [
        { label: 'Women Trained', value: '5,000+' },
        { label: 'Businesses Started', value: '800+' },
        { label: 'Income Increase', value: '60%' }
      ],
      icon: Users,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop',
      imageAlt: 'Group of women participating in a skill development workshop'
    },
    {
      id: 5,
      title: 'Housing & Infrastructure',
      description: 'Building safe, affordable housing and improving basic infrastructure in underserved communities.',
      impact: '1,200+ homes built',
      stats: [
        { label: 'Homes Built', value: '1,200+' },
        { label: 'Wells Dug', value: '85' },
        { label: 'Families Housed', value: '1,200+' }
      ],
      icon: Home,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      imageAlt: 'Newly constructed homes in a rural community development project'
    },
    {
      id: 6,
      title: 'Nutrition Program',
      description: 'Addressing malnutrition through feeding programs and nutrition education in communities.',
      impact: '8,000+ children fed daily',
      stats: [
        { label: 'Children Fed Daily', value: '8,000+' },
        { label: 'Nutrition Centers', value: '30' },
        { label: 'Malnutrition Reduced', value: '65%' }
      ],
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1594736797933-d0b22d3bb1f2?w=400&h=300&fit=crop',
      imageAlt: 'Children receiving nutritious meals at a community feeding center'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work across multiple sectors to create comprehensive change in communities. 
            Each program is designed to address specific needs while building long-term sustainability.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <article 
              key={program.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <LazyImage
                  src={program.image}
                  alt={program.imageAlt}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <program.icon className="h-8 w-8 text-blue-600 mr-3" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-gray-900">{program.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 font-semibold text-center">{program.impact}</p>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  {program.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm text-gray-600">{stat.label}:</span>
                      <span className="text-sm font-semibold text-gray-900">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Learn More About Our Programs?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Each program has detailed reports and impact assessments available. Contact us to learn more about how you can support specific initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:programs@frontierswelfaresociety.org"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-white"
            >
              Contact Program Team
            </a>
            <a 
              href="/donate"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-white"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
