'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you within 48 hours.');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-slate-600">
            Have questions? Want to get involved? We would love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:info@mindlink.org" className="text-slate-600 hover:text-primary">
                      info@mindlink.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a href="tel:+15141234567" className="text-slate-600 hover:text-primary">
                      (514) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                    <p className="text-slate-600">
                      123 Mental Health Avenue<br />
                      Montreal, QC H3A 1A1<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-orange-50 rounded-2xl p-8">
              <h3 className="font-bold text-slate-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Note: Crisis support is available 24/7 through our partner hotlines
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="workshop">Workshop Booking</option>
                  <option value="volunteer">Volunteer Application</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              <p className="text-sm text-slate-500 text-center">
                We typically respond within 48 hours during business days
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

