function drawChart() {

	d3.csv("../info.csv").then(function(prices) {
		
		const months = {0 : 'Jan', 1 : 'Feb', 2 : 'Mar', 3 : 'Apr', 4 : 'May', 5 : 'Jun', 6 : 'Jul', 7 : 'Aug', 8 : 'Sep', 9 : 'Oct', 10 : 'Nov', 11 : 'Dec'}

		var dateFormat = d3.timeParse("%Y-%m-%d");
		for (var i = 0; i < prices.length; i++) {
			
			prices[i]['Date'] = dateFormat(prices[i]['Date'])
		}

		const margin = {top: 15, right: 65, bottom: 205, left: 50},
		w = 1000 - margin.left - margin.right,
		h = 625 - margin.top - margin.bottom;

		var svg = d3.select("#container")
						.attr("width", w + margin.left + margin.right)
						.attr("height", h + margin.top + margin.bottom)
						.append("g")
						.attr("transform", "translate(" +margin.left+ "," +margin.top+ ")");

		let dates = _.map(prices, 'Date');
		
		var xmin = d3.min(prices.map(r => r.Date.getTime()));
		var xmax = d3.max(prices.map(r => r.Date.getTime()));
		var xScale = d3.scaleLinear().domain([-1, dates.length])
						.range([0, w])
		var xDateScale = d3.scaleQuantize().domain([0, dates.length]).range(dates)
		let xBand = d3.scaleBand().domain(d3.range(-1, dates.length)).range([0, w]).padding(0.3)
		var xAxis = d3.axisBottom()
					  			.scale(xScale)
					    		.tickFormat(function(d) {
									  d = dates[d]
										hours = d.getHours()
										minutes = (d.getMinutes()<10?'0':'') + d.getMinutes() 
										amPM = hours < 13 ? 'am' : 'pm'
										return hours + ':' + minutes + amPM + ' ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
									});
		
		svg.append("rect")
					.attr("id","rect")
					.attr("width", w)
					.attr("height", h)
					.style("fill", "none")
					.style("pointer-events", "all")
					.attr("clip-path", "url(#clip)")
		
		var gX = svg.append("g")
					.attr("class", "axis x-axis") //Assign "axis" class
					.attr("transform", "translate(0," + h + ")")
					.call(xAxis)
		
		gX.selectAll(".tick text")
		  .call(wrap, xBand.bandwidth())

		var ymin = d3.min(prices.map(r => r.Low));
		var ymax = d3.max(prices.map(r => r.High));
		var yScale = d3.scaleLinear().domain([ymin, ymax]).range([h, 0]).nice();
		var yAxis = d3.axisLeft()
					  .scale(yScale)
		
		var gY = svg.append("g")
					.attr("class", "axis y-axis")
					.call(yAxis);
		
		var chartBody = svg.append("g")
					.attr("class", "chartBody")
					.attr("clip-path", "url(#clip)");
		
		// draw rectangles
		let candles = chartBody.selectAll(".candle")
		   .data(prices)
		   .enter()
		   .append("rect")
		   .attr('x', (d, i) => xScale(i) - xBand.bandwidth())
		   .attr("class", "candle")
		   .attr('y', d => yScale(Math.max(d.Open, d.Close)))
		   .attr('width', xBand.bandwidth())
		   .attr('height', d => (d.Open === d.Close) ? 1 : yScale(Math.min(d.Open, d.Close))-yScale(Math.max(d.Open, d.Close)))
		   .attr("fill", d => (d.Open === d.Close) ? "silver" : (d.Open > d.Close) ? "red" : "green")
		
		// draw high and low
		let stems = chartBody.selectAll("g.line")
		   .data(prices)
		   .enter()
		   .append("line")
		   .attr("class", "stem")
		   .attr("x1", (d, i) => xScale(i) - xBand.bandwidth()/2)
		   .attr("x2", (d, i) => xScale(i) - xBand.bandwidth()/2)
		   .attr("y1", d => yScale(d.High))
		   .attr("y2", d => yScale(d.Low))
		   .attr("stroke", d => (d.Open === d.Close) ? "white" : (d.Open > d.Close) ? "red" : "green");
		
		svg.append("defs")
		   .append("clipPath")
		   .attr("id", "clip")
		   .append("rect")
		   .attr("width", w)
		   .attr("height", h)
		
		const extent = [[0, 0], [w, h]];
		
		var resizeTimer;
		var zoom = d3.zoom()
		  .scaleExtent([1, 100])
		  .translateExtent(extent)
		  .extent(extent)
		  .on("zoom", zoomed)
		  .on('zoom.end', zoomend);
		
		svg.call(zoom)

		function zoomed() {
			
			var t = d3.event.transform;
			let xScaleZ = t.rescaleX(xScale);
			
			let hideTicksWithoutLabel = function() {
				d3.selectAll('.xAxis .tick text').each(function(d){
					if(this.innerHTML === '') {
					this.parentNode.style.display = 'none'
					}
				})
			}

			gX.call(
				d3.axisBottom(xScaleZ).tickFormat((d, e, target) => {
						if (d >= 0 && d <= dates.length-1) {
					d = dates[d]
					hours = d.getHours()
					minutes = (d.getMinutes()<10?'0':'') + d.getMinutes() 
					amPM = hours < 13 ? 'am' : 'pm'
					return hours + ':' + minutes + amPM + ' ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
					}
				})
			)

			candles.attr("x", (d, i) => xScaleZ(i) - (xBand.bandwidth()*t.k)/2)
				   .attr("width", xBand.bandwidth()*t.k);
			stems.attr("x1", (d, i) => xScaleZ(i) - xBand.bandwidth()/2 + xBand.bandwidth()*0.5);
			stems.attr("x2", (d, i) => xScaleZ(i) - xBand.bandwidth()/2 + xBand.bandwidth()*0.5);

			hideTicksWithoutLabel();

			gX.selectAll(".tick text")
			.call(wrap, xBand.bandwidth())

		}

		function zoomend() {
			var t = d3.event.transform;
			let xScaleZ = t.rescaleX(xScale);
			clearTimeout(resizeTimer)
			resizeTimer = setTimeout(function() {

			var xmin = new Date(xDateScale(Math.floor(xScaleZ.domain()[0])))
				xmax = new Date(xDateScale(Math.floor(xScaleZ.domain()[1])))
				filtered = _.filter(prices, d => ((d.Date >= xmin) && (d.Date <= xmax)))
				minP = +d3.min(filtered, d => d.Low)
				maxP = +d3.max(filtered, d => d.High)
				buffer = Math.floor((maxP - minP) * 0.1)

			yScale.domain([minP - buffer, maxP + buffer])
			candles.transition()
				   .duration(800)
				   .attr("y", (d) => yScale(Math.max(d.Open, d.Close)))
				   .attr("height",  d => (d.Open === d.Close) ? 1 : yScale(Math.min(d.Open, d.Close))-yScale(Math.max(d.Open, d.Close)));
				   
			stems.transition().duration(800)
				 .attr("y1", (d) => yScale(d.High))
				 .attr("y2", (d) => yScale(d.Low))
			
			gY.transition().duration(800).call(d3.axisLeft().scale(yScale));

			}, 500)
			
		}
	});
}

function wrap(text, width) {
	text.each(function() {
	  var text = d3.select(this),
		  words = text.text().split(/\s+/).reverse(),
		  word,
		  line = [],
		  lineNumber = 0,
		  lineHeight = 1.1, // ems
		  y = text.attr("y"),
		  dy = parseFloat(text.attr("dy")),
		  tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
	  while (word = words.pop()) {
		line.push(word);
		tspan.text(line.join(" "));
		if (tspan.node().getComputedTextLength() > width) {
		  line.pop();
		  tspan.text(line.join(" "));
		  line = [word];
		  tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
		}
	  }
	});
}

drawChart();