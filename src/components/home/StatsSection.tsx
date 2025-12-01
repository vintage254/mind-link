'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Heart, Calendar, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    id: 1,
    name: 'Youth Supported',
    value: 5000,
    suffix: '+',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    name: 'Mental Health Workshops',
    value: 200,
    suffix: '+',
    icon: Calendar,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    id: 3,
    name: 'Hours of Support',
    value: 10000,
    suffix: '+',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    id: 4,
    name: 'Partner Organizations',
    value: 50,
    suffix: '+',
    icon: Award,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Our Impact in <span className="text-primary">Numbers</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Together, we are making a real difference in the lives of Montreal youth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-shadow duration-300">
                  <div className={`inline-flex p-3 rounded-xl ${stat.bgColor} mb-4`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    <CountUp end={stat.value} />
                    {stat.suffix}
                  </div>
                  
                  <div className="text-sm font-medium text-slate-600">
                    {stat.name}
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl -z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

