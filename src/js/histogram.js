import { createLine, createRect, createText, removeChild } from "./dom.js";
import { hypergeometric } from "./math.js";

const svg = document.getElementById("histogram");

function createHistogram(x, N, n, m) {
  // clear svg
  removeChild();
  
  // variabel
  let widthBar = n <= 20 ? 30 : 10;
  let spaceBar = n <= 20 ? 1 : 6;
  let svgWidth = 600; //default
  let svgHeight = 200; //default
  let frekuensi = 0.0;
  let hightFreq = 0;
  let xbar = [];
  let prob = [];
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // mencari propabilitas
  for (let i = 0; i <= n; i++) {
    prob.push(hypergeometric(i, N, n, m));
  }

  // mencari prob tertinggi untuk mengukur tinggi svg
  for (let i = 0; i < prob.length - 1; i++) {
    if (prob[i] < prob[i + 1]) {
      hightFreq = prob[i + 1];
    }
  }

  // mengubah tinggi svg
  svgHeight = ((hightFreq * 100) / 4) * 20 + margin.bottom + margin.top;

  //   membuat ukuran frekuensi
  let marginFreq = svgHeight - margin.bottom;
  let sizeFreq = (hightFreq * 100) / 4;
  for (let i = 0; i < sizeFreq; i++) {
    createText(margin.right-7, marginFreq, `${frekuensi.toFixed(2)}`);
    frekuensi += 0.05;
    marginFreq -= 20;
  }

  //   mencari koordinat x setiap bar
  for (let i = 0; i <= prob.length; i++) {
    if (i == 0) {
      xbar[i] = margin.left + spaceBar;
    } else {
      xbar[i] = xbar[i - 1] + widthBar + spaceBar;
    }
  }

  //   membuat bar
  for (let i = 0; i < prob.length; i++) {
    let barHeight = prob[i] * 100 * 4;
    let yBar = svgHeight - margin.bottom - barHeight;

    if (i == x) {
      createRect(xbar[i], yBar, widthBar, barHeight, i, "red");
    } else {
      createRect(xbar[i], yBar, widthBar, barHeight, i);
    }
  }

  // lebar svg
  svgWidth = xbar.pop() + margin.right;

  svg.setAttribute("width", svgWidth);
  svg.setAttribute("height", svgHeight);

  //membuat garis
  createLine(
    margin.left,
    svgWidth - margin.right,
    svgHeight - margin.bottom,
    svgHeight - margin.bottom
  ); //x
  createLine(margin.left, margin.left, margin.top, svgHeight - margin.bottom); //y
}

export { createHistogram };
