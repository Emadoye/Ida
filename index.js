window.setInterval(Isplaying,5000) //HTML to set timer
var Myvideo = document.getElementById("video1")
var Mybutton = document.getElementById("button1")
function Changevideo() {
    //Let the button report if video is playing or not
    if (Myvideo.paused) {
        Myvideo.play()
        Mybutton.innerHTML = "Video is playing"
    }
    else{
        Myvideo.pause()
        Mybutton.innerHTML = "Video is paused"
    }
}

function Isplaying() {
    //To report if video is playing or not
    if (Myvideo.paused) {
        document.getElementById("heading1").innerHTML = "Video is not playing"
        return false
    }
    else {
        document.getElementById("heading1").innerHTML = "Video is playing"
        return true
    }
}

function Second1() {
    var Playing = Isplaying() 
    if (Playing) {
        //return value of sub2 

    }
    else {
        return "Warning"
    }
}