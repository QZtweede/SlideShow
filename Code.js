let Image1 = document.getElementById("img1")
let Image2 = document.getElementById("img2")
let Image3 = document.getElementById("img3")
let Image4 = document.getElementById("img4")

var counter = 0
var i = 0;

    function fadeout()
    {
    setInterval(function() {
        // Image1.style.opacity = i
        console.log("out")
        i--
        }, 20)
    }
    function fadein()
    {
    setInterval(function() {
        // Image1.style.opacity = i
        console.log("in")
        i++
        }, 20)
    }




    counter++
    
// }