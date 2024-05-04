function faktorial(num) {
  if (num === 0 || num === 1) return 1;
  if (num > 170) return Infinity; // Melebihi batas yang dapat dihitung
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function kombinasi(a, b) {
  return faktorial(a) / (faktorial(b) * faktorial(a - b));
}

function hypergeometric(
  jmlSSampel,
  ukuranPopulasi,
  ukuranSampel,
  jmlSPopulasi
) {
  //
  return (
    (kombinasi(jmlSPopulasi, jmlSSampel) *
      kombinasi(ukuranPopulasi - jmlSPopulasi, ukuranSampel - jmlSSampel)) /
    kombinasi(ukuranPopulasi, ukuranSampel)
  ).toPrecision(2);
}

export { faktorial, kombinasi, hypergeometric };
