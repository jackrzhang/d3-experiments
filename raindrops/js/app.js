const area = d3.select('.d3-area');

const expandDuration = 1500;
const startRadius = '1px';
const endRadius = '50px';
const startWidth = '1px';
const endWidth = '3px';
const rainColors = ['#153450', '#447294', '#8FBCDB', 'rgb(88, 114, 148)'];


var createRaindrop = () => {
  let top = Math.random() * window.innerHeight;
  let left = Math.random() * window.innerWidth;
  let color = rainColors[Math.floor(Math.random() * rainColors.length)];

  area.append('div').attr('class', 'particle center')
    .style('top', String(top) + 'px')
    .style('left', String(left) + 'px')
    .style('width', startRadius)
    .style('height', startRadius)
    .style('border-color', color)
    .style('border-width', startWidth)
    .transition()
    .ease('poly(1.2)-out')
    .duration(expandDuration)
    .style('opacity', 0)
    .style('width', endRadius)
    .style('height', endRadius)
    .style('border-height', endWidth)
    .remove();

  if (dropInterval > 500) {
    dropInterval -= 100;
  } else if (dropInterval > 200) {
    dropInterval -= 50;
  } else if (dropInterval > 100) {
    dropInterval -= 5;
  } else if (dropInterval > 20) {
    dropInterval -= 2;
  } else {  
    dropInterval = dropInterval > 9 ? dropInterval - 1 : dropInterval;
  }

  setTimeout(createRaindrop, dropInterval);
};

let dropInterval = 1000; // ms
createRaindrop();