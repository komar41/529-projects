const margin = { top: 30, right: 50, bottom: 10, left: 40 },
  width = 480 - margin.left - margin.right,
  height = 350 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#pcoordViz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    `translate(${margin.left},${margin.top})`);

// Parse the Data
d3.csv("data/all_trials.csv").then(function (data) {

  // console.log(data)
  // Color scale: give me a specie name, I return a color
  const color = d3.scaleOrdinal()
    .domain(["stroke-survivor", "older-healthy"])
    .range(["#21908dff", "#fde725ff"])

  // Here I set the list of dimension manually to control the order of axis:
  dimensions = ["Step Time (L)", "Step Time (R)", "Stride Time (L)", "Stride Time (R)", "Swing Time (L)", "Swing Time (R)"]

  // For each dimension, I build a linear scale. I store all in a y object
  const y = {}
  for (i in dimensions) {
    n = dimensions[i]
    y[n] = d3.scaleLinear()
      .domain([0, 8]) // --> Same axis range for each group
      // --> different axis range for each group --> .domain( [d3.extent(data, function(d) { return +d[name]; })] )
      .range([height, 0])

    // console.log(y[n])
  }

  // Build the X scale -> it find the best position for each Y axis
  x = d3.scalePoint()
    .range([0, width])
    .domain(dimensions);

  // Highlight the specie that is hovered
  const highlight = function (event, d) {

    selected_specie = d.patient_type

    // first every group turns grey
    d3.selectAll(".line")
      .transition().duration(200)
      .style("stroke", "lightgrey")
      .style("opacity", "0.2")
    // Second the hovered specie takes its color
    d3.selectAll("." + selected_specie)
      .transition().duration(200)
      .style("stroke", color(selected_specie))
      .style("opacity", "1")
  }

  // Unhighlight
  const doNotHighlight = function (event, d) {
    d3.selectAll(".line")
      .transition().duration(200).delay(1000)
      .style("stroke", function (d) { return (color(d.patient_type)) })
      .style("opacity", "1")
  }

  // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
  function path(d) {
    return d3.line()(dimensions.map(function (p) { return [x(p), y[p](d[p])]; }));
  }

  // Draw the lines
  svg
    .selectAll("myPath")
    .data(data)
    .join("path")
    .attr("class", function (d) { return "line " + d.patient_type }) // 2 class for each line: 'line' and the group name
    .attr("d", path)
    .style("fill", "none")
    .style("stroke", function (d) { return (color(d.patient_type)) })
    .style("opacity", 0.5)
    .on("mouseover", highlight)
    .on("mouseleave", doNotHighlight)

  // Draw the axis:
  svg.selectAll("myAxis")
    // For each dimension of the dataset I add a 'g' element:
    .data(dimensions).enter()
    .append("g")
    .attr("class", "axis")
    // I translate this element to its right position on the x axis
    .attr("transform", function (d) { return `translate(${x(d)})` })
    // And I build the axis with the call function
    .each(function (d) { d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d])).style("font-size", "12").style("font-weight", "bold"); })
    // Add axis title
    .append("text")
    .style("text-anchor", "middle")
    .attr("y", -9)
    .text(function (d) { return d; })
    .style("fill", "black")
    .style("font-size", 12)
    .style("font-weight", "bold")
})