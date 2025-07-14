import { useState } from 'react';
import { Users, Calendar, MapPin, Clock, Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    availability: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const volunteerOpportunities = [
    {
      title: 'Education Support',
      description: 'Help teach children in our learning centers and mobile schools.',
      commitment: '4-6 hours/week',
      location: 'Mumbai, Pune, Nashik',
      skills: 'Teaching experience preferred but not required',
      icon: Users
    },
    {
      title: 'Healthcare Assistance',
      description: 'Support our mobile health clinics and community health programs.',
      commitment: '6-8 hours/week',
      location: 'Rural Maharashtra',
      skills: 'Medical background preferred',
      icon: Calendar
    },
    {
      title: 'Community Outreach',
      description: 'Help with community engagement and awareness programs.',
      commitment: '3-5 hours/week',
      location: 'Various locations',
      skills: 'Communication and people skills',
      icon: MapPin
    },
    {
      title: 'Administrative Support',
      description: 'Assist with office work, data entry, and project coordination.',
      commitment: '2-4 hours/week',
      location: 'Mumbai office or remote',
      skills: 'Computer literacy, organization skills',
      icon: Clock
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push('Please enter a valid email address');
    if (!formData.phone.trim()) errors.push('Phone number is required');
    if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) errors.push('Please enter a valid phone number');
    if (!formData.interests.trim()) errors.push('Please select your area of interest');
    if (!formData.availability.trim()) errors.push('Please specify your availability');

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const errors = validateForm();
    if (errors.length > 0) {
      toast({
        title: 'Form Validation Error',
        description: errors.join(', '),
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: 'Application Submitted!',
        description: 'Thank you for your interest in volunteering. We\'ll contact you within 2-3 business days.',
        variant: 'default'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interests: '',
        availability: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Submission Error',
        description: 'There was an error submitting your application. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of dedicated volunteers and make a real difference in people's lives. 
            Whether you have a few hours a week or want to commit more time, there's a place for you.
          </p>
        </div>

        {/* Why Volunteer Section */}
        <div className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Volunteer With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Make Real Impact</h3>
              <p className="text-gray-600">See the direct results of your efforts in communities across Maharashtra.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Develop Skills</h3>
              <p className="text-gray-600">Gain valuable experience in project management, community work, and leadership.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Join Community</h3>
              <p className="text-gray-600">Connect with like-minded individuals committed to social change.</p>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <opportunity.icon className="h-8 w-8 text-blue-600 mr-3" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" aria-hidden="true" />
                    <span className="text-gray-600">Time Commitment: {opportunity.commitment}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" aria-hidden="true" />
                    <span className="text-gray-600">Location: {opportunity.location}</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-4 w-4 text-gray-400 mr-2 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600">Skills: {opportunity.skills}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Registration Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Volunteer Registration Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-describedby="name-error"
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-describedby="email-error"
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  aria-describedby="phone-error"
                  className="w-full"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest *
                </label>
                <select
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your area of interest</option>
                  <option value="education">Education Support</option>
                  <option value="healthcare">Healthcare Assistance</option>
                  <option value="outreach">Community Outreach</option>
                  <option value="admin">Administrative Support</option>
                  <option value="fundraising">Fundraising & Events</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both weekdays and weekends</option>
                  <option value="flexible">Flexible schedule</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience
                </label>
                <Textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full"
                  placeholder="Tell us about any relevant experience, skills, or qualifications..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                  placeholder="Tell us why you want to volunteer with Frontier's welfare society and any questions you might have..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About Volunteering?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
              <a 
                href="mailto:volunteer@frontierswelfaresociety.org"
                className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4"
              >
                volunteer@frontierswelfaresociety.org
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
              <a 
                href="tel:+919876543210"
                className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
