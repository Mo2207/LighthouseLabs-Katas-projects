
const urlEncode = function(text) {
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    text = text.replace(" ", "%20");
  } return text;
};

console.log(urlEncode("Lighthouse Labs")); // Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Lighthouse%20Labs
console.log(urlEncode("blue is greener than purple for sure")); // blue%20is%20greener%20than%20purple%20for%20sure