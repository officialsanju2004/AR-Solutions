import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Shield, TrendingUp, Globe, Smartphone, CreditCard, Search, BarChart, Users, Package, Star, ArrowRight, Check, Sparkles, Lock, Truck, MousePointer, Eye, Target, Menu, ChevronDown, ArrowRightCircle } from 'lucide-react';
import Footer from './Footer';
import image6 from "../images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
const SEO = () => {
        const navigate=useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
   
    const handleChangeSelection=(e)=>{
    const selectedValue=e.target.value;
    if(selectedValue){
      navigate(selectedValue);
    }
    };
       const menuItems = [
          "Our Services",
          "Our Products",
          "Our Work",
          "Industries",
          "The Agency",
        ];  useEffect(()=>{
            AOS.init({duration:800});
          },[]);
  return (
    <>
        {/* Header */}
         <header className="w-full bg-[#f7f7f7] py-4" data-aos="slide-down">
           <div className="mx-auto max-w-7xl px-4">
             <nav className="flex items-center justify-between rounded-2xl bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-md">
               {/* Logo */}
               <div onClick ={()=>{navigate('/')}}className="flex items-center gap-2">
                 <img
                   src={image6}
                   alt="Growth Flow Media"
                   className="h-12 sm:h-16 md:h-20 w-auto "
                 />
               </div>
   
               {/* Mobile Menu Button */}
               <button 
                 className="lg:hidden p-2"
                 onClick={() => setMenuOpen(!menuOpen)}
               >
                 <Menu size={24} />
               </button>
   
               {/* Menu - Desktop */}
               <ul className="hidden lg:flex items-center gap-4 xl:gap-8 text-sm xl:text-[15px] font-medium text-gray-700">
                 <li className="group relative cursor-pointer">
                     <div onClick={()=>{navigate('/')}}className="flex items-center gap-1 hover:text-black whitespace-nowrap">
                       Home
                       
                     </div>
   
                   </li>
                   <li>
                     <select onChange={handleChangeSelection}className='w-30'>
                        <option value="">Our Services</option>
               <option value="/webdesign">Website Design</option>
               <option value="/ecommerce">ECommerce Websites</option>
               <option value="/service-site">Service Website</option>
               <option value="/branding&logodesign">Branding & Logo Design</option>
               <option value="/digitalmarketing">Digital Marketing</option>
               <option value="/seo">Search Engine Optimisation</option>
               <option value="/googleads">Google Ads Management</option>
               <option value="/metaads">Meta Ads Management</option>
          
               <option value="/conversionrate">Conversion Rate Optimization</option>
               <option value="/hosting">Managed Hosting</option>
               <option value="/gohigh">Go High Level CRM</option>
               <option value="/ai">AI Agents / Automation Development</option>
               <option value="/whitelabel">White Label Marketing</option>
               <option value="/lead">Lead Generation</option>
   
                     </select>
                   </li>
                   
                   
                    <li onClick={()=>{navigate('/contact')}}className="group relative cursor-pointer">
                     <div className="flex items-center gap-1 hover:text-black whitespace-nowrap">
                      Contact us 
                       
                     </div>
   
           
                   </li>
         
               </ul>
   
               {/* CTA Button */}
               <button className="hidden lg:flex gap-2 rounded-xl bg-[#e36a2e] px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28] whitespace-nowrap" onClick={()=>{navigate('/contact')}}>
                 Get Started Now <span><ArrowRightCircle size={18} className='text-black'/></span>
               </button>
             </nav>
   
             {/* Mobile Menu */}
             {menuOpen && (
               <div className="lg:hidden mt-4 bg-white rounded-2xl p-4 shadow-lg">
                 <ul className="cursor-pointer space-y-3">
                    <li  onClick={()=>{navigate('/')}}className="py-2 border-b border-gray-100">
                      Home
                     </li>
                  
                     <li className="py-2 border-b border-gray-100">
                     <select onChange={handleChangeSelection}className='w-30 py-2 border-b border-gray-100'>
                        <option value="">Our Services</option>
               <option value="/webdesign">Website Design</option>
               <option value="/ecommerce">ECommerce Websites</option>
               <option value="/service-site">Service Website</option>
               <option value="/branding&logodesign">Branding & Logo Design</option>
               <option value="/digitalmarketing">Digital Marketing</option>
               <option value="/seo">Search Engine Optimisation</option>
               <option value="/googleads">Google Ads Management</option>
               <option value="/metaads">Meta Ads Management</option>
          
               <option value="/conversionrate">Conversion Rate Optimization</option>
               <option value="/hosting">Managed Hosting</option>
               <option value="/gohigh">Go High Level CRM</option>
               <option value="/ai">AI Agents / Automation Development</option>
               <option value="/whitelabel">White Label Marketing</option>
               <option value="/lead">Lead Generation</option>
   
                     </select>
                     </li>
                 
                   <li>
                     <li  onClick={()=>{navigate('/contact')}}className="py-2 border-b border-gray-100">
                     Contact
                     </li>
                     <button className="w-full flex justify-center gap-2 rounded-xl bg-[#e36a2e] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28]" onClick={()=>{navigate('/contact')}}>
                       Get Started Now <ArrowRightCircle size={18} className='text-black'/>
                     </button>
                   </li>
                 </ul>
               </div>
             )}
           </div>
         </header>
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            SEO <span className="text-indigo-600">Optimization</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dominate search engine results with our comprehensive SEO strategies and technical expertise
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-transform hover:scale-[1.02] duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Comprehensive SEO Strategy</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                We implement holistic SEO strategies that combine technical optimization, content excellence, and authoritative link building to improve your search visibility and drive sustainable organic growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-transform hover:scale-[1.02] duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical SEO Foundation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Site speed optimization and Core Web Vitals enhancement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Mobile-first indexing and responsive design optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Structured data markup and schema implementation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">SEO Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Organic Traffic Growth</span>
                    <span className="font-bold">+150%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Keyword Rankings</span>
                    <span className="font-bold">+300</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Domain Authority</span>
                    <span className="font-bold">+25</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Strategy</h3>
              <p className="text-gray-700 mb-6">
                Our content-first approach focuses on creating valuable, relevant content that addresses user intent and builds authority:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="text-lg font-bold text-indigo-800 mb-2">Topic Clusters</div>
                  <div className="text-sm text-indigo-700">Comprehensive content pillars</div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="text-lg font-bold text-indigo-800 mb-2">Intent Mapping</div>
                  <div className="text-sm text-indigo-700">User-focused content creation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Pillars */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">SEO Strategy Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO</h3>
              <p className="text-gray-600 mb-4">Website infrastructure optimization for search engine crawling and indexing</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Site speed optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Mobile responsiveness</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Structured data</span>
                </li>
              </ul>
            </div>
           
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-4xl mb-6">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Content SEO</h3>
              <p className="text-gray-600 mb-4">Strategic content creation and optimization for target keywords</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Keyword research</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Content optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Topic clustering</span>
                </li>
              </ul>
            </div>
           
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-4xl mb-6">🔗</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authority Building</h3>
              <p className="text-gray-600 mb-4">Link building and brand authority development</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Link acquisition</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Brand mentions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-sm">Local SEO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 shadow-2xl transform transition-transform hover:scale-[1.01] duration-300">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Dominate Search Results?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Let's implement an SEO strategy that drives sustainable organic growth and positions your brand as an industry authority.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300" onClick={()=>navigate('/contact')}>
              Let's Start
            </button>
          </div>
        </div>
        
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SEO;