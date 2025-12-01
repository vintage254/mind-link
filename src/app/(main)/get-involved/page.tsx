'use client';

import { Users, Award, Heart, Calendar, HandshakeIcon, DollarSign, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

export default function GetInvolvedPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Get <span className="text-primary">Involved</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Join us in making a difference. Whether you want to volunteer, become an ambassador, 
            donate, or partner with us, there is a place for you at MindLink.
          </p>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Become a <span className="text-primary">Volunteer</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Make a real impact in your community by volunteering with MindLink. 
                Help run workshops, support events, or contribute your skills.
              </p>
              
              <div className="space-y-4 mb-6">
                {[
                  'Flexible commitment (few hours per month)',
                  'Full training provided',
                  'Meet like-minded people',
                  'Build valuable skills',
                  'Make a real difference',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Apply to Volunteer</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Why do you want to volunteer?</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Ambassadors Section */}
      <section id="ambassadors" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Youth <span className="text-primary">Ambassador Program</span>
            </h2>
            <p className="text-lg text-slate-600">
              Lead by example. Youth ambassadors are the heart of MindLink, sharing their stories 
              and supporting peers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Leadership', desc: 'Develop public speaking and leadership skills', icon: Award },
              { title: 'Impact', desc: 'Share your story and inspire others', icon: Heart },
              { title: 'Community', desc: 'Join a supportive network of youth leaders', icon: Users },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
              <div className="text-left bg-slate-50 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                <p className="text-slate-700">Ages 16-24</p>
              </div>
              <div className="text-left bg-slate-50 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                <p className="text-slate-700">Lived experience with mental health</p>
              </div>
              <div className="text-left bg-slate-50 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                <p className="text-slate-700">Commitment to 6 months</p>
              </div>
              <div className="text-left bg-slate-50 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                <p className="text-slate-700">Complete training program</p>
              </div>
            </div>
            <button
              onClick={() => toast.info('Application form opening soon!')}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Make a <span className="text-primary">Donation</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Your donation helps us provide free mental health programs and resources to Montreal youth.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {['$25', '$50', '$100', '$250'].map((amount) => (
              <button
                key={amount}
                onClick={() => toast.success(`Thank you for pledging ${amount}!`)}
                className="px-6 py-4 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl hover:border-green-500 transition-colors font-bold text-slate-900 text-xl"
              >
                {amount}
              </button>
            ))}
          </div>

          <button
            onClick={() => toast.success('Redirecting to donation page...')}
            className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-lg"
          >
            Donate Now
          </button>

          <p className="text-sm text-slate-500 mt-6">
            MindLink is a registered non-profit. Tax receipts provided for donations over $20.
          </p>
        </div>
      </section>

      {/* Fundraising Section */}
      <section id="fundraising" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Fundraising <span className="text-primary">Events</span>
            </h2>
            <p className="text-lg text-slate-600">
              Join us at our fundraising events or organize your own!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-bold text-slate-900 mb-1">Mental Health Gala 2025</h4>
                  <p className="text-sm text-slate-600">March 15, 2025 • Downtown Montreal</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-bold text-slate-900 mb-1">Walk for Mental Health</h4>
                  <p className="text-sm text-slate-600">May 20, 2025 • Mount Royal Park</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Host Your Own</h3>
              <p className="text-slate-600 mb-6">
                Organize a fundraiser for your school, community, or friend group. 
                We will provide support and materials!
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-700">
                <li>• Bake sales</li>
                <li>• Sports tournaments</li>
                <li>• Online campaigns</li>
                <li>• Awareness walks</li>
              </ul>
              <button
                onClick={() => toast.info('Fundraising kit available soon!')}
                className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
              >
                Get Fundraising Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <HandshakeIcon className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Partner with <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We partner with schools, corporations, and community organizations to expand our reach.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { type: 'Schools', desc: 'Bring mental health programs to your school' },
              { type: 'Corporations', desc: 'CSR partnerships and employee wellness' },
              { type: 'Community', desc: 'Local organizations and health centers' },
            ].map((partner) => (
              <div key={partner.type} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{partner.type}</h3>
                <p className="text-sm text-slate-600">{partner.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold shadow-lg"
          >
            Contact Us About Partnerships
          </Link>
        </div>
      </section>
    </div>
  );
}


