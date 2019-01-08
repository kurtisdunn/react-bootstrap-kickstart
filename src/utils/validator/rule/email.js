export default function (elem, done) {
  const value = elem.value;
  const empty = !value || !value.length;

  if (empty) { return done(null); }

  const indexOfAt = value.indexOf('@');
  const lastIndex = value.length - 1;
  const hasAtBetweenChars = indexOfAt > 0 && indexOfAt < lastIndex;

  done(hasAtBetweenChars ? null : [`${value} is not a valid email address`]);
}
