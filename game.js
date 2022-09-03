window.addEventListener('load',() => { 

    const boundaries = document.getElementsByClassName("boundary")
    const start = document.getElementById("start")
    const end = document.getElementById("end")
    const game = document.getElementById("game")
    var status = document.getElementById("status")
    var gameOn = 0 , score = 0 , boundsMouseOut = 1
    let i = 0, j = 0;


    // Start Functions

    function startEL(){ // EventListner for start
        start.addEventListener("mouseover", startELFN)
    }

    function startELFN(){
        console.log("started")
        gameOn = 1
        status.textContent = "keep the mouse within the white path to win!! your score is: " + score
        for(i = 0 ; i < boundaries.length -1 ; i++){
            boundaries[i].style.backgroundColor = "#eeeeee"; 
        }
        boundariesEL()
        endEL()
        startElOc()
        gameEL()
        start.removeEventListener("mouseover" , startELFN)
    }

    function startElOc(){ // start on-click event lisetner
        start.addEventListener("click" , function (){
            console.log("Clicked S")
            score = 0 
            gameOn = 1
            status.textContent = "Game has been reset! keep the mouse within the white path to win!! your score is: " + score
        })
    }

    function boundariesEL(){ // EventListner for boundaries
        for(i = 0 ; i < boundaries.length -1 ; i++){
            boundaries[i].addEventListener("mouseover", boundariesELFN)
        }
    }

    function boundariesELFN() { // boundaries eventListner function
        console.log("Hit boundary")
        if( gameOn== 1 ){
            gameOn = 0
            score -= 10
            status.textContent = "YOU LOST!! Hover over S to continue or press it to reset your score is: " + score
            for(i = 0 ; i < boundaries.length -1 ; i++){
                boundaries[i].style.backgroundColor = "#ff8888"
                boundaries[i].removeEventListener("mouseover", boundariesELFN)
            }
            end.removeEventListener("mouseover", endELFN)
            startEL()
        }
    }

    function endEL(){ // EventListner for end
        end.addEventListener("mouseover", endELFN)
    }

    function endELFN(){ // end eventListner function
        console.log("Ended")
        if( gameOn == 1 ){
            gameOn = 0
            score += 5
            status.textContent = "YOU WON!! Hover over S to continue or press it to reset your score is: " + score
            for(i = 0 ; i < boundaries.length -1 ; i++){
                boundaries[i].style.backgroundColor = "#88ff88"
                boundaries[i].removeEventListener("mouseover", boundariesELFN)
            }
            end.removeEventListener("mouseover", endELFN)
            startEL()
        }
    }

    function gameEL(){
        game.addEventListener("mouseleave", function() {
            if( gameOn== 1 ){
                gameOn = 0
                score -= 10
                status.textContent = "DON'T CHEAT!! Hover over S to continue or press it to reset your score is: " + score
                for(i = 0 ; i < boundaries.length -1 ; i++){
                    boundaries[i].style.backgroundColor = "#ff8888"
                    boundaries[i].removeEventListener("mouseover", boundariesELFN)
                }
                end.removeEventListener("mouseover", endELFN)
                startEL()
            }
        })
    }

    // End of functions

    startEL()

  });