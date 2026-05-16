/**
 * Utility functions
 */

/**
 * Scroll to element by ID
 */
export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Format text for RTL display
 */
export function formatRTL(text: string): string {
  return text;
}

/**
 * Check if device is mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}
