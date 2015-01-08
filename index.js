//calculate something about elements in a page and disiplayt (like their widths)
var sliced = require('sliced')


var calcDatum = function(opts){
  //grab all the columns ( <p> and <div> elements with some class="col-..." in them)
  sliced(document.querySelectorAll(opts.selector)).forEach(function(element){
    // var elSize = size(element); //the actual element is not the span
    // element.setAttribute('data-'+ opts.label, elSize[0]+opts.units );
    // console.log(opts.labelVisible)
    element.setAttribute(
      'data-'+ opts.label,
      (opts.labelVisible ?  opts.label + ':' : '') //show the label if they want to
      + opts.callback(element)+opts.units
    );
    // element.textContent = 'width: ' + elSize[0] + 'px';
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
  // console.log(options)


  calcDatum(options); //display first time (since this is called within a dom load)
  window.addEventListener('resize', function(){ //update when data changes
    calcDatum(options);
  });

}
