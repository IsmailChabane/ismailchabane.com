// IP address extraction utility
export function extractClientIP(headers: Headers): string {
  return headers.get('x-forwarded-for') || 
         headers.get('x-real-ip') || 
         'unknown'
}
