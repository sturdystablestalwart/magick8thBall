document.addEventListener("DOMContentLoaded", doOnReady)

function doOnReady(){

    const questionButton = document.getElementById("mainStage");
       
    questionButton.addEventListener('click',() => {
        
        let randomAnswerText = getRandomAnswer();
        
        if (isTheFirstAnswer()) {
            fillCurtainBlack();
            displayAnswer();
        }

        let answerOnCurtain = document.getElementById('answerOnCurtain');
            answerOnCurtain.innerHTML = randomAnswerText;
    });
}

function isTheFirstAnswer(){
    return document.getElementById('answerOnCurtain') === null;
}

function getRandomAnswer(){
    let randomAnswer = Math.floor(Math.random() * 2);
    let randomIndex = Math.floor(Math.random() * 20);
    return responsesForRandomizedIndexes[randomAnswer][randomIndex];
}

function displayAnswer(){
    
    let answerOnCurtain = document.createElementNS("http://www.w3.org/2000/svg", "text");
        answerOnCurtain.setAttributeNS(null, 'x', '50%');
        answerOnCurtain.setAttributeNS(null, 'y', '50%');
        answerOnCurtain.setAttributeNS(null, 'dominant-baseline', 'middle');
        answerOnCurtain.setAttributeNS(null, 'text-anchor', 'middle');
        answerOnCurtain.setAttributeNS(null, 'fill', 'white');
        answerOnCurtain.setAttributeNS(null, 'id', 'answerOnCurtain');
        answerOnCurtain.setAttributeNS(null, 'style', 'pointer-events: none; cursor:pointer;')
    svg.appendChild(answerOnCurtain);
}

function fillCurtainBlack(){
    curtain.setAttributeNS(null, 'style', 'fill: black; cursor:pointer;' );
}