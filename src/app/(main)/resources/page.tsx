'use client';

import { Phone, MessageCircle, BookOpen, Video, Download, Smartphone, Users, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const crisisResources = [
  {
    name: 'MindLink Crisis Support',
    phone: '514-MINDLINK',
    sms: 'Text SUPPORT to 514-647-5465',
    description: '24/7 mental health support for Montreal youth',
  },
  {
    name: 'MindLink Chat Support',
    phone: '1-844-MINDLINK',
    description: 'Live chat with trained peer supporters',
  },
];

export default function ResourcesPage() {
  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    toast.success('Phone number copied!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Mental Health <span className="text-primary">Resources</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Access a comprehensive library of mental health resources, from crisis support to 
            articles, videos, and professional help.
          </p>
        </div>
      </section>

      {/* Crisis Support Section - Removed */}

      {/* Articles Section */}
      <section id="articles" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Mental Health <span className="text-primary">Articles</span>
            </h2>
            <p className="text-slate-600">Educational content on various mental health topics</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Understanding Anxiety in Teens', category: 'Anxiety', readTime: '5 min read' },
              { title: 'Coping with School Stress', category: 'Stress', readTime: '7 min read' },
              { title: 'Building Healthy Relationships', category: 'Relationships', readTime: '6 min read' },
              { title: 'The Impact of Social Media', category: 'Digital Wellness', readTime: '8 min read' },
              { title: 'Depression Warning Signs', category: 'Depression', readTime: '5 min read' },
              { title: 'Self-Care for Mental Health', category: 'Self-Care', readTime: '4 min read' },
            ].map((article) => (
              <div key={article.title} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all cursor-pointer">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">{article.title}</h3>
                <p className="text-sm text-slate-500">{article.readTime}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Video className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Video <span className="text-primary">Library</span>
            </h2>
            <p className="text-slate-600">Educational videos and youth testimonials</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Mindfulness for Teens', duration: '12:34', views: '15K' },
              { title: 'Managing Anxiety: A Teen Perspective', duration: '8:45', views: '22K' },
              { title: 'Building Self-Esteem', duration: '15:20', views: '18K' },
              { title: 'How to Support a Friend', duration: '10:12', views: '25K' },
            ].map((video) => (
              <div key={video.title} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-48 flex items-center justify-center">
                  <Video className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>{video.duration}</span>
                    <span>•</span>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkits Section */}
      <section id="toolkits" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Download className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Downloadable <span className="text-primary">Toolkits</span>
            </h2>
            <p className="text-slate-600">Free resources you can download and use</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Anxiety Toolkit', desc: 'Worksheets and exercises for managing anxiety', size: '2.5 MB' },
              { title: 'Mood Tracker', desc: 'Daily mood tracking journal', size: '1.8 MB' },
              { title: 'Self-Care Planner', desc: 'Weekly self-care activities guide', size: '3.1 MB' },
              { title: 'Breathing Exercises', desc: 'Guided breathing techniques PDF', size: '1.2 MB' },
              { title: 'Crisis Plan Template', desc: 'Personal safety plan worksheet', size: '0.9 MB' },
              { title: 'Gratitude Journal', desc: 'Daily gratitude practice guide', size: '2.0 MB' },
            ].map((toolkit) => (
              <button
                key={toolkit.title}
                onClick={() => toast.success('Download started!')}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-200 shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all text-left group"
              >
                <Download className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{toolkit.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{toolkit.desc}</p>
                <span className="text-xs text-slate-500">{toolkit.size}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Apps Section */}
      <section id="apps" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Smartphone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Recommended <span className="text-primary">Apps</span>
            </h2>
            <p className="text-slate-600">Curated mental health and wellness apps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Headspace', category: 'Meditation', rating: 4.8 },
              { name: 'Calm', category: 'Sleep & Meditation', rating: 4.9 },
              { name: 'Moodpath', category: 'Mood Tracking', rating: 4.6 },
              { name: 'Sanvello', category: 'Anxiety & Depression', rating: 4.7 },
              { name: 'Youper', category: 'AI Therapy', rating: 4.5 },
              { name: 'Daylio', category: 'Mood Diary', rating: 4.8 },
            ].map((app) => (
              <div key={app.name} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{app.name}</h3>
                <p className="text-sm text-slate-600 mb-3">{app.category}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < Math.floor(app.rating) ? 'text-yellow-500' : 'text-slate-300'}`}>
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-slate-600 ml-2">{app.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Help Section */}
      <section id="professional-help" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Find Professional <span className="text-primary">Help</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Sometimes professional support is necessary. Here is how to find the right help.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-4">Therapists & Counselors</h3>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li>• School counselors (free for students)</li>
                <li>• Community mental health centers</li>
                <li>• Private therapists (check insurance)</li>
                <li>• Online therapy platforms</li>
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold w-full">
                Find a Therapist
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200">
              <h3 className="font-bold text-slate-900 mb-4">Support Groups</h3>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li>• Peer-led support circles</li>
                <li>• Condition-specific groups</li>
                <li>• Family support sessions</li>
                <li>• Virtual support communities</li>
              </ul>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold w-full">
                Join a Group
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

