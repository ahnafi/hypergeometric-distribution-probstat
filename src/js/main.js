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
{
  const xBigInt = BigInt(x.value);
  const NBigInt = BigInt(N.value);
  const nBigInt = BigInt(n.value);
  const mBigInt = BigInt(m.value);

  const resultBigInt = hypergeometric(xBigInt, NBigInt, nBigInt, mBigInt);
  xsamex.value = Number(resultBigInt.toString());
}

  createHistogram(x.value, N.value, n.value, m.value);

  console.log(resultBigInt.toString());
});
