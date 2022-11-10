var marginGFR = { top: 0, right: 30, bottom: 100, left: 30 },
    widthGFR = 400 - marginGFR.left - marginGFR.right,
    heightGFR = 300 - marginGFR.top - marginGFR.bottom;

var svgGFRLeft = d3.select("#lineGrf1")
    .append("svg")
    .attr("width", widthGFR + marginGFR.left + marginGFR.right)
    .attr("height", heightGFR + marginGFR.top + marginGFR.bottom)
    .append("g")
    .attr("transform",
        "translate(" + marginGFR.left + "," + marginGFR.top + ")");

var svgGFRRight = d3.select("#lineGrf2")
    .append("svg")
    .attr("width", widthGFR + marginGFR.left + marginGFR.right)
    .attr("height", heightGFR + marginGFR.top + marginGFR.bottom)
    .append("g")
    .attr("transform",
        "translate(" + marginGFR.left + "," + marginGFR.top + ")");

d3.csv("data/012518cm/012518cm_22_grf.csv").then(
    function (data) {
        var x = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return +d.time; })])
            .range([0, widthGFR]);
        svgGFRLeft.append("g")
            .attr("transform", "translate(0," + heightGFR + ")")
            .call(d3.axisBottom(x));
        svgGFRRight.append("g")
            .attr("transform", "translate(0," + heightGFR + ")")
            .call(d3.axisBottom(x));

        var yleft = d3.scaleLinear()
            .domain([d3.min(data, function (d) { return Math.min(d["L-AP"], d["L-ML"], d["L-VT"]); }), d3.max(data, function (d) { return Math.max(d["L-AP"], d["L-ML"], d["L-VT"]); })])
            .range([heightGFR, 0]);
        svgGFRLeft.append("g")
            .call(d3.axisLeft(yleft));

        var yright = d3.scaleLinear()
            .domain([d3.min(data, function (d) { return Math.min(d["R-AP"], d["R-ML"], d["R-VT"]); }), d3.max(data, function (d) { return Math.max(d["R-AP"], d["R-ML"], d["R-VT"]); })])
            .range([heightGFR, 0]);
        svgGFRRight.append("g")
            .call(d3.axisLeft(yright));

        svgGFRLeft.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-widthGFR", 2)
            .attr("d", d3.line()
                .x(function (d) { return x(d.time) })
                .y(function (d) { return yleft(d["L-AP"]) })
            )

        svgGFRLeft.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-widthGFR", 2)
            .attr("d", d3.line()
                .x(function (d) { return x(d.time) })
                .y(function (d) { return yleft(d["L-ML"]) })
            )

        svgGFRLeft.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-widthGFR", 2)
            .attr("d", d3.line()
                .x(function (d) { return x(d.time) })
                .y(function (d) { return yleft(d["L-VT"]) })
            )

        svgGFRRight.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-widthGFR", 2)
            .attr("d", d3.line()
                .x(function (d) { return x(d.time) })
                .y(function (d) { return yright(d["R-AP"]) })
            )

        svgGFRRight.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-widthGFR", 2)
            .attr("d", d3.line()
                .x(function (d) { return x(d.time) })
                .y(function (d) { return yright(d["R-ML"]) })
            )

        svgGFRRight.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "green")
            .attr("stroke-widthGFR", 2)
            .attr("d", d3.line()
                .x(function (d) { return x(d.time) })
                .y(function (d) { return yright(d["R-VT"]) })
            )

        var div = d3.select("#div4").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);


        svgGFRLeft.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("r", 1)
            .attr("cx", function (d) { return x(d.time); })
            .attr("cy", function (d) { return yleft(d["L-AP"]); })
            .style("fill", "steelblue")
            .on("mouseover", function (event, d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div.html("Time: " + d.time + "<br/>L-AP: " + d["L-AP"])
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        svgGFRLeft.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("r", 1)
            .attr("cx", function (d) { return x(d.time); })
            .attr("cy", function (d) { return yleft(d["L-ML"]); })
            .style("fill", "red")
            .on("mouseover", function (event, d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div.html("Time: " + d.time + "<br/>L-ML: " + d["L-ML"])
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        svgGFRLeft.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("r", 1)
            .attr("cx", function (d) { return x(d.time); })
            .attr("cy", function (d) { return yleft(d["L-VT"]); })
            .style("fill", "green")
            .on("mouseover", function (event, d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div.html("Time: " + d.time + "<br/>L-VT: " + d["L-VT"])
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        var div = d3.select("#div5").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);


        svgGFRRight.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("r", 1)
            .attr("cx", function (d) { return x(d.time); })
            .attr("cy", function (d) { return yright(d["R-AP"]); })
            .style("fill", "steelblue")
            .on("mouseover", function (event, d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div.html("Time: " + d.time + "<br/>R-AP: " + d["R-AP"])
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        svgGFRRight.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("r", 1)
            .attr("cx", function (d) { return x(d.time); })
            .attr("cy", function (d) { return yright(d["R-ML"]); })
            .style("fill", "red")
            .on("mouseover", function (event, d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div.html("Time: " + d.time + "<br/>R-ML: " + d["R-ML"])
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        svgGFRRight.selectAll("dot")
            .data(data)
            .enter().append("circle")
            .attr("r", 1)
            .attr("cx", function (d) { return x(d.time); })
            .attr("cy", function (d) { return yright(d["R-VT"]); })
            .style("fill", "green")
            .on("mouseover", function (event, d) {
                div.transition()
                    .duration(200)
                    .style("opacity", .9);
                div.html("Time: " + d.time + "<br/>R-VT: " + d["R-VT"])
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        var keysLeft = ["L-AP", "L-ML", "L-VT"]
        var keysRight = ["R-AP", "R-ML", "R-VT"]
        var color = ["steelblue", "red", "green"]

        svgGFRLeft.selectAll("mydots")
            .data(keysLeft)
            .enter()
            .append("circle")
            .attr("cx", 260)
            .attr("cy", function (d, i) { return 74 + i * 25 })
            .attr("r", 7)
            .style("fill", function (d, i) { return color[i] })

        svgGFRLeft.selectAll("mylabels")
            .data(keysLeft)
            .enter()
            .append("text")
            .attr("x", 280)
            .attr("y", function (d, i) { return 74 + i * 25 })
            .style("fill", function (d, i) { return color[i] })
            .text(function (d, i) { return keysLeft[i] })
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")

        svgGFRRight.selectAll("mydots")
            .data(keysRight)
            .enter()
            .append("circle")
            .attr("cx", 50)
            .attr("cy", function (d, i) { return 74 + i * 25 })
            .attr("r", 7)
            .style("fill", function (d, i) { return color[i] })

        svgGFRRight.selectAll("mylabels")
            .data(keysRight)
            .enter()
            .append("text")
            .attr("x", 70)
            .attr("y", function (d, i) { return 74 + i * 25 })
            .style("fill", function (d, i) { return color[i] })
            .text(function (d, i) { return keysRight[i] })
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")

    });
