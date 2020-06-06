# Fuzzy Comparison

Do you need to know if two strings are kind of the same? This package compares two string and tells you if they are similar enough.

[![CircleCI](https://circleci.com/gh/Artmann/fuzzy-comparison.svg?style=svg)](https://circleci.com/gh/Artmann/fuzzy-comparison)
[![NPM Version](https://img.shields.io/npm/v/fuzzy-comparison.svg?style=flat-square)](https://www.npmjs.com/package/fuzzy-comparison)
![License](https://img.shields.io/badge/license-MIT-green)


```sh
yarn add fuzzy-comparison
```

## Usage

```js
import compare from 'fuzzy-comparison';

if (compare('Hello', 'Hallo')) {
  console.log(`It's a match!`);
}
```

You can adjust how sensitive the comparison is by adjusting the `threshold` which has a default value of 2.

```js
import compare from 'fuzzy-comparison';

if (compare('foo', 'foobar', { threshold: 4 })) {
  console.log(`It's a match!`);
}
```
