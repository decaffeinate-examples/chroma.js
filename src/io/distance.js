/* eslint-disable
    camelcase,
    func-names,
    guard-for-in,
    no-cond-assign,
    no-param-reassign,
    no-restricted-syntax,
    no-undef,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS104: Avoid inline assignments
 * DS204: Change includes calls to have a more natural evaluation order
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// simple Euclidean distance
chroma.distance = function (a, b, mode) {
  // Delta E (CIE 1976)
  // see http://www.brucelindbloom.com/index.html?Equations.html
  let needle; let
    needle1;
  if (mode == null) { mode = 'lab'; }
  if ((needle = type(a), ['string', 'number'].includes(needle))) { a = new Color(a); }
  if ((needle1 = type(b), ['string', 'number'].includes(needle1))) { b = new Color(b); }
  const l1 = a.get(mode);
  const l2 = b.get(mode);
  let sum_sq = 0;
  for (const i in l1) {
    const d = (l1[i] || 0) - (l2[i] || 0);
    sum_sq += d * d;
  }
  return Math.sqrt(sum_sq);
};
