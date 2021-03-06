<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>element-calcum Examples</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

<link rel="stylesheet" href="css/styles.css">


<script src="js/source.js"></script>




</head>
<body>
  <div class="container-fluid">

    <div class="marked">#element-calcum Examples</div>

    <div class="marked">Documentation can be found [here](https://github.com/yuvilio/element-calcum), including the code for these [examples](https://github.com/yuvilio/element-calcum/blob/master/examples).</div>

    <div class="marked">## Ex. 1: Width</div>

    <div class="marked">Simple example Getting familiar with grids. Here is a simple bootstrap grid with different layouts for small,  medium, and large.  Let's use element-calcum to probe the css widths (we'll use element-size as a convenience to calculate them). __Resize the browser width to see a recalc__.</div>

    <div class="row ex-width">
      <div class="box-4 col-sm-6 col-md-4 col-lg-9">col-sm-6 col-md-4 col-lg-9</div>
      <div class="box-5 col-sm-6 col-md-8 col-lg-3">col-sm-6 col-md-8 col-lg-3</div>
    </div>

<div class="marked">## Ex. 2: Recalculating off of other events (like a range slider input)</div>

<div class="marked">Since you control the calculation made on the the element, it can be whatever you want to explore. Here's an example exploring the flexbox proportions and this time measuring height. Let's also demonstrate manual adjustment by throwing in a range slider with a 'change' listener to adjust the height and have element-calcum recalculate the approximate heights. You might have to double adjust the slider to see the new calculation.</div>


<div class="ex-height-flex">
  <div class="box-1">flex 1</div>
  <div class="box-2">flex 2</div>
  <div class="box-3">flex 1</div>
</div>

<div class="slider">
  <label for=height-slider>Adjust Height</label>
  <input type=range min=100 max=300 value=200 data-label="height" class="height-slider" id=height-slider step=1 list="height-ticks">
  <span></span>
  <datalist id=height-ticks>
    <option>100</option>
    <option>125</option>
    <option>150</option>
    <option>175</option>
    <option>200</option>
    <option>200</option>
    <option>225</option>
    <option>250</option>
    <option>275</option>
    <option>300</option>
  </datalist>
</div>


<div class="marked">## Ex. 3: Multiple calcs on the same elements</div>

<div class="marked">Simply run as many calculations on the elements. Each will generate it's own data attribute. You can then concatenate them in the css content for one label. Here's an example with flexbox wrapping : </div>


<div class="ex-multiple-calc">

  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
  <div class="box-4">4</div>
  <div class="box-5">5</div>
  <div class="box-6">6</div>
  <div class="box-7">7</div>
  <div class="box-8">8</div>
  <div class="box-9">9</div>
  <div class="box-10">10</div>
  <div class="box-11">11</div>
  <div class="box-12">12</div>

</div>

<div class="marked">## Ex. 4: Ratios</div>

<div class="marked">A lot of implementing a responsive layout per some design is maintaining alignments and ratios (width/height, ...) for various viewport widths. Here is an example of a bootstrap grid calculating width/height ratios revealing a background image going out of the ratio intended (say 2/1 for width to height). We know that as we resize, the ratios are adjusted and we should fix it when they are. This can be handy however you choose to solve the problem</div>

<div class="row ex-ratio">
  <div class="box-4 bg-image col-sm-6">col-sm-6 col-md-4 col-lg-9</div>
  <div class="box-5 col-sm-6 col-sm-6">col-sm-6 col-md-8 col-lg-3</div>
</div>

<div class="marked">## Ex. 5a: Offset (position) </div>

<div class="marked">Offsets, can help see if things are aligned. Here's a pair of rows that align at small breakpoint but whose second columns mis-align in medium breakpoint. The offset calculation is presented as (top, left)</div>

<div class="ex-offset-align">

  <div class="row">
    <div class="box-4 col-sm-3 col-md-4">col-sm-3 col-md-4</div>
    <div class="box-5 col-sm-9 col-md-8">col-sm-9 col-md-8</div>
  </div>

  <div class="row">
    <div class="box-7 col-sm-3 col-md-7">col-sm-3 col-md-7</div>
    <div class="box-8 col-sm-9 col-md-5">col-sm-9 col-md-5</div>
  </div>


</div>

<div class="marked">##. Ex 5b: Relative offsets:</div>

<div class="marked">With slight adjustment we can see offsets relative to their parent. </div>

<div class="ex-relative-offset">

  <div class="box-9"></div>

</div>


<div class="marked">Want to use the element inspector to adjust the style and see the change? Have a look at [element-calcum-style](https://github.com/yuvilio/element-calcum-style)</div>

  </div>
</body>
</html>
