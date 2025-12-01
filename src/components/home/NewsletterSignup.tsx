'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! Check your email for confirmation.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-orange-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="h-12 w-12 text-white mx-auto mb-6" />
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            
            <p className="text-lg text-orange-100 mb-8">
              Get the latest mental health tips, event updates, and success stories 
              delivered to your inbox every month.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-orange-50 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-white"
              >
                <CheckCircle className="h-5 w-5" />
                <span>{message}</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center justify-center gap-2 text-orange-100"
              >
                <AlertCircle className="h-5 w-5" />
                <span>{message}</span>
              </motion.div>
            )}

            <p className="mt-6 text-sm text-orange-100">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
    </section>
  );
}

