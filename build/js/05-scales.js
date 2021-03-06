'use strict';
var dataArray = [20, 40, 50, 60],
	width = 500,
	height = 500,
	widthScale = d3.scale
				   .linear()
				   .domain([0, 60])
				   .range([0, width]),
	colorScale = d3.scale
				   .linear()
				   .domain([0, 60])
				   .range(['#f00', '#00f']),
	canvas = d3.select('body')
			   .append('svg')
			   .attr('width', width)
			   .attr('height', height),
	bars = canvas.selectAll('rect')
				 .data(dataArray)
				 .enter()
				 .append('rect')
				 .attr('width', function (d) {
				 	return widthScale(d);
				 })
				 .attr('height', 50)
				 .attr('fill', function (d) {
				 	return colorScale(d);
				 })
				 .attr('y', function (d, i) {
				 	return i * 100;
				 });