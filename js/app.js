const playerArray = []

const count = 0;
const playerContainer = document.getElementById("playerContainer");

const handleSelect = (item) => {


    if (playerArray.length <= 4) {


        playerContainer.innerHTML = " "

        const playername = (item.parentNode.childNodes[1].innerText);

        playerArray.push(playername);


        for (let index = 0; index < playerArray.length; index++) {
            const element = playerArray[index];

            const childLi = document.createElement("li");
            childLi.innerHTML = `
            ${index + 1}. <span>${element}</span>
            `
            playerContainer.appendChild(childLi);
        }
    }
    else {
        alert("maximum")
    }



}





////  player amount 


const perPlayerAmount = document.getElementById("perPlayerAmount");
const playerExpense = document.getElementById("playerExpense");
const managerAmount = document.getElementById("managerAmount");
const coachAmount = document.getElementById("coachAmount");
const totalAMount = document.getElementById("totalAMount");

const calculate = () => {

    if (playerArray.length == 0) {
        alert("Please select a player!")
    } else {

        playerExpense.innerText = playerArray.length * Number(perPlayerAmount.value)
    }

}

const handleTotal = () => {


    if (playerArray.length == 0) {

        alert("Please select a player!")
    } else {

        console.log(managerAmount.value, coachAmount.value);
        totalAMount.innerText = Number(managerAmount.value) + Number(coachAmount.value) + Number(playerExpense.innerText);
    }
}