const playerArray = [];

// const count = 0;
const playerContainer = document.getElementById("playerContainer");

const handleSelect = (item) => {
    console.log(item);


    if (playerArray.length <= 4) {


        playerContainer.innerHTML = " ";

        const playername = (item.parentNode.childNodes[1].innerText);

        playerArray.push(playername);


        for (let i = 0; i < playerArray.length; i++) {
            const element = playerArray[i];

            const li = document.createElement("li");
            li.innerHTML = `
            ${i + 1}. <span>${element}</span>
            `
            playerContainer.appendChild(li);
            // playerContainer.innerHTML += `${i+1}.<li>${element}</li>`;
            item.disabled = true;
            
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