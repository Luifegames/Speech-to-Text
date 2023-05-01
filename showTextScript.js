
function writeText(element, text) {
  const letters = text.split('');
  let i = 0;
  const intervalID = setInterval(() => {
    if(i === letters.length) clearInterval(intervalID);
    else element.innerHTML += letters[i++];
  }, 40);
}


function showText(){

const text = "peech to text.";
const textContainer = document.getElementById("text-container");

writeText(textContainer,text)
}