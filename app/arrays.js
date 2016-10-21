exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item); 
  },

  sum: function(arr) {
    const totalAmount = arr.reduce((sum, item) => sum += item, 0); 
    return totalAmount; 
  },

  remove: function(arr, item) {
    const itemGone = arr.filter((value) => value !== item); 
    return itemGone; 
  },

  removeWithoutCopy: function(arr, item) {
    for (let i =  arr.length; i >= 0; i--){
      if (arr[i] === item) {
        arr.splice(i,1); 
    }; 
  };
  return arr;
  },

  append: function(arr, item) {
    arr.push(item); 
    return arr; 
  },

  truncate: function(arr) {
    arr.pop(); 
    return arr; 
  },

  prepend: function(arr, item) {
    arr.unshift(item); 
    return arr; 
  },

  curtail: function(arr) {
    arr = arr.splice(1,arr.length); 
    return arr; 
  },

  concat: function(arr1, arr2) {
    const concatinatedArrays = arr2.reduce(function (arr1, item){
      arr1.push(item); 
      return arr1; 
    }, arr1); 

    return concatinatedArrays; 
  },

  insert: function(arr, item, index) {
    let firstSlice = arr.slice(0,index); 
    let middleSlice = firstSlice.push(item); 
    const lastSlice = arr.slice(index, arr.length + 1); 
    return (firstSlice.concat(lastSlice)); 

  },
  
  count: function(arr, item) {
    const counting = arr.filter(value => value === item); 
    return counting.length; 
  }, 

  duplicates: function(arr) {
  var duplicatesRemoved = arr.filter(function (value) {
      var count = 0; 
      for (var i=0; i < arr.length; i++){
        if (value === arr[i]){
          count += 1
        }
      }
    return count > 1;   
    }).filter((value, i) => arr.indexOf(value) == i); 
    return duplicatesRemoved; 
  },

  square: function(arr) {
    const sqrd = arr.map(items => items * items); 
    return sqrd; 
  },

  findAllOccurrences: function(arr, target) {
     const match = arr.map(function(item, i) {
      if (target === item){
        return i; 
      } 
    }).filter((item) => item !== undefined);  
    return match; 
  }
};
