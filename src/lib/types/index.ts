// User Types
export type UserRole = 'user' | 'volunteer' | 'ambassador' | 'admin';

export interface User {
  id: string;
  clerk_id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: UserRole;
  preferred_language: 'en' | 'fr';
  created_at: string;
  updated_at: string;
}

// Event Types
export type EventType = 'workshop' | 'fundraiser' | 'webinar' | 'community';
export type RegistrationStatus = 'registered' | 'attended' | 'cancelled';

export interface Event {
  id: string;
  title: string;
  description: string;
  event_type: EventType;
  location?: string;
  is_virtual: boolean;
  start_date: string;
  end_date: string;
  max_participants?: number;
  image_url?: string;
  created_by: string;
  created_at: string;
}

export interface EventRegistration {
  id: string;
  event_id: string;
  user_id: string;
  status: RegistrationStatus;
  registered_at: string;
}

// Resource Types
export type ResourceType = 'article' | 'video' | 'toolkit' | 'app';

export interface Resource {
  id: string;
  title: string;
  description: string;
  resource_type: ResourceType;
  category: string;
  url?: string;
  file_url?: string;
  language: 'en' | 'fr' | 'both';
  is_featured: boolean;
  created_at: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author_id: string;
  category: string;
  tags: string[];
  featured_image?: string;
  language: 'en' | 'fr';
  published: boolean;
  published_at?: string;
  created_at: string;
}

// Volunteer Types
export type VolunteerStatus = 'pending' | 'approved' | 'active' | 'inactive';

export interface Volunteer {
  id: string;
  user_id: string;
  phone: string;
  availability: Record<string, any>;
  skills: string[];
  status: VolunteerStatus;
  background_check: boolean;
  created_at: string;
}

// Ambassador Types
export interface Ambassador {
  id: string;
  user_id: string;
  bio: string;
  photo_url?: string;
  social_media?: Record<string, string>;
  is_active: boolean;
  joined_date: string;
}

// Donation Types
export type DonationType = 'one-time' | 'monthly';
export type DonationStatus = 'pending' | 'completed' | 'failed';

export interface Donation {
  id: string;
  user_id?: string;
  amount: number;
  currency: string;
  donation_type: DonationType;
  stripe_payment_id: string;
  status: DonationStatus;
  is_anonymous: boolean;
  created_at: string;
}

// Partner Types
export type PartnerType = 'corporate' | 'school' | 'community' | 'government';

export interface Partner {
  id: string;
  name: string;
  logo_url?: string;
  website?: string;
  description: string;
  partner_type: PartnerType;
  is_featured: boolean;
  created_at: string;
}

// Contact Types
export type ContactStatus = 'new' | 'in_progress' | 'resolved';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: ContactStatus;
  created_at: string;
}

// Newsletter Types
export interface NewsletterSubscriber {
  id: string;
  email: string;
  preferred_language: 'en' | 'fr';
  is_active: boolean;
  subscribed_at: string;
  unsubscribed_at?: string;
}

// Workshop Booking Types
export type WorkshopStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface WorkshopBooking {
  id: string;
  school_name: string;
  contact_person: string;
  email: string;
  phone: string;
  preferred_dates: Record<string, any>;
  number_of_students: number;
  grade_level: string;
  status: WorkshopStatus;
  created_at: string;
}

