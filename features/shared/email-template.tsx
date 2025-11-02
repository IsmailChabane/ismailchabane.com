import * as React from 'react'

interface ContactEmailTemplateProps {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Clean email styles inspired by modern design
const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#f0f9ff',
    padding: '24px 32px',
    textAlign: 'center' as const,
    borderBottom: '1px solid #e0f2fe'
  },
  headerTitle: {
    margin: '0',
    fontSize: '24px',
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: '-0.025em'
  },
  mainContent: {
    padding: '32px'
  },
  contactSection: {
    marginBottom: '24px'
  },
  contactRow: {
    margin: '12px 0',
    fontSize: '16px',
    color: '#374151',
    display: 'flex',
    alignItems: 'center'
  },
  contactLabel: {
    fontWeight: '600',
    color: '#1f2937',
    minWidth: '60px',
    marginRight: '12px'
  },
  contactValue: {
    color: '#4b5563',
    flex: 1
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: '500'
  },
  messageSection: {
    marginTop: '24px',
    paddingTop: '24px',
    borderTop: '1px solid #e5e7eb'
  },
  messageText: {
    margin: '0',
    color: '#374151',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap' as const,
    fontSize: '16px'
  },
  footer: {
    padding: '20px 32px',
    textAlign: 'center' as const,
    color: '#6b7280',
    fontSize: '14px',
    backgroundColor: '#f9fafb',
    borderTop: '1px solid #e5e7eb'
  }
}

export function ContactEmailTemplate({
  name,
  email,
  phone,
  subject,
  message
}: ContactEmailTemplateProps) {
  return (
    <div style={styles.container}>
      {/* Header - Clean and simple */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          {subject}
        </h1>
      </div>
      
      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Contact Information */}
        <div style={styles.contactSection}>
          <div style={styles.contactRow}>
            <span style={styles.contactLabel}>Name:</span>
            <span style={styles.contactValue}>{name}</span>
          </div>
          
          <div style={styles.contactRow}>
            <span style={styles.contactLabel}>Email:</span>
            <a href={`mailto:${email}`} style={{...styles.contactValue, ...styles.link}}>
              {email}
            </a>
          </div>
          
          {phone && (
            <div style={styles.contactRow}>
              <span style={styles.contactLabel}>Phone:</span>
              <a href={`tel:${phone}`} style={{...styles.contactValue, ...styles.link}}>
                {phone}
              </a>
            </div>
          )}
        </div>
        
        {/* Message Content */}
        <div style={styles.messageSection}>
          <p style={styles.messageText}>
            {message}
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div style={styles.footer}>
        <p style={{ margin: '0' }}>
          This email was sent from your portfolio contact form at ismailchabane.com
        </p>
      </div>
    </div>
  )
}
