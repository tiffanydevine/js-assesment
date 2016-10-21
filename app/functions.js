exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr)
  },

  speak: function(fn, obj) {
    let x = fn; 
    let boundFunction = x.bind(obj); 
    console.log(boundFunction())
  },

  functionFunction: function(str) {

  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
