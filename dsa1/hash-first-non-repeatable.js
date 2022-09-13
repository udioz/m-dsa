const fnr = (str) => {
  const counter = {};
  for (const c of str) {
    counter[c] = counter[c] ? counter[c] + 1 : 1;
  }

  for (const [key, value] of Object.entries(counter)) {
    if (value == 1) {
      return key;
    }
  }
};

console.log(fnr('a green apple'));
