
function insert (num) {
    let result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result + num;
}

function clean () {
    document.getElementById("result").innerHTML = "";
}

function deleteCalculation () {
    let result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0 , result.length - 1);
}

function calc () {
    let result = document.getElementById("result").innerHTML;
    if(result) {
        console.log(result);
        document.getElementById("result").innerHTML = eval(result);
    }else {
        console.log("error");
    }
}


function dateToday () {
    
    setInterval(() => {
        let time = new Date();
        let minutes = document.getElementById("min");
        let hour = document.getElementById("hour");
        
        hour.innerHTML = time.getHours() + " :";
        minutes.innerHTML = time.getMinutes();

        
        
    },1000)

}

dateToday();