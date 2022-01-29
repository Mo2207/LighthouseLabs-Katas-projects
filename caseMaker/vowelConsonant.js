
// this function is responsible for capitalizing vowels or consonants
export function vowelConsonant(input, vowelOrConsonant) {
  let result = '';
  let list;

  if (vowelOrConsonant === 'vowel') {
    list = ['a', 'e', 'i', 'o', 'u']; 
  } else {
    list = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
  }

  for (let i = 0; i < input.length; i++) {
    if (list.includes(input[i])) {
      result += input[i].toUpperCase() + input[i].slice(1);
    } else {
      result += input[i];
    }
  }
  return result;
}