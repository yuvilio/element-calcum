# element-datum
Calculate something about an element and refresh it as browser resizes


## Example usage

Suppose you want to calculate the widths of divs and paragraphs that have a class with the string 'col' in it. (like 'col-sm-12', 'col-md-3', ...)

```js
var elCalcum = require('element-datum'); //a module i made!
```

if you provide it with nothing but the selector it will calculate the offSetWidth by default

```js
elCalcum({
  selector: 'p[class*="col"],div[class*="col"]'
});
```


The power comes in giving it a callback to do your own calculation

## Example basic css to (optionally) show the data.
```css

p[class*="col"]:after,div[class*="col"]:after {
  display: table;
  position: absolute;
  bottom: 20px;
  background-color: salmon;
  color: white;
  padding: 3px 2px;
  right: 0;
  content: attr(data-offsetWidth); /*use the 'data-[label]' */

 }

```


## Feel free to calculate anything about the element. Here's an example calculating widths using the [element-size](https://github.com/hughsk/element-size) module.

```js

var size = require('element-size');
var elCalcum = require('element-datum');
elCalcum({
  selector: 'p[class*="col"],div[class*="col"]',
  label: 'element-size',// = data-element-size attribute
  unit: 'px', //up to you since it's your calculation
  labelVisible: 0, //hide the label text from the result
  callback: function(el){ //the actual calculation of the datum
    return size(el)[0];
  }
});

```
