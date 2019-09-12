/**
 * Levenshtein Distance is used to calculate the difference between two words.
 *
 * https://en.wikipedia.org/wiki/Levenshtein_distance#Iterative_with_two_matrix_rows
 */
function levenshteinDistance(a, b) {
  let v0 = [];
  let v1 = [];

  for (let i = 0; i <= b.length; i += 1) {
    v0[i] = i;
  }

  for (let i = 0; i < a.length; i += 1) {
    v1[0] = i + 1;

    for (let j = 0; j < b.length; j += 1) {
      const deletionCost = v0[j + 1] + 1;
      const insertionConst = v1[j] + 1;
      const substitutionCost = a[i] === b[j] ? v0[j] : v0[j] + 1;

      v1[j + 1] = Math.min(deletionCost, insertionConst, substitutionCost);
    }

    const tmp = v1;

    v1 = v0;
    v0 = tmp;
  }

  return v0[b.length];
}

/**
 * Returns a value that signifies how similar two strings are. A distance of 0 means that
 * the strings are identical.
 */
function distance(a, b) {
  return levenshteinDistance(a, b);
}

/**
 * Compares two string and returns true if they are similar and false
 * if they are not that similar.
 */
export default function compare(firstItem, secondItem, opts = {}) {
  if (!firstItem && !secondItem) {
    return true;
  }

  if (firstItem && !secondItem) {
    return false;
  }

  if (secondItem && !firstItem) {
    return false;
  }

  const defaultOptions = {
    threshold: 2
  };
  const options = {
    ...defaultOptions,
    ...opts
  };

  return distance(firstItem, secondItem) <= options.threshold;
}
