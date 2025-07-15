import { assert } from "chai";
import { topThreeWords } from "../Javascript/top_three_words";

describe("Top Three Words Test Suite", function () {
  this.timeout(5000);

  function testTopThreeWords(text, expected, message = "") {
    const result = topThreeWords(text);
    assert.deepEqual(
      result,
      expected,
      `${message}\nFor input: "${text}"\nExpected: ${JSON.stringify(
        expected
      )}\nGot: ${JSON.stringify(result)}`
    );
  }

  it("should handle basic cases", function () {
    testTopThreeWords("a a a b c c", ["a", "c", "b"], "Basic frequency count");
    testTopThreeWords("a a a c b b", ["a", "b", "c"], "Tie breaker test");
  });

  it("should handle case insensitivity", function () {
    testTopThreeWords(
      "e e e e DDD ddd DdD: ddd ddd aa aA Aa",
      ["e", "ddd", "aa"],
      "Case insensitivity check"
    );
  });

  it("should handle apostrophes", function () {
    testTopThreeWords(
      "  //wont won't won't ",
      ["won't", "wont"],
      "Apostrophe handling"
    );
  });

  it("should ignore punctuation", function () {
    testTopThreeWords("  , e   .. ", ["e"], "Punctuation should be ignored");
    testTopThreeWords(
      "  ...  ",
      [],
      "Only punctuation should return empty array"
    );
    testTopThreeWords(
      "  '  ",
      [],
      "Single apostrophe should return empty array"
    );
  });

  it("should handle edge cases", function () {
    testTopThreeWords("", [], "Empty string");
    testTopThreeWords("    ", [], "Whitespace only");
    testTopThreeWords("one", ["one"], "Single word");
    testTopThreeWords("one two", ["one", "two"], "Two words");
    testTopThreeWords(
      "one two three",
      ["one", "two", "three"],
      "Exactly three words"
    );
  });
});
