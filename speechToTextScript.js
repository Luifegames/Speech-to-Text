var recognition = new webkitSpeechRecognition(); 
recognition.continuous = true; 
recognition.interimResults = true; 

function start() {
  if (!navigator.onLine) {
    alert("Error! Verifica tu conexion");
    return
  }
  if (document.getElementById("startButton").innerHTML != 'Stop...'){
    
    recognition.start(); 
    document.getElementById("startButton").innerHTML = 'Stop...';
  }else{
    recognition.stop(); 
    document.getElementById("startButton").innerHTML = 'Start now!';
  }
  
};



recognition.onresult = function(event) {
  recognition.lang = document.getElementById("selector").value; 
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
};
