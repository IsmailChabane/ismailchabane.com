'use server'

export interface ContactFormState {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract form data
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Validation
  const errors: ContactFormState['errors'] = {}

  // Name validation
  if (!name || name.trim().length === 0) {
    errors.name = ['Name is required']
  } else if (name.trim().length < 2) {
    errors.name = ['Name must be at least 2 characters']
  }

  // Email validation
  if (!email || email.trim().length === 0) {
    errors.email = ['Email is required']
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      errors.email = ['Please enter a valid email address']
    }
  }

  // Phone validation
  if (!phone || phone.trim().length === 0) {
    errors.phone = ['Phone number is required']
  } else {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      errors.phone = ['Please enter a valid phone number']
    }
  }

  // Subject validation
  if (!subject || subject.trim().length === 0) {
    errors.subject = ['Subject is required']
  } else if (subject.trim().length < 3) {
    errors.subject = ['Subject must be at least 3 characters']
  }

  // Message validation
  if (!message || message.trim().length === 0) {
    errors.message = ['Message is required']
  } else if (message.trim().length < 10) {
    errors.message = ['Message must be at least 10 characters']
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please fix the errors below',
      errors
    }
  }

  // TODO: Add email sending logic here
  // For now, just simulate success
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    success: true,
    message: 'Thank you for your message! I\'ll get back to you soon.'
  }
}
