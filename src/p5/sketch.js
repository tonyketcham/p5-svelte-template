import p5 from "p5";

export default function sketch(node) {
  new p5((instance) => workspace(instance), node);
}

/**
 * The main method
 *
 * @param {p5} p5 sketch instance, scoped where many may exist on the same page
 */
const workspace = (p5) => {
  let x = 100;
  let y = 100;

  p5.setup = () => {
    p5.createCanvas(400, 400);
  };

  p5.draw = () => {
    p5.background(0);
    // p5.fill(255);
    if (p5.mouseIsPressed) {
      p5.fill(255);
    } else {
      p5.fill(0);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
  };
};
