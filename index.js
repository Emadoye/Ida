window.setInterval(second1,5000) //HTML to set timer
let myVideo = document.getElementById("video1")
let myButton = document.getElementById("button1")
let myDataTrackStr = myVideo.getAttribute('data-track')
let dataTrackObj = JSON.parse(myDataTrackStr)


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
        
        return false
    }
    else {
        
        return true
    }
}

function second1() {
    let playing = isPlaying() 
    if (playing) {
        //return value of sub2 
        document.getElementById("heading1").innerHTML = dataTrackObj.param2.sub2
        console.log(dataTrackObj.param2.sub2)

    }
    else {
        document.getElementById("heading1").innerHTML =  "Warning"
    }
}
