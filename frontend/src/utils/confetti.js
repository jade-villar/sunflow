import confetti from "canvas-confetti";

export const fireConfetti = () => {
  const count = 6;

  for (let i = 0; i <= count; i++) {
    confetti({
      particleCount: 20,
      angle: 270,
      spread: 180,
      origin: { x: i / count, y: 0 }, 
      startVelocity: 25,
      ticks: 300,
    });
    // confetti({
    //   particleCount: 20,
    //   angle: 270,
    //   spread: 180,
    //   origin: { x: i / count, y: 0 }, 
    //   startVelocity: 200,
    //   ticks: 300,
    //   decay: 0.2,
    // });
  }
};
