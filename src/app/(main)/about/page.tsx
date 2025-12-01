import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, Target, Award, TrendingUp, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-white to-orange-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                About <span className="text-primary">MindLink</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                MindLink is a Montreal-based non-profit organization dedicated to empowering youth 
                with mental health resources, peer support, and community connections. We believe 
                that no young person should face mental health challenges alone.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about_us.jpeg"
                alt="About MindLink"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To provide accessible mental health support and resources to Montreal youth, 
                creating a safe community where every young person feels heard, valued, and empowered.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                A future where mental health is openly discussed, stigma is eliminated, 
                and every young person in Montreal has access to the support they need to thrive.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Compassion & Empathy</li>
                <li>• Youth Empowerment</li>
                <li>• Inclusivity & Diversity</li>
                <li>• Community Connection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
            Our <span className="text-primary">Story</span>
          </h2>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">How We Started</h3>
              <p className="text-slate-600 mb-6">
                MindLink was founded in 2020 by a group of passionate Montreal youth who recognized 
                a critical gap in mental health support for young people. Having personally experienced 
                the challenges of navigating mental health issues without adequate resources, they were 
                determined to create a safe, accessible space for youth in their community.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Growth</h3>
              <p className="text-slate-600 mb-6">
                What started as small peer support groups in local community centers has grown into 
                a comprehensive mental health initiative serving thousands of Montreal youth. We have 
                partnered with over 50 schools, community organizations, and healthcare providers to 
                expand our reach and impact.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why MindLink?</h3>
              <p className="text-slate-600">
                We chose the name "MindLink" because we believe in the power of connection. Mental health 
                challenges can be isolating, but by linking minds—bringing young people together with peers, 
                resources, and professional support—we create a network of understanding and healing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Timeline</h3>
              <div className="space-y-6">
                {[
                  { year: '2020', event: 'MindLink founded with first peer support group' },
                  { year: '2021', event: 'Launched school workshop program in 10 schools' },
                  { year: '2022', event: 'Expanded to 30 schools and introduced online programs' },
                  { year: '2023', event: 'Launched Youth Ambassador program' },
                  { year: '2024', event: 'Served 5,000+ youth across Montreal' },
                  { year: '2025', event: 'Continuing to grow and reach more young people' },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex-shrink-0 w-24 font-bold text-primary">{item.year}</div>
                    <div className="text-slate-600">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Meet Our <span className="text-primary">Team</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Sarah Johnson', role: 'Executive Director', icon: Users },
              { name: 'Michael Chen', role: 'Program Coordinator', icon: Target },
              { name: 'Emily Rodriguez', role: 'Youth Outreach Lead', icon: Heart },
            ].map((member) => {
              const Icon = member.icon;
              return (
                <div key={member.name} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] transition-all text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Youth Ambassadors</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our program is powered by passionate youth ambassadors who share their experiences 
              and support their peers. Join our team and make a difference!
            </p>
            <Link
              href="/get-involved#ambassadors"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Become an Ambassador
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our <span className="text-primary">Impact</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { number: '5,000+', label: 'Youth Supported', icon: Users },
              { number: '200+', label: 'Workshops Delivered', icon: Target },
              { number: '50+', label: 'Partner Organizations', icon: Globe },
              { number: '10,000+', label: 'Support Hours', icon: TrendingUp },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Success Stories</h3>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-primary pl-6 italic text-slate-700">
                "MindLink gave me the confidence to talk about my mental health. The peer support 
                group showed me I was not alone, and the workshops taught me coping strategies I still use every day."
                <footer className="mt-2 text-sm text-slate-600 not-italic">- Alex, Age 17</footer>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-6 italic text-slate-700">
                "As a teacher, I have seen firsthand how MindLink workshops transform students. 
                They create a safe space for conversations about mental health that are desperately needed."
                <footer className="mt-2 text-sm text-slate-600 not-italic">- Ms. Thompson, High School Teacher</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section id="annual-reports" className="py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
            Annual <span className="text-primary">Reports</span>
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We believe in transparency. View our annual reports to see how we are making a difference 
            and how your support helps Montreal youth.
          </p>

          <div className="space-y-6">
            {[
              { year: '2024', title: 'Annual Report 2024', status: 'Latest' },
              { year: '2023', title: 'Annual Report 2023', status: 'Available' },
              { year: '2022', title: 'Annual Report 2022', status: 'Available' },
            ].map((report) => (
              <div key={report.year} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{report.title}</h3>
                  <p className="text-slate-600">Financial transparency and program outcomes</p>
                </div>
                <div className="flex items-center gap-4">
                  {report.status === 'Latest' && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      Latest
                    </span>
                  )}
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
