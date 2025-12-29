// i = identifier

var clicker = document.getElementById("clicker");
var money = document.getElementById("coins");
var gainsI = document.getElementById("gains");

var moneyAmount = 0;
var gains = 1;
var multiplier = 1;

// ------------ STORE ----------------
var storeGUI = document.getElementById("storeGUI");

function openaStore() {
    storeGUI.style.display = "flex";
}

function closeStore() {
    storeGUI.style.display = "none";
}

// ----------- Click And Gain -------------
clicker.addEventListener("click", () => {
    moneyAmount += (gains * multiplier);
})

// -------- UPGRADES IN STORE --------
function moreGains() {
    if (moneyAmount < 20) {
        alert("Junte mais dinheiro");
    }
    
    else if (moneyAmount >= 20) {
        gains++;
        moneyAmount -= 20;
    }
    
    else {
        alert("ERRO NA COMPRA")
    }
}

// Recharge Always
setInterval (() => {
    money.textContent = "$" + moneyAmount;
    gainsI.textContent = (gains * multiplier);
})
