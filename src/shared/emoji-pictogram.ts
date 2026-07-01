/**
 * The core Isotype idea, ported to emoji: one repeated glyph, each copy
 * standing for a fixed quantity, so a reader can count a row instead of
 * reading a number off an axis.
 */
export function toPictogramRow(
  value: number,
  unitValue: number,
  emoji: string,
  maxUnits = 50,
): string {
  if (unitValue <= 0) {
    throw new RangeError("unitValue must be greater than 0");
  }
  if (maxUnits <= 0) {
    throw new RangeError("maxUnits must be greater than 0");
  }
  const units = Math.max(0, Math.round(value / unitValue));
  return emoji.repeat(Math.min(units, maxUnits));
}
