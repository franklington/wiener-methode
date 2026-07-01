/**
 * A two-category pictogram row: what share of a whole is "yes" vs "no",
 * shown as a fixed-length row of icons rather than a number. Complements
 * toPictogramRow (which shows one absolute count) for "what fraction"
 * figures like market share.
 */
export function toShareRow(
  percent: number,
  totalIcons: number,
  yesEmoji: string,
  noEmoji: string,
): string {
  if (totalIcons <= 0) {
    throw new RangeError("totalIcons must be greater than 0");
  }
  const yesCount = Math.max(0, Math.min(Math.round((percent / 100) * totalIcons), totalIcons));
  return yesEmoji.repeat(yesCount) + noEmoji.repeat(totalIcons - yesCount);
}
