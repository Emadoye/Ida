window.setInterval(isPlaying,5000) //HTML to set timer
let myVideo = document.getElementById("video1")
let myButton = document.getElementById("button1")
function changeVideo() {
    //Let the button report if video is playing or not
    if (myVideo.paused) {
        myVideo.play()
        myButton.innerHTML = "Video is playing"
    }
    else{
        myVideo.pause()
        myButton.innerHTML = "Video is paused"
    }
}

function isPlaying() {
    //To report if video is playing or not
    if (myVideo.paused) {
        document.getElementById("heading1").innerHTML = "Video is not playing"
        return false
    }
    else {
        document.getElementById("heading1").innerHTML = "Video is playing"
        return true
    }
}

function second1() {
    let playing = isPlaying() 
    if (playing) {
        //return value of sub2 

    }
    else {
        return "Warning"
    }
}