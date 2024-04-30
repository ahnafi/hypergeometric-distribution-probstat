function faktorial(num){
  if(num == 1 || num == 0) return 1;
  return num * faktorial(num - 1);
}

export { faktorial };
