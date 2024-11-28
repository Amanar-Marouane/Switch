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

let i = 0
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
    let TemArr = OccPlayers.map(card => card.querySelector(".name").innerHTML)
    console.log(TemArr);
    let ItemsToMove = []
    
    for (let i = 0; i < OccPlayers.length; i++) {
        let name = OccPlayers[i].querySelector(".name").innerHTML
        if (!TemArr.includes(name)) {
            ItemsToMove.push(OccPlayers[i])
            OccPlayers.splice(i,1)
        }
    }
    if (ItemsToMove) {
        ItemsToMove.forEach(e => {
            AvPlayers.push(e)
        })
    }
    render()
}