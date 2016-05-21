const interval = 2;
const expandDuration = 2500;
const spiralRadius = window.innerWidth;
const spiralRate = 3;
const startRadius = 50;
const endRadius = 0;
const startWidth = '5px';
const endWidth = '10px';

const area = d3.select('body')
  .append('div')
  .attr('class', 'd3-area');

let color;
let grayScale = 0;
let shade;
let spiralX, spiralY;
let radian = 0;
let createCircle = (position) => {
  grayScale += 2;
  shade = String(Math.abs(grayScale % 500 - 255))
  // color = d3.hsl(hslIndex % 360, 1, .5).rgb();
  color = 'rgb(' + shade + ', ' + shade + ', ' + shade + ')';

  radian += spiralRate;
  spiralX = Math.cos(radian) * spiralRadius;
  spiralY = Math.sin(radian) * spiralRadius;

  area.append("div")
    .attr('class', 'particle')
    .style('top', String(position[1] + spiralY - startRadius) + 'px')
    .style('left', String(position[0] + spiralX - startRadius) + 'px')
    .style('width', String(startRadius * 2) + 'px')
    .style('height', String(startRadius * 2) + 'px')
    .style('border-color', color)
    .style('border-width', startWidth)
    .transition()
    .ease(Math.sqrt)
    .duration(expandDuration)
    .style('opacity', 1)
    .style('top', String(position[1] - endRadius) + 'px')
    .style('left', String(position[0] - endRadius) + 'px')
    .style('width',  String(endRadius * 2) + 'px')
    .style('height',  String(endRadius * 2) + 'px')
    .style('border-height', endWidth)
    .remove();
}

setInterval(() => {
  createCircle([window.innerWidth / 2, window.innerHeight / 2]);
}, interval);