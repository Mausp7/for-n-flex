const generateArray = function (amount) {
    let returnArray = [];
    amount = parseInt(amount);

    if (!Number.isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${numFormatter(i, amount)}`);
        };
    } else {
        returnArray.push(`error`);

    };

    return returnArray;
};

function numFormatter(num, max) {
    let zeroBefore = "";

    for (let i = 0; i < max.toString().length - num.toString().length; i++) {
        zeroBefore += "0";      
    };

    return zeroBefore += num;
};

function loadEvent() {
    const root = document.getElementById("root");
    const list = generateArray(20);

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div>${item}</div>`)
        }        
    } else {
        
    };
};

window.addEventListener("load", loadEvent);

/* 
window.addEventListener("load", function(){
    Ez is egy valid megoldás.
});

window.addEventListener("load", _ => {
    Ez is egy valid megoldás.
});
*/