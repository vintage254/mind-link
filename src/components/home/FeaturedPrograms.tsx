'use client';

import Link from 'next/link';
import { Users, Video, MessageCircle, Megaphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
  {
    name: 'School Workshops',
    description: 'Interactive mental health workshops designed for students, creating safe spaces for open conversations.',
    icon: Users,
    href: '/services/workshops',
    color: 'from-blue-500 to-cyan-500',
    stats: '100+ schools',
  },
  {
    name: 'Online Programs',
    description: 'Virtual support groups and webinars accessible from anywhere, whenever you need support.',
    icon: Video,
    href: '/services/online-programs',
    color: 'from-purple-500 to-pink-500',
    stats: '24/7 access',
  },
  {
    name: 'Peer Support',
    description: 'Connect with trained youth ambassadors who understand what you are going through.',
    icon: MessageCircle,
    href: '/services/peer-support',
    color: 'from-green-500 to-emerald-500',
    stats: '50+ peer supporters',
  },
  {
    name: 'Social Campaigns',
    description: 'Join our engaging social media campaigns to raise awareness and reduce stigma.',
    icon: Megaphone,
    href: '/services/campaigns',
    color: 'from-orange-500 to-red-500',
    stats: '10K+ engaged',
  },
];

export function FeaturedPrograms() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive mental health support tailored for Montreal youth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={program.href}
                  className="group block h-full"
                >
                  <div className="relative h-full bg-white rounded-2xl border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all duration-300 overflow-hidden">
                    {/* Gradient Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                    
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${program.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {program.name}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-sm font-medium text-slate-700 mb-4">
                      {program.stats}
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

