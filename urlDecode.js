
const urlDecode = function(text) {
  let result = {};

  text = text.split('&');
  // console.log(text)
  for (let i = 0; i < text.length; i++) {
    result[text[i].split('=')[0]] = (text[i].split('=')[1] = replaceAll(text[i].split('=')[1], '%20', ' '));
  }
  return result;
};

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
};

console.log(urlDecode("duck=rubber")); 
// {duck: "rubber"}

console.log(urlDecode("bootcamp=Lighthouse%20Labs")); 
// {bootcamp: "Lighthouse Labs"}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); 
// {city: "Vancouver", weather: "lots of rain"}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); 
// "lots of rain"
