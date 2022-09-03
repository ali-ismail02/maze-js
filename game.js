window.addEventListener('load',() => { 

    const boundaries = document.getElementsByClassName("boundary")
    const start = document.getElementById("start")
    const end = document.getElementById("end")
    const game = document.getElementById("game")
    var status = document.getElementById("status")
    var gameOn = 0 , score = 0 
    let i = 0;
    

    // Start Functions

    function startEL(){ // EventListner for start
        start.addEventListener("mouseover", function() {
            console.log("started")
            gameOn = 1
            status.textContent = "keep the mouse within the white path to win!! your score is: " + score
            // calling other eventListeners
            boundariesEL()
            endEL()
        })
    }

    function boundariesEL(){ // EventListner for boundaries
        for(i = 0 ; i < boundaries.length ; i++){
            boundaries[i].addEventListener("mouseover", function() {
                if( gameOn== 1 ){
                    gameOn = 0
                    score -= 10
                    status.textContent = "YOU LOST!! Hover over S to continue or press it to reset your score is: " + score
                }
            })
        }
    }

    function endEL(){ // EventListner for start
        end.addEventListener("mouseover", function (){
            if( gameOn == 1 ){
                gameOn = 0
                score += 5
                status.textContent = "YOU WON!! Hover over S to continue or press it to reset your score is: " + score
            }
        })
    }

    function gameEL(){
        game.addEventListener("mouseout", function() {
            if( gameOn== 1 ){
                gameOn = 0
                score -= 10
                status.textContent = "YOU LOST!! Hover over S to continue or press it to reset your score is: " + score
            }
        })
    }

    startEL()

  });