# 🧡 MindLink - Mental Health Support for Montreal Youth

A comprehensive mental health platform empowering Montreal youth with resources, peer support, and community connections.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8)

## ✨ Features

- 🏠 **Interactive Homepage** with beautiful animations and meteor effects
- 👤 **User Authentication** powered by Clerk
- 📊 **Personal Dashboard** for tracking events and resources
- 🎓 **Mental Health Resources** with comprehensive guides
- 🤝 **Peer Support Programs** connecting youth
- 💼 **Workshop Booking System** for schools and organizations
- 🎯 **Crisis Support** with 24/7 hotline information
- 🌐 **Bilingual Support** (EN/FR ready)
- 📱 **Fully Responsive** mobile-first design

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: [Supabase](https://supabase.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Payments**: [Stripe](https://stripe.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
mindlink/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (main)/            # Public pages (with Header/Footer)
│   │   ├── (auth)/            # Authentication pages
│   │   ├── dashboard/         # User dashboard (protected)
│   │   ├── volunteer/         # Volunteer portal (protected)
│   │   ├── ambassador/        # Ambassador portal (protected)
│   │   ├── admin/             # Admin panel (protected)
│   │   └── api/               # API routes
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── home/              # Homepage components
│   │   ├── shared/            # Reusable components
│   │   └── ui/                # UI components (Shadcn)
│   └── lib/
│       ├── supabase/          # Database client & queries
│       ├── clerk/             # Auth utilities
│       ├── tanstack-query/    # React Query hooks
│       ├── types/             # TypeScript types
│       └── utils/             # Utility functions
├── public/                     # Static assets
└── locales/                    # i18n translations
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm 10+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/mindlink.git
   cd mindlink
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and fill in your keys:
   ```bash
   cp .env.example .env.local
   ```

   Get your API keys from:
   - [Clerk](https://clerk.com) - Authentication
   - [Supabase](https://supabase.com) - Database
   - [Stripe](https://stripe.com) - Payment processing

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

1. Create a Supabase project
2. Run the SQL schema (coming soon in `/supabase/schema.sql`)
3. Enable Row Level Security (RLS)
4. Set up Clerk webhook to sync users

## 🔐 Authentication

The app uses Clerk for authentication with role-based access:

- **Public Users**: Browse all public pages
- **Registered Users**: Access dashboard, save resources, register for events
- **Volunteers**: Access volunteer portal
- **Youth Ambassadors**: Submit blog posts, manage profile
- **Admins**: Full system access

Protected routes are configured in `middleware.ts`.

## 🎨 Customization

### Brand Colors

The primary color (MindLink Orange) is defined in `src/app/globals.css`:

```css
--primary: oklch(0.71 0.18 35); /* #FF6B35 */
```

### Components

All UI components are in `src/components/ui/` and can be customized via Tailwind classes.

## 📱 Pages

### Public Pages
- `/` - Homepage
- `/about` - About Us (with sections: Our Story, Team, Impact, Annual Reports)
- `/services` - Services (Workshops, Online Programs, Peer Support, Campaigns)
- `/mental-health` - Mental Health Hub
- `/resources` - Resources Library
- `/get-involved` - Get Involved
- `/contact` - Contact Us

### Protected Pages
- `/dashboard` - User Dashboard
- `/volunteer` - Volunteer Portal
- `/ambassador` - Ambassador Portal
- `/admin` - Admin Panel

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/mindlink)

### Environment Variables for Production

Don't forget to add all environment variables from `.env.example` to your Vercel project settings.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 💬 Support

For questions or support:
- Email: info@mindlink.org
- Phone: (514) 123-4567

## 🙏 Acknowledgments

- All the Montreal youth who inspired this project
- Our partner schools and organizations
- The open-source community

---

Made with 🧡 by MindLink Team
