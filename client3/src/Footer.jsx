
import React, { useState, useEffect, useRef } from 'react';
import { Layout ,ShoppingCart,Globe,PenTool,TrendingUp,Search,MessageCircle,Target,Megaphone,FileText,BarChart3,Server,Users,Bot,Layers,UserPlus,Menu, Mail, ChevronDown, ArrowRightCircle, Recycle } from 'lucide-react';
import { Phone, Facebook, Linkedin, Instagram, Youtube, Twitter, ChevronRight } from 'lucide-react';
export default function Footer() {
      const quickLinks = [
    'Home',
    'About',
    'Contact'
  ];

  const packages = [
    'Website Design Packages',
    'Business Website Package',
    'Search Engine Optimisation Packages',
    'Meta Ads Management Package',
    'Google Ads Management Packages',
    'Pay Per Lead',
    'Facebook Ads Services',
    'Digital Marketing Consultancy',
    'Social Media Marketing',
    'SEO Consultancy / Free SEO Audit',
    'AI Voice Automation',
    'Landing Pages',
    'PPC Management'
  ];

  const services = [
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
  ];

  const industries = [
    'Mortgage & Finance',
    'Automotive',
    'Construction & Building',
    'ECommerce',
    'Health & Medical',
    'NDIS',
    'Professional Services',
    'Trade',
    'Hospitality',
    'Lawyers & Immigration Agent',
    'NDIS Website Designs & Marketing'
  ];
  
  const menuItems = [
    "Our Services",
    "Our Products",
    "Our Work",
    "Industries",
    "The Agency",
  ];
  return (
           <footer className="px-4 sm:px-6 py-8 sm:py-12" style={{background: 'linear-gradient(180deg, #1a1f2e 0%, #0a0e1a 100%)'}}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Quick Links Column */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                    <ChevronRight size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                    <span className="truncate">{link}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-10">
                <ul className="space-y-2 sm:space-y-3">
                  {packages.map((pkg, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                      <ChevronRight size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                      <span className="truncate">{pkg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Services Column */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                    <ChevronRight size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                    <span className="truncate">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Column */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Industries</h3>
              <ul className="space-y-2 sm:space-y-3">
                {industries.map((industry, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                    <ChevronRight size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                    <span className="truncate">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer Links */}
          <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors whitespace-nowrap">Privacy Policy</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-orange-500 transition-colors whitespace-nowrap">Terms & Conditions</a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-orange-500 transition-colors whitespace-nowrap">Sitemap</a>
            </div>
          </div>
        </footer>
  )
}
