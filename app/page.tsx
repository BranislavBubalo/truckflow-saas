'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FleetExpedite",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS",
  "offers": {
    "@type": "Offer",
    "price": "15.00",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "description": "AI-powered fleet management software for trucking companies. Automated dispatch, real-time GPS tracking, smart load matching, and mobile apps for drivers. Modern fleet management platform with AI load scoring and trip cost calculator.",
  "url": "https://fleetexpedite.com",
  "screenshot": "https://fleetexpedite.com/dashboard-preview.png",
  "featureList": [
    "AI Load Scoring Engine",
    "Real-time GPS Tracking",
    "Trip Cost Calculator",
    "Mobile Apps for Drivers",
    "Automated Dispatch",
    "Analytics Dashboard"
  ]
};

export default function FleetExpediateLanding() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const content = {
    nav: {
      about: 'About',
      features: 'Features',
      pricing: 'Pricing',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      title: 'AI-Powered Fleet Management Software for Trucking Companies',
      subtitle: 'Modern dispatch software with AI load scoring, real-time GPS tracking, and mobile apps for drivers and owner-operators. Streamline your fleet operations with intelligent automation.',
      cta: 'Get Started',
      cta2: 'Learn More',
    },
    about: {
      title: 'About FleetExpedite',
      description: 'California-based IT company with 5 years in business, serving US trucking customers for the last 3 years. We build modern, AI-powered fleet management solutions that help trucking companies operate more efficiently and profitably.',
    },
    problem: {
      title: 'Stop Overpaying for Fleet Management Software',
      old: {
        title: 'Traditional Fleet Management Platforms',
        points: [
          'Manual load searching and dispatch',
          'No AI assistance or automation',
          'Missing profitable loads daily',
          'Expensive per-truck pricing ($50-100/truck)',
          'Limited mobile features for drivers',
        ],
      },
      new: {
        title: 'FleetExpedite Modern Solution',
        points: [
          'AI Load Scoring works 24/7 automatically',
          'Automated load bidding and dispatch',
          'Real-time toll and fuel cost calculator',
          'Modern iOS mobile apps included',
          'Transparent, affordable pricing',
        ],
      },
    },
    features: {
      title: 'Complete Fleet Management Features',
      subtitle: 'Everything your trucking company needs in one platform.',
      list: [
        {
          icon: '🤖',
          title: 'AI Load Scoring',
          description: 'Intelligent algorithm ranks 1000+ loads automatically based on profitability, distance, and your fleet preferences',
        },
        {
          icon: '💰',
          title: 'Trip Cost Calculator',
          description: 'Real-time toll and fuel cost calculation using TollGuru and EIA data for accurate profit estimates',
        },
        {
          icon: '📍',
          title: 'Real-Time GPS Tracking',
          description: 'Track every truck on live map with real-time location updates. Know exactly where your fleet is at all times.',
        },
        {
          icon: '📱',
          title: 'Mobile Apps for Drivers',
          description: 'iOS apps for company drivers and owner-operators with load management, GPS tracking, and document upload.',
        },
        {
          icon: '📊',
          title: 'Analytics Dashboard',
          description: 'Revenue reports, driver performance metrics, load history, and profitability analysis - all in one dashboard.',
        },
        {
          icon: '💼',
          title: 'Broker Integration',
          description: 'Direct integration with DAT, Truckstop load boards, and automated rate confirmation sending.',
        },
      ],
    },
    pricing: {
      title: 'Flexible Pricing Options',
      subtitle: 'Choose the solution that fits your business',
      dispatch: {
        name: 'Dispatch as a Service',
        productName: 'FleetExpedite',
        price: 'Register for',
        priceSubtext: 'Pricing',
        period: '',
        desc: 'Complete dispatch platform',
        badge: 'ENTERPRISE',
        features: [
          'AI Load Scoring Engine',
          'Real-time Trip Cost Calculator',
          'Web dashboard for dispatchers',
          'Load management tools',
          'Broker communication',
          'Real-time GPS tracking',
          'Analytics & reports',
          'FleetExpedite Driver app included',
        ],
        comparison: '60% cheaper than Rose Rocket',
        cta: 'Register Now',
      },
      driver: {
        name: 'Company Driver App',
        productName: 'FleetExpedite Driver',
        price: '$19',
        period: '/month',
        desc: 'Per driver pricing',
        badge: 'DRIVERS',
        features: [
          'iOS mobile app',
          'Real-time GPS tracking',
          'Load status updates',
          'Direct messaging',
          'Document upload (BOL)',
          'Proof of delivery',
          'Push notifications',
          'Modern driver interface',
        ],
        comparison: 'Industry standard: $15-25/driver',
        cta: 'Get Started',
        link: '/driver-app',
      },
      ownerOperator: {
        name: 'Owner-Operator App',
        productName: 'FleetExpedite OO',
        price: '1%',
        priceSubtext: 'Commission', 
        period: 'per load',
        desc: 'For independent operators',
        badge: '🔥 EARLY ADOPTER SPECIAL',
        promotion: {
          title: 'First 100 Drivers Only!',
          highlights: [
            '1% Commission FOR LIFE',
            'First 30 Days: 0% Commission',
            'Regular rate: 2.5%',
            'Save $1,500+ per $100k revenue',
          ],
        },
        features: [
          '✓ Lock in 1% rate forever (Reg: 2.5%)',
          '✓ 30 days FREE (0% commission)',
          '✓ 24/7 AI Load Matching',
          '✓ Real-time fuel & toll calculator',
          '✓ Automated load bidding',
          '✓ Direct broker integration',
          '✓ Keep 99% of your earnings',
          '✓ Rate NEVER increases',
        ],
        comparison: 'Limited to first 100 drivers - Secure your spot!',
        cta: 'Claim Your Spot',
        urgent: 'Only XX spots left!',
        link: '/owner-operator-app',
      },
    },
    cta: {
      title: 'Ready to Modernize Your Fleet?',
      subtitle: 'Join trucking companies already using FleetExpedite',
      button: 'Get Started',
      nobind: 'Contact us for custom pricing and demos.',
    },
    contact: {
      title: 'Get in Touch',
      email: 'Email',
      subtitle: 'Have questions? We\'re here to help.',
    },
    footer: {
      tagline: 'AI-Powered Fleet Management Solutions',
      location: 'California, USA',
      rights: '© 2025 FleetExpedite. All rights reserved.',
    },
    register: {
      title: 'Register for FleetExpedite',
      subtitle: 'Get started with our enterprise dispatch solution',
      fields: {
        name: 'Full Name',
        title: 'Job Title',
        company: 'Company Name',
        website: 'Company Website',
        email: 'Company Email',
        phone: 'Phone Number',
      },
      submit: 'Submit Registration',
      cancel: 'Cancel',
    },
  };

  const t = content;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Registration Modal */}
        <AnimatePresence>
          {showRegisterModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowRegisterModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-white/10"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{t.register.title}</h3>
                <p className="text-white/60 mb-6">{t.register.subtitle}</p>
                
                <form className="space-y-4" onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get('name'),
                    title: formData.get('title'),
                    company: formData.get('company'),
                    website: formData.get('website'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                  };
                  
                  try {
                    const res = await fetch('/api/register', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });
                    
                    if (res.ok) {
                      alert('Registration submitted! We will contact you soon.');
                      setShowRegisterModal(false);
                    } else {
                      alert('Failed to submit. Please try again.');
                    }
                  } catch (error) {
                    alert('Error submitting registration.');
                  }
                }}>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">{t.register.fields.name}</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">{t.register.fields.title}</label>
                    <input
                      name="title"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="Fleet Manager"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">{t.register.fields.company}</label>
                    <input
                      name="company"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="ABC Trucking LLC"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">{t.register.fields.website}</label>
                    <input
                      name="website"
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">{t.register.fields.email}</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="contact@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">{t.register.fields.phone}</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowRegisterModal(false)}
                      className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition"
                    >
                      {t.register.cancel}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition"
                    >
                      {t.register.submit}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="text-3xl font-extrabold tracking-tight"></span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-white/80 hover:text-white transition hidden md:block">
                {t.nav.about}
              </a>
              <a href="#features" className="text-white/80 hover:text-white transition hidden md:block">
                {t.nav.features}
              </a>
              <a href="#pricing" className="text-white/80 hover:text-white transition hidden md:block">
                {t.nav.pricing}
              </a>
              <a href="/blog" className="text-white/80 hover:text-white transition hidden md:block">
                {t.nav.blog}
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition hidden md:block">
                {t.nav.contact}
              </a>
            </div>
          </div>
        </nav>

        {/* Hero with Truck Background */}
        <section className="relative pt-0 overflow-hidden">
          <div className="relative w-full h-[500px] md:h-[600px]">
            <Image 
              src="/images/truck-hero.jpg" 
              alt="FleetExpedite AI-Powered Fleet Management Software" 
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/80"></div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10"
            >
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-slate-900 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden relative">
                <Image 
                  src="/images/logo.jpg" 
                  alt="FleetExpedite Logo" 
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </motion.div>

           
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {t.hero.title}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl text-white/80 mb-12 max-w-4xl mx-auto"
              >
                {t.hero.subtitle}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 justify-center flex-wrap"
              >
                <button 
                  onClick={() => setShowRegisterModal(true)}
                  className="px-10 py-5 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-bold text-xl transition shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transform"
                >
                  {t.hero.cta}
                </button>
                <a 
                  href="#features"
                  className="px-10 py-5 bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold text-xl transition border border-white/20 backdrop-blur-sm hover:scale-105 transform"
                >
                  {t.hero.cta2}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-8">{t.about.title}</h2>
            <p className="text-2xl text-white/70 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-white text-center mb-16">{t.problem.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
                <div className="text-red-400 text-5xl mb-4">❌</div>
                <h3 className="text-3xl font-bold text-white mb-6">{t.problem.old.title}</h3>
                <ul className="space-y-4">
                  {t.problem.old.points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
                      <span className="text-red-400 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8">
                <div className="text-green-400 text-5xl mb-4">✅</div>
                <h3 className="text-3xl font-bold text-white mb-6">{t.problem.new.title}</h3>
                <ul className="space-y-4">
                  {t.problem.new.points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
                      <span className="text-green-400 mt-1">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">{t.features.title}</h2>
              <p className="text-2xl text-white/60">{t.features.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {t.features.list.map((feature: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">{t.pricing.title}</h2>
              <p className="text-2xl text-white/60">{t.pricing.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                badge={t.pricing.dispatch.badge}
                name={t.pricing.dispatch.name}
                productName={t.pricing.dispatch.productName}
                price={t.pricing.dispatch.price}
                priceSubtext={t.pricing.dispatch.priceSubtext}
                period={t.pricing.dispatch.period}
                desc={t.pricing.dispatch.desc}
                features={t.pricing.dispatch.features}
                comparison={t.pricing.dispatch.comparison}
                cta={t.pricing.dispatch.cta}
                color="blue"
                popular={false}
                onClick={() => setShowRegisterModal(true)}
              />
              <PricingCard
                badge={t.pricing.driver.badge}
                name={t.pricing.driver.name}
                productName={t.pricing.driver.productName}
                price={t.pricing.driver.price}
                period={t.pricing.driver.period}
                desc={t.pricing.driver.desc}
                features={t.pricing.driver.features}
                comparison={t.pricing.driver.comparison}
                cta={t.pricing.driver.cta}
                color="green"
                onClick={() => setShowRegisterModal(true)}
                link={t.pricing.driver.link}
              />
              <PricingCard
                badge={t.pricing.ownerOperator.badge}
                name={t.pricing.ownerOperator.name}
                productName={t.pricing.ownerOperator.productName}
                price={t.pricing.ownerOperator.price}
                priceSubtext={t.pricing.ownerOperator.priceSubtext}
                period={t.pricing.ownerOperator.period}
                desc={t.pricing.ownerOperator.desc}
                features={t.pricing.ownerOperator.features}
                comparison={t.pricing.ownerOperator.comparison}
                cta={t.pricing.ownerOperator.cta}
                color="orange"
                popular={true}
                promotion={t.pricing.ownerOperator.promotion}
                urgent={t.pricing.ownerOperator.urgent}
                onClick={() => setShowRegisterModal(true)}
                link={t.pricing.ownerOperator.link}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section - NEW SEO CONTENT */}
        <section className="py-20 px-6 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/60 text-center mb-12">
              Everything you need to know about FleetExpedite fleet management software
            </p>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  What is fleet management software?
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Fleet management software is a comprehensive platform that helps trucking companies manage their vehicles, drivers, loads, and operations in one centralized system. FleetExpedite combines dispatch management, GPS tracking, load matching with AI, trip cost calculators, driver mobile apps, and analytics dashboards. Modern fleet management software automates manual tasks like load searching and bidding, provides real-time visibility into fleet operations, and helps companies maximize profitability through intelligent load scoring and route optimization.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  How does AI improve fleet dispatch?
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  FleetExpedite's AI Load Scoring Engine automatically analyzes and ranks 1000+ loads based on profitability, distance, fuel costs, tolls, and your fleet's historical performance. The AI works 24/7, so you never miss profitable loads even during off-hours or weekends. It learns your preferences over time and can automatically bid on loads that match your criteria. This eliminates hours of manual load board searching and ensures your dispatchers focus on high-value activities. The result is typically 15-30% improvement in load profitability and significant time savings for dispatch teams.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  What's the cost of fleet management software?
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Traditional fleet management software like Rose Rocket, Samsara, or Motive charge $50-100 per truck per month, which adds up to $6,000-12,000 annually for a 10-truck fleet. FleetExpedite offers transparent pricing starting at just $12/month per driver for mobile apps, with enterprise dispatch platform pricing available on request. Our platform is typically 60% cheaper than competitors while offering more advanced features like AI load scoring and real-time trip cost calculators. For owner-operators, we offer a unique 1% commission model - the first 100 users lock in this rate forever instead of the standard 2.5%.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Do you offer mobile apps for drivers?
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Yes! FleetExpedite includes professional iOS mobile apps for both company drivers and owner-operators. The driver app provides real-time GPS tracking, load status updates, direct messaging with dispatch, BOL and POD document upload with digital signatures, proof of delivery photo capture, and push notifications for load updates. The owner-operator app includes all driver features plus AI-powered self-dispatch capabilities, load board integration, automated bidding, and a trip cost calculator. Both apps are designed specifically for truckers and work seamlessly with our web-based dispatch dashboard.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  How does FleetExpedite compare to competitors like Rose Rocket or Samsara?
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  FleetExpedite is built specifically for modern trucking companies that want automation and AI-powered features without enterprise-level pricing. Unlike legacy systems like Rose Rocket ($50-100/truck/month), we charge a flat rate for enterprise dispatch or simple per-driver pricing for mobile apps. We're typically 60% cheaper while offering superior features: AI load scoring that competitors don't have, real-time toll and fuel cost calculation using TollGuru and EIA data, modern iOS mobile apps (not clunky web wrappers), automated load bidding, and direct integration with DAT and Truckstop load boards. We're California-based with 24/7 US support, and our platform is designed for small-to-medium fleets (1-100 trucks) rather than enterprise mega-carriers.
                </p>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/60 text-lg mb-6">
                Have more questions about our fleet management software?
              </p>
              <a 
                href="mailto:contact@fleetexpedite.com"
                className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-bold text-lg transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Enterprise */}
        <section className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-white mb-6">Enterprise Fleet Management Solutions</h2>
                <p className="text-2xl text-white/70 mb-6">
                  For fleets with 50+ trucks, we offer custom pricing, dedicated support, and advanced analytics tailored to your operations.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-white/80 text-lg">
                    <span className="text-green-400">✓</span>
                    <span>Custom pricing & volume discounts</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80 text-lg">
                    <span className="text-green-400">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80 text-lg">
                    <span className="text-green-400">✓</span>
                    <span>Priority support & onboarding</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80 text-lg">
                    <span className="text-green-400">✓</span>
                    <span>Advanced analytics & reporting</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setShowRegisterModal(true)}
                  className="px-10 py-5 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-bold text-xl transition shadow-lg"
                >
                  Contact Sales
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <img 
                    src="/dashboard-preview.png" 
                    alt="FleetExpedite Analytics Dashboard"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
            <p className="text-2xl text-white/90 mb-8">{t.cta.subtitle}</p>
            <button 
              onClick={() => setShowRegisterModal(true)}
              className="px-12 py-5 bg-white hover:bg-gray-100 rounded-xl text-blue-600 font-bold text-xl transition shadow-2xl"
            >
              {t.cta.button}
            </button>
            <p className="text-white/70 mt-6">{t.cta.nobind}</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">{t.contact.title}</h2>
            <p className="text-xl text-white/60 mb-8">{t.contact.subtitle}</p>
            <div>
              <div className="text-white/60 mb-2 text-lg">{t.contact.email}</div>
              <a href="mailto:contact@fleetexpedite.com" className="text-3xl text-blue-400 hover:text-blue-300 transition font-bold">
                contact@fleetexpedite.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <div className="relative w-14 h-14">
                <Image 
                  src="/images/logo.jpg" 
                  alt="FleetExpedite" 
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
            <p className="text-white/60 mb-2 text-lg">{t.footer.tagline}</p>
            <p className="text-white/50 mb-6">{t.footer.location}</p>
            <p className="text-white/40">{t.footer.rights}</p>
          </div>
        </footer>
      </div>
    </>
  );
}

function PricingCard({ badge, name, productName, price, priceSubtext, period, desc, features, comparison, cta, color, popular, promotion, urgent, onClick, link }: any) {
  const colors: any = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/50',
    green: 'from-green-500/20 to-green-600/20 border-green-500/50',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/50',
    orange: 'from-orange-500/20 to-red-600/20 border-orange-500/50',
  };

  const badgeColors: any = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-gradient-to-r from-orange-500 to-red-500',
  };

  return (
    <div className={`relative bg-gradient-to-br ${colors[color]} border-2 rounded-2xl p-8 ${popular ? 'scale-105 shadow-2xl ring-4 ring-orange-500/50' : ''}`}>
      {popular && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-pulse">
          HOT DEAL
        </div>
      )}
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 ${badgeColors[color]} rounded-full text-white text-sm font-bold whitespace-nowrap`}>
        {badge}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1 mt-4">{name}</h3>
      <p className="text-blue-400 font-semibold text-lg mb-2">{productName}</p>
      <p className="text-white/60 mb-6">{desc}</p>
      
      {promotion && (
        <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl p-4 mb-6">
          <div className="text-orange-400 font-bold text-sm mb-2">{promotion.title}</div>
          <ul className="space-y-1">
            {promotion.highlights.map((highlight: string, i: number) => (
              <li key={i} className="text-white/90 text-xs flex items-center gap-2">
                <span className="text-orange-400">★</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mb-6">
        <div className="text-4xl font-bold text-white">{price}</div>
        {priceSubtext && <div className="text-2xl text-white/80 mt-1">{priceSubtext}</div>}
        {period && <div className="text-white/60 text-xl">{period}</div>}
      </div>
      
      <div className="text-sm text-white/50 mb-6 italic">{comparison}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-white/80">
            <span className="text-green-400 text-lg mt-0.5">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={onClick}
        className={`w-full py-4 ${popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-white/20 hover:bg-white/30'} rounded-xl text-white font-bold transition text-lg ${popular ? 'shadow-lg shadow-orange-500/50 animate-pulse' : ''}`}
      >
        {cta}
      </button>
      {link && (
        <a href={link} className="block text-center text-white/60 hover:text-white text-sm mt-3 transition">
          Learn more →
        </a>
      )}
    </div>
  );
}