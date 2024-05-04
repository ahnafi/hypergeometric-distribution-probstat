import { faktorial, hypergeometric, kombinasi } from "./math.js";

const modifSVG = document.getElementById("histogram");

// Ukuran SVG
const svgWidth = 600;
const svgHeight = 200;

// Margin dan ukuran batang histogram
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

modifSVG.setAttribute("width", svgWidth);
modifSVG.setAttribute("height", svgHeight);

function createLine(x1, x2, y1, y2) {
  const newLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  newLine.setAttribute("x1", `${x1}`);
  newLine.setAttribute("x2", `${x2}`);
  newLine.setAttribute("y1", `${y1}`);
  newLine.setAttribute("y2", `${y2}`);
  newLine.setAttribute("stroke", "black");

  modifSVG.appendChild(newLine);
}

function createRect(x, y, width, height, text, fill = "blue") {
  /*
        tinggi y dan height itu harus sesuai dengan y1 y2 dari line , jika kurang maka akan mengambang ,
        jika lebih maka akan melewati line
    */

  // Membuat elemen rect baru
  const newRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );

  newRect.setAttribute("x", `${x}`);
  newRect.setAttribute("y", `${y}`);
  newRect.setAttribute("width", `${width}`);
  newRect.setAttribute("height", `${height}`);
  newRect.setAttribute("fill", `${fill}`);

  // Menambahkan elemen rect ke dalam elemen SVG
  modifSVG.appendChild(newRect);

  // text di bawah
  createText(x, y + height + 12, `${text}`);
}

function createText(x, y, value = "") {
  const newText = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );

  newText.setAttribute("x", x);
  newText.setAttribute("y", y);
  newText.setAttribute("font-size", "12");
  newText.setAttribute("fill", "black");
  newText.textContent = value;

  modifSVG.appendChild(newText);
}

const N = 50;
const n = 20;
const m = 18;
const x = 3;

// line
createLine(
  margin.left,
  svgWidth - margin.right,
  svgHeight - margin.bottom,
  svgHeight - margin.bottom
); //x
createLine(margin.left, margin.left, margin.top, svgHeight - margin.bottom); //y

// freq
let marginFreq = svgHeight - margin.bottom;
for (let i = 0, f = 0.0; i <= m; i++, f += 0.05) {
  createText(margin.right - 2, marginFreq, `${f.toFixed(2)}`);
  marginFreq -= 20;
  createLine(margin.left, width, marginFreq, marginFreq); //x
}

// kategori
const prob = []; // cari propabilitas
for (let i = 0; i <= n; i++) {
  // hypergeometric();// x,N,n,m
  prob.push(hypergeometric(i, N, n, m));
}

let xbatang = []; // mencari koordinat x untuk block

for (let i = 0; i <= prob.length; i++) {
  if (i == 0) {
    xbatang[i] = margin.left + 10;
  } else {
    xbatang[i] = xbatang[i - 1] + 20 + 10;
  }
}

for (let index = 0; index < prob.length; index++) {
  console.log(prob[index]);
  //
  let tinggi = (prob[index] * 100) * 4 ;
  let y = svgHeight - margin.bottom - tinggi;
  createRect(xbatang[index], y, 20, tinggi, index);
}

console.log(hypergeometric(3,30,5,18))