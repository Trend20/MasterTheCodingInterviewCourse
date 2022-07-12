 let items = ['a', 'b', 'c', 'd', 'e', 'f'];

//  add item at the end of array
items.push('g') 
// 0(1)
console.log(items);

// remove the last item
items.pop() 
// 0(1)
console.log(items);

// add item on the first index
items.unshift('z'); 
// 0(n)
console.log(items);

// remove an item from the first index
items.shift();
// 0(n)
console.log(items);

// add items in the middle of array
items.splice(1, 2, "r");
// 0(n)
console.log(items);

// TYPES OF ARRAY
// STATIC ARRAYS(fixed in size)

// DYNAMIC ARRAY(varrying in size)

// CREATING ARRAYS


// REVERSE A STRING
// brutforce
function reverse(str){
  let strArr = str.split('').reverse().join('');
  return strArr;
}

// solu2
function reverse(str){
  let strArray = [];
  let arrItems = str.length - 1;

  for(let i = arrItems; i>= 0; i--){
    strArray.push(str[i]);
  }
}

// merge sorted array
let arr1 = [2, 4, 6, 7];
let arr2 = [ 14, 35, 20, 2, 9];

let combinedArray = arr1.concat(arr2);

for(let i = 0; i<combinedArray.length; i++){
  if(combinedArray[i] < i){
    combinedArray.push(i)
  }
}



function mergeSortedArrays(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  
  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item){
   if(array2Item === undefined || array1Item < array2Item){
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
    }   
    else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
   }
   return mergedArray;
 }
 
 mergeSortedArrays([0,3,4,31], [3,4,6,30]);