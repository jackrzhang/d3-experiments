const interval = 5;
const expandDuration = 2500;
const spiralRadius = window.innerWidth;
const spiralRate = 3;
const startRadius = 30;
const endRadius = 0;
const startWidth = '5px';
const endWidth = '10px';

const area = d3.select('body')
  .append('div')
  .attr('class', 'd3-area');

let color;
let hslIndex = 0;
let spiralX, spiralY;
let radian = 0;
let createCircle = (mouse) => {
  hslIndex++;
  color = d3.hsl(hslIndex % 360, 1, .5).rgb();

  radian += spiralRate;
  spiralX = Math.cos(radian) * spiralRadius;
  spiralY = Math.sin(radian) * spiralRadius;

  area.append("div")
    .attr('class', 'particle')
    .style('top', String(mouse[1] + spiralY - startRadius) + 'px')
    .style('left', String(mouse[0] + spiralX - startRadius) + 'px')
    .style('width', String(startRadius * 2) + 'px')
    .style('height', String(startRadius * 2) + 'px')
    .style('border-color', color)
    .style('border-width', startWidth)
    .transition()
    .ease(Math.sqrt)
    .duration(expandDuration)
    .style('opacity', .65)
    .style('top', String(mouse[1] - endRadius) + 'px')
    .style('left', String(mouse[0] - endRadius) + 'px')
    .style('width',  String(endRadius * 2) + 'px')
    .style('height',  String(endRadius * 2) + 'px')
    .style('border-height', endWidth)
    .remove();
}

setInterval(() => {
  createCircle([window.innerWidth / 2, window.innerHeight / 2]);
}, interval);