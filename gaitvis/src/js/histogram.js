function plotHist(soc) {
    // console.log(soc)
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].age <= 65) {
            a += 1
        }
        if (soc[i].age > 65 && soc[i].age <= 70) {
            b += 1
        }
        if (soc[i].age > 70 && soc[i].age <= 75) {
            c += 1
        }
        if (soc[i].age > 75 && soc[i].age <= 80) {
            d += 1
        }
        if (soc[i].age > 80 && soc[i].age <= 85) {
            e += 1
        }
        if (soc[i].age > 85 && soc[i].age <= 90) {
            f += 1
        }
    }
    let age = [{ group: "60-65", var1: a }, { group: "66-70", var1: b }, { group: "71-75", var1: c }, { group: "76-80", var1: d }, { group: "81-85", var1: e }, { group: "86-90", var1: f }]
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].height <= 163) {
            a += 1
        }
        if (soc[i].height > 163 && soc[i].height <= 169) {
            b += 1
        }
        if (soc[i].height > 169 && soc[i].height <= 175) {
            c += 1
        }
        if (soc[i].height > 175 && soc[i].height <= 181) {
            d += 1
        }
        if (soc[i].height > 181 && soc[i].height <= 187) {
            e += 1
        }
        if (soc[i].height > 187 && soc[i].height <= 195) {
            f += 1
        }
    }
    let heightt = [{ group: "157-163", var2: a }, { group: "164-169", var2: b }, { group: "170-175", var2: c }, { group: "176-181", var2: d }, { group: "182-187", var2: e }, { group: "188-195", var2: f }]
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].gender == 0) {
            a += 1
        }
        if (soc[i].gender == 1) {
            b += 1
        }
    }
    let gender = [{ group: "M", var3: a }, { group: "F", var3: b }, { group: "", var3: c }, { group: "", var3: d }, { group: "", var3: e }, { group: "", var3: f }]
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].weight <= 61) {
            a += 1
        }
        if (soc[i].weight > 61 && soc[i].weight <= 72) {
            b += 1
        }
        if (soc[i].weight > 72 && soc[i].weight <= 84) {
            c += 1
        }
        if (soc[i].weight > 84 && soc[i].weight <= 95) {
            d += 1
        }
        if (soc[i].weight > 95 && soc[i].weight <= 106) {
            e += 1
        }
        if (soc[i].weight > 106 && soc[i].weight <= 115) {
            f += 1
        }
    }
    let weight = [{ group: "50-61", var4: a }, { group: "62-72", var4: b }, { group: "73-84", var4: c }, { group: "85-95", var4: d }, { group: "96-106", var4: e }, { group: "107-115", var4: f }]

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].asis <= 20.8) {
            a += 1
        }
        if (soc[i].asis > 20.8 && soc[i].asis <= 21.5) {
            b += 1
        }
        if (soc[i].asis > 21.5 && soc[i].asis <= 22.2) {
            c += 1
        }
        if (soc[i].asis > 22.2 && soc[i].asis <= 22.9) {
            d += 1
        }
        if (soc[i].asis > 22.9 && soc[i].asis <= 23.6) {
            e += 1
        }
        if (soc[i].asis > 23.6 && soc[i].asis <= 24.3) {
            f += 1
        }
    }
    let asis = [{ group: "20.1-20.8", var5: a }, { group: "20.8-21.5", var5: b }, { group: "21.6-22.2", var5: c }, { group: "22.3-22.9", var5: d }, { group: "23-23.7", var5: e }, { group: "23.8-24.3", var5: f }]

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].kneeWidth <= 10.6) {
            a += 1
        }
        if (soc[i].kneeWidth > 10.6 && soc[i].kneeWidth <= 11.2) {
            b += 1
        }
        if (soc[i].kneeWidth > 11.2 && soc[i].kneeWidth <= 11.8) {
            c += 1
        }
        if (soc[i].kneeWidth > 11.8 && soc[i].kneeWidth <= 12.4) {
            d += 1
        }
        if (soc[i].kneeWidth > 12.4 && soc[i].kneeWidth <= 12.9) {
            e += 1
        }
        if (soc[i].kneeWidth > 12.9 && soc[i].kneeWidth <= 13.4) {
            f += 1
        }
    }
    let kw = [{ group: "10-10.6", var6: a }, { group: "10.7-11.2", var6: b }, { group: "11.3-11.8", var6: c }, { group: "11.9.3-12.4", var6: d }, { group: "12.5-12.9", var6: e }, { group: "13-13.4", var6: f }]

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].ankleWidth <= 7) {
            a += 1
        }
        if (soc[i].ankleWidth > 7 && soc[i].ankleWidth <= 8) {
            b += 1
        }
        if (soc[i].ankleWidth > 8 && soc[i].ankleWidth <= 9) {
            c += 1
        }
        if (soc[i].ankleWidth > 9 && soc[i].ankleWidth <= 10) {
            d += 1
        }
        if (soc[i].ankleWidth > 10 && soc[i].ankleWidth <= 11) {
            e += 1
        }
        if (soc[i].ankleWidth > 11 && soc[i].ankleWidth <= 12) {
            f += 1
        }
    }
    let aw = [{ group: "6-7", var7: a }, { group: "7.1-8", var7: b }, { group: "8.1-9", var7: c }, { group: "9.1-10", var7: d }, { group: "10.1-11", var7: e }, { group: "11.1-12", var7: f }]

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].footLength <= 23.3) {
            a += 1
        }
        if (soc[i].footLength > 23.3 && soc[i].footLength <= 24.6) {
            b += 1
        }
        if (soc[i].footLength > 24.6 && soc[i].footLength <= 25.9) {
            c += 1
        }
        if (soc[i].footLength > 25.9 && soc[i].footLength <= 27.2) {
            d += 1
        }
        if (soc[i].footLength > 27.2 && soc[i].footLength <= 28.5) {
            e += 1
        }
        if (soc[i].footLength > 28.5 && soc[i].footLength <= 30) {
            f += 1
        }
    }
    let fl = [{ group: "22-23.3", var8: a }, { group: "23.4-24.6", var8: b }, { group: "24.7-25.9", var8: c }, { group: "26-27.2", var8: d }, { group: "27.3-28.5", var8: e }, { group: "28.6-30", var8: f }]

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].heelWidth <= 5.5) {
            a += 1
        }
        if (soc[i].heelWidth > 5.5 && soc[i].heelWidth <= 6) {
            b += 1
        }
        if (soc[i].heelWidth > 6 && soc[i].heelWidth <= 6.5) {
            c += 1
        }
        if (soc[i].heelWidth > 6.5 && soc[i].heelWidth <= 7) {
            d += 1
        }
        if (soc[i].heelWidth > 7 && soc[i].heelWidth <= 7.5) {
            e += 1
        }
        if (soc[i].heelWidth > 7.5 && soc[i].heelWidth <= 8) {
            f += 1
        }
    }
    let hw = [{ group: "5-5.5", var9: a }, { group: "5.6-6", var9: b }, { group: "6.1-6.5", var9: c }, { group: "6.6-7", var9: d }, { group: "7.1-7.5", var9: e }, { group: "7.6-8", var9: f }]

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    for (var i = 0; i < 1001; i++) {
        if (soc[i].maxFootWidth <= 8.5) {
            a += 1
        }
        if (soc[i].maxFootWidth > 8.5 && soc[i].maxFootWidth <= 9.1) {
            b += 1
        }
        if (soc[i].maxFootWidth > 9.1 && soc[i].maxFootWidth <= 9.7) {
            c += 1
        }
        if (soc[i].maxFootWidth > 9.7 && soc[i].maxFootWidth <= 10.3) {
            d += 1
        }
        if (soc[i].maxFootWidth > 10.3 && soc[i].maxFootWidth <= 10.9) {
            e += 1
        }
        if (soc[i].maxFootWidth > 10.9 && soc[i].maxFootWidth < 11.5) {
            f += 1
        }
    }
    let fw = [{ group: "8.0-8.5", var10: a }, { group: "8.6-9.1", var10: b }, { group: "9.2-9.7", var10: c }, { group: "9.8-10.3", var10: d }, { group: "10.4-10.9", var10: e }, { group: "10.9-11.5", var10: f }]
    // console.log(age)
    // console.log(heightt)
    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 410 - margin.left - margin.right,
        height = 225 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#histViz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Initialize the X axis
    var x = d3.scaleBand()
        .range([0, width])
        .padding(0.2);

    var xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .style("text-anchor", "middle")
        .style("font-size", 14)

    // Initialize the Y axis
    var y = d3.scaleLinear()
        .range([height, 0]);

    var yAxis = svg.append("g")
        .attr("class", "myYaxis")
        // .style("text-anchor", "middle")
        .style("font-size", 14)

    // A function that create / update the plot for a given variable:
    function update(selectedVar) {
        d3.select("u").remove();
        // Parse the Data
        d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/barplot_change_data.csv").then(function (data) {
            // console.log(data)
            // console.log(soc)
            // X axis
            if (selectedVar == 'var1') {
                data = age
            }
            if (selectedVar == 'var2') {
                data = heightt
            }
            if (selectedVar == 'var3') {
                data = gender
            }
            if (selectedVar == 'var4') {
                data = weight
            }
            if (selectedVar == 'var5') {
                data = asis
            }
            if (selectedVar == 'var6') {
                data = kw
            }
            if (selectedVar == 'var7') {
                data = aw
            }
            if (selectedVar == 'var8') {
                data = fl
            }
            if (selectedVar == 'var9') {
                data = hw
            }
            if (selectedVar == 'var10') {
                data = fw
            }
            x.domain(data.map(function (d) { return d.group; }))
            xAxis.transition().duration(1000).call(d3.axisBottom(x))

            // Add Y axis
            y.domain([0, d3.max(data, function (d) { return +d[selectedVar] })]);
            yAxis.transition().duration(1000).call(d3.axisLeft(y));

            // variable u: map data to existing bars
            var u = svg.selectAll("rect")
                .data(data)

            // update bars
            u
                .enter()
                .append("rect")
                .merge(u)
                .transition()
                .duration(1000)
                .attr("x", function (d) { return x(d.group); })
                .attr("y", function (d) { return y(d[selectedVar]); })
                .attr("width", x.bandwidth())
                .attr("height", function (d) { return height - y(d[selectedVar]); })
                .attr("fill", "#1F78B4")
                .attr('stroke', 'black')
        })
    }

    // Initialize plot
    update('var1')

    const someCheckbox = document.getElementById('someID1');
    someCheckbox.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 1) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var1');
        }
        if (e.target.checked === false) {
            // console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox2 = document.getElementById('someID2');
    someCheckbox2.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 2) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var2');
        }
        if (e.target.checked === false) {
            // console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox3 = document.getElementById('someID3');
    someCheckbox3.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 3) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var3');
        }
        if (e.target.checked === false) {
            console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox4 = document.getElementById('someID4');
    someCheckbox4.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 4) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var4');
        }
        if (e.target.checked === false) {
            console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox5 = document.getElementById('someID5');
    someCheckbox5.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 5) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var5');
        }
        if (e.target.checked === false) {
            console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox6 = document.getElementById('someID6');
    someCheckbox6.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 6) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var6');
        }
        if (e.target.checked === false) {
            console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox7 = document.getElementById('someID7');
    someCheckbox7.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 7) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var7');
        }
        if (e.target.checked === false) {
            console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox8 = document.getElementById('someID8');
    someCheckbox8.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 8) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var8');
        }
        if (e.target.checked === false) {
            console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox9 = document.getElementById('someID9');
    someCheckbox9.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 9) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var9');
        }
        if (e.target.checked === false) {
            console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });

    const someCheckbox10 = document.getElementById('someID10');
    someCheckbox10.addEventListener('change', e => {
        if (e.target.checked === true) {
            console.log("Checkbox is checked - boolean value: ", e.target.checked)
            for (var i = 1; i < 11; i++) {
                var q = 'someID' + i;
                if (i != 10) {
                    document.getElementById(q).checked = false;
                }
            }
            update('var10');
        }
        if (e.target.checked === false) {
            console.log("Checkbox is not checked - boolean value: ", e.target.checked)
        }
    });
}
//plotHist();


