import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service (Mailchimp, SendGrid, etc.)
    // For now, we'll just log it
    console.log('Newsletter subscription:', email);

    // In production, you would:
    // 1. Save to Supabase newsletter_subscribers table
    // 2. Send to email marketing platform
    // 3. Send confirmation email

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

