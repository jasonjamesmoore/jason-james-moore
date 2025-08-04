// pages/api/contact.ts
import { Resend } from 'resend';
import { z } from 'zod';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
  console.log("Received method:", req.method);
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const data = ContactSchema.parse(req.body);

    await resend.emails.send({
      from: 'Contact Form <contact@jasonjamesmoore.com>', // Must be verified in Resend
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Message:
        ${data.message}
      `,
    });
    

    return res.status(200).json({ success: true });
  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error('❌ Email failed:', error.message);
  } else {
    console.error('❌ Email failed:', error);
  }
  return res.status(400).json({ error: 'Invalid submission or email failure.' });
}
}
