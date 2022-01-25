
const checkAir = function (samples, threshold) {
  let totalAndDirty = [0,0];

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') totalAndDirty[1]++;
    totalAndDirty[0]++;
  }

  if ((totalAndDirty[1] / totalAndDirty[0]) > threshold) {
    return 'polluted';
  } return 'clean';
};

console.log(checkAir( // should return polluted
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir( // should return polluted
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir( // should return clean
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))