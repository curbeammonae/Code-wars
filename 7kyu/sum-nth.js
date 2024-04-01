// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }