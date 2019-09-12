import compare from './compare';

const similarWords = [
  ['accommodate', 'accomodate'],
  ['achieve', 'acheive'],
  ['advertise', 'adverties'],
  ['acceptable', 'acceptible'],
  ['committed', 'commited'],
  ['committed', 'comitted'],
  ['extreme', 'extreem'],
  ['height', 'heighth'],
  ['height', 'heigth'],
  ['té', 'te'],
  ['gusto', 'gusta']
];

const nonSimilarWords = [
  ['horse', 'dog'],
  ['random', 'raccoon'],
  ['aaaa', 'dddd'],
  ['monday', 'moend']
];

describe('compare', () => {
  describe('returns true for similar words', () => {
    it.each(similarWords)('%p, %p', (firstWord, secondWord) => {
      const result = compare(firstWord, secondWord);

      expect(result).toBeTruthy();
    });
  });

  describe('returns false for words that are not similar', () => {
    it.each(nonSimilarWords)('%p, %p', (firstWord, secondWord) => {
      const result = compare(firstWord, secondWord);

      expect(result).toBeFalsy();
    });
  });

  describe('handles null values', () => {
    it('returns true if both values are falsy', () => {
      expect(compare(null, null)).toBeTruthy();
      expect(compare(null, undefined)).toBeTruthy();
      expect(compare(undefined, null)).toBeTruthy();
    });

    it('returns false if only one value is falsy', () => {
      expect(compare(null, 'foobar')).toBeFalsy();
      expect(compare(undefined, 'foobar')).toBeFalsy();
      expect(compare('foobar', null)).toBeFalsy();
      expect(compare('foobar', undefined)).toBeFalsy();
    });
  });

  it('has an adjustable threshold', () => {
    expect(compare('foo', 'faa')).toBeTruthy();
    expect(compare('foo', 'foo', { threshold: 0 })).toBeTruthy();
    expect(compare('foobar', 'foo', { threshold: 3 })).toBeTruthy();
  });
});
