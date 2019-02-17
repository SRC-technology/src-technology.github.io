const fibonaccis = [1, 1]

export default (num) => {
  for (let i = fibonaccis.length; i <= num; ++i) {
    fibonaccis[i] = fibonaccis[i - 1] + fibonaccis[i - 2]
  }
  return fibonaccis[num]
}