const frc = str => {
  const set = new Set();
  for (const c of str) {
    if (set.has(c)) return c;

    set.add(c);
  }
  console.log(set);
};

console.log(frc('green apple'));