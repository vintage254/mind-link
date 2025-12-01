'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const navigation = [
  {
    name: 'About Us',
    href: '/about',
    dropdown: [
      { name: 'Our Story', href: '/about#our-story' },
      { name: 'Team', href: '/about#team' },
      { name: 'Impact', href: '/about#impact' },
      { name: 'Annual Reports', href: '/about#annual-reports' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Workshops', href: '/services#workshops' },
      { name: 'Online Programs', href: '/services#online-programs' },
      { name: 'Peer Support', href: '/services#peer-support' },
      { name: 'Campaigns', href: '/services#campaigns' },
    ],
  },
  {
    name: 'Mental Health',
    href: '/mental-health',
    dropdown: [
      { name: 'Understanding Anxiety', href: '/mental-health#anxiety' },
      { name: 'Understanding Depression', href: '/mental-health#depression' },
      { name: 'Social Isolation', href: '/mental-health#social-isolation' },
      { name: 'Digital Wellbeing', href: '/mental-health#digital-wellbeing' },
      { name: 'Self-Care Tips', href: '/mental-health#self-care' },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    dropdown: [
      { name: 'Crisis Support', href: '/resources#crisis-support' },
      { name: 'Articles', href: '/resources#articles' },
      { name: 'Videos', href: '/resources#videos' },
      { name: 'Toolkits', href: '/resources#toolkits' },
      { name: 'Recommended Apps', href: '/resources#apps' },
      { name: 'Find Professional Help', href: '/resources#professional-help' },
    ],
  },
  {
    name: 'Get Involved',
    href: '/get-involved',
    dropdown: [
      { name: 'Volunteer', href: '/get-involved#volunteer' },
      { name: 'Youth Ambassadors', href: '/get-involved#ambassadors' },
      { name: 'Donate', href: '/get-involved#donate' },
      { name: 'Fundraising Events', href: '/get-involved#fundraising' },
      { name: 'Partnerships', href: '/get-involved#partnerships' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-slate-200 py-4 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">MindLink</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname.startsWith(item.href)
                      ? 'text-primary'
                      : 'text-slate-700'
                  }`}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth & CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-slate-700 hover:text-primary"
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <ShimmerButton
                    shimmerColor="#FF6B35"
                    background="rgba(255, 107, 53, 1)"
                    className="text-sm"
                  >
                    Sign In
                  </ShimmerButton>
                </Link>
                <Link href="/get-involved/donate">
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    background="rgba(15, 23, 42, 1)"
                    className="text-sm"
                  >
                    Donate
                  </ShimmerButton>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-slate-200 pt-4 space-y-2">
              {isSignedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <div className="px-3 py-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/get-involved/donate"
                    className="block mx-3 rounded-md bg-primary px-4 py-2 text-base font-medium text-white hover:bg-primary/90 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Donate
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

