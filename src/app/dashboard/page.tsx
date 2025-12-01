'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Calendar, BookmarkIcon, Heart, TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-orange-600 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-orange-100">
            Here is your personal mental health dashboard
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">3</div>
                <div className="text-sm text-slate-600">Upcoming Events</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <BookmarkIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">12</div>
                <div className="text-sm text-slate-600">Saved Resources</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">7</div>
                <div className="text-sm text-slate-600">Days Active</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">85%</div>
                <div className="text-sm text-slate-600">Wellness Score</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">My Upcoming Events</h2>
                <Link href="/dashboard/events" className="text-primary hover:text-primary/80 font-semibold text-sm">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">Stress Management Workshop</h3>
                    <p className="text-sm text-slate-600 mt-1">Tomorrow at 3:00 PM • Virtual</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">Peer Support Group</h3>
                    <p className="text-sm text-slate-600 mt-1">Dec 5 at 6:00 PM • Community Center</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Recommended Resources */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Recommended for You</h2>
                <Link href="/resources" className="text-primary hover:text-primary/80 font-semibold text-sm">
                  Browse All
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/mental-health/anxiety" className="group p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-slate-900 group-hover:text-primary mb-2">Understanding Anxiety</h3>
                  <p className="text-sm text-slate-600">Learn coping strategies for managing anxiety</p>
                </Link>
                <Link href="/mental-health/self-care" className="group p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-slate-900 group-hover:text-primary mb-2">Self-Care Tips</h3>
                  <p className="text-sm text-slate-600">Daily practices for mental wellness</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  href="/resources/crisis-support"
                  className="block w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-center font-semibold"
                >
                  Crisis Support
                </Link>
                <Link
                  href="/events"
                  className="block w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-center font-semibold"
                >
                  Find Events
                </Link>
                <Link
                  href="/resources/professional-help"
                  className="block w-full px-4 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-center font-semibold"
                >
                  Find Therapist
                </Link>
              </div>
            </div>

            {/* Daily Inspiration */}
            <div className="bg-gradient-to-br from-primary/10 to-orange-50 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/motivational girl.jpeg"
                  alt="Daily Inspiration"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Daily Reminder</h3>
              <p className="text-slate-700 italic">
                "Your mental health is a priority. You deserve to take care of yourself."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

