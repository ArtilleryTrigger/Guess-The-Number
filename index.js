const number =Math.floor(Math.random() * 100 + 1);
const userNum = document.getElementById("user-num");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const attempts = document.getElementById("attempts")
let guess = 1

btn.onclick = function() {
    const userNumber = Number(userNum.value);
    if (Number.isFinite(userNumber)) {
        if (userNumber === number) {
            result.innerHTML = "Congratulations!!! Correct Number";
            attempts.innerHTML = `Number of attempts: ${guess}`;
            finish();
        }else if (userNumber < number) {
            result.innerHTML = "Try A Higher Number";
            attempts.innerHTML = `Number of attempts: ${guess}`;
            guess++;
        }else if (userNumber > number) {
            result.innerHTML = "Try A Smaller Number";
            attempts.innerHTML = `Number of attempts: ${guess}`;
            guess++;
        }
    }else {
        alert("Please Enter Number")
    }
};

function finish(){
    btn.disabled = true;
    userNum.disabled = true;
}

