import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/features/shared/email-template'
import type { ContactFormData } from '@/lib/validation/contact-schema'

// Initialize Resend with API key from environment variables
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function sendContactEmail(data: ContactFormData) {
  if (!resend) {
    throw new Error('Email service not configured')
  }

  const { error } = await resend.emails.send({
    from: 'contact@ismailchabane.com',
    to: ['ismailchabane2@gmail.com'],
    subject: `Portfolio Contact: ${data.subject}`,
    react: ContactEmailTemplate({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message
    })
  })

  if (error) {
    throw new Error(`Email sending failed: ${error.message || 'Unknown error'}`)
  }
}
