# Ispinner

A simple ios spinner built with css3 animation.
![](http://7b1fyu.com1.z0.glb.clouddn.com/Screen%20Shot%202016-03-29%20at%201.03.14%20PM.png)

## Install

    npm i ispinner -S

## Usage

``` js
var ispinner = require('ispinner')
var el = document.getElementById('#spinner')
ispinner(el, {white: true})
```

## API

### ispinner(el, [option])

* `el` is parent element to attach spinner element
* `option` is optional, it contains `white` and `width`
    * when `white` is true, spinner would be white color
    * when `width` is set, it would be applied to el.style.width and el.style.height.
* spinner element is returned
