import Image from 'next/image';
import Link from 'next/link';
import { Users, Video, MessageCircle, Megaphone, Calendar, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive mental health programs designed by youth, for youth. 
              From interactive workshops to peer support, we are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Mental Health <span className="text-primary">Workshops</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our interactive workshops create safe spaces for students to learn about mental health, 
                develop coping strategies, and connect with peers.
              </p>
              <div className="space-y-4">
                {[
                  'Customized for schools and community groups',
                  'Led by trained youth facilitators',
                  'Flexible scheduling (45 min to 2 hours)',
                  'Topics from stress management to digital wellbeing',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/overworked.jpeg"
                alt="Workshop Session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Understanding Anxiety & Stress Management',
              'Recognizing Depression & Getting Help',
              'Building Resilience & Coping Skills',
              'Healthy Social Media Use',
              'Self-Care & Mental Wellness',
              'Supporting Friends in Crisis',
            ].map((topic) => (
              <div
                key={topic}
                className="flex items-start gap-3 bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.08)]"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-slate-700 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Programs Section */}
      <section id="online-programs" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Online <span className="text-primary">Programs</span>
            </h2>
            <p className="text-lg text-slate-600">
              Access mental health support from anywhere, anytime with our virtual programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Virtual Support Groups</h3>
              <p className="text-slate-600 mb-4">
                Weekly online meetings where youth connect with peers facing similar challenges
              </p>
              <Link href="#" className="text-primary font-semibold hover:text-primary/80 flex items-center gap-2">
                Join a Group <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Webinar Series</h3>
              <p className="text-slate-600 mb-4">
                Educational webinars with mental health experts on various topics
              </p>
              <Link href="#" className="text-primary font-semibold hover:text-primary/80 flex items-center gap-2">
                View Schedule <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Online Challenges</h3>
              <p className="text-slate-600 mb-4">
                Participate in #MindLinkMoments - monthly wellness challenges on social media
              </p>
              <Link href="#" className="text-primary font-semibold hover:text-primary/80 flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Peer Support Section */}
      <section id="peer-support" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/motivational girl.jpeg"
                alt="Peer Support"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Peer <span className="text-primary">Support</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Connect with trained youth ambassadors who understand what you are going through. 
                Our peer support program creates authentic connections between young people.
              </p>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                  <h3 className="font-bold text-slate-900 mb-2">How It Works</h3>
                  <p className="text-slate-600 text-sm">
                    Match with a peer supporter who has been trained to listen and provide guidance. 
                    Connect through group sessions or one-on-one chats.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100">
                  <h3 className="font-bold text-slate-900 mb-2">Become a Peer Supporter</h3>
                  <p className="text-slate-600 text-sm">
                    Have lived experience with mental health? Help others by becoming a trained peer supporter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section id="campaigns" className="py-20 bg-gradient-to-br from-primary/10 to-orange-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Social Media <span className="text-primary">Campaigns</span>
            </h2>
            <p className="text-lg text-slate-600">
              Join our engaging campaigns to raise awareness, reduce stigma, and spread hope
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <Megaphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">#MindLinkMoments</h3>
              <p className="text-slate-600 mb-4">
                Share your self-care moments and mental health journey. Every month, we feature 
                youth stories to inspire others.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">#MentalHealthMatters</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">#BreakTheStigma</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Mental Health Awareness Week</h3>
              <p className="text-slate-600 mb-4">
                Join our annual awareness campaign with daily challenges, educational content, 
                and community events throughout May.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80"
              >
                View Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Get Involved</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Use our campaign hashtags, share your story, or suggest new campaign ideas. 
              Together, we can create positive change!
            </p>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Join Our Campaigns
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


