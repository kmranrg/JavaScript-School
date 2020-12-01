// Classic Rock Paper Scissor Game

document.write("<h4>*******  Classic Rock Paper Scissor  *******</h4><br>");

var items = ["rock", "paper", "scissor"];
var randomItemIndex = Math.floor(Math.random() * items.length);
var rules = ["rock beats scissor", "paper beats rock", "scissor beats paper"];

// defining the user move and computer move
var user = "rock";
var computer = items[randomItemIndex]; // computer is going to select randomly

decide_winner = (user_move, computer_move) => {
    let flag = 0;
    if (user_move === computer_move){
        return "match_tied";
    }else{
        for(var i=0; i<rules.length; i++){
            if (String(user_move)+" beats "+String(computer_move) === rules[i]){
                flag = 1;
            }
        }
        if(flag === 1){
            return "user";
        }else{
            return "computer";
        }
    }
}

print_message = winner_name => {
    document.write("===========================================<br>");
    document.write("Your Move: "+user+" | Computer's Move: "+computer+"<br>");
    document.write("===========================================<br>");
    if(winner_name === "computer"){
        document.write("Computer Won! Better Luck Next Time!<br>");
        document.write("===========================================<br>");
    }else if(winner_name === "user"){
        document.write("Congratulations!! You won!!<br>");
        document.write("===========================================<br>");
    }else{
        document.write("Math Tied!!<br>");
        document.write("===========================================<br>");
    }
}

var win_name = decide_winner(user, computer);
print_message(win_name);