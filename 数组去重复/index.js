// Method 1: Using Set
function dedupeUsingSet(arr) {
  return [...new Set(arr)];
}

// Method 2: Using filter
function dedupeUsingFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}



// Method 4: Using forEach with object
function dedupeUsingObject(arr) {
  const obj = {};
  arr.forEach(item => obj[item] = item);
  return Object.values(obj);
}

// Method 5: Using Map
function dedupeUsingMap(arr) {
  const map = new Map();
  arr.forEach(item => map.set(item, item));
  return [...map.values()];
}

