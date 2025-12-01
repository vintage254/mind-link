import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Meteors } from '@/components/ui/meteors';

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Sign Up Form */}
      <div className="flex items-center justify-center p-8 lg:p-12 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <Meteors number={15} className="opacity-30" />
        
        <div className="w-full max-w-md space-y-8 relative z-10">
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-4xl font-bold">
                Mind<span className="text-primary">Link</span>
              </h1>
            </Link>
            <p className="mt-4 text-lg text-slate-600">
              Create your account and join our community
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <SignUp 
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-primary hover:bg-primary/90',
                  card: 'shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  socialButtonsBlockButton: 'border-2 border-slate-200 hover:border-primary transition-colors',
                  formFieldInput: 'border-2 border-slate-200 focus:border-primary',
                  footerActionLink: 'text-primary hover:text-primary/80',
                }
              }}
            />
          </div>

          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image (Desktop only) */}
      <div className="hidden lg:block relative bg-gradient-to-br from-primary/20 to-orange-100">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <Image
          src="/stressedgirl.jpeg"
          alt="Mental Health Support"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="max-w-lg space-y-6 text-center backdrop-blur-sm bg-white/80 p-8 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-slate-900">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-slate-700">
              Access mental health resources, connect with peers, and find the support you need to thrive.
            </p>
            <div className="space-y-3 pt-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">24/7 Crisis Support Access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">Connect with Peer Supporters</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700">Join Workshops & Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


