var sliced = require('sliced');

//carry out the calculation provided for each of the elements specified
//store results in data attribute
var calcum = function(opts){

  sliced(document.querySelectorAll(opts.selector)).forEach(function(element){

    element.setAttribute(
      'data-'+ opts.label,
      (opts.labelVisible ?  opts.label + ':' : '') + //optional label in the value
      opts.callback(element)+opts.units
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
  options.units = opts.units || ''; //default to no units '' being the unit unless specified (this is up to the client. the library knows nothing)

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
