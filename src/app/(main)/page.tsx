import { Hero } from '@/components/home/Hero';
import { StatsSection } from '@/components/home/StatsSection';
import { FeaturedPrograms } from '@/components/home/FeaturedPrograms';
import { Testimonials } from '@/components/home/Testimonials';
import { NewsletterSignup } from '@/components/home/NewsletterSignup';
import Link from 'next/link';
import { Calendar, Users, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedPrograms />
      <Testimonials />
      
      {/* Events Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Join us for workshops, webinars, and community gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sample Event 1 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-shadow border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Managing Anxiety Workshop
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    Learn practical strategies to cope with anxiety
                  </p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Virtual Event • Dec 15, 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Event 2 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-shadow border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Youth Mental Health Summit
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    Annual summit bringing together youth and experts
                  </p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Montreal • Jan 20, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/events"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold border-2 border-slate-200 hover:border-primary hover:text-primary transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Whether you need support or want to help others, there is a place for you at MindLink
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/get-involved/volunteer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                >
                  Become a Volunteer
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors shadow-lg"
                >
                  Explore Resources
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </>
  );
}

