import type { Guard } from "./types";

/**
 * @category Guard
 * @returns `true` if value is **strictly** an instance of **`Object`**
 * @example
 * ```typescript
 *   if(isObject(values)) return { ...values, completed:true };
 * ```
 */
const isObject: Guard<{ [K in any]?: unknown }> = (
  value: unknown
): value is { [K in any]?: unknown } => {
  return (
    value instanceof Object && Object === Object.getPrototypeOf(value).constructor
  );
};

export default isObject;
