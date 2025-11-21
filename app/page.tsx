'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FleetHubLanding() {
  const [language, setLanguage] = useState<'en' | 'sr'>('en');
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const content = {
    en: {
      nav: {
        about: 'About',
        features: 'Features',
        pricing: 'Pricing',
        contact: 'Contact',
      },
      hero: {
        title: 'AI-Powered Fleet Management',
        subtitle: 'Modern dispatch solutions for trucking companies. AI load scoring, real-time tracking, and mobile apps for drivers and owner-operators.',
        cta: 'Get Started',
        cta2: 'Learn More',
      },
      about: {
        title: 'About FleetHub',
        description: 'California-based IT company with 5 years in business, serving US trucking customers for the last 3 years. We build modern, AI-powered solutions that help trucking companies operate more efficiently.',
      },
      problem: {
        title: 'Stop Overpaying for Dispatch',
        old: {
          title: 'Traditional Platforms',
          points: [
            'Manual load searching',
            'No AI assistance',
            'Missing profitable loads',
            'Expensive per-truck pricing',
            'Limited mobile features',
          ],
        },
        new: {
          title: 'FleetHub Solution',
          points: [
            'AI Load Scoring 24/7',
            'Automated load bidding',
            'Real-time cost calculator',
            'Modern mobile apps',
            'Transparent pricing',
          ],
        },
      },
      features: {
        title: 'Everything You Need',
        subtitle: 'Complete fleet management solution.',
        list: [
          {
            icon: '🤖',
            title: 'AI Load Scoring',
            description: 'Intelligent algorithm ranks 1000+ loads automatically based on profitability',
          },
          {
            icon: '💰',
            title: 'Trip Cost Calculator',
            description: 'Real-time toll and fuel cost calculation using TollGuru and EIA data',
          },
          {
            icon: '📍',
            title: 'Real-Time GPS',
            description: 'Track every truck on live map. Know exactly where your fleet is.',
          },
          {
            icon: '📱',
            title: 'Mobile Apps',
            description: 'iOS apps for company drivers and owner-operators with different features.',
          },
          {
            icon: '📊',
            title: 'Analytics Dashboard',
            description: 'Revenue reports, driver performance, load history - all in one place.',
          },
          {
            icon: '💼',
            title: 'Broker Integration',
            description: 'Connect with DAT, Truckstop, and send rate confirmations instantly.',
          },
        ],
      },
      pricing: {
        title: 'Flexible Pricing Options',
        subtitle: 'Choose the solution that fits your business',
       dispatch: {
  name: 'Dispatch as a Service',
  productName: 'FleetHub',
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
            'FleetHub Driver app included',
          ],
          comparison: '60% cheaper than Rose Rocket',
          cta: 'Register Now',
        },
        driver: {
          name: 'Company Driver App',
          productName: 'FleetHub Driver',
          price: '$15',
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
        },
        ownerOperator: {
          name: 'Owner-Operator App',
          productName: 'FexPeGo',
          price: '$120',
          period: '/month',
          desc: 'For independent operators',
          badge: 'PREMIUM',
          features: [
            'Automated load bidding 24/7',
            'AI-powered load matching',
            'Real-time fuel & toll calculator',
            'Financial management',
            'Trip cost optimization',
            'Direct broker integration',
            'GPS tracking & navigation',
            'Revenue analytics',
          ],
          comparison: 'Complete business solution',
          cta: 'Start Free Trial',
        },
      },
      savings: {
        title: 'Enterprise Pricing',
        subtitle: 'FleetHub scales with your business',
        tiers: [
          { name: 'Growth', trucks: '11-50 trucks', platform: '$1,000/mo', total: '~$1,750/mo*' },
          { name: 'Scale', trucks: '51-200 trucks', platform: '$1,800/mo', total: '~$3,300/mo*' },
          { name: 'Enterprise', trucks: '201-500 trucks', platform: '$3,000/mo', total: '~$6,600/mo*' },
        ],
        note: '*Total includes Platform Fee + Driver Apps. Volume discounts available.',
      },
      cta: {
        title: 'Ready to Modernize Your Fleet?',
        subtitle: 'Join trucking companies already using FleetHub',
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
        rights: '© 2025 FleetHub. All rights reserved.',
      },
      register: {
        title: 'Register for FleetHub',
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
    },
  };

  const t = content[language];

  return (
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
              
              <form className="space-y-4">
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.register.fields.name}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.register.fields.title}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Fleet Manager"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.register.fields.company}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    placeholder="ABC Trucking LLC"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.register.fields.website}</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    placeholder="https://example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.register.fields.email}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                    placeholder="contact@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">{t.register.fields.phone}</label>
                  <input
                    type="tel"
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
              F
            </div>
            <span>FleetHub</span>
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
            <a href="#contact" className="text-white/80 hover:text-white transition hidden md:block">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-white/70 mb-12 max-w-4xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button 
              onClick={() => setShowRegisterModal(true)}
              className="px-10 py-5 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-bold text-xl transition shadow-lg shadow-blue-500/50"
            >
              {t.hero.cta}
            </button>
            <a 
              href="#features"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold text-xl transition border border-white/20"
            >
              {t.hero.cta2}
            </a>
          </motion.div>
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
            {/* Old Way */}
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

            {/* New Way */}
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
            {/* Dispatch as a Service */}
            <PricingCard
              badge={t.pricing.dispatch.badge}
              name={t.pricing.dispatch.name}
              productName={t.pricing.dispatch.productName}
              price={t.pricing.dispatch.price}
              period={t.pricing.dispatch.period}
              desc={t.pricing.dispatch.desc}
              features={t.pricing.dispatch.features}
              comparison={t.pricing.dispatch.comparison}
              cta={t.pricing.dispatch.cta}
              color="blue"
              popular
              onClick={() => setShowRegisterModal(true)}
            />

            {/* Company Driver App */}
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
            />

            {/* Owner-Operator App */}
            <PricingCard
              badge={t.pricing.ownerOperator.badge}
              name={t.pricing.ownerOperator.name}
              productName={t.pricing.ownerOperator.productName}
              price={t.pricing.ownerOperator.price}
              period={t.pricing.ownerOperator.period}
              desc={t.pricing.ownerOperator.desc}
              features={t.pricing.ownerOperator.features}
              comparison={t.pricing.ownerOperator.comparison}
              cta={t.pricing.ownerOperator.cta}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Enterprise Tiers */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">{t.savings.title}</h2>
            <p className="text-xl text-white/60">{t.savings.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.savings.tiers.map((tier: any, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-white/60 mb-4">{tier.trucks}</p>
                <div className="space-y-2 mb-6">
                  <div className="text-white/80">
                    Platform: <span className="text-blue-400 font-bold">{tier.platform}</span>
                  </div>
                  <div className="text-white/80">
                    Total: <span className="text-green-400 font-bold text-xl">{tier.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-center mt-8">{t.savings.note}</p>
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
              F
            </div>
            <span>FleetHub</span>
          </div>
          <p className="text-white/60 mb-2 text-lg">{t.footer.tagline}</p>
          <p className="text-white/50 mb-6">{t.footer.location}</p>
          <p className="text-white/40">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
function PricingCard({ badge, name, productName, price, period, desc, features, comparison, cta, color, popular, onClick }: any) {
  const colors: any = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/50',
    green: 'from-green-500/20 to-green-600/20 border-green-500/50',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/50',
  };

  const badgeColors: any = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className={`relative bg-gradient-to-br ${colors[color]} border-2 rounded-2xl p-8 ${popular ? 'scale-105 shadow-2xl' : ''}`}>
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 ${badgeColors[color]} rounded-full text-white text-sm font-bold whitespace-nowrap`}>
        {badge}
      </div>
      <h3 className="text-2xl font-bold text-white mb-1 mt-4">{name}</h3>
      <p className="text-blue-400 font-semibold text-lg mb-2">{productName}</p>
      <p className="text-white/60 mb-6">{desc}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        {period && <span className="text-white/60 text-lg ml-2">{period}</span>}
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
        className="w-full py-4 bg-white/20 hover:bg-white/30 rounded-xl text-white font-bold transition text-lg"
      >
        {cta}
      </button>
    </div>
  );
}
}

