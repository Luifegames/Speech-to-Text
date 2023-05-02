var recognition = new webkitSpeechRecognition(); 
recognition.continuous = true; 
recognition.interimResults = true; 

function start() {

   recognition.lang = document.getElementById("selector").value; 
    

  if (!navigator.onLine) {
    
    alert("Error! Check your internet connection.");
    return
  
  }
  
  var selector  = document.getElementById("selector"); 

  if (document.getElementById("startButton").innerHTML != 'Stop...'){
    
    recognition.lang = document.getElementById("selector").value; 
    selector.disabled = true; 
    recognition.start(); 
    document.getElementById("startButton").innerHTML = 'Stop...';
  
  }else{
  
    selector.disabled = false;  
    recognition.stop(); 
    document.getElementById("startButton").innerHTML = 'Start now!';
  
  }
  
};

recognition.onend = function(){

  var selector = document.getElementById("selector");
  selector.disabled = false; 
  recognition.stop(); 
  document.getElementById("startButton").innerHTML = 'Start now!';
  
}

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
