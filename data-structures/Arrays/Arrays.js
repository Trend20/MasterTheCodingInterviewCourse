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