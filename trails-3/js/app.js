const expandDuration = 1500;
const spiralRadius = 150;
const spiralRate = 2;
const startRadius = 5;
const endRadius = 0;
const startWidth = '8px';
const endWidth = '5px';

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
    .style('opacity', 0)
    .style('top', String(mouse[1] - endRadius) + 'px')
    .style('left', String(mouse[0] - endRadius) + 'px')
    .style('width',  String(endRadius * 2) + 'px')
    .style('height',  String(endRadius * 2) + 'px')
    .style('border-height', endWidth)
    .remove();
}

// mouse move / touch move event listening
let mouse;
area.on("mousemove", function() { 
  mouse = d3.mouse(this); 
  createCircle(mouse);
});