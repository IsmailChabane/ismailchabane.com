// Spam detection utility
const SPAM_PATTERNS = [
  /viagra/i,
  /casino/i,
  /bitcoin/i,
  /crypto/i,
  /investment/i,
  /loan/i,
  /free money/i,
  /click here/i,
  /urgent/i,
  /act now/i
]

export function isSpam(content: string): boolean {
  return SPAM_PATTERNS.some(pattern => pattern.test(content))
}

export function isHoneypotFilled(website: string): boolean {
  return website && website.trim() !== ''
}
