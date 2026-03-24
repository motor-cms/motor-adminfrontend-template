/**
 * Check if an attribute value is truthy.
 * Handles both boolean `true` and string `'true'` values,
 * which occur when attributes are serialized/deserialized from JSON.
 */
export function isTruthyAttr(value: unknown): boolean {
  return value === true || value === 'true'
}
