import { createHistogram } from "./histogram.js";

const form = document.getElementById("create");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let x = document.getElementById("successSample").value;
  let N = document.getElementById("population").value;
  let n = document.getElementById("sample").value;
  let m = document.getElementById("sizePopulation").value;

  createHistogram(x, N, n, m);
});
