import { faktorial } from "./math.js";

const modifSVG = document.getElementById("histogram");

modifSVG.setAttribute("width", "400");
modifSVG.setAttribute("height", "200");

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

function createRect(x, y, width, height, text = "0", fill = "blue") {
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

// line
createLine(20, 400, 180, 180); //x
createLine(20, 20, 0, 180); //y

// freq
for (let i = 0, n = 180; i < 10; i++, n = n - 20) {
  createText(0, n+15, `${i}`);
  createLine(20, 400, n, n); //x
}
// kategori

// block
createRect(30, 140, 30, 40, "1-20");
createRect(80, 130, 30, 50, "21-40");
createRect(130, 100, 30, 80, "41-60");
createRect(180, 60, 30, 120, "61-80");
createRect(230, 0, 30, 180, "81-100");
createRect(280, 120, 30, 60, "101-120");
createRect(330, 140, 30, 40, "121-140");

console.log(faktorial(5))