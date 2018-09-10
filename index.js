function shout(string) 
  {
return string.toUpperCase();
}


function whisper(string) 
  {
return string.toLowerCase();
}

function logShout(string)   
  {
var abc = string.toUpperCase();
console.log(abc); 
}
function logWhisper(string)   
  {
var FGH = string.toLowerCase();
console.log(FGH); 
}

function sayHiToGrandma(string) 
{
  if (string === string.toLowerCase())

return "I can't hear you!";
  }
if (string === "I love you, Grandma.") {
return "I love you, too.";
  }
if (string === string.toUpperCase()) {
return "YES INDEED!";
  }