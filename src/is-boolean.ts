import type { Guard } from "./types";

/**
 * @category Guard
 * @returns `true` if `typeof value` is "boolean"
 * @example
 * ```typescript
 *   if(isBoolean(value)) return !value;
 * ```
 */
const isBoolean: Guard<boolean> = (value: unknown): value is boolean =>
  typeof value === "boolean";

export default isBoolean;
