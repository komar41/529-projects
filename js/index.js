async function moveCircle() {
    check = document.getElementById('anim').checked
    var circle = document.getElementById("circle")
    var cx = circle.getAttribute("cx");
    // console.log(typeof cx)
    cx = parseInt(cx)
    if(check){
        if(cx > 950) cx = 25
        cx = cx + 10
        await new Promise(resolve => setTimeout(resolve, 100))
        circle.setAttribute("cx", cx)
    }
};

async function moveRect() {
    check = document.getElementById('anim').checked
    var rect = document.getElementById("rect")
    var x = rect.getAttribute("x");
    // console.log(typeof x)
    x = parseInt(x);
    if(check){
        if(x > 970) x = 10
        x = x + 10
        // console.log(x)
        await new Promise(resolve => setTimeout(resolve, 50));
        rect.setAttribute("x", x);
    }
};

async function moveEllipse() {
    check = document.getElementById('anim').checked
    var elip = document.getElementById("ellipse")
    var cx = elip.getAttribute("cx");
    cx = parseInt(cx);
    if(check){
        // console.log(cx)
        if(cx > 930) cx = 70
        cx = cx + 10
        // console.log(x)
        await new Promise(resolve => setTimeout(resolve, 70))
        elip.setAttribute("cx", cx)
    }
};

setInterval(moveCircle, 0);
setInterval(moveRect, 0);
setInterval(moveEllipse, 0);