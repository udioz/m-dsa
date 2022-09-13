const leftBrackets = [
  '(',
  '{',
  '[',
  '<'
];

const rightBrackets = [
  ')',
  '}',
  ']',
  '>'
];

const isSameBracket = (left, right) => leftBrackets.indexOf(left) === rightBrackets.indexOf(right);

const stringBalance  = input => {
  let stack = [];
  for (let c of input) {
    if (leftBrackets.includes(c)) {
      stack.push(c);
    } else if (rightBrackets.includes(c)) {
      const left = stack.pop();
      if (!isSameBracket(left, c))
        throw `String is not balanced ${left} and ${c}`;
    }
  }

  if (!!stack.length) throw 'not balanced';
};

try {
  stringBalance('((([[')
  console.log('balanced');
} catch (e) {
  console.log(e);
}