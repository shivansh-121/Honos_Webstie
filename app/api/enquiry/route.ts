import { NextResponse } from 'next/server';

const ADMIN_PHONE = process.env.ADMIN_WHATSAPP_PHONE ?? '918469922888';
const CALLMEBOT_API_KEY = process.env.CALLMEBOT_API_KEY ?? '';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organisation, enquiry, message } = body;

    if (!name || !organisation || !enquiry || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!CALLMEBOT_API_KEY) {
      return NextResponse.json(
        { error: 'WhatsApp notifications not configured yet. Please set CALLMEBOT_API_KEY.' },
        { status: 503 }
      );
    }

    const now = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const whatsappMessage = `
🔔 *NEW ENQUIRY — Honos Website*
━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${name}
🏢 *Organisation:* ${organisation}
🛡️ *Service Required:* ${enquiry}
📅 *Received:* ${now}
━━━━━━━━━━━━━━━━━━━
📝 *Message:*
${message}
━━━━━━━━━━━━━━━━━━━
_Sent via honossecurities.com_
`.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${ADMIN_PHONE}&text=${encodedMessage}&apikey=${CALLMEBOT_API_KEY}`;

    const response = await fetch(callMeBotUrl);

    if (!response.ok) {
      throw new Error(`CallMeBot responded with status ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Enquiry WhatsApp notification failed:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
