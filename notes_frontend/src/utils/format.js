 // PUBLIC_INTERFACE
export function formatDate(isoString) {
  /** Formats an ISO date string to human-readable local date/time. */
  try {
    const d = new Date(isoString);
    return d.toLocaleString();
  } catch {
    return '';
  }
}
