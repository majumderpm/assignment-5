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

