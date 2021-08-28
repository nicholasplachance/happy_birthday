import Dot from "./Dot";
import fontFile from "./AvenirNextLTPro-Demi.otf";

const defaultFrameRate = 60; // low framerate to avoid too much strain on mobile phones

export default (parent, text) => (sketch) => {
  let font;
  let dots;
  let firstWordPoints;
  let secondWordPoints;
  let thirdWordPoints = [];
  let fourthWordPoints;
  let fifthWordPoints;
  let sixthWordPoints;
  let seventhWordPoints;

  sketch.preload = () => {
    font = sketch.loadFont(fontFile);
  };

  const fillDots = (width, height) => {
    dots = [];
    let [firstWord, secondWord, thirdWord, fourthWord] = text.split(" "); // Assumption that text is just 3 words, no more, no less

    // A dirty hack to make it work on both desktop and mobile phones

    // console.log('in mobile view')

    firstWordPoints = font.textToPoints(
      firstWord,
      width * 0.001,
      height * 0.2,
      width * 0.31
    );
    secondWordPoints = font.textToPoints(
      secondWord,
      width * 0.01,
      height * 0.4,
      width * 0.32
    );
    thirdWordPoints = font.textToPoints(
      thirdWord,
      width * 0.03,
      height * 0.58,
      width * 0.32
    );
    fourthWordPoints = font.textToPoints(
      fourthWord,
      width * 0.02,
      height * 0.8,
      width * 0.38
    );

    firstWordPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    });

    secondWordPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    });

    thirdWordPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    });
    fourthWordPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    });
  };

  sketch.setup = () => {
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    sketch.createCanvas(width, height);
    fillDots(width, height);
    sketch.frameRate(defaultFrameRate);
  };

  sketch.draw = () => {
    sketch.clear();
    dots.forEach((dot) => {
      dot.update();
      dot.applyAllForces();
      dot.show();
    });
  };
};
