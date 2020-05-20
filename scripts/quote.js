const quotes = [
  '"Do or do not. There is no try"',
  '"You must unlearn what you have learned."',
  '"Fear is the path to the dark side."',
  '"That is why you fail."',
  '"The greatest teacher, failure is."',
  '"Pass on what you have learned."'
];

export const randomQuote = () => {
  const pickRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return pickRandomQuote
};
