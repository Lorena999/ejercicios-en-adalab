import area from "../src/services/area";

test("check square area", () => {
  // arrange
  const SquareArea = 3;
  // act
  const squareArea = area.getSquareArea(SquareArea);
  // assert
  expect(squareArea).toBe(9);
});

test("check square triangle area", () => {
  // arrange
  const squareBase = 3;
  const squareHeight = 3;

  // act
  const TriangleArea = area.getSquareTriangle(squareBase, squareHeight);
  // assert
  expect(TriangleArea).toBe(4.5);
});
