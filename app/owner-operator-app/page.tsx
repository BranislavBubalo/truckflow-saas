'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function EarlyAdopterPage() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [spotsLeft] = useState(73); // Update this manually or connect to DB

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
              <h3 className="text-3xl font-bold text-white mb-2">Secure Your 1% Rate</h3>
              <p className="text-white/60 mb-6">Join the first 100 owner-operators</p>
              
              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  phone: formData.get('phone'),
                  mc_number: formData.get('mc_number'),
                  truck_type: formData.get('truck_type'),
                };
                
                try {
                  const res = await fetch('/api/early-adopter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  });
                  
                  if (res.ok) {
                    alert('Welcome to FleetExpedite! We will contact you within 24 hours.');
                    setShowRegisterModal(false);
                  } else {
                    alert('Failed to submit. Please try again.');
                  }
                } catch (error) {
                  alert('Error submitting registration.');
                }
              }}>
                <div>
                  <label className="block text-white/80 mb-2 text-sm">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">MC Number (Optional)</label>
                  <input
                    name="mc_number"
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                    placeholder="MC-123456"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2 text-sm">Truck Type</label>
                  <select
                    name="truck_type"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="dry_van">Dry Van</option>
                    <option value="reefer">Reefer</option>
                    <option value="flatbed">Flatbed</option>
                    <option value="step_deck">Step Deck</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowRegisterModal(false)}
                    className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg text-white font-semibold transition"
                  >
                    Claim My Spot
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
          <a href="/" className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
              FleetExpedite
            </span>
          </a>
          <button
            onClick={() => setShowRegisterModal(true)}
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg text-white font-bold transition"
          >
            Claim Your Spot
          </button>
        </div>
      </nav>

      {/* Hero with Truck Background */}
      <section className="relative pt-0 overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image 
            src="/images/truck-hero.jpg" 
            alt="FleetExpedite Trucks" 
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/90"></div>
          
          {/* Logo in Bottom Left */}
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

          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-24 right-6 md:right-12 z-10"
          >
            <div className="bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-2xl animate-pulse">
              🔥 Only {spotsLeft} Spots Left!
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Early Adopter Focus */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-6xl mx-auto">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-full">
              <span className="text-orange-400 font-bold text-sm">🚨 EARLY ADOPTER PROGRAM</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Lock in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">1% Commission</span> FOR LIFE
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8">
              First 100 Owner-Operators Only
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-red-400 line-through">2.5%</div>
                <div className="text-white/60">Regular Rate</div>
              </div>
              <div className="text-white text-4xl">→</div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400">1%</div>
                <div className="text-white/60">Your Rate - Forever</div>
              </div>
            </div>
            <button
              onClick={() => setShowRegisterModal(true)}
              className="px-12 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl text-white font-bold text-2xl transition shadow-2xl shadow-orange-500/50 hover:scale-105 transform"
            >
              Claim Your Spot Now
            </button>
            <p className="text-white/50 mt-4 text-sm">No credit card required • Takes 2 minutes</p>
          </motion.div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-3xl font-bold text-white mb-3">Save $1,500+</h3>
              <p className="text-white/70 text-lg">Per $100k revenue vs standard 2.5% rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-3xl font-bold text-white mb-3">Locked Forever</h3>
              <p className="text-white/70 text-lg">Rate NEVER increases, guaranteed for life</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-3xl font-bold text-white mb-3">30 Days FREE</h3>
              <p className="text-white/70 text-lg">Zero commission for your first month</p>
            </motion.div>
          </div>

          {/* What You Get */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What You Get as Early Adopter</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '✓ 1% commission rate locked in forever',
                '✓ First 30 days completely FREE (0% commission)',
                '✓ 24/7 AI-powered load matching',
                '✓ Real-time toll & fuel cost calculator',
                '✓ Automated load bidding while you sleep',
                '✓ Direct integration with top load boards',
                '✓ Keep 99% of your earnings for life',
                '✓ Priority customer support',
                '✓ Early access to new features',
                '✓ Lifetime rate protection guarantee',
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 text-white/90 text-lg bg-white/5 p-4 rounded-xl"
                >
                  <span className="text-green-400 text-2xl">✓</span>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* iPhone Mockup Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Business in Your Pocket
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Professional iOS app designed specifically for owner-operators. Find loads, calculate costs, and manage your business from anywhere.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'AI finds profitable loads 24/7',
                  'Instant toll & fuel calculations',
                  'Automated bidding on your terms',
                  'Real-time revenue tracking',
                  'Direct broker communication',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 text-lg">
                    <span className="text-orange-400 text-xl mt-0.5">★</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowRegisterModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl text-white font-bold text-xl transition shadow-lg"
              >
                Get Early Access
              </button>
            </div>

            {/* iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto w-[300px] h-[600px] bg-slate-900 rounded-[60px] border-8 border-slate-800 shadow-2xl overflow-hidden">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 p-6 pt-10 overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-white/80 text-xs mb-6">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-white/80 rounded"></div>
                      <div className="w-4 h-4 bg-white/80 rounded"></div>
                      <div className="w-4 h-4 bg-white/80 rounded"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-bold text-sm">Available Loads</span>
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Live</span>
                      </div>
                      <div className="text-3xl font-bold text-white">127</div>
                      <div className="text-white/60 text-xs mt-1">AI-ranked for you</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="text-white font-bold text-sm mb-2">Top Load</div>
                      <div className="text-white text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>Chicago, IL → Miami, FL</span>
                          <span className="text-green-400 font-bold">$3,450</span>
                        </div>
                        <div className="flex justify-between text-white/60">
                          <span>1,450 mi • Dry Van</span>
                          <span>Score: 95/100</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-500/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/40">
                      <div className="text-orange-400 font-bold text-xs mb-2">⚡ Your Commission</div>
                      <div className="text-4xl font-bold text-white">1%</div>
                      <div className="text-white/80 text-xs mt-1">Locked in forever</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <div className="text-white font-bold text-sm mb-2">This Month</div>
                      <div className="text-2xl font-bold text-white">$18,750</div>
                      <div className="text-green-400 text-xs">↗ +12% vs last month</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 top-20 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-xl transform rotate-12 font-bold text-sm">
                iOS App
              </div>
            </motion.div>
          </div>

          {/* Social Proof / Testimonials Placeholder */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Join Successful Owner-Operators</h2>
            <p className="text-2xl text-white/70 mb-8">
              Beta launching January 2026 with 200+ trucks already signed up
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-orange-400 mb-2">{100 - spotsLeft}</div>
                <div className="text-white/60">Early Adopters Joined</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-green-400 mb-2">$1,500+</div>
                <div className="text-white/60">Average Savings per $100k</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-400 mb-2">Jan 2026</div>
                <div className="text-white/60">Beta Launch</div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-red-500/20 border border-red-500/50 rounded-full">
              <span className="text-red-400 font-bold">⚠️ Only {spotsLeft} spots remaining</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Don't Miss This Opportunity
            </h2>
            <p className="text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
              Once we reach 100 early adopters, the rate goes back to 2.5%. Lock in your 1% commission FOR LIFE today.
            </p>
            <button
              onClick={() => setShowRegisterModal(true)}
              className="px-16 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl text-white font-bold text-2xl transition shadow-2xl shadow-orange-500/50 hover:scale-105 transform animate-pulse"
            >
              Secure My 1% Rate Now
            </button>
            <p className="text-white/50 mt-6">No long-term contracts • Cancel anytime • 30-day money-back guarantee</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">FleetExpedite</div>
          <p className="text-white/60 mb-2">AI-Powered Fleet Management for Owner-Operators</p>
          <p className="text-white/50 mb-6">California, USA</p>
          <a href="mailto:contact@fleetexpedite.com" className="text-orange-400 hover:text-orange-300 transition">
            contact@fleetexpedite.com
          </a>
          <p className="text-white/40 mt-6">© 2025 FleetExpedite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
