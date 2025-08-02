# CodeWars JavaScript Solutions

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)  
[![Codewars](https://img.shields.io/badge/Codewars-Profile-B1361E.svg?logo=codewars)](https://www.codewars.com/users/)

A collection of my CodeWars challenge solutions, organized by problem.

---

## 🚀 Top 3 Most Occurring Words

**❔ Problem**: Find the top 3 most frequent words in a string (case-insensitive).  
**🏷️ Tags**: `Strings`, `Algorithms`, `Regular Expressions`.
**💹 Rank**: `4 kyu`.

### 🧩 Challenge

| File                                                 | Purpose              |
| ---------------------------------------------------- | -------------------- |
| [top_three_words.js](/Javascript/top_three_words.js) | Solution code        |
| [top_three_words.md](/docs/top_three_words.md)       | Detailed explanation |

### 🚀 Try It Yourself

[![Attempt Challenge](https://img.shields.io/badge/Attempt-Challenge-B1361E.svg?logo=codewars)](https://www.codewars.com/kata/51e056fe544cf36c410000fb)

## 🚀 Usage

1. **Run the solution**:

   ```bash
   node javascript/top_three_words.js
   ```

2. **Run tests**:

```bash
npm test
```

### 📝 Example

```javascript
topThreeWords("Hello hello world world HELLO world, World");
// Output: ["world", "hello"]
```

## 🚀 Jaden Case Strings

**Problem**: [Convert strings to Jaden Case](https://www.codewars.com/kata/5390bac347d09b7da40006f6) (capitalize first letter of each word).  
**Tags**: `Strings` `Prototypes` `Algorithms`
**Improvisations**: Added `String.toPerfectJadenCase()` which converts any string to perfect Jade Case.

### 🧩 Challenge

| File                                                     | Purpose       |
| -------------------------------------------------------- | ------------- |
| [jaden_case_string.js](/Javascript/jaden_case_string.js) | Solution code |
| [jaden_case_strings.md](/docs/jaden_case_strings.md)     | Explanation   |

### 📝 Example

```javascript
const str = "how can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
// Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"

## 📜 License

This project is licensed under the [MIT License](LICENSE).
MIT © [Samson S. Wolde](https://github.com/samson08sis/)
```
