# Top 3 Most Occurring Words - Codewars Challenge

[Original Problem](https://www.codewars.com/kata/51e056fe544cf36c410000fb)

## Problem Statement

Given a string of text (possibly with punctuation and line breaks), return an array of the **top 3 most occurring words**, in descending order of occurrences.

### Rules:

- A **word** is a string of letters (A-Z) optionally containing apostrophes (`'`).
- Apostrophes can appear anywhere in the word (`'abc`, `abc'`, `a'b'c` are valid).
- All other characters (e.g., `#, \, /`) are treated as whitespace.
- Matches are **case-insensitive**; return words in lowercase.
- If there are fewer than 3 unique words, return the top 1 or 2, or an empty array if no words exist.

## Solution Approach

1. **Filter Valid Words**:  
   Use a regular expression (`/[a-z']+/g`) to extract words (including apostrophes), then filter out standalone apostrophes.
2. **Frequency Map**:  
   Count occurrences of each word (case-insensitive).
3. **Sort & Slice**:  
   Sort words by frequency and return the top 3.

## Code

[View Solution](/Javascript/top_three_words.js)

## Examples

```javascript
topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e");
// Output: ["e", "ddd", "aa"]

topThreeWords("  //wont won't won't ");
// Output: ["won't", "wont"]
```
