# element-calcum
Calculate something about an element and refresh it as browser resizes


## Example usage

Suppose you want to calculate the widths of divs and paragraphs that have a class with the string 'col' in it. (like 'col-sm-12', 'col-md-3', ...)

```js
var elCalcum = require('element-calcum'); //a module i made!
```

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


## Example using another library for the calculatio

Here's an example calculating widths of all paragraphs and divs with 'col' using the [element-size](https://github.com/hughsk/element-size) module.

```js

var size = require('element-size');
var elCalcum = require('element-calcum');
elCalcum({
  selector: 'p[class*="col"],div[class*="col"]',
  label: 'element-size',// = data-element-size attribute
  unit: 'px', //up to you since it's your calculation
  labelVisible: 0, //hide the label text from the result
  callback: function(el){ //the actual calculation of the calcum
    return size(el)[0];
  }
});

```


## Example of using another event to trigger the recalculation besides the default 'resize' on window that is used

If you want another event (like clicking a button,  ),  use ```eventOnElem``` for the element the event is happening on (default is ```window```) and ```event``` for the event name (default is 'resize'). Here is an example of triggerinng the recalculation of the element sizes by clicking a button that

```html
<button class="refresh">Refresh calculation!</button>
```

```js
elCalcum({
  selector: '[class*="container"]>[class*="box"]',
  label: 'element-size',
  unit: 'px',
  labelVisible: 0,
  eventOnElem: document.querySelector('button[class="refresh"]'),
  event: 'click',
  callback: function(el){
    return size(el)[0];
  }
});

```
