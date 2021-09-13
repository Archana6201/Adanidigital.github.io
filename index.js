var A = [1, 12, 15, 26, 38];
var B = [2, 13, 11, 30, 45];

function median(A, B) {
  var outputArray = [];
  var p = A.length;
  var q = B.length;
  var medianOfArray = 0;
  for (let i = 0; i < p; i++) {
    outputArray += A[i];
  }
  for (let i = q - 1; i >= 0; i--) {
    outputArray += B[i];
  }
  outputArray.sort(function (a, b) {
    return a - b;
  });
  
  medianOfArray =
    outputArray[outputArray.length / 2] +
    outputArray[outputArray.length / 2 + 1];
  return medianOfArray / 2;
}
