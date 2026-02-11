import React from 'react';
import { useEffect, useState } from 'react';
import image6 from '../images/logo.jpg'
import {Menu,ChevronDown,ChevronRight,ArrowRightCircle,Phone,Mail, MapPin, Clock }from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import {  Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import Footer from './Footer';
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
           const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div>
         <header className="w-full bg-[#f7f7f7] py-4" data-aos="slide-down">
                <div className="mx-auto max-w-7xl px-4">
                  <nav className="flex items-center justify-between rounded-2xl bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-md">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                      <img
                        src={image6}
                        alt="Growth Flow Media"
                        className="h-12 sm:h-16 md:h-20 w-auto"
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
                      {menuItems.map((item, index) => (
                        <li key={index} className="group relative cursor-pointer">
                          <div className="flex items-center gap-1 hover:text-black whitespace-nowrap">
                            {item}
                            <ChevronDown size={14} className="hidden sm:inline" />
                          </div>
        
                          {/* Dropdown */}
                          <div className="absolute left-0 top-8 hidden w-40 rounded-xl bg-white p-4 shadow-lg group-hover:block">
                            <p className="text-sm text-gray-600 hover:text-black">
                              Option 1
                            </p>
                            <p className="text-sm text-gray-600 hover:text-black">
                              Option 2
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
        
                    {/* CTA Button */}
                    <button className="hidden lg:flex gap-2 rounded-xl bg-[#e36a2e] px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28] whitespace-nowrap">
                      Get Started Now <span><ArrowRightCircle size={18} className='text-black'/></span>
                    </button>
                  </nav>
        
                  {/* Mobile Menu */}
                  {menuOpen && (
                    <div className="lg:hidden mt-4 bg-white rounded-2xl p-4 shadow-lg">
                      <ul className="space-y-3">
                        {menuItems.map((item, index) => (
                          <li key={index} className="py-2 border-b border-gray-100">
                            {item}
                          </li>
                        ))}
                        <li>
                          <button className="w-full flex justify-center gap-2 rounded-xl bg-[#e36a2e] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28]">
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
            <p className="text-gray-600 text-sm mb-3">Mon-Fri 9am-6pm</p>
            <a href="tel:1800285527" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-lg">
              1800 285 527
            </a>
            <p className="text-gray-500 text-sm mt-2">07 3067 8910</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-3">24/7 Support</p>
            <a href="mailto:support@ardigitalsolutions.com.au" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm break-all">
              support@ardigitalsolutions.com.au
            </a>
            <p className="text-gray-500 text-sm mt-2">info@ardigitalsolutions.com.au</p>
          </div>
        </div>

        {/* Office Locations */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-500" />
            Our Offices
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇦🇺</span>
                <span className="font-semibold text-gray-900">Australia</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Level 12, 123 Eagle Street,<br />
                Brisbane QLD 4000, Australia
              </p>
              <p className="text-gray-500 text-xs mt-2">*By appointment only</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇮🇳</span>
                <span className="font-semibold text-gray-900">India</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                SCO 103, 3rd Floor, District Shopping Complex,<br />
                B Block, Ranjit Avenue, Amritsar, Punjab
              </p>
              <p className="text-gray-500 text-xs mt-2">*Walk-ins welcome</p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6" />
            <h3 className="text-xl font-bold">Business Hours</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-orange-100 text-sm">Monday - Friday</p>
              <p className="font-semibold">9:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="text-orange-100 text-sm">Saturday</p>
              <p className="font-semibold">10:00 AM - 2:00 PM</p>
            </div>
            <div>
              <p className="text-orange-100 text-sm">Sunday</p>
              <p className="font-semibold">Closed</p>
            </div>
            <div>
              <p className="text-orange-100 text-sm">Emergency</p>
              <p className="font-semibold">24/7 Support</p>
            </div>
          </div>
        </div>

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
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
          <p className="text-gray-600">Fill in the form below and we'll get back to you within 24 hours.</p>
        </div>

        <form className="space-y-5">
          {/* Name Field */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+61 4XX XXX XXX"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Service You're Interested In <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700 bg-white">
              <option value="">Select a service</option>
              <option value="web-design">Website Design</option>
              <option value="ecommerce">E-Commerce Website</option>
              <option value="seo">SEO Services</option>
              <option value="ppc">PPC Management</option>
              <option value="social">Social Media Marketing</option>
              <option value="branding">Branding & Logo Design</option>
              <option value="crm">Go High Level CRM</option>
              <option value="ai">AI Automation</option>
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Estimated Budget
            </label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700 bg-white">
              <option value="">Select budget range</option>
              <option value="<5k">Less than $5,000 AUD</option>
              <option value="5k-10k">$5,000 - $10,000 AUD</option>
              <option value="10k-25k">$10,000 - $25,000 AUD</option>
              <option value="25k-50k">$25,000 - $50,000 AUD</option>
              <option value=">50k">$50,000+ AUD</option>
              <option value="custom">Custom / Not Sure</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Tell us about your project, goals, and requirements..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700 resize-none"
            ></textarea>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Preferred Contact Method
            </label>
            <div className="flex flex-wrap gap-4">
              {['Phone Call', 'Email', 'WhatsApp', 'Video Call'].map((method, idx) => (
                <label key={idx} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="contact-method" className="w-4 h-4 text-orange-500 focus:ring-orange-200" />
                  <span className="text-sm text-gray-700">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* File Attachment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Attach Files (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-orange-500 transition-colors cursor-pointer">
              <input type="file" multiple className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
                <span className="text-xs text-gray-500 block mt-1">PDF, DOC, Images (Max 10MB)</span>
              </label>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 w-4 h-4 text-orange-500 rounded border-gray-300 focus:ring-orange-200" />
            <span className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a> and consent to being contacted by Growth Flow Media regarding my inquiry.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 text-lg"
          >
            Send Message
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our terms and conditions and privacy policy.
            We'll respond within 24 hours.
          </p>
        </form>
      </div>
    </div>


  </div>
</section>
<Footer/>
    </div>
  )
}
