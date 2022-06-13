// find if array contains pair that equals to the sum
// Brute Force Method
function hasPairSum(arr, sum){
  let arrLen = arr.length;

  for(let i =0; i<arrLen -1; i++){
    for(let j = i +1; j<arrLen; j++){
      if(arr[i] + arr[j] === sum){
        return true;
      }
    }
  }
  return false;
}



// Better Method using Set
function hasPairSum(arr, sum){
  let newSet = new Set();
  for(let i=0; i< arr.length; i++){
    if(newSet.has(arr[i])){
      return true;
    }
    newSet.add(sum - arr[i]);
  }
  return false;
}