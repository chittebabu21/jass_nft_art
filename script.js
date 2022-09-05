// Moralis.initialize(
//     "pk_test_jWCXCkJiKkFktEIitty3O160jc7OHEj2l0Hq93ngofw0"
//   );
//   Moralis.serverURL = "https://oto28o5op6zs.usemoralis.com:2053/server";

//   (async function () {
//     Moralis.initPlugins();
//   })();

//   function buyCrypto() {
//     Moralis.Plugins.fiat.buy();
//   }

//   async function iframefiat() {
//     let response = await Moralis.Plugins.fiat.buy(undefined, {
//       disableTriggers: true,
//     });
//     document.getElementById(`myIframe`).style.display = `block`;
//     document.getElementById(`myIframe`).src = response.result.data;
//   }

// Set the date we're counting down to
var countDownDate = new Date("December 31, 2022 15:37:25").getTime();

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
  document.getElementById("demo").innerHTML = days + "days " + hours + "hr " + minutes + "min " + seconds + "sec";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);
