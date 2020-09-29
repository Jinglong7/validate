# Validate

Validate is a standard Deno module for validating string.

## 🎁 Features

* [x] isAfter [x] isAlpha [x] isAlphanumeric [ ] isAscii [ ] isBIC [ ] isBase32 [ ] isBase64 [ ] isBefore [x] isBoolean [ ] isBtcAddress
* [ ] isByteLength [ ] isCreditCard [ ] isCurrency.ts [ ] isDataURI [ ] isDate [ ] isDecimal [ ] isDivisibleBy [ ] isEAN [ ] isEmail
* [ ] isEmpty [ ] isEthereumAddress [ ] isFQDN [ ] isFloat [ ] isFullWidth [ ] isHalfWidth [ ] isHash [ ] isHexColor [ ] isHexadecimal [ ] isHsl
* [ ] isIBAN [ ] isIMEI [ ] isIP [ ] isIPRange [ ] isISBN [ ] isISIN [ ] isISO31661Alpha2.ts [ ] isISO31661Alpha3 [ ] isISO8601 [ ] isISRC
* [ ] isISSN [ ] isIdentityCard.ts [ ] isIn [ ] isInt [ ] isJSON [ ] isJWT [ ] isLatLong [ ] isLength [ ] isLocale [ ] isLowercase

## 🔧 How to use

```ts
import { validate, isBoolean } from 'https://deno.land/x/validate@v0.0.3/mod.ts';
```

## 💡 Usage

```ts
import { validate, isBoolean } from 'https://deno.land/x/validate@v0.0.3/mod.ts';

console.log(validate.isAlpha('Validate')); // true
console.log(isBoolean('true')); // true
```

## ❗ Issues

If you think any of the `Validate` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 💪 Contribution

We'd love to have your helping hand on contributions to `Validate` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
