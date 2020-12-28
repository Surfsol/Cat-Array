const { test, expect } = require("@jest/globals");
const arrays = require("../arrays");

test("test", () => {
  expect(arrays.testArray()).toBe(5);
});

test("create array 5 elements", () => {
  expect(arrays.myArray.length).toBe(5);
});

test("length of myArray", () => {
  expect(arrays.arrayLength).toBe(5);
});

test("vinLast", () => {
  expect(arrays.vinLast[2]).toBe("Vin");
  expect(arrays.vinLast.length).toBe(3);
});

test("ludaFirst", () => {
  expect(arrays.ludaFirst[0]).toBe("Luda");
  expect(arrays.ludaFirst.length).toBe(4);
});

test("showAllCast", () => {
  expect(arrays.showAllCast[6]).toBe("Ronda");
  expect(arrays.showAllCast.length).toBe(7);
});

test("removeBeginning", () => {
  expect(arrays.removeBeginning[0]).toBe("Paul");
  expect(arrays.removeBeginning.length).toBe(6);
});

test("removeEnd", () => {
  expect(arrays.removeEnd[4]).toBe("Michelle");
  expect(arrays.removeEnd.length).toBe(5);
});

test("return2ndItem", () => {
  expect(arrays.return2ndItem(arrays.removeEnd)).toBe( "Tyrese");
});

test("castMoreThan4", () => {
  expect(arrays.castMoreThan4(arrays.showAllCast).length).toBe(4);
})

// test("allMembers", () => {
//   expect(arrays.allMembers).toEqual(["Luda","Paul", "Tyrese", "Vin", "Cardi", "Michelle", "Ronda"]);
// });
// test("length of myArray", () => {
//   expect(arrays.arrayLength).toBe(5);
// });
// test("length of myArray", () => {
//   expect(arrays.arrayLength).toBe(5);
// });
