'use client'

import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBriefcase,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const useMetricsAnimation = () => {
        useEffect(() => {
            const metricsSection = document.getElementById('metrics');
            if (!metricsSection) return;

            const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const numbers = metricsSection.querySelectorAll<HTMLElement>('.text-4xl');

                numbers.forEach((number) => {
                    const raw = number.innerText;
                    const targetNumber = parseInt(raw.replace(/[^0-9]/g, '')) || 0;
                    const plusSign = raw.includes('+') ? '+' : '';
                    const percentSign = raw.includes('%') ? '%' : '';

                    let currentNumber = 0;
                    const increment = Math.ceil(targetNumber / 50);

                    const interval = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        currentNumber = targetNumber;
                        clearInterval(interval);
                    }
                    number.innerText = `${currentNumber}${plusSign}${percentSign}`;
                    }, 30);
                });

                observer.unobserve(metricsSection);
                });
            },
            { threshold: 0.5 }
            );

            observer.observe(metricsSection);

            return () => observer.disconnect();
        }, []);
        };
    return (

<div className="font-poppins">
    <header id="header" className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
            <div className="flex items-center">
                <span className="flex items-center cursor-pointer">
                    <div className="text-green-400 font-bold text-2xl mr-2">Scuber<span className="text-blue-500">.Pro</span></div>
                    <span className="text-gray-500 text-xs hidden md:block">See It. Build It. Love It.</span>
                </span>
            </div>
            <nav className="hidden lg:flex space-x-6">
                <span className="text-gray-800 hover:text-green-400 font-medium cursor-pointer">Home</span>
                <span className="text-gray-600 hover:text-green-400 font-medium cursor-pointer">How It Works</span>
                <span className="text-gray-600 hover:text-green-400 font-medium cursor-pointer">For Homeowners</span>
                <span className="text-gray-600 hover:text-green-400 font-medium cursor-pointer">For Pros</span>
                <span className="text-gray-600 hover:text-green-400 font-medium cursor-pointer">Pricing</span>
                <span className="text-gray-600 hover:text-green-400 font-medium cursor-pointer">Blog</span>
                <span className="text-gray-600 hover:text-green-400 font-medium cursor-pointer">Login</span>
                <span className="text-blue-500 hover:text-blue-700 font-medium cursor-pointer">Sign Up</span>
            </nav>
            <div className="lg:hidden">
                <button className="text-gray-500 focus:outline-none">
                    <i className="fa-solid fa-bars text-xl"></i>
                </button>
            </div>
        </div>
    </header>

    <div id="sticky-cta" className="fixed bottom-6 right-6 z-40">
        <span className="bg-green-400 hover:bg-opacity-90 text-white font-medium px-5 py-3 rounded-full shadow-lg flex items-center cursor-pointer">
            <span>Get Started</span>
            <i className="fa-solid fa-arrow-right ml-2"></i>
        </span>
    </div>

    <section id="hero" className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-white to-scuber-gray h-[800px]">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                    Instant, AI-powered home-improvement ideas—then matched pros in one click.
                </h1>
            </div>
            
            <div id="before-after-slider" className="relative max-w-5xl mx-auto h-[400px] rounded-xl overflow-hidden shadow-xl mb-8">
                <img className="absolute inset-0 w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0788fea708-efef21b3ea418ea4395b.png" alt="before photo of a suburban backyard in Dallas, Texas with dry grass and minimal landscaping"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white z-10 pointer-events-none">
                    <div className="text-center">
                        <p className="text-xl font-medium mb-2">Drag the slider to reveal the AI transformation</p>
                        <i className="fa-solid fa-arrow-left-right text-2xl animate-pulse"></i>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 w-1/2 z-20">
                    <div className="h-full relative overflow-hidden">
                        <img className="absolute inset-0 w-[200%] h-full object-cover object-left" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/21387f9a2d-c8f5a4ee77f5bdcf6bc5.png" alt="after photo of the same yard transformed with lush green grass, garden beds with colorful plants, stone pathway, and small water feature"/>
                    </div>
                </div>
                <div className="absolute inset-y-0 z-30 w-1 bg-white left-1/2 transform -translate-x-1/2">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <i className="fa-solid fa-arrows-left-right text-blue-500"></i>
                    </div>
                </div>
            </div>
            
            <div id="get-started" className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
                <span className="bg-green-400 hover:bg-opacity-90 text-white font-medium px-8 py-4 rounded-lg shadow-md w-full md:w-auto flex items-center justify-center cursor-pointer">
                    <span>Upload My Photo → Get Free Concept</span>
                </span>
                <span className="bg-white border border-scuber-blue text-blue-500 hover:bg-scuber-blue hover:text-white font-medium px-8 py-4 rounded-lg shadow-sm w-full md:w-auto flex items-center justify-center transition duration-300 cursor-pointer">
                    <span>I'm a Pro—See Plans</span>
                </span>
            </div>
        </div>
    </section>

    <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Scuber Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-scuber-gray rounded-full flex items-center justify-center mb-4">
                        <i className="fa-solid fa-camera text-3xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Snap / Upload</h3>
                    <p className="text-gray-600">Upload your property photos or let Scuber auto-fetch them for you.</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-scuber-gray rounded-full flex items-center justify-center mb-4">
                        <i className="fa-solid fa-wand-magic-sparkles text-3xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Generates Concepts</h3>
                    <p className="text-gray-600">Get tailored improvement concepts in seconds with our advanced AI.</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-scuber-gray rounded-full flex items-center justify-center mb-4">
                        <i className="fa-solid fa-handshake text-3xl text-blue-500"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Get Quotes from Pros</h3>
                    <p className="text-gray-600">Connect with vetted professionals and book directly through our platform.</p>
                </div>
            </div>
        </div>
    </section>

          <section id="value-proposition" className="py-16 bg-scuber-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Homeowners Block */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-400 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faHouse} className="text-2xl text-green-400" />
              </div>
              <h3 className="text-2xl font-bold">For Homeowners</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-400 mt-1 mr-3" />
                <span className="text-gray-700">
                  Free AI design concepts tailored to your property
                </span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-400 mt-1 mr-3" />
                <span className="text-gray-700">
                  Zero-commission booking with transparent pricing
                </span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-green-400 mt-1 mr-3" />
                <span className="text-gray-700">
                  Verified, reviewed professionals in your area
                </span>
              </li>
            </ul>
            <span className="mt-8 inline-block bg-green-400 text-white font-medium px-6 py-3 rounded-lg cursor-pointer">
              Upload Photo Now
            </span>
          </div>

          {/* Professionals Block */}
          <div id="pro-section" className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-scuber-blue bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={faBriefcase} className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">For Professionals</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-700">
                  flat monthly subscription—keep 100% of job revenue
                </span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-700">
                  Ready-to-close leads with photos, measurements, and cost hints
                </span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheck} className="text-blue-500 mt-1 mr-3" />
                <span className="text-gray-700">
                  In-app chat &amp; scheduling tools to streamline your business
                </span>
              </li>
            </ul>
            <span className="mt-8 inline-block bg-scuber-blue text-white font-medium px-6 py-3 rounded-lg cursor-pointer">
              See Pro Plans
            </span>
          </div>
        </div>
      </div>
    </section>

    <section id="social-proof" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real Projects, Real Results</h2>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center bg-scuber-gray px-4 py-2 rounded-lg">
                    <i className="fa-solid fa-certificate text-green-400 mr-2"></i>
                    <span className="font-medium">Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center bg-scuber-gray px-4 py-2 rounded-lg">
                    <i className="fa-solid fa-store text-green-400 mr-2"></i>
                    <span className="font-medium">Locally-owned</span>
                </div>
                <div className="flex items-center bg-scuber-gray px-4 py-2 rounded-lg">
                    <i className="fa-solid fa-ruler-combined text-green-400 mr-2"></i>
                    <span className="font-medium">AI-verified measurements</span>
                </div>
            </div>
            
            <div id="project-gallery" className="relative max-w-5xl mx-auto mb-12">
                <div className="overflow-hidden">
                    <div className="flex space-x-6 overflow-x-auto pb-4">
                        <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-48 relative">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/66ed97499c-1557191612ecf0aeaec5.png" alt="completed landscaping project with garden beds and pathway"/>
                                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center">
                                    <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                                    <span className="font-medium">4.9</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-1">Backyard Transformation</h4>
                                <p className="text-gray-600 text-sm mb-2">Dallas, TX</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>By Green Thumb Landscaping</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-48 relative">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f85bd99614-6478fe51931893bce301.png" alt="modern patio design with outdoor furniture and fire pit"/>
                                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center">
                                    <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                                    <span className="font-medium">5.0</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-1">Patio Renovation</h4>
                                <p className="text-gray-600 text-sm mb-2">Fort Worth, TX</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>By Outdoor Living Experts</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="h-48 relative">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c69eb8327e-263197bc202ba630cf7d.png" alt="water feature with small pond and waterfall in backyard"/>
                                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center">
                                    <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                                    <span className="font-medium">4.8</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-1">Water Feature Installation</h4>
                                <p className="text-gray-600 text-sm mb-2">Plano, TX</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>By Aqua Design Pros</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none">
                    <i className="fa-solid fa-chevron-left text-gray-600"></i>
                </button>
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none">
                    <i className="fa-solid fa-chevron-right text-gray-600"></i>
                </button>
            </div>
            
            <div className="max-w-3xl mx-auto bg-scuber-gray p-8 rounded-xl">
                <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                        <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Customer" className="w-16 h-16 rounded-full object-cover"/>
                    </div>
                    <div>
                        <div className="flex items-center mb-2">
                            <div className="flex text-yellow-400 mr-2">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <span className="text-gray-600">5.0</span>
                        </div>
                        <p className="text-gray-800 text-lg italic mb-4">"I couldn't believe how quickly Scuber.Pro transformed my boring backyard into a stunning outdoor oasis. The AI concept was spot on, and the pro they matched me with brought it to life perfectly!"</p>
                        <p className="font-medium">Sarah Johnson, Dallas Homeowner</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="metrics" className="py-12 bg-scuber-blue text-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                <div>
                    <div className="text-4xl font-bold mb-2">1,000+</div>
                    <p>Dallas yards visualized</p>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <p>AI concepts approved</p>
                </div>
                <div>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <p>Job revenue kept by pros</p>
                </div>
            </div>
        </div>
    </section>

    <section id="industries" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Industries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-40 relative">
                        <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6a4d83406c-f16974a9b01ad3b1a2e9.png" alt="landscaping with garden and flowers"/>
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="font-semibold">Landscaping</h4>
                        <span className="inline-block bg-green-400 bg-opacity-20 text-green-400 text-xs px-2 py-1 rounded-full mt-2">Available Now</span>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-40 relative">
                        <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d6198413a0-0e3c40657f86d3991627.png" alt="modern home windows"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-medium">Coming Soon</span>
                        </div>
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="font-semibold">Windows</h4>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-40 relative">
                        <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cb0112e473-d13f4b7ec745e92d48be.png" alt="house gutters installation"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-medium">Coming Soon</span>
                        </div>
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="font-semibold">Gutters</h4>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-40 relative">
                        <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/02e92f20b2-3947e0f2dea43051cb37.png" alt="house exterior painting"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-medium">Coming Soon</span>
                        </div>
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="font-semibold">Painting</h4>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-40 relative">
                        <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f64123d9f7-e0a947632a6d72e887f8.png" alt="modern roof installation"/>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white font-medium">Coming Soon</span>
                        </div>
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="font-semibold">Roofing</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="subscription" className="py-16 bg-scuber-gray">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Subscription Plans for Pros</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Join Scuber.Pro and start receiving quality leads with no commission fees</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 border-b">
                        <h3 className="text-xl font-bold mb-2">Free Trial</h3>
                        <div className="flex items-end">
                            <span className="text-3xl font-bold">$0</span>
                            <span className="text-gray-600 ml-1">/month</span>
                        </div>
                        <p className="text-gray-600 mt-2">14 days to explore</p>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Limited lead quota</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Basic profile</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Standard support</span>
                            </li>
                        </ul>
                        <span className="mt-8 block text-center bg-white border border-scuber-blue text-blue-500 font-medium px-6 py-3 rounded-lg hover:bg-scuber-blue hover:text-white transition duration-300 cursor-pointer">
                            Start Free Trial
                        </span>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
                    <div className="absolute top-0 right-0 bg-green-400 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                        Popular
                    </div>
                    <div className="p-6 border-b">
                        <h3 className="text-xl font-bold mb-2">Growth</h3>
                        <div className="flex items-end">
                            <span className="text-3xl font-bold">$99</span>
                            <span className="text-gray-600 ml-1">/month</span>
                        </div>
                        <p className="text-gray-600 mt-2">Billed monthly</p>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Standard lead quota</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Enhanced profile</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Priority support</span>
                            </li>
                        </ul>
                        <span className="mt-8 block text-center bg-scuber-blue text-white font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 cursor-pointer">
                            Choose Growth
                        </span>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 border-b">
                        <h3 className="text-xl font-bold mb-2">Power</h3>
                        <div className="flex items-end">
                            <span className="text-3xl font-bold">$249</span>
                            <span className="text-gray-600 ml-1">/month</span>
                        </div>
                        <p className="text-gray-600 mt-2">Billed monthly</p>
                    </div>
                    <div className="p-6">
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Unlimited lead quota</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Featured profile</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-check text-green-400 mt-1 mr-3"></i>
                                <span className="text-gray-700">Auto-accept feature</span>
                            </li>
                        </ul>
                        <span className="mt-8 block text-center bg-white border border-scuber-blue text-blue-500 font-medium px-6 py-3 rounded-lg hover:bg-scuber-blue hover:text-white transition duration-300 cursor-pointer">
                            Choose Power
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-8">
                <span className="inline-flex items-center text-blue-500 font-medium hover:underline cursor-pointer">
                    <span>Compare All Features</span>
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                </span>
            </div>
        </div>
    </section>

    <section id="resource-hub" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-scuber-gray rounded-xl overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">Latest from Our Blog</h3>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="h-48 relative">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/68264fbc94-25013615a116a89ab8c4.png" alt="drought-tolerant plants in a Texas garden"/>
                            </div>
                            <div className="p-4">
                                <span className="text-xs text-green-400 font-medium uppercase">Landscaping</span>
                                <h4 className="font-semibold text-lg mt-1 mb-2">Top 5 drought-tolerant plants for Texas summers</h4>
                                <p className="text-gray-600 text-sm mb-3">Learn which plants thrive in hot Texas weather while keeping your water bill low.</p>
                                <span className="text-blue-500 font-medium hover:underline flex items-center cursor-pointer">
                                    <span>Read Article</span>
                                    <i className="fa-solid fa-arrow-right ml-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-scuber-gray rounded-xl overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4">AI-Powered Cost Estimator</h3>
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-scuber-blue bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                                    <i className="fa-solid fa-calculator text-2xl text-blue-500"></i>
                                </div>
                                <div>
                                    <h4 className="font-semibold">See budget before you commit</h4>
                                    <p className="text-gray-600 text-sm">Get accurate cost estimates for your project</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-scuber-blue">
                                        <option>Landscaping</option>
                                        <option>Patio Installation</option>
                                        <option>Water Feature</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-scuber-blue" placeholder="e.g. 500"/>
                                </div>
                            </div>
                            <span className="block text-center bg-scuber-blue text-white font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 cursor-pointer">
                                Calculate Estimate
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="local-focus" className="py-16 bg-scuber-gray">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4">Now Serving Dallas-Fort Worth</h3>
                        <p className="text-gray-600 mb-6">We're expanding to more cities soon. Tell us where to launch next!</p>
                        
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-scuber-blue" placeholder="email@example.com"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your City</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-scuber-blue" placeholder="e.g. Houston, TX"/>
                            </div>
                            <button type="submit" className="bg-green-400 text-white font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 w-full">
                                Submit Request
                            </button>
                        </form>
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <img className="absolute inset-0 w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6e3ac96e71-8fce6dff75f249cc6422.png" alt="map of Dallas-Fort Worth area with highlighted service zones"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="app-download" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Get the Scuber.Pro App</h2>
                    <p className="text-gray-600 mb-6">Manage your projects on the go. Available for homeowners and professionals.</p>
                    <div className="flex flex-wrap gap-4">
                        <span className="flex items-center bg-black text-white px-6 py-3 rounded-lg cursor-pointer">
                            <i className="fa-brands fa-apple text-2xl mr-3"></i>
                            <div>
                                <div className="text-xs">Download on the</div>
                                <div className="text-lg font-medium">App Store</div>
                            </div>
                        </span>
                        <span className="flex items-center bg-black text-white px-6 py-3 rounded-lg cursor-pointer">
                            <i className="fa-brands fa-google-play text-2xl mr-3"></i>
                            <div>
                                <div className="text-xs">Get it on</div>
                                <div className="text-lg font-medium">Google Play</div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative w-64 h-[500px]">
                        <img className="absolute inset-0 w-full h-full object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5dd7965866-8286763620910a6577ee.png" alt="smartphone mockup showing Scuber.Pro app interface with home improvement visualization"/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="newsletter" className="py-12 bg-scuber-blue text-white">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">Get monthly home-improvement tips and promo codes</h2>
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <input type="email" className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none" placeholder="Your email address"/>
                    <button type="submit" className="bg-green-400 text-white font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 whitespace-nowrap">
                        Subscribe Now
                    </button>
                </form>
                <p className="text-sm mt-4 text-blue-100">We respect your privacy. Unsubscribe at any time.</p>
            </div>
        </div>
    </section>

    <footer id="footer" className="bg-gray-800 text-gray-300 pt-12 pb-6">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                    <div className="text-white font-bold text-2xl mb-4">Scuber<span className="text-blue-500">.Pro</span></div>
                    <p className="mb-4">See It. Build It. Love It.</p>
                    <div className="flex space-x-4">
                        <span className="text-gray-400 hover:text-white cursor-pointer">
                            <i className="fa-brands fa-facebook-f"></i>
                        </span>
                        <span className="text-gray-400 hover:text-white cursor-pointer">
                            <i className="fa-brands fa-twitter"></i>
                        </span>
                        <span className="text-gray-400 hover:text-white cursor-pointer">
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                        <span className="text-gray-400 hover:text-white cursor-pointer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </span>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-white font-medium text-lg mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><span className="hover:text-white cursor-pointer">Home</span></li>
                        <li><span className="hover:text-white cursor-pointer">How It Works</span></li>
                        <li><span className="hover:text-white cursor-pointer">For Homeowners</span></li>
                        <li><span className="hover:text-white cursor-pointer">For Pros</span></li>
                        <li><span className="hover:text-white cursor-pointer">Pricing</span></li>
                        <li><span className="hover:text-white cursor-pointer">Blog</span></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-white font-medium text-lg mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><span className="hover:text-white cursor-pointer">Privacy Policy</span></li>
                        <li><span className="hover:text-white cursor-pointer">Terms of Service</span></li>
                        <li><span className="hover:text-white cursor-pointer">Do Not Sell My Info</span></li>
                        <li><span className="hover:text-white cursor-pointer">Accessibility</span></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-white font-medium text-lg mb-4">Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <i className="fa-solid fa-location-dot mt-1 mr-2"></i>
                            <span>123 Main St, Dallas, TX 75001</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-phone mt-1 mr-2"></i>
                            <span>(214) 555-1234</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa-solid fa-envelope mt-1 mr-2"></i>
                            <span>hello@scuber.pro</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p>© 2023 Scuber.Pro. All rights reserved.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <i className="fa-solid fa-shield-alt text-green-400 mr-2"></i>
                        <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fa-solid fa-award text-green-400 mr-2"></i>
                        <span>BBB Accredited</span>
                    </div>
                    <div className="flex items-center">
                        <i className="fa-solid fa-lock text-green-400 mr-2"></i>
                        <span>GDPR Compliant</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    );
}