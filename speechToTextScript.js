var recognition = new webkitSpeechRecognition(); 
recognition.continuous = true; 
recognition.interimResults = true; 

function start() {
  recognition.lang = document.getElementById("selector").value; 
  recognition.start(); 
  document.getElementById("startButton").innerHTML = 'Listening...';
};
recognition.onresult = function(event) {
  
  const transcript = document.getElementById("transcript");
  var interimTranscript = "";
  var finalTranscript = "";
  for (var i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i].isFinal) {
      finalTranscript += event.results[i][0].transcript;
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  transcript.innerHTML = finalTranscript; 
  document.getElementById("startButton").innerHTML = 'Start now!';
  recognition.stop();
};
