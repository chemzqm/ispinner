var domify = require('domify')
var template = require('./template.html')
var classes = require('classes')

module.exports = function (parent, opt) {
  var el = domify(template)
  opt = opt || {}
  if (!opt.white) {
    classes(el).add('ispinner-gray')
  } else {
    classes(el).add('ispinner-white')
  }
  if (opt.width) {
    el.style.width = opt.width
  } else {
    el.style.width =  parent.getBoundingClientRect().width + 'px'
  }
  el.style.height = el.style.width
  parent.appendChild(el)
  return el
}

