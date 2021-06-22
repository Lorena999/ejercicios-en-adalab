const getSquareArea = (base) => {
  const SquareArea = base * base;
  return SquareArea;
};

const getSquareTriangle = (base, height) => {
  const TriangleArea = (base * height) / 2;
  return TriangleArea;
};

export default {
  getSquareArea: getSquareArea,
  getSquareTriangle: getSquareTriangle,
};
