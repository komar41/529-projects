var data = [];
let zValues, plane, updateZ
let lastNum = 0
var slider = document.getElementById("myRange");
let colorScale
// var colors = [];

// bounds of the data
const bounds = {};

// create the containment box.
// This cylinder is only to guide development.
// TODO: Remove after the data has been rendered
const createCylinder = () => {
    // get the radius and height based on the data bounds
    const radius = (bounds.maxX - bounds.minX) / 2.0 + 1;
    const height = (bounds.maxY - bounds.minY) + 1;

    // create a cylinder to contain the particle system
    const geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
    const cylinder = new THREE.Mesh(geometry, material);

    // add the containment to the scene
    scene.add(cylinder);
};

// creates the particle system
const createParticleSystem = (data) => {

    console.log(bounds.minY)
    // console.log(bounds.maxC)
    colorScale = d3.scaleLinear()
        .domain([bounds.minC, bounds.maxC])
        .range(['#ffffcc','#006837'])

    const particleGeometry = new THREE.BufferGeometry;
    // console.log(data.length)
    const posArray = new Float32Array(data.length*3);
    const colors = new Float32Array(data.length*3);

    var color = new THREE.Color();

    let j = 0
    for (let i=0; i<data.length; i++){
        // console.log(data[i])
        posArray[j] = data[i].X
        posArray[j+1] = data[i].Y
        posArray[j+2] = data[i].Z
        color.set(colorScale(data[i].concentration))

        // console.log(color.g)
        // colors.push(color.r, color.g, color.b)
        colors[j] = color.r
        colors[j+1] = color.g
        colors[j+2] = color.b

        j = j + 3
    }

    // console.log(posArray)
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    console.log(particleGeometry)

    const particleMaterial = new THREE.PointsMaterial( { 
        vertexColors: true,
        size: 0.05, 
        opacity: 0.7, 
        transparent: true 
    } );

    particlesMesh = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particlesMesh)

    const geometry = new THREE.PlaneGeometry( 12, 12 , 7, 7);
    const material = new THREE.MeshBasicMaterial( {color: 0xa6a6a6, side: THREE.DoubleSide, opacity: 0.3, transparent: true, wireframe: true} );
    plane = new THREE.Mesh( geometry, material );
    // plane.rotation.x = Math.PI / 2;
    // plane.translateZ(0)
    scene.add( plane );

    sliderInput(0)
};

const loadData = (file) => {

    // read the csv file
    d3.csv(file).then(function (fileData)
    // iterate over the rows of the csv file
    {
        fileData.forEach(d => {
            // get the min bounds
            bounds.minX = Math.min(bounds.minX || Infinity, d.Points0);
            bounds.minY = Math.min(bounds.minY || Infinity, d.Points2-5);
            bounds.minZ = Math.min(bounds.minZ || Infinity, d.Points1);
            bounds.minC = Math.min(bounds.minC || Infinity, d.concentration);

            // get the max bounds
            bounds.maxX = Math.max(bounds.maxX || -Infinity, d.Points0);
            bounds.maxY = Math.max(bounds.maxY || -Infinity, d.Points2);
            bounds.maxZ = Math.max(bounds.maxZ || -Infinity, d.Points1);
            bounds.maxC = Math.max(bounds.maxC || -Infinity, d.concentration);

            // add the element to the data collection
            data.push({
                // concentration density
                concentration: Number(d.concentration),
                // Position
                X: Number(d.Points0),
                Y: Number(d.Points2 - 5),
                Z: Number(d.Points1),
                // Velocity
                U: Number(d.velocity0),
                V: Number(d.velocity2),
                W: Number(d.velocity1)
            })
        });
        // draw the containment cylinder
        // TODO: Remove after the data has been rendered
        // createCylinder()
        // create the particle system
        createParticleSystem(data);
    })


};

loadData('data/058.csv');


const margin = {top: 10, right: 5, bottom: 0, left: 5},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;


const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left})`);

// //Read the data

function draw2D(data2D){

    svg.selectAll("*").remove();

    
    // let maxX = d3.max(data2D, d => +d.X)
    // let maxY = d3.max(data2D, d => +d.Y)
    // let minX = d3.min(data2D, d => +d.X)
    // let minY = d3.min(data2D, d => +d.Y)

    // // Add X axis
    const scaleX = d3.scaleLinear()
    .domain([bounds.minX, bounds.maxX])
    .range([ 0, width ]);
    

    // Add Y axis
    const scaleY = d3.scaleLinear()
    .domain([bounds.minY, bounds.maxY])
    .range([ height, 0]);
    
    // console.log(bounds.minX, minX, 'haha')

    // Add dots
    svg.append('g')
    .selectAll("circle")
    .data(data2D)
    .enter()
    .append('circle')
        .attr("cx", function (d) { return scaleX(d.X); } )
        .attr("cy", function (d) { return scaleY(d.Y); } )
        .attr("r", 4)
        .style("fill", function(d){ return colorScale(d.C)})

}

slider.oninput = function() {
    
    sliderInput(this.value)
}

function sliderInput(value){
    plane.position.z = value
    // console.log(this.value, plane.position)

    let data2D = []
    data.map(
        (item) =>{
            if((item.Z).toFixed(2) == value){
                // console.log("yes")
                data2D.push({X: item.X, Y: item.Y, C: item.concentration})
            }
        }
    );
    draw2D(data2D)
    console.log(value)
    console.log(data2D)
}