var todo = {}
username = "moovweb"
repo = "harlem_shaker"
var base = "https://api.github.com/repos/" + username + "/" + repo + "/commits"
var links = []
var done = false
var handle
$.ajax(
{
	url : base, dataType : 'json', 
	async : false, 
	success : function(json) 
	{ 
		todo[json[0].sha] = true
	}
})

function isEmpty(obj) {
  for(var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
}

function discoverLinks(json){
	for (var i = 0; i < json.parents.length; i++) 
	{
		links.push({source: json.sha, target: json.parents[i].sha})
		todo[json.parents[i].sha] = true
	}
	todo[json.sha] = false
}

function doLayer() {
	done = true
	for (prop in todo) 
	{
		if (todo[prop])
		{
			done = false
			$.getJSON(base + "/" + prop, discoverLinks);
		}
	}
	if (done) 
	{
		clearInterval(handle); 
		finished()
	}
}
handle = setInterval(doLayer,200);

function finished() 
{
	var nodes = {};

	// Compute the distinct nodes from the links.
	links.forEach(function(link) {
	  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
	  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
	});

	nodes = d3.values(nodes)
	var w = 400,
	    h = 400,
	    fill = d3.scale.category20();

	var vis = d3.select("#chart")
	  .append("svg:svg")
	    .attr("width", w)
	    .attr("height", h);

	var force = d3.layout.force()
	  .charge(-120)
	  .linkDistance(30)
	  .nodes(nodes)
	  .links(links)
	  .size([w, h])
	  .start();

	var link = vis.selectAll("line.link")
	  .data(links)
	.enter().append("svg:line")
	  .attr("class", "link")
	  .style("stroke-width", function(d) { return Math.sqrt(d.value); })
	  .attr("x1", function(d) { return d.source.x; })
	  .attr("y1", function(d) { return d.source.y; })
	  .attr("x2", function(d) { return d.target.x; })
	  .attr("y2", function(d) { return d.target.y; });

	var node = vis.selectAll("circle.node")
	  .data(nodes)
	.enter().append("svg:circle")
	  .attr("class", "node")
	  .attr("cx", function(d) { return d.x; })
	  .attr("cy", function(d) { return d.y; })
	  .attr("r", 5)
	  .style("fill", function(d) { return fill(d.group); })
	  .call(force.drag);

	node.append("svg:title")
	  .text(function(d) { return d.name; });

	vis.style("opacity", 1e-6)
	.transition()
	  .duration(1000)
	  .style("opacity", 1);

	force.on("tick", function() {
	link.attr("x1", function(d) { return d.source.x; })
	    .attr("y1", function(d) { return d.source.y; })
	    .attr("x2", function(d) { return d.target.x; })
	    .attr("y2", function(d) { return d.target.y; });

	node.attr("cx", function(d) { return d.x; })
	    .attr("cy", function(d) { return d.y; });
	});
}