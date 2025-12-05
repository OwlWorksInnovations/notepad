import useSound from "use-sound";

import typeSound from "./assets/type_sound.wav";

export default function Text({ text }) {
  const [play] = useSound(typeSound, {
    interrupt: true,
    volume: 0.3,
    sprite: {
      1: [0, 241],
      2: [241, 225],
      3: [556, 216],
      4: [772, 192],
    },
  });

  return (
    <>
      <div className="AppWrapperInner">
        <input
          onChange={() => {
            const randomNum = Math.floor(Math.random() * 4) + 1;
            console.log(randomNum.toString());
            play({ id: randomNum.toString() });
          }}
          type="text"
          name="text"
          id="text"
        />
      </div>
    </>
  );
}
