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

  const xx = Number(x.value);
  const NN = Number(N.value);
  const nn = Number(n.value);
  const mm = Number(m.value);

  createHistogram(xx, NN, nn, mm);

  //
  const xBigInt = BigInt(x.value);
  const NBigInt = BigInt(N.value);
  const nBigInt = BigInt(n.value);
  const mBigInt = BigInt(m.value);

  const resultBigInt = hypergeometric(xBigInt, NBigInt, nBigInt, mBigInt);
  xsamex.value = Number(resultBigInt.toString());
});
