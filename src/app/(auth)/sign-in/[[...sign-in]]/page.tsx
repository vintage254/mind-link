import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Meteors } from '@/components/ui/meteors';

export default function SignInPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Sign In Form */}
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
              Welcome back! Sign in to continue
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <SignIn 
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
            Do not have an account?{' '}
            <Link href="/sign-up" className="text-primary font-semibold hover:underline">
              Sign up
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
              You Are Not Alone
            </h2>
            <p className="text-lg text-slate-700">
              Join thousands of Montreal youth finding support, resources, and hope through MindLink.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div>
                <div className="text-2xl font-bold text-primary">5K+</div>
                <div className="text-sm text-slate-600">Youth Helped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-slate-600">Workshops</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


