/* First thing we need to do is be focused on listening for a 'keydown' event.

The way we do this is to first get the element you are listening for, in OUR case it's the 'window' object, and we're going to add an 'addEventListener'.

The "event" we're listening for is called  'keydown'. */

/* Next, after our 'keydown' event, we have a function. That function will give us the "event" we are looking for: function(e){...}; */

//STEP 1:
  /* So we're going to "LISTEN" to the addEventListener() method:

          addEventListener('keydown', [Function]);

   This method is sitting on the 'window' object:

          window.addEventListener('keydown', [Function]);

  It is listening for an instance in which the "EVENT, here the "EVENT" we are listening for is 'keydown', is initiated on the window object.

  We "LISTEN" for the 'keydown' "EVENT" by providing the addEventListener() method with a callback function.

          window.addEventListener('keydown', function(e) {...});

  So when 'keydown' "EVENT" is is triggered, we're going to run the callback function which will give us the "EVENT" we've been listening for.*/

  //STEP 2:
  /* Now, what we have to do tell the callback function what to do, what we say is "is there an "ELEMENT" (<audio> </audio>) on the page that has a 'data-key' of 65?"

            <audio data-key="65" src="sounds/clap.wav"></audio>

  To check for it, we will use "document.querySelector('')", because we're only looking for one. If I was looking for many, use "document.querySelectorAll('')".

            window.addEventListener('keydown', function(e) {
              const audio = document.querySelector('audio')
            });

  Then we're going to try to select an audio message, but we want to select it where it has a 'data-key'
*/
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together

    key.classList.add('playing');
    audio.currentTime = 0; // rewind sound to the start of sound.
    audio.play(); // play the audio element.
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
