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

function hypergeometric(x, N, n, m) {
  const numerator = BigInt(kombinasi(m, x)) * BigInt(kombinasi(N - m, n - x));
  const denominator = BigInt(kombinasi(N, n));

  return Number(numerator.toString()) / Number(denominator.toString());
}

export { faktorial, kombinasi, hypergeometric };
