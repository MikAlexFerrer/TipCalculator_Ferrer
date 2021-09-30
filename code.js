var btns = document.querySelectorAll(".btn");
var large = btns.length;
var percentage = 0;
for (var i = 0; i < large; i++) {
    btns[i].addEventListener("click", function () {
        var keyPressed = this.innerHTML;
        percentage = definePer(keyPressed);
    });
}
function definePer(key) {
    var value = 0;
    buttons();
    switch (key) {
        case '5%':
            value = 0.05;
            document.getElementById("one").style.cssText  = "background-color: hsl(172, 67%, 45%)";
            break;
        case "10%":
            document.getElementById("two").style.cssText  = "background-color: hsl(172, 67%, 45%)";
            value = 0.10;
            break;
        case "15%":
            document.getElementById("three").style.cssText  = "background-color: hsl(172, 67%, 45%)";
            value = 0.15;
            break;
        case "25%":
            document.getElementById("four").style.cssText  = "background-color: hsl(172, 67%, 45%)";
            value = 0.25;
            break;
        case "50%":
            document.getElementById("five").style.cssText  = "background-color: hsl(172, 67%, 45%)";
            value = 0.50;
            break;
    }
    return value;
}

function buttons() {
    document.getElementById("one").style.cssText  = "background-color: hsl(183, 100%, 15%)";
    document.getElementById("two").style.cssText  = "background-color: hsl(183, 100%, 15%)";
    document.getElementById("three").style.cssText  = "background-color: hsl(183, 100%, 15%)";
    document.getElementById("four").style.cssText  = "background-color: hsl(183, 100%, 15%)";
    document.getElementById("five").style.cssText  = "background-color: hsl(183, 100%, 15%)";
}

function calculate(){
    var money = Number(document.getElementById('money').value);
    var people = Number(document.getElementById("people").value);
    document.getElementById("money").style.cssText  = "border-color: #FFFFFF";
    document.getElementById("people").style.cssText  = "border-color: #FFFFFF";
    document.getElementById("percentage").style.cssText  = "background-color: #FFFFFF";

    if (percentage === 0 && Number(document.getElementById('custom').value) !== 0) {
        percentage = Number(document.getElementById('custom').value) / 100;
    }
    if (money === 0 || people === 0 || percentage === 0) {
        if (money === 0) {
            document.getElementById("money").style.cssText  = "border-color: #FF0000";
        }
        if (people === 0) {
            document.getElementById("people").style.cssText  = "border-color: #FF0000";
        }
        if (percentage === 0) {
            document.getElementById("percentage").style.cssText  = "background-color: #FF0000";
        }
        return;
    }
    
    var total = 0;
    var split = 0;
    
    total = money * (percentage);
    split = total / people;

    var v1 = total.toFixed(2);
    var v2 = split.toFixed(2);

    document.getElementById("total").innerHTML = "$" + v1.toString();
    document.getElementById("amount").innerHTML = "$" + v2.toString();
}