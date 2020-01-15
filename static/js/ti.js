var countDownDate = new Date("Jan 14, 2020 19:42:30").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "Time left "+days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("demo1").innerHTML = seconds + "s ";
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Started";
    var openas = window.open("https://www.google.com", "_self")
  }
}, 1000);
/*javascript: function doit() {
    var openas = window.open("https://www.google.com", "_self")
}
var now = new Date();
var stratum = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 00, 00, 200) - now;
var t = setTimeout(function() {
    doit()
}, stratum);*/