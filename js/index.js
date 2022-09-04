async function moveCircle() {
    var circle = document.getElementById("circle");
    var cx = circle.getAttribute("cx");
    // console.log(typeof cx)
    cx = parseInt(cx);
    while(true){
        if(cx > 950) cx = 25
        cx = cx + 10
        await new Promise(resolve => setTimeout(resolve, 100));
        circle.setAttribute("cx", cx);
    }
};

async function moveRect() {
    var rect = document.getElementById("rect");
    var x = rect.getAttribute("x");
    console.log(typeof x)
    x = parseInt(x);
    while(true){
        if(x > 970) x = 10
        x = x + 10
        // console.log(x)
        await new Promise(resolve => setTimeout(resolve, 50));
        rect.setAttribute("x", x);
    }
};

async function moveEllipse() {
    var elip = document.getElementById("ellipse");
    var cx = elip.getAttribute("cx");
    cx = parseInt(cx);
    while(true){
        // console.log(cx)
        if(cx > 930) cx = 70
        cx = cx + 10
        // console.log(x)
        await new Promise(resolve => setTimeout(resolve, 70));
        elip.setAttribute("cx", cx);
    }
};