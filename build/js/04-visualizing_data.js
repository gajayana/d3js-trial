'use strict';

var dataArray = [20, 40, 50],
    canvas = d3.select('body')
               .append('svg')
               .attr('width', 500)
               .attr('height', 500),
    bar = canvas.selectAll('rect')
                .data(dataArray)
                .enter() // foreach
                .append('rect') 
                .attr('width', function(d) {
                  return d * 10;
                })
                .attr('height', 50)
                .attr('y', function (d, i) {
                  return i * 100;
                });