const expandDuration = 1500;
const startRadius = 2;
const endRadius = 150;
const startWidth = '1px';
const endWidth = '5px';
const circleColors = ['#9877a2', '#8499c1', '#d990a3', '#f2dede', ' #96c8c5'];

const area = d3.select('body')
  .append('div')
  .attr('class', 'd3-area');

// mouse move / touch move event listening
let mouse;
area.on("mousemove", function() { 
  mouse = d3.mouse(this); 
  createCircle(mouse);
});

let createCircle = (mouse) => {
  let color = circleColors[Math.floor(Math.random() * circleColors.length)];

  area.append("div")
    .attr('class', 'particle')
    .style('top', String(mouse[1] - startRadius) + 'px')
    .style('left', String(mouse[0] - startRadius) + 'px')
    .style('width', String(startRadius * 2) + 'px')
    .style('height', String(startRadius * 2) + 'px')
    .style('border-color', color)
    .style('border-width', startWidth)
    .transition()
    .ease('poly(1.5)-out')
    .duration(expandDuration)
    .style('opacity', 0)
    .style('top', String(mouse[1] - endRadius) + 'px')
    .style('left', String(mouse[0] - endRadius) + 'px')
    .style('width',  String(endRadius * 2) + 'px')
    .style('height',  String(endRadius * 2) + 'px')
    .style('border-height', endWidth)
    .remove()
}