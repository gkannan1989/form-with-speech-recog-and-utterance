$(document).ready(function () {
    const speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    $("#start").click(function () {
      firstName();
    });
  
    function introduction() {
      message = document.getElementById("title").innerHTML;
      speak(message);
  
      message = document.getElementById("description").innerHTML;
      speak(message);
    }
    function firstName() {
      function cbk() {
        const firstName = new speech();
        firstName.start();
        firstName.onresult = function (event) {
          input = document.querySelector("input[name=firstName]");
          var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
          ).set;
          nativeInputValueSetter.call(input, event.results[0][0].transcript);
          var ev2 = new Event("input", { bubbles: true });
          input.dispatchEvent(ev2);
          speak("Thank you");
          setTimeout(() => {
            firstName.stop();
            lastName();
          }, 1000);
        };
      }
      speak("Can you tell me your first name", cbk);
    }
  
    function lastName() {
      // reg.start()
  
      function cbk() {
        const lastName = new speech();
        lastName.start();
        lastName.onresult = function (event) {
          input = document.querySelector("input[name=lastName]");
          var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
          ).set;
          nativeInputValueSetter.call(input, event.results[0][0].transcript);
          var ev2 = new Event("input", { bubbles: true });
          input.dispatchEvent(ev2);
          speak("Thank you");
          setTimeout(() => {
            speak("Proceeding to Next");
            setTimeout(() => {
              lastName.stop();
              $("#next").click();
              city();
            }, 2500);
          }, 100);
        };
      }
      speak("Can you tell me your last name", cbk);
    }
  
    function city() {
      function cbk() {
        const city = new speech();
        city.start();
  
        city.onresult = function (event) {
          input = document.querySelector("input[name=city]");
          var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
          ).set;
          nativeInputValueSetter.call(input, event.results[0][0].transcript);
          var ev2 = new Event("input", { bubbles: true });
          input.dispatchEvent(ev2);
          speak("Thank you");
          setTimeout(() => {
            speak("Proceeding to Next");
            setTimeout(() => {
              city.stop();
              $("#next").click();
              finalScreen();
            }, 3500);
          }, 100);
        };
      }
      speak("Can you tell me your current city", cbk);
    }
  
    function finalScreen() {
      function cbk() {
        setTimeout(() => {
          const firstName = $("#firstName > p").text();
          speak("Given first name is " + firstName);
          const lastName = $("#lastName > p").text();
          speak("Given last name is " + lastName);
          const city = $("#city > p").text();
          speak("Given city name is " + city);
          setTimeout(() => {
            speak("Proceeding");
            setTimeout(() => {
              speak("Thank you");
              setTimeout(() => {
                $("#final").click();
              }, 6000);
            }, 1500);
          }, 1500);
        }, 3000);
      }
      speak("Listed your answers for all questions", cbk);
    }
  
    function speak(message, cbk) {
      const mySpeech = new SpeechSynthesisUtterance();
  
      mySpeech.text = message;
  
      mySpeech.volume = 1;
      mySpeech.rate = 0.8;
      mySpeech.pitch = 1;
  
      window.speechSynthesis.speak(mySpeech);
  
      setTimeout(() => {
        cbk();
      }, 1000);
    }
});
  