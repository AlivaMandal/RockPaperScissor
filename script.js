let user = 0;
let comp = 0;

let choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
       // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
});

const generatechoice = () =>{
    let option =["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
};

const showWinner = (userWin , userchoice, compchoice) =>{
    if(userWin){
        user++;
        userscore.innerText = user;
        msg.innerText = `you Win! Your ${userchoice} beats ${compchoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        comp++;
        compscore.innerText = comp;
        msg.innerText = `you Loose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const draw = () =>{
    console.log("game draw");
    msg.innerText="Game Draw !!";
    msg.style.backgroundColor = "blue";
};

const playgame = (userchoice) =>{
    console.log("user choice", userchoice);
    const compchoice = generatechoice();
    console.log("computer choice ",compchoice);
    if(userchoice === compchoice){
        draw();
    }else{
        let userWin = true;
        if(userchoice === "rock"){
            //paper ,scissor
            userWin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock , scisssor
            userWin = compchoice === "scissor" ? false : true;
        }else {
            //rock,paper 
           userWin = compchoice === "rock" ? false : true;
        }

        showWinner(userWin , userchoice, compchoice);
    }
};

