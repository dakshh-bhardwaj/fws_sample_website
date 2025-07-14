import { useState } from 'react';
import { Check, Heart, Users, GraduationCap, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const donationTiers = [
    {
      amount: 500,
      title: 'Supporter',
      description: 'Provides educational materials for 2 children for a month',
      impact: '2 children supported',
      icon: GraduationCap
    },
    {
      amount: 1000,
      title: 'Champion',
      description: 'Funds a health check-up for 5 community members',
      impact: '5 health check-ups',
      icon: Heart
    },
    {
      amount: 2500,
      title: 'Advocate',
      description: 'Sponsors a week of meals for children in our nutrition program',
      impact: '50 meals provided',
      icon: Users
    },
    {
      amount: 5000,
      title: 'Guardian',
      description: 'Contributes to building materials for affordable housing',
      impact: 'Housing support',
      icon: Home
    }
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || (customAmount ? parseInt(customAmount) : 0);
  };

  const handleDonate = async () => {
    const amount = getCurrentAmount();
    
    if (!amount || amount < 100) {
      toast({
        title: 'Invalid Amount',
        description: 'Please enter a donation amount of at least ₹100.',
        variant: 'destructive'
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: 'Thank You!',
        description: `Your ${donationType} donation of ₹${amount} has been processed. You will receive a confirmation email shortly.`,
        variant: 'default'
      });

      // Reset form
      setSelectedAmount(null);
      setCustomAmount('');
    } catch (error) {
      toast({
        title: 'Payment Error',
        description: 'There was an error processing your donation. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Make a Donation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your contribution helps us continue our mission of empowering communities and creating lasting change. 
            Every donation, regardless of size, makes a meaningful difference.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 bg-blue-50 p-6 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">₹100</div>
            <div className="text-sm text-gray-600">Feeds a child for a week</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">₹500</div>
            <div className="text-sm text-gray-600">Educational supplies for 2 children</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">₹1,000</div>
            <div className="text-sm text-gray-600">Health check-ups for 5 people</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">₹2,500</div>
            <div className="text-sm text-gray-600">Skill training for a woman</div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Donation Type Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Donation Type</h2>
            <div className="flex space-x-4">
              <Button
                variant={donationType === 'one-time' ? 'default' : 'outline'}
                onClick={() => setDonationType('one-time')}
                className="flex-1"
                aria-pressed={donationType === 'one-time'}
              >
                One-time Donation
              </Button>
              <Button
                variant={donationType === 'monthly' ? 'default' : 'outline'}
                onClick={() => setDonationType('monthly')}
                className="flex-1"
                aria-pressed={donationType === 'monthly'}
              >
                Monthly Donation
              </Button>
            </div>
          </div>

          {/* Donation Tiers */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {donationTiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => handleAmountSelect(tier.amount)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedAmount === tier.amount
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  aria-pressed={selectedAmount === tier.amount}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <tier.icon className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
                      <span className="font-semibold text-gray-900">₹{tier.amount}</span>
                    </div>
                    {selectedAmount === tier.amount && (
                      <Check className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    )}
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{tier.title}</div>
                  <div className="text-sm text-gray-600 mb-2">{tier.description}</div>
                  <div className="text-xs text-blue-600 font-medium">Impact: {tier.impact}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div className="mb-8">
            <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
              Or Enter Custom Amount (₹)
            </label>
            <Input
              type="number"
              id="custom-amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter amount in rupees"
              min="100"
              className="max-w-xs"
            />
          </div>

          {/* Donation Summary */}
          {getCurrentAmount() > 0 && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Donation Summary</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  {donationType === 'monthly' ? 'Monthly' : 'One-time'} donation:
                </span>
                <span className="font-semibold text-gray-900">₹{getCurrentAmount()}</span>
              </div>
              {donationType === 'monthly' && (
                <div className="text-xs text-gray-500 mt-1">
                  You can cancel anytime by contacting us.
                </div>
              )}
            </div>
          )}

          {/* Donate Button */}
          <Button
            onClick={handleDonate}
            disabled={!getCurrentAmount() || getCurrentAmount() < 100 || isProcessing}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
            size="lg"
          >
            {isProcessing 
              ? 'Processing...' 
              : `Donate ₹${getCurrentAmount() || 0} ${donationType === 'monthly' ? 'Monthly' : 'Now'}`
            }
          </Button>

          {/* Security Note */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>🔒 Your donation is secure and processed through encrypted payment gateways.</p>
            <p className="mt-1">Tax deduction certificate will be provided as per Section 80G.</p>
          </div>
        </div>

        {/* Other Ways to Help */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Volunteer Your Time</h3>
              <p className="text-sm text-gray-600 mb-4">Join our team of dedicated volunteers and make a direct impact.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="/get-involved" className="underline decoration-2 underline-offset-4">
                  Learn More
                </a>
              </Button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Partnership</h3>
              <p className="text-sm text-gray-600 mb-4">Partner with us for CSR initiatives and employee engagement.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:partnerships@frontierswelfaresociety.org" className="underline decoration-2 underline-offset-4">
                  Contact Us
                </a>
              </Button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Spread the Word</h3>
              <p className="text-sm text-gray-600 mb-4">Help us reach more people by sharing our mission on social media.</p>
              <Button variant="outline" size="sm" asChild>
                <a href="#" className="underline decoration-2 underline-offset-4">
                  Share Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
