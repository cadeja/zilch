





// returns true if array has only one unique value
const checkForOne = (arr) => {
    return (new Set(arr).size === 1);
}

// checks for [1,2,3,4,5,6] array
const checkForStraight = (arr) => {
    if (arr.length != 6) return false;
    
    for (let i = 1; i <= 6; i++){
        if (arr[i - 1] != i) return false;
    }
    return true;
}


//takes roll array and returns score value
// INCOMPLETE
const convertToScore = (dice) => {
    let sdice = dice.slice().sort();

    if(checkForOne(sdice)) {
        if(sdice.length == 6) return 1000;
        else if (sdice[0] == 1){
            
        }
    }
    return 0;
}

const displayCtrl = (() => {

    // takes arr and updates display of dice
    // handles dice look
    const updateDice = (arr) => {
        const dice = document.querySelectorAll('.die');
        for (let i = 0; i < arr.length; i++) {
            if (!dice[i].classList.contains('inactive')){

                switch(arr[i]) {
                    case 1:
                        dice[i].innerHTML = '<div></div><div></div><div></div>';
                        dice[i].innerHTML += '<div></div><div>&#x2B24;</div><div></div>';
                        dice[i].innerHTML += '<div></div><div></div><div></div>';
                        break;
                    case 2:
                        dice[i].innerHTML = '<div>&#x2B24;</div><div></div><div></div>';
                        dice[i].innerHTML += '<div></div><div></div><div></div>';
                        dice[i].innerHTML += '<div></div><div></div><div>&#x2B24;</div>';
                        break;
                    case 3:
                        dice[i].innerHTML = '<div></div><div></div><div>&#x2B24;</div>';
                        dice[i].innerHTML += '<div></div><div>&#x2B24;</div><div></div>';
                        dice[i].innerHTML += '<div>&#x2B24;</div><div></div><div></div>';
                        break;
                    case 4:
                        dice[i].innerHTML = '<div>&#x2B24;</div><div></div><div>&#x2B24;</div>';
                        dice[i].innerHTML += '<div></div><div></div><div></div>';
                        dice[i].innerHTML += '<div>&#x2B24;</div><div></div><div>&#x2B24;</div>';
                        break;
                    case 5:
                        dice[i].innerHTML = '<div>&#x2B24;</div><div></div><div>&#x2B24;</div>';
                        dice[i].innerHTML += '<div></div><div>&#x2B24;</div><div></div>';
                        dice[i].innerHTML += '<div>&#x2B24;</div><div></div><div>&#x2B24;</div>';
                        break;
                    case 6:
                        dice[i].innerHTML = '<div>&#x2B24;</div><div></div><div>&#x2B24;</div>';
                        dice[i].innerHTML += '<div>&#x2B24;</div><div></div><div>&#x2B24;</div>';
                        dice[i].innerHTML += '<div>&#x2B24;</div><div></div><div>&#x2B24;</div>';
                        break;
                }
            }

            
        }
    }

    return {
        updateDice
    }

})();

const gameCtrl = (() => {


    // rolls n number of dice (1-6)
    // returns array
    const rollDice = (n) => {
        arr = [];
        for (let i = 1; i <= n; i++){
            arr.push(Math.floor(Math.random() * 6) + 1);
        }
        return arr;
    }
    
    const btnRollDice = document.querySelector('#rolldice');
    btnRollDice.addEventListener('click', (e) => {
        e.preventDefault();
        displayCtrl.updateDice(rollDice(6));
    })

    // setting inactive state for dice on click
    const dieAll = document.querySelectorAll('.die');
    dieAll.forEach(die => {
        die.addEventListener('click', () => {
            die.classList.add('inactive');
        })
    })
    
})();