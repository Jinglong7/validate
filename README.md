# Validate

Validate is a standard Deno module for validating string.

## 🎁 Features

* [x] isAfter
* [x] isAlpha
* [x] isAlphanumeric
* [x] isAscii
* [x] isBase32
* [x] isBase64
* [x] isBefore
* [x] isBIC
* [x] isBoolean
* [x] isBtcAddress
* [x] isByteLength
* [x] isCreditCard
* [x] isCurrency
* [x] isDataURI
* [x] isDate
* [x] isDecimal
* [x] isDivisibleBy
* [x] isEAN
* [ ] isEmail
* [x] isEmpty
* [x] isEthereumAddress
* [x] isFloat
* [x] isFQDN
* [x] isFullWidth
* [x] isHalfWidth
* [x] isHash
* [ ] isHexColor
* [ ] isHexadecimal
* [ ] isHsl
* [ ] isIBAN
* [ ] isIMEI
* [ ] isIP
* [ ] isIPRange
* [ ] isISBN
* [ ] isISIN
* [ ] isISO31661Alpha2
* [ ] isISO31661Alpha3
* [ ] isISO8601
* [ ] isISRC
* [ ] isISSN
* [ ] isIdentityCard
* [ ] isIn
* [ ] isInt
* [ ] isJSON
* [ ] isJWT
* [ ] isLatLong
* [ ] isLength
* [ ] isLocale
* [x] isLowercase
* [ ] isMACAddress
* [ ] isMD5
* [ ] isMagnetURI
* [ ] isMimeType
* [ ] isMobilePhone
* [ ] isMongoId
* [ ] isMultibyte
* [ ] isNumeric
* [ ] isOctal
* [ ] isPassportNumber
* [ ] isPort
* [ ] isPostalCode
* [ ] isRFC3339
* [ ] isRgbColor
* [ ] isSemVer
* [ ] isSlug
* [ ] isSurrogatePair
* [ ] isSvg
* [ ] isTaxID
* [ ] isURL
* [ ] isUUID
* [ ] isUppercase
* [ ] isVariableWidth
* [ ] isWhitelisted

## 🔧 How to use

```ts
import { validate, isBoolean } from 'https://deno.land/x/validate@v0.1.0/mod.ts';
```

## 💡 Usage

```ts
import { validate, isBoolean } from 'https://deno.land/x/validate@v0.1.0/mod.ts';

console.log(validate.isAlpha('Validate')); // true
console.log(isBoolean('true')); // true
```

## 📜 Changelog

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/jinglong7/validate/blob/master/CHANGELOG.md).

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

## ✨ Contributors

Huge thanks to [Validator contributors](https://github.com/validatorjs).

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
