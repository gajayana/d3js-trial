'use strict';

var data = [10],
	canvas = d3.select('body')
			   .append('svg')
			   .attr('width', 500)
			   .attr('height', 500),
	circle1 = canvas.append('circle') // manualy add circle
				   .attr('cx', 50)
				   .attr('cy', 100)
				   .attr('r', 25),
	circle2 = canvas.append('circle') // manualy add circle
				   .attr('cx', 50)
				   .attr('cy', 200)
				   .attr('r', 25),
	circles = canvas.selectAll('circle')
				   .data(data)
				   .attr('fill', '#0f0')
				   .exit()
				   .attr('fill', '#00f');