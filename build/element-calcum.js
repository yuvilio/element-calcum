!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.elementCalcum=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var sliced = require('sliced');

//carry out the calculation provided for each of the elements specified
//store results in data attribute
var calcum = function(opts){

  sliced(document.querySelectorAll(opts.selector)).forEach(function(element){

    element.setAttribute(
      'data-'+ opts.label,
      (opts.labelVisible ?  opts.label + ':' : '')
      + opts.callback(element)+opts.units
    );
  });
};

module.exports = function(opts){

  //default options
  var options = {};
  options.selector = opts.selector || 'p[class*="col"],div[class*="col"]' ; //what elements to calculate and add data- attributes to

  //the calculation we'll perform on an element
  options.label = opts.label ||  'offsetWidth';

  options.labelVisible = opts.labelVisible && 1; //default to label being visible unless specified
  options.units = opts.units || 'px'; //default to 'px' being the unit unless specified (this is up to the client. the library knows nothing)

  options.callback = opts.callback || function(el){
    return el.offsetWidth;
  }

  //what event will trigure a recalculation? by default it's a 'resize' event on window
  options.eventOnElem = opts.eventOnElem || window;
  options.event = opts.event || 'resize';



  calcum(options); //display first time (since this is called within a dom load)
  options.eventOnElem.addEventListener(options.event, function(){ //update when data changes
    calcum(options);
  });

}

},{"sliced":2}],2:[function(require,module,exports){
module.exports = exports = require('./lib/sliced');

},{"./lib/sliced":3}],3:[function(require,module,exports){

/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}


},{}]},{},[1])(1)
});