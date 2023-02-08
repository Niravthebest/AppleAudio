x = 0;
y = 0;
screen_width =  0;
screen_height = 0; 
draw_apple = "";
apple = "";
speak_data="";
to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
function preload() {
  apple = 234567;
}

recognition.onresult = function(event) {

 console.log(event); 
 to_number = Number(content);
 content = event.results[0][0].transcript;

  if (number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Apple is being drawn...";
    draw_apple = "set";
  } else {
    document.getElementById("status").innerHTML = "Your speech is not being recognized... Please try again in a few seconds.";
  }

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 createCanvas(screen_width,screen_height - 150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {

  for (var i = 1, i <= to_number; i++) {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.)
  }

    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
