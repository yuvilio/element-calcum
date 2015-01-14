# element-calcum
Calculate something about an element and refresh it as browser resizes

## [Demo](https://yuvilio.github.io/element-calcum)


## Example usage

If using npm based system,

```bash
npm install element-calcum
```

```js
var elCalcum = require('element-calcum');
```

Altenately for a standalone window global, download the [latest element-calcum.js build here](http://yuvilio.github.io/element-calcum/build/element-calcum.js) and include it in  your script to have a global window.elCalcum available.

```html
<script src="element-calcum.js"></script>

```

Suppose you want to calculate the widths of divs and paragraphs that have a class with the string 'col' in it. (like 'col-sm-12', 'col-md-3', ...)


if you provide it with nothing but the selector it will calculate the offSetWidth by default

```js
elCalcum({
  selector: 'p[class*="col"],div[class*="col"]'
});
```


The power comes in giving it a callback to do your own calculation

## Example basic css to (optionally) show the data using css content (attr()). Adjust to your liking, including position, display, ...

```css

p[class*="col"]:after,div[class*="col"]:after { /* this typically matches the 'selector' value you passed into the js */
  background-color: salmon;
  color: white;
  padding: 3px 2px;
  right: 0;
  content: attr(data-offsetWidth); /*use the 'data-[label]' */
 }

```


## Example using another library for the calculation

Here's an example calculating widths of all paragraphs and divs with 'col' element.offsetWidth.

```js

var size = require('element-size');
var elCalcum = require('element-calcum');
elCalcum({
  selector: 'p[class*="col"],div[class*="col"]',
  label: 'element-size',// = data-element-size attribute
  units: 'px', //up to you to decide what the units are (if any) since it's your calculation
  labelVisible: 0, //hide the label text from the result
  callback: function(el){ //the actual calculation of the calcum
    return el.offsetWidth;
  }
});

```


## Example of using another event to trigger the recalculation besides the default 'resize' on window that is used

If you want another event (like clicking a button,  ),  use ```eventOnElem``` for the element the event is happening on (default is ```window```) and ```event``` for the event name (default is 'resize'). Here is an example of triggerinng the recalculation of the element sizes by clicking a button that is in the markup. This time using the  [element-size](https://github.com/hughsk/element-size) :

```html
<button class="refresh">Refresh calculation!</button>
```

```js
elCalcum({
  selector: '[class*="container"]>[class*="box"]',
  label: 'element-size',
  units: 'px',
  labelVisible: 0,
  eventOnElem: document.querySelector('button[class="refresh"]'),
  event: 'click',
  callback: function(el){
    return size(el)[0];
  }
});

```

## using an input to control it

An example of a range slider to control the height. Using the [dom-style](https://github.com/npm-dom/dom-style) for convenience.

```html

<div class="som-div">...</div>


<div class="slider">
  <label for=height-slider>adjust height</label>
  <input type=range min=100 max=300 value=100 class="height-slider" id=height-slider step=1 >
  <span></span>
</div>
```

```js
elCalcum({
  selector: '.container-flex-direction-column [class*="box"], .container-flex-direction-column-no-height  [class*="box"] ',
  label: 'height', //data-height
  units: 'px',
  labelVisible: 1,

  //recalculate when the range slider is adjusted
  eventOnElem: document.querySelector('.height-slider'),
  event: 'change',

  callback: function(el){
    return size(el)[1];
  }
});

//when the range slider is adjusted, adjust the css height of some-div
document.querySelector('.height-slider').addEventListener('change', function(e){
  var slider = e.target;
  slider.nextElementSibling.textContent = slider.value + ' px';


  style(document.querySelector('.some-div'), {
    'height': slider.value + 'px'
  })

})

```


Building the standalone global:

```bash
git clone https://github.com/yuvilio/element-calcum
cd element-calcum
npm install
npm run build-standalone-global
```
