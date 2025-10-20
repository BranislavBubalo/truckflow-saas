'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TruckFlowLanding() {
  const [language, setLanguage] = useState<'en' | 'sr'>('en');

  const content = {
    en: {
      nav: {
        features: 'Features',
        pricing: 'Pricing',
        contact: 'Contact',
      },
      hero: {
        title: 'AI-Powered Fleet Management',
        subtitle: '50% cheaper than competitors. Manage 5x more trucks with AI automation.',
        cta: 'Start Free Trial',
        cta2: 'Watch Demo',
      },
      problem: {
        title: 'Stop Overpaying for Dispatch',
        old: {
          title: 'Traditional Platforms',
          points: [
            '$35-60 per truck/month',
            'Manual load searching',
            'Missing good loads',
            'Expensive per-truck pricing',
            'Limited features',
          ],
        },
        new: {
          title: 'TruckFlow AI',
          points: [
            '$1,299/month for 25 trucks',
            'AI finds loads 24/7',
            'Smart load scoring',
            'Real-time GPS tracking',
            'Or pay 10% per load only',
          ],
        },
      },
      features: {
        title: 'Everything You Need',
        subtitle: 'One platform. Complete solution.',
        list: [
          {
            icon: '🤖',
            title: 'AI Load Matching',
            description: 'Smart algorithm finds and ranks the most profitable loads automatically',
          },
          {
            icon: '📍',
            title: 'Real-Time GPS',
            description: 'Track every truck on live map. Know exactly where your fleet is.',
          },
          {
            icon: '📱',
            title: 'Driver Mobile App',
            description: 'iOS app for drivers. Accept loads, update status, navigate routes.',
          },
          {
            icon: '📊',
            title: 'Analytics Dashboard',
            description: 'Revenue reports, driver performance, load history - all in one place.',
          },
          {
            icon: '🔔',
            title: 'Push Notifications',
            description: 'Instant alerts for new loads, driver updates, and important events.',
          },
          {
            icon: '💼',
            title: 'Broker Integration',
            description: 'Connect with DAT, Truckstop, and send rate confirmations instantly.',
          },
        ],
      },
      pricing: {
        title: 'Simple, Aggressive Pricing',
        subtitle: 'Choose what works for your business',
        fixed: {
          name: 'Fixed Price',
          price: '$1,299',
          period: '/month',
          desc: 'Perfect for growing fleets',
          badge: 'PREMIUM AI',
          features: [
            'Up to 25 trucks included',
            'Unlimited loads',
            'AI load matching 24/7',
            'Real-time GPS tracking',
            'Driver mobile app access',
            'Analytics & reports',
            'Email & phone support',
          ],
          comparison: 'Competitors: $875-1,500/mo',
          cta: 'Start 14-Day Free Trial',
        },
        perload: {
          name: 'Pay Per Load',
          price: '10%',
          period: 'commission',
          desc: 'Pay only when you earn',
          badge: 'NO MONTHLY FEE',
          features: [
            'Zero monthly payment',
            'Only pay on booked loads',
            '10% commission per load',
            'Same AI features',
            'Same GPS tracking',
            'Same mobile app',
            'Cancel anytime',
          ],
          comparison: 'Brokers charge: 13-15%',
          cta: 'Start Earning Now',
        },
        driver: {
          name: 'Driver App',
          price: '$12',
          period: '/month',
          desc: 'For company drivers',
          badge: 'ADD-ON',
          features: [
            'iOS mobile app',
            'Load notifications',
            'GPS tracking',
            'Status updates',
            'Route navigation',
            'Company or driver pays',
            'Easy activation',
          ],
          comparison: 'Per driver pricing',
          cta: 'Add Drivers',
        },
      },
      savings: {
        title: 'See How Much You Save',
        subtitle: 'Compare TruckFlow vs Traditional Platforms',
        table: {
          trucks: 'Trucks',
          competitor: 'Competitors',
          truckflow: 'TruckFlow',
          savings: 'You Save',
        },
        rows: [
          { trucks: '10', competitor: '$350-600', truckflow: '$1,299', savings: '$101/mo' },
          { trucks: '25', competitor: '$875-1,500', truckflow: '$1,299', savings: '$876/mo' },
          { trucks: '50', competitor: '$1,750-3,000', truckflow: '$999*', savings: '$1,501/mo' },
        ],
        note: '*Contact us for 50+ trucks custom pricing',
      },
      cta: {
        title: 'Ready to Save 50% on Dispatch?',
        subtitle: 'Join trucking companies already using TruckFlow',
        button: 'Start Free Trial',
        nobind: 'No credit card required. Cancel anytime.',
      },
      contact: {
        title: 'Get Started Today',
        email: 'Email',
        phone: 'Phone',
        or: 'or',
      },
      footer: {
        tagline: 'AI-Powered Fleet Management',
        rights: '© 2025 TruckFlow. All rights reserved.',
      },
    },
    sr: {
      nav: {
        features: 'Funkcije',
        pricing: 'Cene',
        contact: 'Kontakt',
      },
      hero: {
        title: 'AI Platforma za Fleet Management',
        subtitle: '50% jeftinije od konkurencije. Upravljaj sa 5x više kamiona uz AI automatizaciju.',
        cta: 'Počni Besplatno',
        cta2: 'Pogledaj Demo',
      },
      problem: {
        title: 'Prestani da Preplаćuješ Dispatch',
        old: {
          title: 'Tradicionalne Platforme',
          points: [
            '$35-60 po kamionu/mesečno',
            'Ručno traženje loadova',
            'Gubite dobre loadove',
            'Skupo po-kamion naplaćivanje',
            'Ograničene funkcije',
          ],
        },
        new: {
          title: 'TruckFlow AI',
          points: [
            '$1,299/mesečno za 25 kamiona',
            'AI nalazi loadove 24/7',
            'Pametno rangiranje loadova',
            'GPS praćenje uživo',
            'Ili plaćaj samo 10% po loadu',
          ],
        },
      },
      features: {
        title: 'Sve Što Ti Treba',
        subtitle: 'Jedna platforma. Kompletno rešenje.',
        list: [
          {
            icon: '🤖',
            title: 'AI Pronalaženje Loadova',
            description: 'Pametan algoritam automatski nalazi i rangira najprofitabilnije loadove',
          },
          {
            icon: '📍',
            title: 'GPS Uživo',
            description: 'Prati svaki kamion na živoj mapi. Znaš tačno gdje je tvoja flota.',
          },
          {
            icon: '📱',
            title: 'Mobilna App za Vozače',
            description: 'iOS aplikacija za vozače. Prihvati loadove, ažuriraj status, navigacija.',
          },
          {
            icon: '📊',
            title: 'Analytics Dashboard',
            description: 'Izvještaji prihoda, performanse vozača, istorija loadova - sve na jednom mjestu.',
          },
          {
            icon: '🔔',
            title: 'Push Notifikacije',
            description: 'Instant obavještenja za nove loadove, ažuriranja vozača i važne događaje.',
          },
          {
            icon: '💼',
            title: 'Broker Integracija',
            description: 'Poveži se sa DAT, Truckstop, i šalji rate confirmation instant.',
          },
        ],
      },
      pricing: {
        title: 'Jednostavne, Agresivne Cene',
        subtitle: 'Izaberi šta odgovara tvojoj firmi',
        fixed: {
          name: 'Fiksna Cena',
          price: '$1,299',
          period: '/mesečno',
          desc: 'Savršeno za flote u rastu',
          badge: '50% JEFTINIJE',
          features: [
            'Do 25 kamiona uključeno',
            'Neograničeno loadova',
            'AI pronalaženje 24/7',
            'GPS praćenje uživo',
            'Pristup mobilnoj app',
            'Analytics i izvještaji',
            'Email i telefonska podrška',
          ],
          comparison: 'Konkurencija: $875-1,500/mes',
          cta: 'Počni 14-Dana Besplatno',
        },
        perload: {
          name: 'Po Loadu',
          price: '10%',
          period: 'komisija',
          desc: 'Plaćaj samo kada zarađuješ',
          badge: 'BEZ MESEČNE NAKNADE',
          features: [
            'Nula mesečno plaćanje',
            'Plaćaš samo za bukirane loadove',
            '10% komisija po loadu',
            'Iste AI funkcije',
            'Isto GPS praćenje',
            'Ista mobilna app',
            'Otkažи bilo kada',
          ],
          comparison: 'Brokeri naplaćuju: 13-15%',
          cta: 'Počni da Zarađuješ',
        },
        driver: {
          name: 'App za Vozače',
          price: '$12',
          period: '/mesečno',
          desc: 'Za kompanijske vozače',
          badge: 'DODATAK',
          features: [
            'iOS mobilna aplikacija',
            'Notifikacije za loadove',
            'GPS praćenje',
            'Ažuriranje statusa',
            'Navigacija rute',
            'Plaća firma ili vozač',
            'Laka aktivacija',
          ],
          comparison: 'Cena po vozaču',
          cta: 'Dodaj Vozače',
        },
      },
      savings: {
        title: 'Vidi Koliko Uštediš',
        subtitle: 'Uporedi TruckFlow vs Tradicionalne Platforme',
        table: {
          trucks: 'Kamioni',
          competitor: 'Konkurencija',
          truckflow: 'TruckFlow',
          savings: 'Ušteda',
        },
        rows: [
          { trucks: '10', competitor: '$350-600', truckflow: '$1,299', savings: '$101/mes' },
          { trucks: '25', competitor: '$875-1,500', truckflow: '$1,299', savings: '$876/mes' },
          { trucks: '50', competitor: '$1,750-3,000', truckflow: '$999*', savings: '$1,501/mes' },
        ],
        note: '*Kontaktiraj nas za 50+ kamiona custom pricing',
      },
      cta: {
        title: 'Spreman da Uštediš 50% na Dispatch?',
        subtitle: 'Pridruži se kamionskim firmama koje već koriste TruckFlow',
        button: 'Počni Besplatno',
        nobind: 'Ne treba kreditna kartica. Otkažи bilo kada.',
      },
      contact: {
        title: 'Počni Danas',
        email: 'Email',
        phone: 'Telefon',
        or: 'ili',
      },
      footer: {
        tagline: 'AI Platforma za Fleet Management',
        rights: '© 2025 TruckFlow. Sva prava zadržana.',
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            🚛 <span>TruckFlow</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-white/80 hover:text-white transition hidden md:block">
              {t.nav.features}
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition hidden md:block">
              {t.nav.pricing}
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition hidden md:block">
              {t.nav.contact}
            </a>
            <button
              onClick={() => setLanguage(language === 'en' ? 'sr' : 'en')}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-semibold transition"
            >
              {language === 'en' ? '🇷🇸 SR' : '🇺🇸 EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 font-bold mb-8"
          >
            PREMIUM AI THAN COMPETITORS
          </motion.div>
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
            className="text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <button className="px-10 py-5 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-bold text-xl transition shadow-lg shadow-blue-500/50">
              {t.hero.cta}
            </button>
            <button className="px-10 py-5 bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold text-xl transition border border-white/20">
              {t.hero.cta2}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-6 bg-black/20">
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
      <section id="features" className="py-20 px-6">
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
      <section id="pricing" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">{t.pricing.title}</h2>
            <p className="text-2xl text-white/60">{t.pricing.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fixed Price */}
            <PricingCard
              badge={t.pricing.fixed.badge}
              name={t.pricing.fixed.name}
              price={t.pricing.fixed.price}
              period={t.pricing.fixed.period}
              desc={t.pricing.fixed.desc}
              features={t.pricing.fixed.features}
              comparison={t.pricing.fixed.comparison}
              cta={t.pricing.fixed.cta}
              color="blue"
              popular
            />

            {/* Per Load */}
            <PricingCard
              badge={t.pricing.perload.badge}
              name={t.pricing.perload.name}
              price={t.pricing.perload.price}
              period={t.pricing.perload.period}
              desc={t.pricing.perload.desc}
              features={t.pricing.perload.features}
              comparison={t.pricing.perload.comparison}
              cta={t.pricing.perload.cta}
              color="green"
            />

            {/* Driver App */}
            <PricingCard
              badge={t.pricing.driver.badge}
              name={t.pricing.driver.name}
              price={t.pricing.driver.price}
              period={t.pricing.driver.period}
              desc={t.pricing.driver.desc}
              features={t.pricing.driver.features}
              comparison={t.pricing.driver.comparison}
              cta={t.pricing.driver.cta}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">{t.savings.title}</h2>
            <p className="text-xl text-white/60">{t.savings.subtitle}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-bold">{t.savings.table.trucks}</th>
                  <th className="px-6 py-4 text-left text-white font-bold">{t.savings.table.competitor}</th>
                  <th className="px-6 py-4 text-left text-white font-bold">{t.savings.table.truckflow}</th>
                  <th className="px-6 py-4 text-left text-white font-bold">{t.savings.table.savings}</th>
                </tr>
              </thead>
              <tbody>
                {t.savings.rows.map((row: any, i: number) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="px-6 py-4 text-white text-lg font-semibold">{row.trucks}</td>
                    <td className="px-6 py-4 text-white/70 text-lg">{row.competitor}</td>
                    <td className="px-6 py-4 text-blue-400 text-lg font-bold">{row.truckflow}</td>
                    <td className="px-6 py-4 text-green-400 text-lg font-bold">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/50 text-center mt-6">{t.savings.note}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-2xl text-white/90 mb-8">{t.cta.subtitle}</p>
          <button className="px-12 py-5 bg-white hover:bg-gray-100 rounded-xl text-blue-600 font-bold text-xl transition shadow-2xl">
            {t.cta.button}
          </button>
          <p className="text-white/70 mt-6">{t.cta.nobind}</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">{t.contact.title}</h2>
          <div className="space-y-6">
            <div>
              <div className="text-white/60 mb-2 text-lg">{t.contact.email}</div>
              <a href="mailto:dispatch@truckflow.ai" className="text-3xl text-blue-400 hover:text-blue-300 transition font-bold">
                dispatch@truckflow.ai
              </a>
            </div>
            <div className="text-white/40 text-xl">{t.contact.or}</div>
            <div>
              <div className="text-white/60 mb-2 text-lg">{t.contact.phone}</div>
              <a href="tel:+381641234567" className="text-3xl text-blue-400 hover:text-blue-300 transition font-bold">
                +381 64 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            🚛 <span>TruckFlow</span>
          </div>
          <p className="text-white/60 mb-6 text-lg">{t.footer.tagline}</p>
          <p className="text-white/40">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

function PricingCard({ badge, name, price, period, desc, features, comparison, cta, color, popular }: any) {
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
      <h3 className="text-2xl font-bold text-white mb-2 mt-4">{name}</h3>
      <p className="text-white/60 mb-6">{desc}</p>
      <div className="mb-6">
        <span className="text-6xl font-bold text-white">{price}</span>
        <span className="text-white/60 text-xl ml-2">{period}</span>
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
      <button className="w-full py-4 bg-white/20 hover:bg-white/30 rounded-xl text-white font-bold transition text-lg">
        {cta}
      </button>
    </div>
  );
}
