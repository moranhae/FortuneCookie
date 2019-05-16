var fortuneJavascript = [
 "All of the effort you are making will ultimately pay off", 
 "Nobody can be exactly like you",
 "Don't be afraid to take a chance when the opportunity of a lifetime appears",
 "All things are difficult before they are easy",
 "Your road to glory will be rocky but fulfilling",
 "It's a good time to start something new",
 "The greatest risk is not taking one", 
 "Trust yourself, you know more than you think", 
 "It's never too late to learn", 
 "You are on your way to something great", 
 "Your family loves you", 
]
function newFortune() {
  var randomNumber= Math.floor(Math.random() * (fortuneJavascript.length));
  document.getElementById ('fortuneOutput').innerHTML= fortuneJavascript [randomNumber];
}