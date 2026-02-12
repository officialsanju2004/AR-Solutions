import React from 'react';
import { useEffect, useState } from 'react';
import image10 from "../images/logo.jpg";
import image6 from '../images/logo.jpg'
import {Menu,ChevronDown,ChevronRight,ArrowRightCircle,Phone,Mail, MapPin, Clock }from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import {  Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
export default function Contact() {
    const menuItems = [
            "Our Services",
            "Our Products",
            "Our Work",
            "Industries",
            "The Agency",
          ];
          useEffect(()=>{
            AOS.init({duration:800});
          },[]);
          const navigate=useNavigate();
const handleChangeSelection=(e)=>{
const selectedValue=e.target.value;
if(selectedValue){
  navigate(selectedValue);
}
};
           const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div>
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
      {/* Contact Us Section - Professional Contact Form */}
<section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
  {/* Background Decorations */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full translate-x-1/2 translate-y-1/2 opacity-20 blur-3xl"></div>
 
  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
      <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
        📞 GET IN TOUCH
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Ready to <span className="text-orange-500">Grow Your Business?</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        Have a project in mind? We'd love to hear about it. Let's discuss how we can help you achieve your goals.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left Side - Contact Information & Benefits */}
      <div data-aos="fade-right" className="space-y-8">
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
          
            <a href="tel:1800285527" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-lg">
              1800 285 527
            </a>
            
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
         
            <a href="mailto:support@growthflowmedia.com" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm break-all">
              support@growthflowmedia.com
            </a>
           
          </div>
        </div>

       

        {/* Business Hours */}
       
        {/* Social Connect */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <Facebook />, color: 'bg-blue-600', hover: 'bg-blue-700', label: 'Facebook' },
              { icon: <Twitter />, color: 'bg-sky-500', hover: 'bg-sky-600', label: 'Twitter' },
              { icon: <Instagram />, color: 'bg-pink-600', hover: 'bg-pink-700', label: 'Instagram' },
              { icon: <Linkedin />, color: 'bg-blue-700', hover: 'bg-blue-800', label: 'LinkedIn' },
              { icon: <Youtube />, color: 'bg-red-600', hover: 'bg-red-700', label: 'YouTube' },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`w-10 h-10 ${social.color} hover:${social.hover} rounded-lg flex items-center justify-center text-white transition-all transform hover:scale-110`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div data-aos="fade-left" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
        <h1 className="text-3xl sm:text-4xl text-orange-500  md:text-5xl font-bold mb-4">Contact Us</h1>
         <div data-aos="slide-right" className="bg-black border rounded-lg p-4 sm:p-6 lg:p-8 mt-8 md:mt-0">
                      
                      <div className="flex items-center gap-2 mb-4 sm:mb-6">
                        <img
                          src={image10}
                          alt="Growth Flow Media"
                          className="h-12 sm:h-16 lg:h-20 w-auto "
                        />
                      </div>
        
                      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                        />
                   
                      
                         <input
                          type="tel"
                          placeholder="Prefered call back time"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                        />
                      </div>
        
                      <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">How We May Help You?</p>
        
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 max-h-60 overflow-y-auto pr-2">
                        {[
                          'Website Design',
            'ECommerce Websites',
            'Service Website',
            'Branding & Logo Design',
            'Digital Marketing',
            'Search Engine Optimisation',
            'Google Ads Management',
            'Meta Ads Management',
            'Content Marketing',
            'Conversion Rate Optimization',
            'Managed Hosting',
            'Go High Level CRM',
            'Ai Agents/Automation Development',
            'White Label Marketing',
            'Lead Generation'
                        ].map((option, i) => (
                          <label key={i} className="flex items-center gap-3 bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 rounded cursor-pointer hover:bg-gray-800">
                            <input type="radio" name="service" className="w-4 h-4" />
                            <span className="text-black text-xs sm:text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
        
                      <button className="w-full bg-orange-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-orange-600 text-base sm:text-lg">
                        Submit Request
                      </button>
                    </div>
            

          


       
      </div>
    </div>


  </div>
</section>
<Footer/>
    </div>
  )
}
