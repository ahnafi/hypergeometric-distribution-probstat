import { createHistogram } from "./histogram.js";
import { hypergeometric } from "./math.js";

const form = document.getElementById("create");

const x = document.getElementById("successSample");
const N = document.getElementById("population");
const n = document.getElementById("sample");
const m = document.getElementById("sizePopulation");
const xsamex = document.getElementById("xsample");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  xsamex.value = hypergeometric(x.value, N.value, n.value, m.value);
  createHistogram(x.value, N.value, n.value, m.value);
});
