function faktorial(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
      result *= i;
  }
  return result;
}


function kombinasi(n, k) {
  if (k < 0 || k > n) {
      return 0;
  }
  return faktorial(n) / (faktorial(k) * faktorial(n - k));
}

function hypergeometric(jmlSSampel, ukuranPopulasi, ukuranSampel, jmlSPopulasi) {
  const numerator = BigInt(kombinasi(jmlSPopulasi, jmlSSampel)) *
      BigInt(kombinasi(ukuranPopulasi - jmlSPopulasi, ukuranSampel - jmlSSampel));
  const denominator = BigInt(kombinasi(ukuranPopulasi, ukuranSampel));
  
  return (Number(numerator.toString()) / Number(denominator.toString()));
}

export { faktorial, kombinasi, hypergeometric };
