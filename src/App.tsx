
import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Package, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Menu, 
  X, 
  ArrowRight,
  Star,
  Users,
  Globe,
  Shield,
  ArrowDown,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import panIndiaLogo from './assets/panindia.jpg';

type Page = 'home' | 'about' | 'services' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pickupCity: '',
    dropLocation: '',
    notes: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      pickupCity: '',
      dropLocation: '',
      notes: ''
    });
  };

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-16 h-16 bg-[#000066] rounded-full flex items-center justify-center mr-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#000066] rounded-full relative">
                  <div className="absolute inset-1 border border-[#000066] rounded-full">
                    <div className="absolute inset-0.5 bg-[#000066] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#000066] tracking-tight">
                Pan India
              </div>
              <div className="text-sm font-bold text-[#000066] -mt-1">
                LOGISTICS
              </div>
{/*               <div className="flex items-center gap-3">
               <img src={panIndiaLogo} alt="Pan India Logistics" className="h-16 md:h-20 object-contain" />
              
                
              </div> */}
             <img src={panIndiaLogo} alt="PanIndia Logo" className="h-20 mb-6" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {[
              { key: 'home', label: 'Home' },
              { key: 'about', label: 'About' },
              { key: 'services', label: 'Services' },
              { key: 'contact', label: 'Contact' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key as Page)}
                className={`text-lg font-bold transition-all duration-300 relative group ${
                  currentPage === key 
                    ? 'text-[#000066]' 
                    : 'text-gray-600 hover:text-[#000066]'
                }`}
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#000066] transition-transform duration-300 ${
                  currentPage === key ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} color="#000066" /> : <Menu size={24} color="#000066" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            {[
              { key: 'home', label: 'Home' },
              { key: 'about', label: 'About' },
              { key: 'services', label: 'Services' },
              { key: 'contact', label: 'Contact' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key as Page)}
                className={`block w-full text-left py-3 text-lg font-bold transition-colors ${
                  currentPage === key ? 'text-[#000066]' : 'text-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,102,0.8), rgba(0,0,102,0.9)), url('https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none">
              Your Goods.<br />
              <span className="text-gray-300">Our Journey.</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-12 tracking-wide opacity-90">
              Connecting India with reliable logistics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="group bg-white text-[#000066] px-10 py-5 text-xl font-bold tracking-wide hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 rounded-md"
              >
                BOOK A PICKUP
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-white/80 hover:text-white transition-colors flex items-center gap-2 text-lg">
                Learn More
                <ArrowDown size={20} className="animate-bounce" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 text-white/60 hidden lg:block">
          <div className="text-sm font-medium">TRUSTED BY 50,000+ CLIENTS</div>
        </div>
        <div className="absolute bottom-10 right-10 text-white/60 hidden lg:block">
          <div className="text-sm font-medium">99.9% ON-TIME DELIVERY</div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-[#000066]">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive logistics solutions designed to meet every transportation need across India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Package, 
                title: 'Parcel Delivery', 
                desc: 'Fast and secure delivery for all package sizes with real-time tracking across India.',
                image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              { 
                icon: Truck, 
                title: 'Interstate Freight', 
                desc: 'Long-distance transport across India with full truckload and LTL options.',
                image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              { 
                icon: Clock, 
                title: 'Express Transport', 
                desc: 'Same-day and next-day delivery options for time-critical shipments.',
                image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              },
              { 
                icon: Globe, 
                title: 'Business Logistics', 
                desc: 'Complete supply chain solutions with warehousing and distribution networks.',
                image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
              }
            ].map(({ icon: Icon, title, desc, image }, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 h-64 bg-gray-100 rounded-md">
                  <img 
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#000066]/20 group-hover:bg-[#000066]/10 transition-colors duration-300" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Icon size={32} className="text-[#000066]" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#000066] group-hover:text-[#000088] transition-colors">{title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
                <button className="text-[#000066] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all hover:text-[#000088]">
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-[#000066]">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process ensures your shipments are handled with care from pickup to delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-[#000066]/20" />
            
            {[
              { 
                icon: Clock, 
                title: 'Schedule Pickup', 
                desc: 'Book online or call us to arrange collection at your preferred time and location.',
                step: '01'
              },
              { 
                icon: MapPin, 
                title: 'Track in Real-time', 
                desc: 'Monitor your shipment every step of the way with our advanced tracking system.',
                step: '02'
              },
              { 
                icon: CheckCircle, 
                title: 'Delivered Safely', 
                desc: 'Secure delivery with confirmation and signature upon successful completion.',
                step: '03'
              }
            ].map(({ icon: Icon, title, desc, step }, index) => (
              <div key={index} className="text-center relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 border-4 border-[#000066] rounded-full flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Icon size={40} color="#000066" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#000066] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#000066]">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-4 bg-[#000066] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: '100K+', label: 'Deliveries Completed', icon: Package },
              { number: '5,000+', label: 'Happy Clients', icon: Users },
              { number: '500+', label: 'Cities Covered', icon: Globe },
              { number: '99.9%', label: 'On-Time Rate', icon: Shield }
            ].map(({ number, label, icon: Icon }, index) => (
              <div key={index} className="group">
                <Icon size={48} className="mx-auto mb-6 text-gray-300 group-hover:text-white transition-colors" />
                <div className="text-5xl md:text-6xl font-black mb-4">{number}</div>
                <div className="text-lg text-gray-200 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-[#000066]">
            Ready to Ship?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of satisfied customers who trust Pan India Logistics for their shipping needs.
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="group bg-[#000066] text-white px-12 py-6 text-xl font-bold tracking-wide hover:bg-[#000088] transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 rounded-md"
          >
            GET STARTED TODAY
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-20">
      {/* About Hero */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern warehouse facility"
                className="w-full h-[500px] object-cover shadow-2xl rounded-md"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#000066] text-white flex items-center justify-center rounded-md">
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tight leading-none text-[#000066]">
                About<br />
                <span className="text-gray-400">Pan India</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-gray-700">
                Founded with a mission to connect every corner of India through reliable logistics, 
                Pan India Logistics combines cutting-edge technology with dependable service to 
                deliver your goods safely and efficiently nationwide.
              </p>
              <p className="text-xl leading-relaxed mb-8 text-gray-700">
                Our commitment to excellence, transparency, and customer satisfaction has made 
                us a trusted partner for businesses and individuals across the country.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 px-6 py-3 font-semibold rounded-md">ISO Certified</div>
                <div className="bg-gray-100 px-6 py-3 font-semibold rounded-md">24/7 Support</div>
                <div className="bg-gray-100 px-6 py-3 font-semibold rounded-md">Pan India Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center p-12 bg-white shadow-lg rounded-md">
              <h3 className="text-3xl font-black mb-6 text-[#000066]">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide exceptional logistics services that exceed customer expectations 
                while maintaining the highest standards of safety, reliability, and efficiency 
                in every delivery we make across India.
              </p>
            </div>
            <div className="text-center p-12 bg-[#000066] text-white rounded-md">
              <h3 className="text-3xl font-black mb-6">Our Vision</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                To become the leading logistics provider in India, known for innovation, 
                sustainability, and creating lasting partnerships that drive business success 
                for our clients nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 tracking-tight text-[#000066]">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Reliability',
                desc: 'We deliver on our promises, every time. Your trust is our foundation.',
                icon: Shield
              },
              {
                title: 'Innovation',
                desc: 'Embracing technology to provide smarter, faster logistics solutions.',
                icon: Globe
              },
              {
                title: 'Excellence',
                desc: 'Continuous improvement in everything we do, from service to safety.',
                icon: Star
              }
            ].map(({ title, desc, icon: Icon }, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-[#000066] rounded-full flex items-center justify-center group-hover:bg-[#000066] group-hover:text-white transition-all duration-300">
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#000066]">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-[#000066] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                quote: "Pan India Logistics has transformed our supply chain. Their reliability and speed are unmatched in the industry. We've seen a 40% improvement in delivery times.",
                author: "Rajesh Sharma",
                company: "TechCorp Industries",
                role: "Supply Chain Director"
              },
              {
                quote: "Professional service, competitive rates, and always on time. We couldn't ask for a better logistics partner. They handle our most critical shipments across India.",
                author: "Priya Patel",
                company: "Global Retail Solutions",
                role: "Operations Manager"
              }
            ].map(({ quote, author, company, role }, index) => (
              <div key={index} className="p-8 border border-gray-600 hover:border-white transition-colors rounded-md">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-white" />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-8 leading-relaxed">
                  "{quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-lg">{author}</div>
                  <div className="text-gray-300">{role}</div>
                  <div className="text-gray-300">{company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="pt-20">
      {/* Services Hero */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tight leading-none text-[#000066]">
            Our<br />
            <span className="text-gray-400">Services</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive logistics solutions tailored to meet your specific transportation needs 
            across India, from small parcels to large freight shipments.
          </p>
        </div>
      </section>

 {/* Detailed Services */}
<section className="py-32 px-4 bg-white">
  <div className="max-w-7xl mx-auto space-y-32">
    {[
      {
        icon: Package,
        title: 'Parcel Delivery',
        description: 'Fast, secure delivery for packages of all sizes with comprehensive tracking and insurance options for complete peace of mind.',
        features: [
          'Same-day delivery available in major cities',
          'Signature confirmation and proof of delivery',
          'Full insurance coverage up to $10,000',
          'Real-time tracking with SMS notifications',
          'Secure packaging and handling protocols',
          'Flexible pickup and delivery windows'
        ],
        image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        stats: { deliveries: '25K+', satisfaction: '99.8%', coverage: '500+ Cities' }
      },
      {
        icon: Truck,
        title: 'Interstate Freight',
        description: 'Reliable long-distance transport for businesses requiring interstate shipping solutions with competitive rates and guaranteed delivery times.',
        features: [
          'Full truckload (FTL) and Less-than-truckload (LTL)',
          'Temperature-controlled transport available',
          'Expedited shipping for urgent deliveries',
          'Specialized handling for fragile items',
          'Dock-to-dock delivery service',
          'Comprehensive cargo insurance'
        ],
        image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        stats: { capacity: '40 Tons', routes: '1000+', efficiency: '98.5%' }
      },
      {
        icon: Clock,
        title: 'Express Transport',
        description: 'Time-critical deliveries with guaranteed delivery windows for urgent shipments that cannot wait for standard delivery times.',
        features: [
          'Same-day delivery in metropolitan areas',
          'Next-day guarantee nationwide',
          'Priority handling and processing',
          '24/7 customer support and tracking',
          'Emergency and medical deliveries',
          'White-glove service available'
        ],
        image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        stats: { speed: '2-4 Hours', availability: '24/7', success: '99.9%' }
      },
      {
        icon: Globe,
        title: 'Business Logistics',
        description: 'Complete supply chain management and logistics solutions for businesses of all sizes, from startups to enterprise corporations.',
        features: [
          'Warehousing and distribution solutions',
          'Inventory management systems',
          'Multi-location distribution networks',
          'Custom logistics solutions',
          'Supply chain optimization',
          'Dedicated account management'
        ],
        image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        stats: { clients: '500+', warehouses: '25', savings: '30% Avg' }
      }
    ].map(({ icon: Icon, title, description, features, image, stats }, index) => (
      <div key={index} className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Left Text Content */}
         <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center">
              <Icon size={32} className="text-[#000066]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#000066]">{title}</h2>
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">{description}</p>

          <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-md shadow-sm">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold text-[#000066]">{value}</div>
                <div className="text-sm text-gray-600 capitalize">{key}</div>
              </div>
            ))}
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <CheckCircle size={20} className="mr-3 mt-1 flex-shrink-0 text-[#000066]" />
                <span className="text-lg text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => setCurrentPage('contact')}
            className="text-[#000066] font-semibold inline-flex items-center gap-2 group hover:gap-3 transition-all hover:text-[#000088]"
          >
            GET QUOTE <ArrowRight size={20} />
          </button>
        </div> 

        {/* Right Image Content */}
         <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
          <div className="relative overflow-hidden h-[500px] rounded-md shadow-lg group">
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#000066]/20 group-hover:bg-[#000066]/10 transition-colors duration-300" />
          </div>
        </div>
      </div>
    ))}
  </div>
</section> 
</div> 

); 


const ContactPage = () => (
  <div className="pt-20">
    {/* Contact Hero */}
    <section 
      className="py-32 px-4 relative"
      style={{
        
        backgroundImage: `linear-gradient(rgba(0,0,102,0.8), rgba(0,0,102,0.9)), url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'bluescale(100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
         <h1 className="text-blue-700 text-6xl md:text-7xl font-black mb-8 tracking-tight leading-none">
          Book a<br />
          <span className="text-gray-400">Shipment</span>
        </h1>
        <p className="text-xl text-gray-950 leading-relaxed">
          Ready to ship? Get in touch with us and we'll handle the rest with our expert logistics team.
        </p>
      </div>
    </section>

    {/* Contact Form */}
    <section className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <div>
            <h2 className="text-4xl font-black mb-8 text-[#000066]">Get Your Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 focus:border-[#000066] transition-colors text-lg bg-gray-50 focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 focus:border-[#000066] transition-colors text-lg bg-gray-50 focus:bg-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold mb-3">Pickup City *</label>
                  <input
                    type="text"
                    name="pickupCity"
                    value={formData.pickupCity}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 focus:border-[#000066] transition-colors text-lg bg-gray-50 focus:bg-white"
                    placeholder="Where should we pick up?"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-3">Drop Location *</label>
                  <input
                    type="text"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 focus:border-[#000066] transition-colors text-lg bg-gray-50 focus:bg-white"
                    placeholder="Where should we deliver?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full p-4 border-2 border-gray-300 focus:border-[#000066] transition-colors text-lg resize-none bg-gray-50 focus:bg-white"
                  placeholder="Package details, special instructions, preferred pickup time, weight, dimensions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#000066] text-white py-6 text-xl font-bold tracking-wide hover:bg-[#000088] transition-colors duration-300 inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                SUBMIT REQUEST
                <ArrowRight size={24} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#000066] text-white p-12">
            <h3 className="text-3xl font-black mb-8">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Email Us</h4>
                  <p className="text-gray-300">panindiahyd@gmail.com</p>
                  
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Call Us</h4>
                  <p className="text-gray-300">+91 9966660086</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Business Hours</h4>
                  <p className="text-gray-300">Mon-Fri: 9AM - 12:30PM</p>
                  <p className="text-gray-300">Sat-Sun: 8AM - 6PM</p>
                  <p className="text-gray-300 text-sm mt-2">Emergency service available 24/7</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-600">
              <h4 className="text-xl font-bold mb-4">Why Choose PanIndiaLogistics?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Free quotes and consultations</li>
                <li>• Same-day pickup available</li>
                <li>• Real-time tracking included</li>
                <li>• Fully insured shipments</li>
                <li>• 24/7 customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Quick Contact */}
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-[#000066]">
            Need Immediate Help?
          </h2>
          <p className="text-xl text-gray-600">
            Our customer service team is standing by to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <Phone size={48} className="mx-auto mb-6 text-[#000066]" />
            <h3 className="text-2xl font-bold mb-4 text-[#000066]">Call Now</h3>
            <p className="text-gray-600 mb-4">Speak directly with our logistics experts</p>
            <p className="text-xl font-bold">+91 9966660086</p>
          </div>

          <div className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <Mail size={48} className="mx-auto mb-6 text-[#000066]" />
            <h3 className="text-2xl font-bold mb-4 text-[#000066]">Email Support</h3>
            <p className="text-gray-600 mb-4">Get detailed responses within 2 hours</p>
            <p className="text-xl font-bold">panindiahyd@gmail.com</p>
          </div>

          <div className="text-center p-8 bg-[#000066] text-white shadow-lg hover:shadow-xl transition-shadow">
            <Clock size={48} className="mx-auto mb-6 text-white" />
            <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
            <p className="text-gray-300 mb-4">Urgent shipments handled 24/7</p>
            <p className="text-xl font-bold">Available Always</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
const Footer = () => (
  <footer className="bg-blue-950 text-white py-20 px-4">
  
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          {/* Image Logo */}
          {/* <img src={panIndiaLogo} alt="PanIndia Logistics Logo" className="h-20 mb-6" /> */}
          <img src="/assets/panindia.jpg" alt="PanIndia Logo" className="h-20 mb-6" />


          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Your trusted partner for reliable, fast and modern transport logistics nationwide.
            We deliver excellence in every shipment.
          </p>
          <div className="flex gap-4">
            {/* <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
              <Globe size={20} />
            </div> */}
            <a
              href="panindialogistics.in"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Globe size={20} />
            </a>
            <a
              href="mailto:panindiahyd@gmail.com"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Mail size={20} />
            </a>
            <a
              href="9966660086"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Phone size={20} />
            </a>
           
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <div className="space-y-3">
            {[
              { key: 'home', label: 'Home' },
              { key: 'about', label: 'About Us' },
              { key: 'services', label: 'Our Services' },
              { key: 'contact', label: 'Contact' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key as Page)}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6">Services</h4>
          <div className="space-y-3 text-gray-300">
            <p className="hover:text-white transition-colors cursor-pointer">Parcel Delivery</p>
            <p className="hover:text-white transition-colors cursor-pointer">Interstate Freight</p>
            <p className="hover:text-white transition-colors cursor-pointer">Express Transport</p>
            <p className="hover:text-white transition-colors cursor-pointer">Business Logistics</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg text-gray-300">
            © 2025 PanIndia Logistics(panindialogistics.in). All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-300">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);


  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
      <Navigation />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}

export default App;

