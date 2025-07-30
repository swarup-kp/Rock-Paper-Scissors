let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const random =Math.floor(Math.random()*3);
    return options[random];
};

const drawGame=()=>{
    msg.innerText="Game was DRAW, Play again!!";
    msg.style.backgroundColor="#463239";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`Hurry, You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#4CAF50";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText=`Oppsss, You Lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#ff3366"
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
            userWin=compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin=compChoice === "scissors"? false : true;
        }
        else 
        {
            userWin=compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}; 

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})