// // --- Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting ---

const cerc1 = {
    x: 3,
    y: 5,
    r: 5,
  },
  cerc2 = {
    x: 4,
    y: 7,
    r: 10,
  };

if (
  Math.pow(cerc1.r - cerc2.r, 2) <=
    Math.pow(cerc1.x - cerc2.x, 2) + Math.pow(cerc1.y - cerc2.y, 2) &&
  Math.pow(cerc1.x - cerc2.x, 2) + Math.pow(cerc1.y - cerc2.y, 2) <=
    Math.pow(cerc1.r + cerc2.r, 2)
) {
  console.log("true");
} else console.log("false");
