import { Howl } from "howler";
import TypeSound from "./assets/sounds/type_sound.mp3";
import { useRef } from "react";

export default function Text({ text }) {
  // Creates a ref towards the stop timer and sets a debounce delay
  const stopTimerRef = useRef(null);
  const DEBOUNCE_DELAY = 300;

  var sound = new Howl({
    src: [TypeSound],
    volume: 0.2,
  });

  function playSound() {
    if (!sound.playing()) {
      sound.play();
    }
  }

  function stopSound() {
    if (sound.playing()) {
      sound.stop();
    }
  }

  function handleTyping() {
    // Clears the previous timeout
    if (stopTimerRef.current) {
      clearTimeout(stopTimerRef.current);
    }

    playSound();

    // Creates a timout to stop the sound
    stopTimerRef.current = setTimeout(() => {
      stopSound();
    }, DEBOUNCE_DELAY);
  }

  return (
    <>
      <div className="AppWrapperInner">
        <input
          onChange={handleTyping}
          onBlur={stopSound}
          type="text"
          name="text"
          id="text"
        />
      </div>
    </>
  );
}
