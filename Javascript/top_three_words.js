function topThreeWords(text) {
  const words =
    text
      .toString()
      .toLowerCase()
      .match(/[a-z']+/g) || [];
  const frequency = {};

  words.forEach((word) => {
    if (word.match(/[a-z]/i)) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });

  const sorted = Object.keys(frequency).sort(
    (a, b) => frequency[b] - frequency[a]
  );

  return sorted.slice(0, 3);
}
