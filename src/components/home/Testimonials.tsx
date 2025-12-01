'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "MindLink helped me realize I was not alone in my struggles. The peer support group gave me a safe space to share and heal.",
    author: 'Alex, 17',
    role: 'Peer Support Participant',
    rating: 5,
  },
  {
    id: 2,
    content: "The workshops at my school opened my eyes to mental health. Now I know it is okay to ask for help when I need it.",
    author: 'Jamie, 15',
    role: 'Workshop Attendee',
    rating: 5,
  },
  {
    id: 3,
    content: "Becoming a youth ambassador has been transformative. I am making a real difference in my community while healing myself.",
    author: 'Sam, 18',
    role: 'Youth Ambassador',
    rating: 5,
  },
];

export function Testimonials() {
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
            Stories of <span className="text-primary">Hope</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Real experiences from youth who found support through MindLink
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-shadow duration-300 h-full border border-slate-200">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {testimonial.role}
                  </div>
                </div>

                {/* Decorative Quote Mark */}
                <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif">
                  "
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

