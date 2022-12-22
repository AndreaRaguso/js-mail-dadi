let submit = document.getElementById("submit");
let reset = document.getElementById("reset");


submit.onclick = function(){
    

    let player1 = [];
    let player2 = [];
    player1 [0] = document.getElementById("player1").value;
    player2 [0] = document.getElementById("player2").value;
    

    if (player1[0]==null || player1[0]==="" || player2[0]==null || player2[0]===""){
        alert("Non hai inserito tutti i nomi")
    }


    else{

        document.getElementById("play").style.display = "block";

        player1 [1] = Math.floor(Math.random() * 6) + 1;
        player2 [1] = Math.floor(Math.random() * 6) + 1;

        let namePlayer1 = document.getElementById('player-name');
        const user1= document.createElement("span");
        user1.textContent = player1[0] + ": " + player1[1];
        namePlayer1.append(user1);

        let namePlayer2 = document.getElementById('player-name');
        const user2= document.createElement("span");
        user2.textContent = player2[0] + ": " + player2[1];
        namePlayer2.append(user2);

        let winner= document.getElementById('winner');
        const userWin= document.createElement("span");

        if (player1 [1] > player2 [1]){
            userWin.textContent = "Il vincitore è: " + player1[0];
            winner.append(userWin);
        }
        else if (player2 [1] > player1 [1]){
            userWin.textContent = "Il vincitore è: " + player2[0];
            winner.append(userWin);
        }

        else{
            userWin.textContent = "C'è stato un pareggio! Tira dinuovo i dadi";
            winner.append(userWin);
        }
        
    }
}

reset.onclick = function(){
    document.getElementById("play").style.display = "none";
}
