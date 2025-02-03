let allHEX = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
  10: "a",
  11: "b",
  12: "c",
  13: "d",
  14: "e",
  15: "f",
};

let normalButtonsClassList = [
  "col-3",
  "text-center",
  "rounded-0",
  "border",
  "btn-outline-secondary",
  "btn",
];

let specialButtonsClassList = [
  "col-6",
  "text-center",
  "rounded-0",
  "border",
  "btn-outline-secondary",
  "btn",
];

let doms = {
  buttonRenderingPosition: document.getElementById("btn-wrapper"),
  displayResultPosition: document.getElementById("display-result-wrapper"),
  displayChoicePosition: document.getElementById("display-choice-wrapper"),
  displayInputPosition: document.getElementById("display-input-wrapper"),
};

// 需要使用的变量
let inputValue = 0;
let inputArray = [];
let characterArray = [];
let newCharacter = "";
