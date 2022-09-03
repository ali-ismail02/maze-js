window.addEventListener('load',() => { 

    const boundaries = document.getElementsByClassName("boundary")
    const start = document.getElementById("start")
    const end = document.getElementById("end")
    const status = document.getElementById("status")
    var win, gameOn, score
    win = gameOn = score = 0

    start.addEventListener("mouseover", function () {
        console.log("started")
        gameOn = 1
    })


  });