//container
document.getElementById('container').style.background = "yellow";
document.getElementById('container').style.height = "400px";
document.getElementById('container').style.width = "400px";
document.getElementById('container').style.position = "relative";

//Animate
document.getElementById('animate').style.background = "red";
document.getElementById('animate').style.height = "50px";
document.getElementById('animate').style.width = "50px";
document.getElementById('animate').style.position = "absolute";

//divs
document.getElementById('myDiv1').style.background = "orange";
document.getElementById('myDiv1').style.width = "400px";
document.getElementById('myP1').style.background = "blue";

document.getElementById('myDiv2').style.background = "orange";
document.getElementById('myDiv2').style.width = "400px";
document.getElementById('myP2').style.background = "blue";

//animation code
function myMove() {
    var pos = 0;
    var elem = document.getElementById('animate');
    var id = setInterval( frames, 5 );

    function frames() {
        if( pos == 350 ) {
            clearInterval(id);

        }else{
            pos ++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

var a = 10;
var b = 20;

document.getElementById("myButton").addEventListener("click", function() {
    myFunction(a, b);
});

function myFunction(a, b) {
    var results = a * b;
    document.getElementById('demos').innerHTML = results;
}


// bubbling and Capturing.
document.getElementById('myP1').addEventListener('click', function() {
    alert ("you clicked bubbling paragraph");
}, false);

document.getElementById('myDiv1').addEventListener('click', function() {
    alert ("you clicked bubbling div");
}, false);


document.getElementById('myP2').addEventListener('click', function() {
    alert ("you clicked capturing paragraph");
}, true);
document.getElementById('myDiv2').addEventListener('click', function() {
    alert ("you clicked capturing div");
}, true);

