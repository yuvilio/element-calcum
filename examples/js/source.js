//js for 009-highlightjs-redux
console.log('hey there from 009-highlightjs-redux ');

var sliced = require('sliced');
var marked = require('marked'); //markdown
var hljs = require('highlight-redux'); //syntax highlighting
hljs.registerLanguage('javascript', require('highlight-redux/lib/languages/javascript'));
hljs.registerLanguage('css', require('highlight-redux/lib/languages/css'));


var size = require('element-size'); //convenience for calculating width/height
var style = require('dom-style'); //convenience for dynamic styling of elements


var elCalcum = require('../../index.js'); // require('element-calcum') typically

window.addEventListener('load', function(){

  //Conveniences

  //syntax highlighting by highlightjs
  sliced( document.querySelectorAll('pre.hljs') ).forEach(function( block, i){
    hljs.highlightBlock( block );
  });

  //markdown rendering by marked
  sliced( document.querySelectorAll('.marked') ).forEach(function( el, i ){
    el.outerHTML = '<p class="marked">' + marked(el.textContent) + '</p>';
  });


  //actual examples

  //ex-width
  elCalcum({
    selector: '.ex-width [class*="box"]',
    label: 'width',
    units: 'px',
    labelVisible: 1,
    callback: function(el){ //calculate the width of each element
      return size(el)[0];
    }
  });

  //ex-height
  elCalcum({
    selector: '.ex-height-flex [class*="box"]',
    label: 'height', //data-height
    units: 'px',
    labelVisible: 1,


    //recalculate when the range slider is adjusted
    eventOnElem: document.querySelector('.height-slider'),
    event: 'change',

    callback: function(el){ //calculate the height of each element
      return size(el)[1];
    }
  });

  var sliderEl = document.querySelector('.slider input[type=range]');
  sliderEl.nextElementSibling.textContent = '200 px';

  sliderEl.addEventListener('change', function(e){
    sliderEl.nextElementSibling.textContent = sliderEl.value + ' px';
    var label = sliderEl.dataset.label;

    //change the css height of the example box
    style(document.querySelector('.ex-height-flex'), {
      'height': sliderEl.value + 'px'
    })
  });


  //ex-multiple-calcum
  elCalcum({
    selector: '.ex-multiple-calcum [class*="box"]',
    label: 'width',
    units: 'px',
    labelVisible: 1,
    callback: function(el){ //calculate the width of each element
      return size(el)[0];
    }
  });

  elCalcum({
    selector: '.ex-multiple-calcum [class*="box"]',
    label: 'height', //data-height
    units: 'px',
    labelVisible: 1,


    callback: function(el){ //calculate the height of each element
      return size(el)[1];
    }
  });


  //ex-ratios

  elCalcum({
    selector: '.ex-ratio [class*="col"]',
    label: 'width-height-ratio', //data-width
    units: '', //it's a unitless ratio
    labelVisible: 1,
    callback: function(el){
      return (size(el)[0] / size(el)[1]).toFixed(1);
    }
  });



}); //on load
