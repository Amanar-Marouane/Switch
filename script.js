let occupiedPlayers = document.querySelector(".occupiedPlayers")
let allPlayers = document.querySelector(".allPlayers")

occupiedPlayers.querySelectorAll(".card").forEach(e => {
    e.addEventListener("click", () => {
        occupiedPlayers.querySelectorAll(".card").forEach(i => {
            i.style.scale = 1;
        })
        e.style.scale = 1.2;
    })
})

let AllP = [];
let AvPlayers = [];
let OccPlayers = [];

allPlayers.querySelectorAll(".card").forEach(e => {
    AvPlayers.push(e)
    AllP.push(e)
})
function Add() {
    occupiedPlayers.querySelectorAll(".Empty").forEach(e => {
        e.onclick = () => {
            AvPlayers.forEach((AvCard, i) => {
                AvCard.onclick = () => {
                    let cardToAdd = AvCard.innerHTML;
                    e.innerHTML = cardToAdd;
                    e.classList.add("occupied")
                    OccPlayers.push(AvCard);
                    AvPlayers.splice(i, 1);
                    SWITCH()
                    render()
                }
            })
        }
    })
}
Add()

function render() {
    allPlayers.innerHTML = ''
    AvPlayers.forEach(e => {
        allPlayers.appendChild(e)
    })
}

function SWITCH() {
    let CardToCOm = document.querySelector(".occupiedPlayers").querySelectorAll(".occupied")
    let TempArr = [];
    let ItemsToMove = [];
    CardToCOm.forEach(e => {
        TempArr.push(e)
    })
    let TemArr2 = TempArr.map(card => card = card.querySelector(".name").innerHTML)

    OccPlayers.forEach(player => {
        let name = player.querySelector(".name").innerHTML;
        if (!TemArr2.includes(name)) {
            ItemsToMove.push(player);
        }
    });

    ItemsToMove.forEach(e => {
        AvPlayers.push(e);
        let index = OccPlayers.findIndex(card => card === e);
        OccPlayers.splice(index, 1);
    });
}