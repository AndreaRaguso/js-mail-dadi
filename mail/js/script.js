let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

submit.onclick = function(){
    const mailUser = document.getElementById("mailUser").value;

    if (mailUser==null || mailUser===""){
        alert("Non hai inserito dati!");
    }

    else{
        let mail = [
            "andrea.raguso@gmail.com",
            "franco.raguso@gmail.com",
            "giovanni.raguso@gmail.com",
            "piccoli.raguso@gmail.com",
            "maria.raguso@gmail.com",
            "jessica.raguso@gmail.com"
        ];

        if(mail.indexOf(mailUser) > -1) {
            console.log("si")
        } else {
            console.log("no")
        }
    }
    
}


