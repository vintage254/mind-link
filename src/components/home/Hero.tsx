'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Meteors } from '@/components/ui/meteors';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && textRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-white to-slate-50 overflow-hidden">
      <Meteors number={30} className="opacity-40" />
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-orange-100 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Support Available 24/7
            </div>
            
            <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              You Are Not Alone in This{' '}
              <span className="text-primary">Journey</span>
            </h1>
            
            <p ref={textRef} className="mt-6 text-lg text-slate-600 leading-relaxed">
              MindLink empowers Montreal youth with mental health resources, peer support, 
              and community connections. Your mental health matters, and we are here to help.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/resources/crisis-support">
                <ShimmerButton
                  shimmerColor="#ffffff"
                  background="rgba(255, 107, 53, 1)"
                  className="w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Get Help Now
                </ShimmerButton>
              </Link>
              
              <Link href="/about">
                <ShimmerButton
                  shimmerColor="#FF6B35"
                  background="rgba(255, 255, 255, 1)"
                  className="w-full sm:w-auto text-slate-900 border-2 border-slate-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ShimmerButton>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">5K+</div>
                <div className="text-sm text-slate-600 mt-1">Youth Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-slate-600 mt-1">Workshops</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-slate-600 mt-1">Partners</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/motivational girl.jpeg"
                alt="MindLink - Mental Health Support"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <p className="text-sm font-medium text-slate-900">
                "MindLink gave me the courage to speak up about my mental health."
              </p>
              <p className="mt-2 text-xs text-slate-600">- Sarah, Age 16</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

