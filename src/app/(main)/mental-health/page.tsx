import Image from 'next/image';
import Link from 'next/link';
import { Brain, Heart, Users, Smartphone, Sparkles, Phone, ArrowRight } from 'lucide-react';

export default function MentalHealthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Mental Health <span className="text-primary">Hub</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your comprehensive resource for understanding mental health. Learn about common 
                challenges youth face, find coping strategies, and discover when and how to seek help.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/mindthought.jpeg"
                alt="Mental Health Resources"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anxiety Section */}
      <section id="anxiety" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/stressedgirl.jpeg"
                alt="Understanding Anxiety"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Understanding <span className="text-primary">Anxiety</span>
              </h2>
              <p className="text-slate-600 mb-6">
                Anxiety is your body's natural response to stress. While occasional anxiety is normal, 
                persistent anxiety can impact your daily life.
              </p>
              
              <div className="space-y-3 mb-6">
                <h3 className="font-bold text-slate-900">Common Signs:</h3>
                {[
                  'Feeling nervous, restless, or tense',
                  'Increased heart rate or rapid breathing',
                  'Difficulty concentrating or sleeping',
                  'Avoiding situations that trigger anxiety',
                ].map((sign) => (
                  <div key={sign} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-slate-600">{sign}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
                <h3 className="font-bold text-slate-900 mb-3">Coping Strategies</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Practice deep breathing (4-4-4 technique)</li>
                  <li>• Use grounding techniques (5-4-3-2-1 method)</li>
                  <li>• Regular physical activity</li>
                  <li>• Talk to someone you trust</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depression Section */}
      <section id="depression" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Heart className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Understanding <span className="text-primary">Depression</span>
              </h2>
              <p className="text-slate-600 mb-6">
                Depression is more than feeling sad. It is a persistent feeling of sadness and loss of interest 
                that affects how you feel, think, and handle daily activities.
              </p>
              
              <div className="space-y-3 mb-6">
                <h3 className="font-bold text-slate-900">Warning Signs:</h3>
                {[
                  'Persistent sad, anxious, or empty mood',
                  'Loss of interest in activities once enjoyed',
                  'Changes in appetite or sleep patterns',
                  'Difficulty concentrating or making decisions',
                  'Thoughts of death or suicide',
                ].map((sign) => (
                  <div key={sign} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-slate-600">{sign}</span>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-bold text-slate-900 mb-3">When to Seek Help</h3>
                <p className="text-sm text-slate-700 mb-3">
                  If symptoms persist for more than two weeks or interfere with daily life, 
                  it is important to seek professional support.
                </p>
                <Link
                  href="/resources#professional-help"
                  className="text-primary font-semibold hover:text-primary/80 flex items-center gap-2"
                >
                  Find Professional Help <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/sadgirl.jpeg"
                alt="Understanding Depression"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Isolation Section */}
      <section id="social-isolation" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Overcoming <span className="text-primary">Social Isolation</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Feeling disconnected from others is common, especially in our digital age. 
            Here are ways to build meaningful connections.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Join Groups', desc: 'Connect with peers through our support groups and programs' },
              { title: 'Reach Out', desc: 'Start small - message a friend or join an online community' },
              { title: 'Be Patient', desc: 'Building connections takes time. Be kind to yourself' },
            ].map((tip) => (
              <div key={tip.title} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
                <h3 className="font-bold text-slate-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-slate-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Wellbeing Section */}
      <section id="digital-wellbeing" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Smartphone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Digital <span className="text-primary">Wellbeing</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Develop a healthy relationship with social media and technology
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-left">
            <h3 className="font-bold text-slate-900 mb-4">Healthy Tech Habits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Set screen time limits',
                'Take regular digital detox breaks',
                'Curate your feed - unfollow negative accounts',
                'Turn off non-essential notifications',
                'No phones 1 hour before bed',
                'Engage in offline hobbies',
              ].map((habit) => (
                <div key={habit} className="flex items-center gap-3 bg-slate-50 rounded-lg p-4">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  </div>
                  <span className="text-slate-700">{habit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Self-Care Section */}
      <section id="self-care" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Self-Care <span className="text-primary">Strategies</span>
            </h2>
            <p className="text-lg text-slate-600">
              Taking care of your mental health is essential. Here are practical tips for daily wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Physical', items: ['Regular exercise', 'Healthy eating', 'Adequate sleep'] },
              { title: 'Emotional', items: ['Journal your feelings', 'Practice gratitude', 'Express yourself'] },
              { title: 'Social', items: ['Connect with friends', 'Join communities', 'Ask for help'] },
              { title: 'Mental', items: ['Meditation', 'Reading', 'Creative hobbies'] },
            ].map((category) => (
              <div key={category.title} className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 border border-pink-100 shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
                <h3 className="font-bold text-slate-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-pink-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Support CTA */}
      <section className="py-20 bg-red-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            In Crisis? Get Help Now
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            If you or someone you know is in immediate danger, please reach out for help.
          </p>
          <Link
            href="/resources#crisis-support"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors shadow-lg text-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Access Crisis Support
          </Link>
        </div>
      </section>
    </div>
  );
}
