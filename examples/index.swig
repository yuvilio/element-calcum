<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>element-calcum Examples</title>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

{# <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css"> #}

<link rel="stylesheet" href="css/styles.css">


<script src="js/source.js"></script>
</head>
<body>
  <div class="container-fluid">

    <div class="marked">#element-calcum Examples</div>

    <div class="marked">Documentation can be found [here](https://github.com/yuvilio/element-calcum), including the code for these [examples](https://github.com/yuvilio/element-calcum/blob/master/examples).</div>

    <div class="marked">Simple example Getting familiar with grids. Here is a simple bootstrap grid with different layouts for small,  medium, and large.  Let's use element-calcum to probe the css widths (we'll use element-size as a convenience to calculate them). Resize the width to see a recalc.</div>

    <div class="row ex-width">
      <div class="box-4 col-sm-6 col-md-4 col-lg-9">col-sm-6 col-md-4 col-lg-9</div>
      <div class="box-5 col-sm-6 col-md-8 col-lg-3">col-sm-6 col-md-8 col-lg-3</div>
    </div>


<div class="marked">Since you control the calculation made on the the element, it can be whatever you want to explore. Here's an example exploring the flex proprtions and this time measuring height. Let's throw in a range slider with a 'change' listener to adjust the height and have element-calcum recalculate the approximate heights. You might have to double adjust the slider.</div>


<div class="ex-height-flex">
  <div class="box-1">flex 1</div>
  <div class="box-2">flex 2</div>
  <div class="box-3">flex 1</div>
</div>

<div class="slider">
  <label for=height-slider>adjust height</label>
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

<div class="marked">Want to use the element inspector to adjust the style and see the change? Have a look at [element-calcum-style](https://github.com/yuvilio/element-calcum-style)</div>

  </div>
</body>
</html>