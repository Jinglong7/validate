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
* [x] isEmail
* [x] isEmpty
* [x] isEthereumAddress
* [x] isFloat
* [x] isFQDN
* [x] isFullWidth
* [x] isHalfWidth
* [x] isHash
* [x] isHexColor
* [x] isHexadecimal
* [x] isHsl
* [x] isIBAN
* [x] isIdentityCard
* [x] isIMEI
* [x] isIP
* [x] isIPRange
* [x] isISBN
* [x] isISIN
* [x] isISO31661Alpha2
* [x] isISO31661Alpha3
* [x] isISO8601
* [x] isISRC
* [ ] isISSN
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
import { validate, isBoolean } from 'https://deno.land/x/validate@v0.2.0/mod.ts';
```

## 💡 Usage

```ts
import { validate, isBoolean } from 'https://deno.land/x/validate@v0.2.0/mod.ts';

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

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hamptonmoore">
        <img src="https://avatars2.githubusercontent.com/u/8162992?s=400&u=ff3c4f793bb7126181761fab57cf799a4524503b&v=4" width="100" alt="Hampton" />
        <br />
        <sub>
          <b>Hampton</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SuperC03">
        <img src="https://avatars2.githubusercontent.com/u/42807913?s=400&u=fe371d8db5785f6c826a20a39dc41fdffa3fcc0b&v=4" width="100" alt="Colin" />
        <br />
        <sub>
          <b>Colin</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lholliger">
        <img src="https://avatars3.githubusercontent.com/u/14064434?s=400&u=2d718e5a1cee7719fdab4e0e0d4e99f8bd26e2ba&v=4" width="100" alt="Lukas" />
        <br />
        <sub>
          <b>Lukas</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
