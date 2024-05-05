const svg = document.getElementById("histogram");

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

  svg.appendChild(newLine);
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
  svg.appendChild(newRect);

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

  svg.appendChild(newText);
}

function removeChild() {
  const line = svg.querySelectorAll("line");
  const rect = svg.querySelectorAll("rect");
  const text = svg.querySelectorAll("text");
  line.forEach((e) => {
    svg.removeChild(e);
  });
  text.forEach((e) => {
    svg.removeChild(e);
  });
  rect.forEach((e) => {
    svg.removeChild(e);
  });
}

export { createLine, createRect, createText, removeChild };
